import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import SelectAndCopyField from './SelectAndCopyField';

const VideoPreview = ({ url }: { url: string }) => (
  <video
    src={url}
    width="240"
    height="auto"
  />
);

const quality = (url: string): string => {
  const res = /DASH_([0-9]+)\.([a-z0-9]{1,5})/.exec(url);

  if (res?.length === 3) {
    return `${res[1]}p ${res[2]} video`;
  } else if (res?.length === 2) {
    return `${res[1]}p video`;
  } else {
    return 'unknown quality';
  }
};

export default ({ urls, video }: { urls: string[], video?: boolean }) => (
  <>
    { video && <VideoPreview url={urls[0]} /> }
    <div className="mt-3" />
    {
      urls.map((url: string) => (
        <Col md="8">
          <Form.Group>
            <SelectAndCopyField
              value={url}
              displayValue
            />
            <Form.Label>
              {quality(url)}
              &nbsp;
              (<a href={url} target="_blank">preview</a>)
            </Form.Label>
          </Form.Group>
        </Col>
      ))
    }
  </>
);
