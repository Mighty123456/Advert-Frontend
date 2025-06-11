import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import { ArrowRight, ExternalLink, Play, Star, Award, TrendingUp, Users, Zap, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

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

  const featuredPortfolio = [
    {
      id: '1',
      title: 'Fashion Retail Brand Launch',
      description: 'Successfully launched a new fashion label with a 300% increase in social media engagement and 150% growth in online sales within the first quarter.',
      category: 'Brand Marketing',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categoryFilter: 'Brand Marketing',
      results: [
        '300% increase in social media engagement',
        '150% growth in online sales',
        '50+ influencer partnerships',
        '1M+ campaign reach'
      ]
    },
    {
      id: '2',
      title: 'Healthcare Awareness Campaign',
      description: 'Led a successful healthcare awareness campaign that reached over 2 million people, resulting in a 200% increase in patient appointments.',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categoryFilter: 'Digital Marketing',
      results: [
        '2M+ campaign reach',
        '200% increase in patient appointments',
        '85% growth in community engagement',
        '45% increase in brand awareness'
      ]
    },
    {
      id: '3',
      title: 'Financial Services Rebrand',
      description: 'Transformed a traditional financial services company into a modern, digital-first brand with 120% increase in website traffic and 90% growth in social media following.',
      category: 'Brand Strategy',
      image: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categoryFilter: 'Brand Strategy',
      results: [
        '120% increase in website traffic',
        '90% growth in social media following',
        '75% increase in lead generation',
        '60% improvement in brand perception'
      ]
    }
  ];

  const featuredServices = [
    {
      id: '1',
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility in search engine results',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#seo-optimization',
      results: [
        'Increased organic traffic',
        'Higher search engine rankings',
        'Improved user experience'
      ]
    },
    {
      id: '2',
      title: 'Social Media Management',
      description: 'Manage and grow your social media presence',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#social-media-management',
      results: [
        'Increased engagement',
        'Brand awareness',
        'Community growth'
      ]
    },
    {
      id: '3',
      title: 'Content Creation',
      description: 'Create high-quality content for your digital platforms',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services#content-creation',
      results: [
        'Increased content reach',
        'Higher engagement',
        'Improved brand perception'
      ]
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Why Choose Us"
              title="The Advert Marketing Advantage"
              description="We don't just create campaigns; we craft digital experiences that drive real results. Our unique approach combines creativity, data, and technology to deliver exceptional outcomes."
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
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast Results",
                description: "Our optimized strategies deliver measurable results within 30 days, not months.",
                stat: "30 Days",
                statLabel: "Average Time to Results"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Targeting",
                description: "Advanced audience targeting ensures your message reaches the right people at the right time.",
                stat: "95%",
                statLabel: "Targeting Accuracy"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven ROI",
                description: "Our clients see an average 300% return on investment within the first quarter.",
                stat: "300%",
                statLabel: "Average ROI"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award-Winning Quality",
                description: "Recognized by industry leaders for our innovative approach and exceptional results.",
                stat: "15+",
                statLabel: "Industry Awards"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border-2 border-primary-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="p-4 bg-primary-500 rounded-xl text-white mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30"
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-500 mb-3">{feature.title}</h3>
                <p className="text-text-secondary mb-6">{feature.description}</p>
                <div className="border-t border-primary-200 pt-4">
                  <div className="text-2xl font-bold text-primary-500">{feature.stat}</div>
                  <div className="text-sm text-text-muted">{feature.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Features />
      
      {/* Featured Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
            subtitle="Our Work"
            title="Featured Portfolio"
              description="Explore some of our most successful projects that demonstrate our expertise in digital marketing and brand development."
              center
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 shadow-lg shadow-primary-500/30 flex-shrink-0" />
                        <span className="text-sm text-text-secondary line-clamp-1">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={`/portfolio?category=${project.categoryFilter}`}
                      className="link-modern font-medium"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/portfolio')}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Success Stories"
              title="Transforming Businesses Through Digital Excellence"
              description="Discover how we've helped businesses across industries achieve remarkable growth and establish powerful digital presences."
              center
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {[
              {
                company: "TechStart Solutions",
                industry: "SaaS & Technology",
                challenge: "Struggling with low website traffic and poor lead generation",
                solution: "Implemented comprehensive SEO strategy with content marketing",
                results: [
                  "450% increase in organic traffic",
                  "280% boost in qualified leads",
                  "First page rankings for 25+ keywords",
                  "40% improvement in conversion rate"
                ],
                image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                logo: "🚀"
              },
              {
                company: "GreenEats Restaurant",
                industry: "Food & Beverage",
                challenge: "Needed to increase online orders and social media presence",
                solution: "Created engaging social media campaigns with influencer partnerships",
                results: [
                  "320% increase in online orders",
                  "500% growth in social media followers",
                  "85% improvement in customer engagement",
                  "Tripled delivery radius reach"
                ],
                image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                logo: "🍽️"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-2xl shadow-lg overflow-hidden hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300"
            >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image} 
                    alt={story.company}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div className="text-3xl mr-3">{story.logo}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{story.company}</h3>
                      <p className="text-white/80 text-sm">{story.industry}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-600 mb-2">The Challenge</h4>
                    <p className="text-text-secondary text-sm">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-600 mb-2">Our Solution</h4>
                    <p className="text-text-secondary text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary-600 mb-3">Results Achieved</h4>
                    <div className="space-y-2">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 shadow-lg shadow-primary-500/30" />
                          <span className="text-sm text-text-secondary">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Stats />
      
      {/* Interactive Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              subtitle="Our Process"
              title="How We Deliver Exceptional Results"
              description="Our proven methodology ensures every project is executed with precision, creativity, and measurable outcomes."
              center
            />
          </motion.div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 h-full w-1 bg-primary-500 transform -translate-x-1/2 hidden lg:block shadow-lg shadow-primary-500/30" />
              
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We dive deep into your business, market, and competition to understand your unique challenges and opportunities.",
                  details: ["Market research", "Competitor analysis", "Audience insights", "Goal setting"],
                  icon: "🔍"
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Based on our findings, we craft a comprehensive digital strategy tailored to your specific objectives.",
                  details: ["Channel selection", "Content planning", "Budget allocation", "Timeline creation"],
                  icon: "📋"
                },
                {
                  step: "03",
                  title: "Creative Execution",
                  description: "Our creative team brings your strategy to life with compelling content and engaging campaigns.",
                  details: ["Content creation", "Design development", "Campaign setup", "Quality assurance"],
                  icon: "🎨"
                },
                {
                  step: "04",
                  title: "Launch & Optimize",
                  description: "We launch your campaigns and continuously monitor, analyze, and optimize for maximum performance.",
                  details: ["Campaign launch", "Performance monitoring", "A/B testing", "Strategy refinement"],
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <motion.div 
                        className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-200 hover:border-primary-400 transition-all duration-300"
                        whileHover={{ scale: 1.02, y: -5 }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-4">{phase.icon}</div>
                          <div>
                            <span className="text-sm font-bold text-primary-500">{phase.step}</span>
                            <h3 className="text-xl font-bold text-secondary-500">{phase.title}</h3>
                          </div>
                        </div>
                        <p className="text-text-secondary mb-4">{phase.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-text-muted">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Step Indicator */}
                    <div className="hidden lg:flex items-center justify-center w-16 h-16 mx-8">
                      <motion.div 
                        className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {phase.step}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join hundreds of successful businesses that have achieved remarkable growth with our proven digital marketing strategies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                icon={<ArrowRight className="w-5 h-5" />} 
                iconPosition="right"
                onClick={() => navigate('/contact')}
                className="bg-white text-secondary-500 hover:bg-primary-100 hover:text-secondary-600 shadow-xl hover:shadow-2xl"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary-500"
                onClick={() => navigate('/portfolio')}
              >
                View Our Work
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-300 mr-2" />
                <span>4.9/5 Client Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>15+ Industry Awards</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;