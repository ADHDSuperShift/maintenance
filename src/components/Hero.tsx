import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863894046_54035159.webp)',
        }}
      >
        <div className="absolute inset-0 bg-brand-navy/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-slide-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Quality. Maintaining Trust.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Reliable, fast, and professional construction services.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-brand-orange hover:bg-brand-rust text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Request a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
