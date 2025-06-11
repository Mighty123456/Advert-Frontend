import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.footer
      className="section-dark border-t border-primary-200 pt-16 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <img 
                src="/final_logo.png"
                alt="Advert Marketing"
                className="h-10 w-auto mr-3"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.8))' }}
              />
              <h3 className="text-xl font-bold text-white">Advert Marketing</h3>
            </div>
            <p className="text-gray-300 max-w-xs">
              We help businesses grow through innovative digital marketing strategies and creative solutions. Our team of experts delivers measurable results that drive success.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/advert-marketing-a9755420a/" },
                { icon: Facebook, href: "https://www.facebook.com/advertmarketin/" },
                { icon: WhatsAppIcon, href: "https://wa.me/918160829098" },
                { icon: Instagram, href: "https://www.instagram.com/advert_marketing_/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-300 transition-colors duration-300"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact", path: "/contact" }
              ].map((link, i) => (
                <motion.li
                  key={link.name}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={link.path} className="text-gray-300 hover:text-primary-300 transition-colors duration-300">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Web Development", id: "web-dev" },
                { name: "SEO & Lead Generation", id: "seo" },
                { name: "Campaign & Event Promotion", id: "campaign" },
                { name: "Branding & Strategy", id: "branding" },
                { name: "Graphic Designing", id: "graphic" },
                { name: "Social Media Marketing", id: "social" }
              ].map((service, i) => (
                <motion.li
                  key={service.id}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link 
                    to={`/services#${service.id}`}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      // Navigate to services page
                      window.location.href = `/services#${service.id}`;
                    }}
                  >
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { 
                  icon: MapPin, 
                  text: "204, Shrimat Arcrade, Opposite Sahjanand Elegance 3, Anand Sojitra Road, Karamsad, Anand",
                  href: "https://maps.app.goo.gl/wgDRx5piYSN4FAiu7",
                  isExternal: true
                },
                { 
                  icon: Phone, 
                  text: "+91 8160829098",
                  href: "tel:+918160829098",
                  isExternal: false
                },
                { 
                  icon: Mail, 
                  text: "advertmarketing1988@gmail.com",
                  href: "mailto:advertmarketing1988@gmail.com",
                  isExternal: false
                }
              ].map((contact, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5 text-primary-300 mt-0.5 mr-2" />
                  <a 
                    href={contact.href}
                    target={contact.isExternal ? '_blank' : undefined}
                    rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 break-words"
                    onClick={contact.isExternal ? (e) => {
                      e.preventDefault();
                      window.open(contact.href, '_blank', 'noopener,noreferrer');
                    } : undefined}
                  >
                    {contact.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-primary-200/30 mt-12 pt-6"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {currentYear} Advert Marketing. All rights reserved.
            </motion.p>
                <motion.div
              className="flex space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
                >
              <Link to="/privacy" className="text-gray-400 hover:text-primary-300 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-300 text-sm transition-colors duration-300">
                Terms of Service
                  </Link>
                </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 