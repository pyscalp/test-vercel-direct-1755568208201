// src/components/galleryitem.jsx
import React from 'react';

function GalleryItem({ src, alt }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{alt}</h3>
      </div>
    </div>
  );
}

export default GalleryItem;