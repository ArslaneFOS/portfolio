'use client';

import { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual form submission logic
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      console.log('Form data:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#050505]">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <AnimatedContent direction="vertical" distance={50} duration={0.5}>
            <div className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center">
                    ✓ Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    ✗ Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </AnimatedContent>

          {/* Contact Info & Calendly */}
          <AnimatedContent direction="vertical" distance={50} duration={0.5}>
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-white">City, Country</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Social Links</p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        GitHub
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Button */}
              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Call</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Let's discuss your project in detail
                </p>
                <a
                  href="https://calendly.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Contact;
