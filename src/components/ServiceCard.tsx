import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[280px] flex-shrink-0">
      <div className="text-brand-orange mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-brand-navy mb-3 text-center">
        {title}
      </h3>
      <p className="text-brand-charcoal text-sm text-center">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
