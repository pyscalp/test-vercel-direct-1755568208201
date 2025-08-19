// src/pages/home.jsx
import React from 'react';
import Hero from '../components/hero';
import ServiceCard from '../components/servicecard';
import { Check, Users, Globe } from 'lucide-react';

function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Why Choose <span className="text-accent">Us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Check}
            title="Reliable Testing"
            description="Our robust testing ensures your applications are flawless and ready for production."
          />
          <ServiceCard
            icon={Users}
            title="Expert Team"
            description="A dedicated team of professionals committed to delivering excellence and support."
          />
          <ServiceCard
            icon={Globe}
            title="Global Reach"
            description="Deploy your projects globally with Vercel's powerful CDN and edge network."
          />
        </div>
      </section>
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Deploy Your Next Big Idea?</h2>
          <p className="text-lg mb-8">
            Join countless developers who trust Test Vercel Direct for their deployment needs.
          </p>
          <a
            href="/contact"
            className="bg-accent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;