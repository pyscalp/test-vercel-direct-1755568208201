// src/components/servicecard.jsx
import React from 'react';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-primary mb-4 flex justify-center">
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;