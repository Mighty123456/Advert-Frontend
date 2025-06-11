import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  variant?: 'default' | 'accent' | 'glass';
}

const Card = ({ children, className = '', hover = false, delay = 0, variant = 'default' }: CardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay
      }
    },
    hover: hover ? {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    } : {}
  };

  const getCardClasses = () => {
    switch (variant) {
      case 'accent':
        return 'bg-white/80 backdrop-blur-sm border-2 border-primary-200 shadow-lg hover:shadow-xl hover:border-primary-400';
      case 'glass':
        return 'backdrop-blur-lg bg-primary-500/10 border border-primary-500/20 shadow-lg hover:shadow-xl hover:bg-primary-500/20 hover:border-primary-500/30';
      default:
        return 'bg-white/80 backdrop-blur-sm border border-primary-200 shadow-md hover:shadow-lg hover:border-primary-400';
    }
  };

  return (
    <motion.div 
      className={`
        border rounded-lg 
        overflow-hidden
        transition-all duration-300
        ${getCardClasses()}
        ${className}
      `}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hover ? "hover" : undefined}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
const contentVariants = {
    hidden: { opacity: 0, y: -20 },
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

  return (
    <motion.div 
      className={`p-6 border-b border-primary-200 ${className}`}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export const CardContent = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className={`p-6 ${className}`}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export const CardFooter = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const contentVariants = {
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

  return (
    <motion.div 
      className={`p-6 border-t border-gray-200 ${className}`}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default Card;