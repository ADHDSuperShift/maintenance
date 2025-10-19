import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <img
              src="https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863894827_c0c00d93.webp"
              alt="Construction project"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              About Represent Building & Construction
            </h2>
            <p className="text-brand-charcoal mb-4 leading-relaxed">
              With years of experience in the construction industry, Represent Building & Construction has built a reputation for excellence, reliability, and professionalism.
            </p>
            <p className="text-brand-charcoal mb-4 leading-relaxed">
              We specialize in a wide range of construction and maintenance services, from residential projects to commercial developments. Our team of skilled professionals is committed to delivering quality workmanship on every project.
            </p>
            <p className="text-brand-charcoal mb-6 leading-relaxed">
              Our values are simple: integrity, craftsmanship, and client satisfaction. We work closely with our clients to understand their vision and bring it to life with precision and care.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-orange">500+</div>
                <div className="text-sm text-brand-charcoal">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">15+</div>
                <div className="text-sm text-brand-charcoal">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">100%</div>
                <div className="text-sm text-brand-charcoal">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
