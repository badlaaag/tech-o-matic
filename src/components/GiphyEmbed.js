import React from 'react';

const GiphyEmbed = () => (
  <div style={{ width: '100%', height: 0, paddingBottom: '75%', position: 'relative' }}>
    <iframe
      src="https://giphy.com/embed/l2JI68451ovDQlTI4"
      width="100%"
      height="100%"
      style={{ position: 'absolute' }}
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
);

export default GiphyEmbed;
