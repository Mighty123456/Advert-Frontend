import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          y: useTransform(scrollY, [0, 1000], [0, 100]),
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-secondary-500/80 via-secondary-600/70 to-secondary-700/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      
      {/* Content with counter-parallax effect */}
      <motion.div 
        className="relative h-full flex items-center"
        style={{ y }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your new digital experience with <br />
              <motion.span 
                className="text-primary-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Advert Marketing
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We are team of talented designers making websites with Advert Marketing. Your business is growing but not fast enough. You struggle to find a way to capture every last lead and leaks available online. As a result, you feel frustrated and stuck.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                icon={<ArrowRight className="w-5 h-5" />} 
                iconPosition="right"
                onClick={() => window.location.href = '/about'}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-primary-300"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-primary-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1,
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut"
          }
        }}
        style={{ opacity }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary-300 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-3 bg-primary-400 rounded-full"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="text-primary-200 text-sm mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;