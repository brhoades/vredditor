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

export const getURLsFromMPD = (xml: string): string[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'text/xml');

  return [].slice.call(
    xmlDoc
      .getElementsByTagName('BaseURL')
  ).map(({ nodeValue }) => nodeValue);
};

export const getURLs = (url: string): Promise<string[]> => (
  new Promise((resolve, reject) => {
    let id = vredditID(url);

    if (id === undefined) {
      reject(new Error('could not get id from vreddit url'));
    }

    const qualities = [
      '96',
      '360',
      '480',
      '720',
      '1080',
    ];
    const urls = qualities.map((quality) => `https://v.redd.it/${id}/DASH_${quality}.mp4`);

    // dear lord, here we go
    const vid = document.createElement('video');
    loadVideos(urls, [], vid, resolve);

  })
);

const loadVideos = (urls: string[], valid: string[], vid: HTMLVideoElement, resolve: (_: string[]) => void) => {
  const [url, ...rem] = urls;
  const once = { once: '' };

  const meta = (_e: Event) => {
    remove();
    clearVideo();

    const newURLs = [...valid, url];
    console.dir(newURLs);

    if (rem.length === 0) {
      return resolve(newURLs);
    }

    setTimeout(() => {
      loadVideos(rem, newURLs, vid, resolve);
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
      if (once.once != e.type) {
        return;
      }

      loadVideos(rem, valid, vid, resolve);
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
    (vid as any).src = undefined;
  };

  Object.keys(types).map((t) => (
    vid.addEventListener(t, types[t])
  ));

  vid.src = url;
};
