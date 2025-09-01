import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('8vQCGPD2vVqHF_ntB');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      alert('Form reference not found');
      return;
    }

    setIsSubmitting(true);

    try {
      console.group('📧 EmailJS Send Attempt');
      console.log('⏳ Attempting to send email...');

      // Get form data for debugging
      const formData = new FormData(form.current);
      const formDataObj = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      console.log('📝 Form data:', formDataObj);
      console.log('🔧 EmailJS Configuration:', {
        serviceId: 'service_g693odn',
        templateId: 'template_xp0fpxf',
        publicKey: '8vQCGPD2vVqHF_ntB'
      });

      // Validate form data
      if (!formDataObj.name || !formDataObj.email || !formDataObj.message) {
        console.error('❌ Form validation failed - missing required fields');
        throw new Error('Please fill in all required fields');
      }

      console.log('🚀 Sending email via EmailJS...');
      const result = await emailjs.sendForm(
        'service_g693odn',
        'template_xp0fpxf',
        form.current,
        '8vQCGPD2vVqHF_ntB'
      );

      console.log('✅ EmailJS result:', result);
      console.log('📊 Response status:', result.status);
      console.log('📄 Response text:', result.text);
      console.groupEnd();

      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      // Detailed console logging for debugging
      console.group('🚨 EmailJS Error Details');
      console.error('Full error object:', error);
      console.error('Error type:', typeof error);
      console.error('Error constructor:', error?.constructor?.name);

      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Error name:', error.name);
      }

      // Check if it's a network error
      if (error && typeof error === 'object') {
        console.error('Error properties:', Object.keys(error));
        console.error('Error toString:', error.toString());

        // Log any additional properties
        for (const key in error) {
          if (error.hasOwnProperty(key)) {
            console.error(`Error.${key}:`, (error as any)[key]);
          }
        }
      }

      // Check network connectivity
      console.log('Checking network connectivity...');
      fetch('https://api.emailjs.com/api/v1.0/email/send', { method: 'HEAD', mode: 'no-cors' })
        .then(() => console.log('✅ EmailJS API is reachable'))
        .catch(netError => console.error('❌ EmailJS API unreachable:', netError));

      console.groupEnd();

      // Simple user message
      alert('Failed to send message. Please check the console for details and try again.');
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
