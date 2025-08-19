// src/pages/contact.jsx
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        Contact <span className="text-accent">Us</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
        <div>
          <h2 className="text-3xl font-semibold text-secondary mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear from you! Whether you have a question about our services, need support, or just want to give feedback, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-800">
              <Mail size={24} className="mr-3 text-primary" />
              <a href="mailto:info@testvercel.com" className="hover:text-accent transition-colors">info@testvercel.com</a>
            </div>
            <div className="flex items-center text-gray-800">
              <Phone size={24} className="mr-3 text-primary" />
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
            </div>
            <div className="flex items-start text-gray-800">
              <MapPin size={24} className="mr-3 text-primary flex-shrink-0" />
              <span>123 Test Street, Vercel City, VC 12345, Earth</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Clock size={24} className="mr-3 text-primary" />
              <span>Mon - Fri: 9:00 AM - 5:00 PM (GMT+7)</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-secondary mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;