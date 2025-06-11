import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
  duration: number;
}

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const stats: Stat[] = [
    { id: 'markets', value: 32, label: 'Markets', suffix: '', duration: 2000 },
    { id: 'clients', value: 99, label: 'Clients', suffix: '+', duration: 2500 },
    { id: 'consultants', value: 134, label: 'Consultants', suffix: '+', duration: 1500 },
    { id: 'rating', value: 5, label: 'Customer Rating', suffix: '/5', duration: 1000 },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/20 to-secondary-500/20" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={itemVariants}
        >
          <SectionHeading
            subtitle="Our Impact"
            title="Building With The Digital Solutions Advert Marketing"
            description="Meet our dynamic digital marketing team, dedicated to elevating your online presence. With a passion for innovation and a keen understanding of market trends, we craft tailored strategies to drive results. Trust us to amplify your brand in the digital landscape."
            center
            light
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary-300 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
              <motion.div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                  <CountUp value={stat.value} duration={stat.duration} />
                  {stat.suffix}
              </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-primary-200 mb-2"
                initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
              >
                {stat.label}
                </motion.h3>
                
                {/* Progress bar */}
                <motion.div
                  className="w-full bg-white/20 rounded-full h-2 mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <motion.div
                    className="bg-primary-500 h-2 rounded-full shadow-lg shadow-primary-500/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CountUp component for animated numbers
const CountUp = ({ value, duration }: { value: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
      
        setCount(Math.floor(progress * value));
      
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
      }
    };
    
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [value, duration, isInView]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  );
};

export default Stats;