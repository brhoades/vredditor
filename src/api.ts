export type APIError<Values> = {
  error?: string;
} & Partial<Values>;


export const vredditID = (url: string): string | undefined => {
  const res = /v\.redd\.it\/([A-Za-z0-9]+)/.exec(url);

  if (res?.length !== 2) {
    return undefined;
  }

  return res[1];
}

export const getVRedditFromComments = (url: string): Promise<string> => (
  new Promise((resolve, reject) => (
    // Thank you cors anywhere for this awesome hack.
    fetch(`//cors-anywhere.herokuapp.com/${url}`)
      .then((r) => r.text())
      .then((text) => {
        const res = /(https:\/\/v\.redd\.it\/[A-Z0-9a-z]+)/.exec(text);

        if (!res || res?.length < 2) {
          reject(new Error('Failed to find v.redd.it url in link; is it a video?'));
        } else {
          resolve(res[1]);
        }
      })
  ))
);

export const getURLsFromMPD = (xml: string): string[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'text/xml');

  return [].slice.call(
    xmlDoc
      .getElementsByTagName('BaseURL')
  ).map(({ nodeValue }) => nodeValue);
};

const getVRedditFromUser = (url: string): Promise<string> => (
  new Promise((resolve, reject) => {
    if (/v\.redd\.it\/([A-Za-z0-9]+)/.test(url)) {
      resolve(url);
    } else if (/(m|old)?\.?reddit\.com\/r\/.*?\/comments/.test(url)) {
      // comments link
      getVRedditFromComments(url)
        .then((urls) => resolve(urls))
        .catch((err) => reject(err));
    } else {
      reject(new Error('Couldn\'t get a reddit link from that. Please email me@brod.es if this is a valid reddit link.'));
    }
  })
);

export const getURLs = (url: string, opts: { resolveOnFirst: boolean } = { resolveOnFirst: false }): Promise<string[]> => (
  new Promise((resolve, reject) => (
    getVRedditFromUser(url)
      .then((url) => {
        let id = vredditID(url);

        if (id === undefined) {
          throw new Error('could not get id from vreddit url');
        }

        const qualities = [
          '1080',
          '720',
          '480',
          '360',
          '96',
        ];
        const mp4Urls = qualities.map((quality) => `https://v.redd.it/${id}/DASH_${quality}.mp4`);
        const urls = [
          ...mp4Urls,
          ...qualities.map((quality) => `https://v.redd.it/${id}/DASH_${quality}`)
        ];

        // dear lord, here we go
        const vid = document.createElement('video');
        loadVideos(urls, [], vid, resolve, opts);
      })
      .catch((err) => reject(err))
  ))
);

// Recursively calls itself based on events from the past vid's loading. If it loads, we know
// it's a good url, if it fails, we don't.
//
// If resolveOnFirst is true, we'll resolve on the first success with one URL. Otherwise,
// we accumate URLs by walking all of urls before resolving.
const loadVideos = (urls: string[], valid: string[], vid: HTMLVideoElement, resolve: (_: string[]) => void, opts: { resolveOnFirst: boolean }) => {
  const [url, ...rem] = urls;
  const once = { once: '' };

  const meta = (_e: Event) => {
    remove();
    clearVideo();

    const newURLs = [...valid, url];

    if (rem.length === 0 || opts.resolveOnFirst) {
      return resolve(newURLs);
    }

    setTimeout(() => {
      loadVideos(rem, newURLs, vid, resolve, opts);
    }, 500);
  };

  const fail = (e: Event) => {
    remove();
    once.once = e.type;
    clearVideo();

    if (rem.length === 0) {
      return resolve(valid);
    }

    setTimeout(() => {
      // debounce since abort could fire with error.
      if (once.once !== e.type) {
        return;
      }

      loadVideos(rem, valid, vid, resolve, opts);
    }, 500);
  };

  const types: { [s: string]: (e: Event) => void } = {
    'abort': fail,
    'error': fail,
    'loadedmetadata': meta,
  };

  const remove = () => (
    Object.keys(types).map((t) => (
      vid.removeEventListener(t, types[t])
    ))
  );

  const clearVideo = () => {
    // TypesScript doesn't allow src to be empty, even though
    // it's perfectly fine and stops the video from loading.
    (vid as any).src = undefined;
  };

  Object.keys(types).map((t) => (
    vid.addEventListener(t, types[t])
  ));

  vid.src = url;
};
