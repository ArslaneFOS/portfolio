'use client';

import { useState } from 'react';
import AnimatedContent from '@/components/AnimatedContent';
import { getTranslations, type Locale } from '@/lib/i18n';

type ContactProps = {
  lang: Locale;
};

const Contact = ({ lang }: ContactProps) => {
  const translations = getTranslations(lang);
  const emailAddress = '';
  const location = 'Paris, France';

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      
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
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{translations.contact.heading}</h2>
          <p className="text-gray-400 text-lg">{translations.contact.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <AnimatedContent direction="vertical" distance={50} duration={0.5}>
            <div className="bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">{translations.contact.formTitle}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.contact.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={translations.contact.fields.name.placeholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.contact.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={translations.contact.fields.email.placeholder}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.contact.fields.subject.label}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={translations.contact.fields.subject.placeholder}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.contact.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={translations.contact.fields.message.placeholder}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? translations.contact.sendingButton : translations.contact.submitButton}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm text-center">
                    ✓ {translations.contact.successMessage}
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    ✗ {translations.contact.errorMessage}
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
                <h3 className="text-xl font-semibold text-white mb-6">{translations.contact.infoTitle}</h3>
                
                <div className="space-y-4">
                  {/* <div>
                    <p className="text-sm text-gray-500 mb-1">{translations.contact.emailLabel}</p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {emailAddress}
                    </a>
                  </div> */}

                  <div>
                    <p className="text-sm text-gray-500 mb-1">{translations.contact.locationLabel}</p>
                    <p className="text-white">{location}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">{translations.contact.socialLinksLabel}</p>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/ArslaneFOS"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/arslane-fosso/"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Button */}
              <div className="bg-linear-to-br from-[#056bfd] to-[#0056c9] rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{translations.contact.scheduleTitle}</h3>
                <p className="text-blue-100 text-sm mb-6">{translations.contact.scheduleDescription}</p>
                <a
                  href="https://calendly.com/arslane-ouldslimane-proton/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-white text-[#056bfd] font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {translations.contact.scheduleCta}
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
