import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useContactForm } from '@/hooks/useSupabase';

const ContactSectionWithSupabase: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { submitContact, loading, error } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    
    if (success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-brand-grey">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-navy text-center mb-4">Get In Touch</h2>
        <p className="text-center text-brand-charcoal mb-12 max-w-2xl mx-auto">
          Ready to start your project? Contact us today for a free consultation
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-brand-navy mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="text-brand-orange mt-1" size={24} />
                <div>
                  <div className="font-semibold text-brand-navy">Phone</div>
                  <div className="text-brand-charcoal">+27 123 456 789</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-orange mt-1" size={24} />
                <div>
                  <div className="font-semibold text-brand-navy">Email</div>
                  <div className="text-brand-charcoal">info@representbc.co.za</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-orange mt-1" size={24} />
                <div>
                  <div className="font-semibold text-brand-navy">Location</div>
                  <div className="text-brand-charcoal">Johannesburg, South Africa</div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8!2d28.0!3d-26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiUyAyOMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-brand-orange text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-brand-navy mb-2">Thank You!</h3>
                <p className="text-brand-charcoal">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-brand-navy font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-brand-navy font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-brand-navy font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-brand-navy font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  ></textarea>
                </div>
                
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-orange hover:bg-brand-rust text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionWithSupabase;
