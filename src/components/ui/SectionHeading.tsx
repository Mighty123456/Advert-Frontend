import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string | ReactNode;
  center?: boolean;
  light?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
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

const SectionHeading = ({
  subtitle,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div 
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {subtitle && (
        <motion.span 
          className="inline-block text-sm font-semibold uppercase tracking-wider mb-3 text-primary-500 bg-primary-100/80 backdrop-blur-sm px-3 py-1 rounded-full border border-primary-200"
          variants={itemVariants}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-text-primary'}`}
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.div 
          className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-gray-200' : 'text-text-secondary'}`}
          variants={itemVariants}
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionHeading;