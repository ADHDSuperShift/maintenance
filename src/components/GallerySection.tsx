import React, { useState } from 'react';
import { X } from 'lucide-react';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863894827_c0c00d93.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863896585_848c4aea.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863898344_568c8065.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863899094_6f4df9cb.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863901335_db17b65c.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863903082_edaeafd5.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863903819_437f774c.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863905568_65ecee44.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863912074_b663be5c.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863913867_fcabe811.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863914663_889fec86.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863916450_5bc43c61.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863917192_adc1e56d.webp',
    'https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863918996_8f6fd07b.webp',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-navy text-center mb-4">Our Work</h2>
        <p className="text-center text-brand-charcoal mb-12 max-w-2xl mx-auto">
          Explore our portfolio of completed projects showcasing quality craftsmanship
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-orange"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected project"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
