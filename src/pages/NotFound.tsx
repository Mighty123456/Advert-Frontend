import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const NotFound = () => {
  const { colors } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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

  return (
        <motion.div
      className="min-h-screen flex items-center justify-center px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
        >
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1
          className={`text-9xl font-bold mb-4 text-[${colors.primary}]`}
          variants={itemVariants}
        >
          404
        </motion.h1>
        <motion.h2
          className={`text-4xl font-semibold mb-6 text-[${colors.secondary}]`}
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        <motion.p
          className={`text-lg mb-8 text-[${colors.textMuted}]`}
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[${colors.primary}] text-[${colors.secondary}] font-semibold hover:bg-[${colors.primary}]/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className={`inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[${colors.secondary}] text-[${colors.secondary}] font-semibold hover:bg-[${colors.secondary}] hover:text-[${colors.white}] transition-all duration-300`}
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound; 