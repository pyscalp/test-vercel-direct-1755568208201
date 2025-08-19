// src/components/footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-secondary text-white p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Test Vercel Direct</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="mailto:info@testvercel.com" className="flex items-center hover:text-accent transition-colors">
            <Mail size={20} className="mr-2" /> info@testvercel.com
          </a>
          <a href="tel:+1234567890" className="flex items-center hover:text-accent transition-colors">
            <Phone size={20} className="mr-2" /> +1 (234) 567-890
          </a>
          <p className="flex items-center">
            <MapPin size={20} className="mr-2" /> 123 Test St, Vercel City, VC 12345
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;