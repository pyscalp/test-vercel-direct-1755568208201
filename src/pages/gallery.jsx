// src/pages/gallery.jsx
import React from 'react';
import GalleryItem from '../components/galleryitem';

function Gallery() {
  const galleryImages = [
    { src: '/images/product-1.svg', alt: 'Product Showcase 1' },
    { src: '/images/product-2.svg', alt: 'Product Showcase 2' },
    { src: '/images/product-3.svg', alt: 'Product Showcase 3' },
    { src: '/images/product-4.svg', alt: 'Product Showcase 4' },
    { src: '/images/product-5.svg', alt: 'Product Showcase 5' },
    { src: '/images/product-6.svg', alt: 'Product Showcase 6' },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Our <span className="text-accent">Gallery</span>
      </h1>
      <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
        Explore a collection of our work and the types of projects we help deploy. Each image represents a successful test or a concept brought to life.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {galleryImages.map((image, index) => (
          <GalleryItem key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;