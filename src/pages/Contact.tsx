import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { submitContactForm, ContactFormData } from '../lib/contactForm';
import Notification from '../components/ui/Notification';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
    isVisible: boolean;
  }>({ type: 'info', message: '', isVisible: false });

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message, isVisible: true });
  };

  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Form validation
      const firstName = formData.get('firstName') as string;
      const lastName = formData.get('lastName') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const message = formData.get('message') as string;
      const service = formData.get('service') as string;

      // Validation checks
      const errors: string[] = [];

      // Name validation
      if (!firstName.trim() || firstName.trim().length < 2) {
        errors.push('First name must be at least 2 characters long');
      }
      if (!lastName.trim() || lastName.trim().length < 2) {
        errors.push('Last name must be at least 2 characters long');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
      }

      // Phone validation (optional but if provided, must be valid)
      if (phone.trim()) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
          errors.push('Please enter a valid phone number');
        }
      }

      // Message validation
      if (!message.trim() || message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
      }
      if (message.trim().length > 1000) {
        errors.push('Message must be less than 1000 characters');
      }

      // If there are validation errors, show them and stop submission
      if (errors.length > 0) {
        showNotification('error', errors.join('. '));
        setIsSubmitting(false);
        return;
      }
      
      const contactData: ContactFormData = {
        name: `${firstName.trim()} ${lastName.trim()}`,
        email: email.trim(),
        phone: phone.trim() || '',
        subject: `Contact Form Submission - ${service || 'General Inquiry'}`,
        message: message.trim(),
        service: service || '',
        budget: '',
      };

      const result = await submitContactForm(contactData);
      
      if (result.success) {
        showNotification('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!');
        // Reset form using the ref
        resetForm();
      } else {
        showNotification('error', result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('error', 'An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Notification Component */}
      <Notification
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
        duration={6000}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
              Get in <span className="text-primary-500">Touch</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Ready to start your digital marketing journey? Contact us today and let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <SectionHeading
            subtitle="Contact Information"
            title="How to Reach Us"
            description="We're here to help! Get in touch with us through any of the following channels."
            center
          />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Us',
                details: [
                  'advertmarketing1988@gmail.com'
                ],
                isClickable: true,
                  href: 'mailto:advertmarketing1988@gmail.com'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Call Us',
                details: [
                  '+91 8160829098'
                ],
                isClickable: true,
                  href: 'tel:+918160829098'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Quick Location',
                details: [
                  '204, Shrimat Arcade',
                  'Opposite Sahjanand Elegance 3',
                  'Anand Sojitra Road, Karamsad, Anand'
                ],
                isClickable: true,
                  href: '#find-us'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Office Hours',
                details: [
                  'Monday-Friday: 9am-7pm',
                  'Sunday: Closed'
                ],
                isClickable: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg border-2 border-primary-200 hover:shadow-xl hover:border-primary-400 transition-all duration-300 flex flex-col h-full ${
                  item.isClickable ? 'cursor-pointer group' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={item.isClickable ? () => {
                  if (item.href?.startsWith('#')) {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else if (item.href) {
                    window.open(item.href, '_blank');
                  }
                } : undefined}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-xl text-primary-600 group-hover:bg-primary-200 transition-colors">
                  {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 ml-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="space-y-1 flex-grow">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-text-secondary">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-primary-200 p-8 rounded-xl shadow-lg hover:border-primary-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-secondary-500">Send us a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-secondary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                      placeholder="Enter your first name"
                      aria-describedby="firstName-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-secondary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-dev">Web Development</option>
                    <option value="seo">SEO & Lead Generation</option>
                    <option value="campaign">Campaign & Event Promotion</option>
                    <option value="branding">Branding & Strategy</option>
                    <option value="graphic">Graphic Designing</option>
                    <option value="social">Social Media Marketing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={1000}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                    aria-describedby="message-error"
                  ></textarea>
                  <div id="message-error" className="text-red-500 text-sm mt-1 hidden">
                    Message must be between 10 and 1000 characters.
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 hover:scale-105 shadow-primary-500/30'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="find-us" className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Location"
            title="Find Us"
            description="Visit our office in Anand, Gujarat. We're conveniently located in the heart of the city, making it easy for you to reach us for a face-to-face consultation."
            center
          />
          
          <div className="max-w-5xl mx-auto mt-12">
            <motion.div 
              className="bg-white border-2 border-primary-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:border-primary-400 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-500 mb-3">How to Reach Us</h3>
                      <p className="text-text-secondary">
                        Our office is easily accessible by public transport and offers convenient parking for visitors. 
                        We're located in a prime area of Anand, making it convenient for both local and out-of-town visitors.
                      </p>
                    </div>
                  <div>
                      <h3 className="text-lg font-semibold text-secondary-500 mb-3">Parking Information</h3>
                      <p className="text-text-secondary">
                        Ample parking space is available in the building premises. 
                        For visitors, we recommend using the main entrance parking area.
                      </p>
                    </div>
                    <div className="pt-4">
                      <a
                        href="https://maps.app.goo.gl/TdrVt3EcXWKdbdga6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
                      >
                        Get Directions
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-secondary-200">
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.01988463825!2d72.90033280652264!3d22.550849770745504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4fd831e39239%3A0x9154ec5df08105a8!2sSHRIMAT%20ARCADE!5e0!3m2!1sen!2sus!4v1749555430581!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Advert Marketing Office Location"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Questions"
              title="Frequently Asked Questions"
              description="Find quick answers to common questions about contacting us and our response times."
              center
            />
            
            <div className="mt-8 space-y-6">
              {[
                {
                  question: 'How quickly can I expect a response to my inquiry?',
                  answer: 'We prioritize all client communications and typically respond within 24 business hours. For urgent matters, we recommend calling our office directly for immediate assistance.',
                },
                {
                  question: 'Do you offer services to businesses outside the United States?',
                  answer: 'Absolutely! We work with clients globally and have experience in managing international digital marketing campaigns. Our team is equipped to handle different time zones and cultural considerations.',
                },
                {
                  question: 'What information should I prepare for our initial consultation?',
                  answer: 'To make the most of our consultation, please have ready your current marketing goals, target audience information, existing digital presence details, and any specific challenges you\'re facing. This helps us provide more targeted recommendations.',
                },
                {
                  question: 'Can I schedule a consultation before committing to a project?',
                  answer: 'Absolutely! We offer free initial consultations to discuss your needs, answer questions, and determine if we\'re the right fit for your project.',
                },
              ].map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border-2 border-primary-200 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-primary-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-lg font-bold text-secondary-500 mb-2">{faq.question}</h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;