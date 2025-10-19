import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Represent B&C</h3>
            <p className="text-gray-300 text-sm">
              Building Quality. Maintaining Trust. Professional construction services you can rely on.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-brand-orange transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-brand-orange transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Phone size={16} /> +27 123 456 789</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@representbc.co.za</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Johannesburg, SA</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-orange transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-brand-rust transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © 2025 Represent Building & Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
