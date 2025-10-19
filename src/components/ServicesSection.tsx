import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Hammer, Wrench, Home, Droplets, Paintbrush, Trees, Flame, Waves } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { icon: <Home size={48} />, title: 'Building & Construction', description: 'Complete construction solutions from foundation to finish' },
    { icon: <Hammer size={48} />, title: 'Property Maintenance', description: 'Regular maintenance to keep your property in top condition' },
    { icon: <Wrench size={48} />, title: 'Plastering', description: 'Expert plastering for smooth, durable walls' },
    { icon: <Home size={48} />, title: 'Ceiling Installation', description: 'Professional ceiling solutions for any space' },
    { icon: <Home size={48} />, title: 'Roofing', description: 'Quality roofing installation and repairs' },
    { icon: <Wrench size={48} />, title: 'Tiling', description: 'Beautiful tile work for floors and walls' },
    { icon: <Droplets size={48} />, title: 'Plumbing', description: 'Reliable plumbing services and repairs' },
    { icon: <Droplets size={48} />, title: 'Waterproofing', description: 'Protect your property from water damage' },
    { icon: <Trees size={48} />, title: 'Paving & Landscaping', description: 'Transform outdoor spaces with expert design' },
    { icon: <Flame size={48} />, title: 'Braai & Fireplace', description: 'Custom braai and fireplace installations' },
    { icon: <Waves size={48} />, title: 'Swimming Pool Building', description: 'Design and build your dream pool' },
    { icon: <Paintbrush size={48} />, title: 'Decorating', description: 'Professional decorating and finishing touches' },
  ];

  return (
    <section id="services" className="py-20 bg-brand-grey">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-navy text-center mb-4">Our Services</h2>
        <p className="text-center text-brand-charcoal mb-12 max-w-2xl mx-auto">
          Comprehensive construction and maintenance solutions tailored to your needs
        </p>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-brand-orange text-white p-3 rounded-full shadow-lg hover:bg-brand-rust transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-brand-orange text-white p-3 rounded-full shadow-lg hover:bg-brand-rust transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
