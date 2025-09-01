import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_g693odn',
        'template_farzwzd',
        form.current,
        '8vQCGPD2vVqHF_ntB'
      );
      
      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us about your inquiry or collaboration interest..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
