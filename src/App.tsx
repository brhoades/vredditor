import React, { useState } from 'react';
import './App.css';

import Form from './Form';

export default () => {
  const [urls, setURLs] = useState<string[] | null>(null);

  return (
    <div className="App">
      <Form
        setURLs={setURLs}
      />
      <>
        {
          urls !== null && (
            urls.map((url: string) => (
              <div key={url}>
                <a
                  href={url}
                >
                  {url}
                </a>
              </div>
            ))
          )
        }
      </>
    </div>
  );
};
