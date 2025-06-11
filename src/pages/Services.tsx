import { useState, useEffect } from 'react';
import { Code, Smartphone, Palette, CloudCog, Users, BarChart, ChevronDown, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  image: string;
  color: string;
}

const Services = () => {
  const [activeTab, setActiveTab] = useState('web-dev');

  useEffect(() => {
    // Get the hash from the URL (remove the # symbol)
    const hash = window.location.hash.slice(1);
    
    // If there's a hash and it matches one of our service IDs, set it as active
    if (hash && services.some(service => service.id === hash)) {
      setActiveTab(hash);
    }
  }, []); // Empty dependency array means this runs once on mount

  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Transforming visions into dynamic websites. We specialize in crafting tailor-made digital experiences that captivate audiences and drive results.',
      icon: <Code className="w-6 h-6" />,
      features: [
        'Custom web application development',
        'Responsive website design',
        'E-commerce solutions',
        'Content Management Systems',
        'Website maintenance and support',
        'Performance optimization'
      ],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'blue'
    },
    {
      id: 'seo',
      title: 'SEO & Lead Generation',
      description: 'Unlock the potential of your online presence with our SEO and Lead Generation services. We specialize in elevating your website\'s visibility and driving qualified leads to your business.',
      icon: <BarChart className="w-6 h-6" />,
      features: [
        'Search engine optimization',
        'Keyword research and analysis',
        'Content optimization',
        'Link building strategies',
        'Lead generation campaigns',
        'Analytics and reporting'
      ],
      image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'green'
    },
    {
      id: 'campaign',
      title: 'Campaign & Event Promotion',
      description: 'Embark on unforgettable adventures with our premier camping and event promotion services. Whether you\'re seeking an adrenaline-fueled outdoor experience or a corporate event, we\'ve got you covered.',
      icon: <Users className="w-6 h-6" />,
      features: [
        'Event planning and management',
        'Digital campaign strategies',
        'Social media promotion',
        'Content creation',
        'Audience engagement',
        'Performance tracking'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'purple'
    },
    {
      id: 'branding',
      title: 'Branding & Strategy',
      description: 'Unlock the full potential of your brand with our comprehensive branding and strategy services. We specialize in crafting compelling narratives, creating distinct visual identities, and developing strategic roadmaps to propel your brand to success.',
      icon: <Palette className="w-6 h-6" />,
      features: [
        'Brand identity development',
        'Visual design and branding',
        'Marketing strategy',
        'Brand positioning',
        'Market research',
        'Competitive analysis'
      ],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'orange'
    },
    {
      id: 'graphic',
      title: 'Graphic Designing',
      description: 'Visual communication is at the heart of a compelling brand identity. Our talented graphic designers transform ideas into visually stunning creations, ensuring that your brand stands out amidst the digital noise.',
      icon: <Palette className="w-6 h-6" />,
      features: [
        'Logo design',
        'Social media graphics',
        'Print materials',
        'Brand collateral',
        'Digital illustrations',
        'Motion graphics'
      ],
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'amber'
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      description: 'In the era of social connectivity, we understand the pivotal role that platforms like Facebook, Instagram, Twitter, and LinkedIn play in shaping brand narratives. Our social media marketing experts craft strategies that enhance your online presence.',
      icon: <Users className="w-6 h-6" />,
      features: [
        'Social media strategy',
        'Content creation',
        'Community management',
        'Paid social advertising',
        'Influencer marketing',
        'Performance analytics'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'cyan'
    }
  ];

  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-500">
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Elevate your brand's digital presence with our cutting-edge digital marketing agency. From strategic planning to dynamic execution, we specialize in crafting tailored solutions to amplify your online visibility and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Expertise"
            description="We provide a wide range of digital services to help businesses thrive in today's competitive market."
            center
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="backdrop-blur-lg bg-white/20 rounded-xl p-2 border border-primary-500/20 shadow-lg">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setActiveTab(service.id);
                      // Smooth scroll to the service section
                      const element = document.getElementById(service.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 flex items-center ${
                      activeTab === service.id
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                        : 'hover:bg-primary-100 hover:text-primary-600 text-text-secondary'
                    }`}
                  >
                    <div className="mr-3">
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.title}</span>
                    {activeTab === service.id ? (
                      <ChevronDown className="ml-auto w-5 h-5" />
                    ) : (
                      <ChevronRight className="ml-auto w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div 
                id={activeService.id}
                className="backdrop-blur-lg bg-white/20 border border-primary-500/20 rounded-xl shadow-lg overflow-hidden scroll-mt-32"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-500 mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {activeService.description}
                  </p>
                  
                  <h4 className="font-medium text-primary-500 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Link to={`/services/${activeService.id}`}>
                    <Button
                      icon={<ArrowRight className="w-5 h-5" />}
                      iconPosition="right"
                    >
                        Learn More
                    </Button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Approach"
            title="Marketing Strategy Process"
            description="We follow a proven process to ensure successful campaign delivery and client satisfaction."
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12 relative">
              {/* Process line */}
            <div className="absolute left-16 md:left-1/2 top-0 h-full w-1 bg-primary-500 transform -translate-x-1/2 md:block hidden shadow-lg shadow-primary-500/30"></div>
              
              {[
                {
                  step: 1,
                title: "Discovery & Strategy",
                description: "We begin by understanding your business goals, target audience, and current digital presence to develop a tailored strategy."
                },
                {
                  step: 2,
                title: "Planning & Design",
                description: "Our team creates a detailed plan and designs that align with your brand identity and business objectives."
                },
                {
                  step: 3,
                title: "Implementation",
                description: "We execute the strategy using industry best practices and cutting-edge tools to maximize results."
                },
                {
                  step: 4,
                title: "Monitoring & Optimization",
                description: "Continuous monitoring and optimization ensure that your campaigns perform at their best."
              }
              ].map((step, index) => (
                <div key={step.step} className="flex items-start mb-12 last:mb-0">
                  <div className={`
                  flex-shrink-0 w-16 h-16 rounded-full bg-primary-500 text-white border-4 border-white shadow-lg shadow-primary-500/30
                    flex items-center justify-center text-xl font-bold z-10
                    ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} mx-auto md:mx-0
                  `}>
                    {step.step}
                  </div>
                  
                  <div className={`
                  bg-white/80 border-2 border-primary-200 p-6 rounded-xl shadow-lg w-full md:w-5/12 hover:border-primary-400 transition-all duration-300
                    ${index % 2 === 0 ? 'md:ml-12 ml-4' : 'md:mr-12 ml-4 md:-order-1'}
                  `}>
                  <h3 className="text-xl font-bold mb-2 text-secondary-500">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our marketing services and process."
            center
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <FAQItem
              question="How long does a typical marketing campaign take?"
              answer="Campaign timelines vary based on scope and objectives. A social media campaign might run for 1-3 months, while a comprehensive brand strategy could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
            />
            <FAQItem
              question="What is your pricing model for marketing services?"
              answer="We offer flexible pricing models including project-based, retainer-based, and performance-based options. Our pricing is tailored to your specific needs, campaign scope, and marketing objectives."
            />
            <FAQItem
              question="How do you measure campaign success?"
              answer="We establish clear KPIs and metrics for each campaign, tracking performance through analytics tools and regular reporting. Success is measured through metrics like engagement rates, conversion rates, ROI, and brand awareness growth."
            />
            <FAQItem
              question="What marketing channels do you specialize in?"
              answer="We offer expertise across multiple channels including digital marketing, social media, content marketing, email marketing, PR, and traditional advertising. We'll recommend the most effective channels based on your goals and target audience."
            />
            <FAQItem
              question="How do you ensure campaign quality and effectiveness?"
              answer="We follow industry best practices and maintain high standards for all our marketing activities. Each campaign undergoes thorough planning, creative review, and performance monitoring to ensure optimal results and ROI."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Let's discuss how our marketing expertise can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-secondary-500 font-medium rounded-xl hover:bg-primary-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-medium text-secondary-500">{question}</h3>
        <div className="ml-2">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-primary-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-primary-400" />
          )}
        </div>
      </button>
      <div
        className={`mt-2 text-text-secondary overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default Services;