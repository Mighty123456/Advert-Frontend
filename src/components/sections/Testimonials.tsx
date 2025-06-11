import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      content: "Advert Marketing transformed our digital presence completely. Their strategic approach and creative solutions helped us achieve remarkable growth in online engagement and lead generation.",
      author: 'Teresa May',
      position: 'Founder at ET Company',
      rating: 5,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
    },
    {
      id: '2',
      content: "Working with Advert Marketing has been an absolute pleasure. Their team's expertise in digital marketing and commitment to delivering results exceeded our expectations.",
      author: 'Maggie McLoan',
      position: 'Marketing Director at Studio LA',
      rating: 5,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp',
    },
    {
      id: '3',
      content: "The results we've seen since partnering with Advert Marketing have been incredible. Their data-driven approach and innovative strategies have significantly boosted our brand visibility.",
      author: 'Alexa Horwitz',
      position: 'CEO at Tech Solutions NY',
      rating: 5,
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            subtitle="Client Success"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our clients have to say about working with us and the results we've delivered."
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-xl p-6 hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary-100 rounded-full translate-y-8 -translate-x-8 opacity-30"></div>
              
              {/* Quote icon */}
              <motion.div
                className="absolute top-6 left-6 text-primary-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Quote className="w-8 h-8" />
              </motion.div>

              <div className="relative z-10">
                <motion.div 
                  className="mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary-200 shadow-lg mx-auto"
                  />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-primary-500 fill-primary-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </motion.div>

                <motion.blockquote 
                  className="text-lg text-text-secondary mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  "{testimonial.content}"
                </motion.blockquote>

                <motion.div
                  className="border-t border-primary-200 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="font-bold text-secondary-500 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-primary-600 font-medium">
                    {testimonial.position}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;