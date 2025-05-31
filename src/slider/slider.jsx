import React, { useState, useRef, useEffect } from 'react';

const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://www.w3schools.com/html/movie.mp4',

];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play().catch(() => {}); // Prevent autoplay error
    }
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {videos.map((videoSrc, index) => (
        index === currentIndex && (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            onEnded={() => setCurrentIndex((currentIndex + 1) % videos.length)}
          />
        )
      ))}

      {/* Bottom-Center Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
