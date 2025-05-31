import React from 'react';
import './vid.css';

function Vid() {
  return (
    <div className="video-container">
      <iframe 

        src="https://www.youtube.com/embed/fIXIevP62hk" 
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Vid;
