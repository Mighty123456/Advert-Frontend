import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';

const About = () => {
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
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      id: 'innovation',
      icon: <Award className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We stay ahead of the curve by embracing new technologies and creative approaches to deliver cutting-edge digital marketing solutions.',
    },
    {
      id: 'quality',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality',
      description: 'We maintain the highest standards in our work, ensuring every project delivers exceptional results and exceeds client expectations.',
    },
    {
      id: 'reliability',
      icon: <Clock className="w-6 h-6" />,
      title: 'Reliability',
      description: 'We build trust through consistent delivery, transparent communication, and unwavering commitment to our clients\' success.',
    },
    {
      id: 'collaboration',
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We work hand-in-hand with our clients, fostering strong partnerships to achieve shared goals and drive sustainable growth.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About <motion.span 
                className="text-primary-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Advert Marketing
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your trusted partner in digital marketing excellence. We combine creativity, strategy, and technology to help businesses thrive in the digital landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                subtitle="Our Story"
                title="Your Digital Marketing Partner"
                description={
                  <>
                    <motion.p 
                      className="mb-4 text-text-secondary"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      At Advert Marketing, we understand that success in the digital world requires more than just technical expertise—it demands a deep understanding of your business goals, audience, and market dynamics. Our team of seasoned digital marketers, creative designers, and technical specialists work together to craft tailored strategies that drive real results.
                    </motion.p>
                    <motion.p
                      className="text-text-secondary"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      From search engine optimization and social media management to content creation and campaign strategy, we offer a comprehensive suite of services designed to elevate your brand's online presence. Our data-driven approach ensures that every decision we make is backed by insights, helping you achieve measurable growth and ROI.
                    </motion.p>
                  </>
                }
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl border-4 border-primary-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Gatistwam team"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-2xl hidden lg:block shadow-xl shadow-primary-500/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200 hover:border-primary-400 transition-all duration-300"
              whileHover="hover"
            >
              <motion.h3 
                className="text-2xl font-bold text-secondary-500 mb-4"
                variants={cardVariants}
              >
                Our Mission
              </motion.h3>
              <motion.p 
                className="text-text-secondary"
                variants={cardVariants}
              >
                To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We strive to be a trusted partner for our clients, helping them navigate the ever-changing digital landscape with confidence.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-secondary-200 hover:border-secondary-400 transition-all duration-300"
              whileHover="hover"
            >
              <motion.h3 
                className="text-2xl font-bold text-secondary-500 mb-4"
                variants={cardVariants}
              >
                Our Vision
              </motion.h3>
              <motion.p 
                className="text-text-secondary"
                variants={cardVariants}
              >
                To be the leading digital transformation partner for businesses worldwide, recognized for our innovative solutions, technical excellence, and exceptional client service. We aim to shape the future of digital experiences through continuous innovation and collaboration.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Our Values"
              title="What Drives Us"
              description="Our core values guide everything we do, ensuring we deliver exceptional results while maintaining the highest standards of integrity and professionalism."
              center
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={value.id} 
                className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-xl p-6 hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="p-3 bg-primary-100 rounded-xl text-primary-600 mb-4 inline-block">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary-500 mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Leadership"
              title="Founder's Message"
              description="A message from our founder about our journey and vision for the future."
              center
            />
          </motion.div>
          
          <div className="max-w-6xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-primary-200 bg-black flex items-center justify-center">
                  <video
                    src="/AdvertVideo.mp4"
                    className="w-full h-full object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    />
                  </div>
                  <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary-500">Bhavik Panchal</h3>
                  <p className="text-primary-600 font-medium">Founder & CEO</p>
                  <div className="prose max-w-none text-justify">
                    <p className="text-text-secondary">
                        "When I founded Gatistwam, I envisioned a company that would revolutionize digital marketing through innovation, integrity, and client-centric solutions. Our journey has been marked by continuous learning, adaptation, and growth.
                      </p>
                    <p className="text-text-secondary mt-4">
                        Today, I'm proud to lead a team of passionate professionals who share our vision of transforming businesses through digital excellence. We've helped numerous clients achieve their goals, and our commitment to delivering exceptional results remains unwavering.
                      </p>
                    <p className="text-text-secondary mt-4">
                        As we look to the future, we remain dedicated to staying at the forefront of digital innovation while maintaining the personal touch that sets us apart. Our success is measured by our clients' success, and we're excited to continue this journey together."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <SectionHeading
                subtitle="Our Culture"
                title="What Makes Us Different"
                description="At Advert Marketing, we believe in creating impactful digital experiences that drive business growth. Our culture is built on innovation, data-driven strategies, and a passion for delivering exceptional results."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Data-Driven Excellence',
                    description: 'We leverage cutting-edge analytics and market insights to create strategies that deliver measurable results for our clients.',
                  },
                  {
                    title: 'Creative Innovation',
                    description: 'Our team combines creative thinking with digital expertise to develop unique marketing solutions that stand out in the digital landscape.',
                  },
                  {
                    title: 'Client Success Focus',
                    description: 'We are committed to our clients\' success, working closely with them to understand their goals and deliver tailored marketing solutions.',
                  },
                  {
                    title: 'Continuous Growth',
                    description: 'We stay ahead of digital marketing trends and technologies to ensure our clients benefit from the latest industry innovations.',
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="p-5 bg-white/80 border-2 border-primary-200 rounded-xl shadow-lg hover:border-primary-400 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-lg font-bold text-secondary-500 mb-2">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="flex items-center">
            <motion.div 
                className="grid grid-cols-2 gap-4 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-primary-200">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital Marketing Team"
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-secondary-200">
                <img
                  src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Marketing Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-primary-200">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-secondary-200">
                <img
                  src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Digital Marketing Success"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Our Journey"
              title="Key Milestones"
              description="From our humble beginnings to where we are today, these are the moments that have shaped our company."
              center
            />
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-12 relative"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            
            {[
              {
                year: '2015',
                title: 'Company Founded',
                description: 'Gatistwam was established with a team of three developers.',
              },
              {
                year: '2017',
                title: 'First Major Client',
                description: 'Secured our first enterprise client and expanded the team to 15 people.',
              },
              {
                year: '2019',
                title: 'International Expansion',
                description: 'Opened our first international office and began serving clients globally.',
              },
              {
                year: '2021',
                title: 'Award-Winning Projects',
                description: 'Received multiple industry awards for our innovative digital solutions.',
              },
              {
                year: '2023',
                title: 'Major Growth',
                description: 'Reached 50 team members and expanded our service offerings.',
              },
              {
                year: '2025',
                title: 'Looking Ahead',
                description: 'Continuing to innovate and expand our global presence.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={timelineItemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'ml-auto pl-12 pr-0' : 'mr-auto pr-12 pl-0'
                } w-full md:w-1/2`}
              >
                <motion.div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? 'left-0' : 'right-0'
                  } w-12 h-12 flex items-center justify-center z-10`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30" />
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary-200 hover:border-primary-400 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {milestone.year}
                  </motion.span>
                  <motion.h3 
                    className="text-xl font-bold text-secondary-500 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    {milestone.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-secondary"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  >
                    {milestone.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;