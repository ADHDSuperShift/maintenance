import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AppLayout;
