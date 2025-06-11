import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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

const FloatingSocialBar = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/advert-marketing-a9755420a/',
      color: '#0077B5',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      shadowColor: 'shadow-blue-500/50'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/advertmarketin/',
      color: '#1877F2',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      shadowColor: 'shadow-blue-600/50'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/918160829098',
      color: '#25D366',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      shadowColor: 'shadow-green-500/50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/advert_marketing_/',
      color: '#E4405F',
      bgColor: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      shadowColor: 'shadow-pink-500/50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed right-4 z-40 flex flex-col space-y-3
                 md:right-6 lg:right-8
                 sm:space-y-2 sm:right-2
                 pointer-events-none"
      style={{ 
        top: '40vh',
        transform: 'translateY(-50%)'
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative line above */}
      <motion.div
        className="w-0.5 h-12 sm:h-16 bg-gradient-to-t from-primary-500 to-transparent mx-auto"
        initial={{ height: 0 }}
        animate={{ height: 48 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative group flex items-center justify-center 
            w-10 h-10 sm:w-12 sm:h-12 rounded-full 
            ${social.bgColor} ${social.hoverColor} text-white 
            shadow-lg ${social.shadowColor} hover:shadow-xl 
            transition-all duration-300 ease-out
            border-2 border-white/20 hover:border-white/40
            pointer-events-auto
            backdrop-blur-sm
          `}
          variants={itemVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          aria-label={`Follow us on ${social.name}`}
        >
          {/* Pulse effect */}
          <motion.div
            className={`absolute inset-0 rounded-full ${social.bgColor} opacity-30`}
            variants={pulseVariants}
            initial="initial"
            animate="pulse"
          />
          
          {/* Icon */}
          <motion.div
            className="relative z-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <social.icon size={18} className="sm:w-5 sm:h-5" />
          </motion.div>

          {/* Tooltip - Hidden on mobile */}
          <motion.div
            className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     pointer-events-none whitespace-nowrap
                     hidden md:block
                     shadow-lg"
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {social.name}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 
                          border-l-4 border-l-gray-900 border-t-4 border-t-transparent 
                          border-b-4 border-b-transparent" />
          </motion.div>

          {/* Glow effect on hover */}
          <motion.div
            className={`absolute inset-0 rounded-full ${social.bgColor} opacity-0 blur-md`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5, opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      ))}

      {/* Decorative line below */}
      <motion.div
        className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary-500 to-transparent mx-auto"
        initial={{ height: 0 }}
        animate={{ height: 48 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default FloatingSocialBar; 