import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

const Loader = ({ size = 'md', fullScreen = false }: LoaderProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-500/90 via-secondary-600/85 to-secondary-700/90 backdrop-blur-sm z-50'
    : 'flex items-center justify-center p-4';

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={containerClasses}>
      <motion.div 
        className={`relative ${sizeClasses[size]}`}
        variants={spinnerVariants}
        animate="animate"
      >
        {/* Outer ring - Primary color */}
        <motion.div 
          className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent"
          variants={circleVariants}
          animate="animate"
        />
        
        {/* Middle ring - Secondary color */}
          <motion.div
          className="absolute inset-2 rounded-full border-4 border-secondary-500 border-t-transparent"
          variants={circleVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }}
        />
        
        {/* Inner pulse - Solid */}
        <div 
          className="absolute inset-4 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30"
        />
      </motion.div>
      
      {/* Loading text */}
      {fullScreen && (
        <motion.div
          className="absolute bottom-1/4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="text-text-primary font-medium mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.div>
          <motion.div
            className="text-primary-500 text-sm"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            Advert Marketing
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Loader;