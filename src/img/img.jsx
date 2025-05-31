import React from 'react';

const images = [
  'https://picsum.photos/id/1015/200/150',
  'https://picsum.photos/id/1016/200/150',
  'https://picsum.photos/id/1018/200/150',
  'https://picsum.photos/id/1020/200/150',
  'https://picsum.photos/id/1024/200/150',
  'https://picsum.photos/id/1025/200/150',
  'https://picsum.photos/id/1031/200/150',
  'https://picsum.photos/id/1035/200/150',
];

export default function img({ visible, onSelect }) {
  if (!visible) return null;

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-60 flex flex-wrap gap-2 p-4 overflow-auto"
      style={{ zIndex: 50 }}
    >
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Thumbnail ${idx + 1}`}
          className="w-[calc(25%-0.5rem)] cursor-pointer rounded-lg shadow-lg object-cover"
          onClick={() => onSelect(idx)}
        />
      ))}
    </div>
  );
}
