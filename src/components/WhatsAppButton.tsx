import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/27123456789?text=Hello! I would like to inquire about your construction services.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
  type="button"
  className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1EBE5B] active:bg-[#19B452] text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
