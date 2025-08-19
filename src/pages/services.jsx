// src/pages/services.jsx
import React from 'react';
import ServiceCard from '../components/servicecard';
import { Package, Truck, CreditCard, Users, Image, Play } from 'lucide-react';

function Services() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Our <span className="text-accent">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Package}
          title="Direct Deployment"
          description="Seamlessly deploy your React applications directly to Vercel with zero configuration."
        />
        <ServiceCard
          icon={Truck}
          title="Continuous Integration"
          description="Automate your build and deployment pipeline for faster, more reliable releases."
        />
        <ServiceCard
          icon={CreditCard}
          title="Performance Optimization"
          description="We ensure your website loads quickly and performs optimally across all devices."
        />
        <ServiceCard
          icon={Users}
          title="Team Collaboration"
          description="Facilitate easy collaboration among your team members on shared projects."
        />
        <ServiceCard
          icon={Image}
          title="Asset Management"
          description="Efficiently manage and optimize your static assets for better loading times."
        />
        <ServiceCard
          icon={Play}
          title="Live Previews"
          description="Get instant live previews for every code change, simplifying your review process."
        />
      </div>
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700">
          Need a custom solution? <a href="/contact" className="text-accent font-semibold hover:underline">Contact us</a> today!
        </p>
      </div>
    </div>
  );
}

export default Services;