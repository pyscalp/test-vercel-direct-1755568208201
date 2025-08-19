// src/pages/about.jsx
import React from 'react';
import { Building, Star, Check } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        About <span className="text-accent">Test Vercel Direct</span>
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-secondary mb-6 flex items-center">
          <Building size={32} className="mr-3 text-primary" /> Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Test Vercel Direct was founded with a clear vision: to simplify the deployment process for developers and businesses alike. We understand the complexities involved in bringing a web application to life, from development to testing and final deployment. Our platform is built to streamline these steps, allowing you to focus on innovation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Since our inception, we've been committed to providing a robust, reliable, and user-friendly service that empowers our users to deploy with confidence. We believe in the power of direct, efficient solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-secondary mb-6 flex items-center">
            <Star size={32} className="mr-3 text-primary" /> Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide an unparalleled direct deployment experience to Vercel, ensuring speed, reliability, and ease of use. We aim to be the go-to platform for developers seeking a hassle-free way to test and launch their projects. We strive for continuous improvement and user satisfaction.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-secondary mb-6 flex items-center">
            <Check size={32} className="mr-3 text-primary" /> Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Innovation: Constantly seeking better ways to deploy.</li>
            <li>Reliability: Ensuring your projects are always live and stable.</li>
            <li>Simplicity: Making complex processes easy for everyone.</li>
            <li>Support: Providing excellent assistance to our community.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;