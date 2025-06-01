import React from 'react';
import './vid.css';

function Vid() {
  return (
    <div
      className="video-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',           // Changed from 100vh to 90vh to remove bottom notch
        backgroundColor: 'black'
      }}
    >
      <video
        src="/vid/fin.mp4"
        autoPlay
        muted
        loop
        disablePictureInPicture
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          width: '100vw',
          height: '90vh',
          objectFit: 'cover',
          borderRadius: '0px',
          margin: '0',
          padding: '0',
          display: 'block'
        }}
      ></video>
    </div>
  );
}

export default Vid;
