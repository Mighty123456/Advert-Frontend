import { Code, Smartphone, Palette, CloudCog, Users, BarChart } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Transforming visions into dynamic websites. We specialize in crafting tailor-made digital experiences that captivate audiences and drive results.',
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'seo',
      title: 'SEO & Lead Generation',
      description: 'Unlock the potential of your online presence with our SEO and Lead Generation services. We specialize in elevating your website\'s visibility and driving qualified leads to your business.',
      icon: <BarChart className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'campaign',
      title: 'Campaign & Event Promotion',
      description: 'Embark on unforgettable adventures with our premier camping and event promotion services. Whether you\'re seeking an adrenaline-fueled outdoor experience or a corporate event, we\'ve got you covered.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'branding',
      title: 'Branding & Strategy',
      description: 'Unlock the full potential of your brand with our comprehensive branding and strategy services. We specialize in crafting compelling narratives, creating distinct visual identities, and developing strategic roadmaps.',
      icon: <Palette className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'graphic',
      title: 'Graphic Designing',
      description: 'Visual communication is at the heart of a compelling brand identity. Our talented graphic designers transform ideas into visually stunning creations, ensuring that your brand stands out amidst the digital noise.',
      icon: <Palette className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      description: 'In the era of social connectivity, we understand the pivotal role that platforms like Facebook, Instagram, Twitter, and LinkedIn play in shaping brand narratives. Our social media marketing experts craft strategies that enhance your online presence.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const handleMouseEnter = (id: string) => {
    setActiveFeature(id);
  };

  const handleMouseLeave = () => {
    setActiveFeature(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            subtitle="Our Services"
            title="Digital Marketing Solutions"
            description="We offer a comprehensive suite of digital marketing services to help your business grow and succeed in the digital landscape."
            center
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-xl p-6 hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => window.location.href = `/services/${feature.id}`}
            >
              <div className="relative z-10">
                <motion.div
                  className={`
                      inline-block p-4 rounded-xl transition-all duration-300 shadow-lg
                      ${activeFeature === feature.id 
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40'
                        : 'bg-primary-100 text-primary-600 hover:bg-primary-200 shadow-primary-500/20'
                      }
                  `}
                  variants={iconVariants}
                  layout
                  onMouseEnter={() => handleMouseEnter(feature.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                    className="text-xl font-bold mt-5 mb-3 text-secondary-500"
                  layout
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                    className="text-text-secondary leading-relaxed"
                  layout
                >
                  {feature.description}
                </motion.p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 flex items-center text-primary-500 font-semibold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: activeFeature === feature.id ? 1 : 0,
                      x: activeFeature === feature.id ? 0 : -10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      to="/services" 
                      className="link-modern"
                      aria-label={`Learn more about ${feature.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More →
                    </Link>
                  </motion.div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;