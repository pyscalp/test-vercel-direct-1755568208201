// src/components/hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-accent">Test Vercel Direct</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Your ultimate solution for seamless testing and deployment. Experience the future of web development.
        </p>
        <Link
          to="/services"
          className="bg-accent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
}

export default Hero;