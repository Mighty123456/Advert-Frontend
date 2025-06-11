import { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  client: string;
  year: string;
  link?: string;
  technologies: string[];
  featured?: boolean;
  results: string[];
  duration: string;
  categories: string[];
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveFilter(categoryParam);
      setActiveCategory(categoryParam);
      // Immediately scroll to top when category parameter is present
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'instant' });
      }
    }
  }, [searchParams]);

  // Always scroll to top when component mounts
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Fashion Retail Brand Launch',
      description: 'Successfully launched a new fashion label with a 300% increase in social media engagement and 150% growth in online sales within the first quarter. Created and executed a multi-channel campaign including influencer partnerships, social media marketing, and digital advertising.',
      category: 'Brand Marketing',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'FashionRetail Inc.',
      year: '2024',
      technologies: ['Social Media Marketing', 'Influencer Partnerships', 'Digital Advertising', 'Content Creation'],
      featured: true,
      results: [
        '300% increase in social media engagement',
        '150% growth in online sales',
        '50+ influencer partnerships',
        '1M+ campaign reach'
      ],
      duration: '1 Quarter',
      categories: ['Brand Marketing', 'Digital Marketing', 'Social Media Marketing', 'Influencer Partnerships', 'Digital Advertising', 'Content Creation']
    },
    {
      id: '2',
      title: 'Healthcare Awareness Campaign',
      description: 'Led a successful healthcare awareness campaign that reached over 2 million people, resulting in a 200% increase in patient appointments and 85% growth in community engagement. Created compelling content across digital and traditional media channels.',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'HealthPlus Medical',
      year: '2023',
      technologies: ['Content Marketing', 'Social Media', 'Community Engagement', 'Digital Advertising'],
      featured: true,
      results: [
        '2M+ campaign reach',
        '200% increase in patient appointments',
        '85% growth in community engagement',
        '45% increase in brand awareness'
      ],
      duration: '1 Year',
      categories: ['Digital Marketing', 'Content Marketing', 'Social Media', 'Community Engagement', 'Digital Advertising']
    },
    {
      id: '3',
      title: 'Financial Services Rebrand',
      description: 'Transformed a traditional financial services company into a modern, digital-first brand. The rebrand resulted in a 120% increase in website traffic, 90% growth in social media following, and 75% increase in lead generation.',
      category: 'Brand Strategy',
      image: 'https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'InvestSmart Financial',
      year: '2023',
      technologies: ['Brand Identity', 'Digital Marketing', 'Content Strategy', 'Social Media'],
      featured: true,
      results: [
        '120% increase in website traffic',
        '90% growth in social media following',
        '75% increase in lead generation',
        '60% improvement in brand perception'
      ],
      duration: '1 Year',
      categories: ['Brand Strategy', 'Digital Marketing', 'Content Strategy', 'Social Media']
    },
    {
      id: '4',
      title: 'Tech Product Launch',
      description: 'Executed a successful product launch campaign for a tech startup, achieving 500% growth in pre-orders and 300% increase in media coverage. Created buzz through PR, social media, and influencer marketing.',
      category: 'Product Marketing',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Enterprise Solutions Ltd.',
      year: '2022',
      technologies: ['PR Strategy', 'Social Media', 'Influencer Marketing', 'Content Creation'],
      results: [
        '500% growth in pre-orders',
        '300% increase in media coverage',
        '200K+ social media mentions',
        '85% positive sentiment'
      ],
      duration: '1 Year',
      categories: ['Product Marketing', 'PR Strategy', 'Social Media', 'Influencer Marketing', 'Content Creation']
    },
    {
      id: '5',
      title: 'Corporate Brand Refresh',
      description: 'Led a comprehensive brand refresh for a corporate client, resulting in a 150% increase in brand recognition and 200% growth in social media engagement. Created new visual identity and marketing materials across all channels.',
      category: 'Brand Strategy',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'TechInnovate Inc.',
      year: '2022',
      technologies: ['Brand Identity', 'Visual Design', 'Marketing Materials', 'Digital Assets'],
      results: [
        '150% increase in brand recognition',
        '200% growth in social media engagement',
        '90% positive customer feedback',
        '70% increase in website conversions'
      ],
      duration: '1 Year',
      categories: ['Brand Strategy', 'Visual Design', 'Marketing Materials', 'Digital Assets']
    },
    {
      id: '6',
      title: 'Retail Digital Campaign',
      description: 'Developed and executed an integrated digital campaign for a retail brand, achieving 400% ROI, 250% increase in online sales, and 180% growth in email subscribers. Implemented targeted social media and email marketing strategies.',
      category: 'Campaign Management',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Global Manufacturing Co.',
      year: '2021',
      technologies: ['Social Media Marketing', 'Email Marketing', 'Content Creation', 'Digital Advertising'],
      results: [
        '400% ROI',
        '250% increase in online sales',
        '180% growth in email subscribers',
        '120% increase in customer engagement'
      ],
      duration: '2 Years',
      categories: ['Campaign Management', 'Social Media Marketing', 'Email Marketing', 'Content Creation', 'Digital Advertising']
    },
  ];

  // Get unique categories
  const categories = ['All', 'Brand Strategy', 'Digital Marketing', 'Campaign Management', 'Product Marketing', 'Brand Marketing'];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === null || activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div ref={topRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
              Our <span className="text-primary-500">Portfolio</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Explore our successful marketing strategies and brand development work that has delivered exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Showcase"
            title="Featured Portfolio"
            description="Here are some of our standout projects that demonstrate our expertise in marketing strategy and brand development."
            center
          />

          <div className="flex flex-wrap justify-center mt-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  const newFilter = category === 'All' ? null : category;
                  setActiveFilter(newFilter);
                  setActiveCategory(category);
                  
                  // Update URL parameters
                  if (newFilter) {
                    setSearchParams({ category: newFilter });
                  } else {
                    setSearchParams({});
                  }
                }}
                className={`px-6 py-3 m-2 rounded-full transition-all duration-300 font-medium ${
                  (category === 'All' && activeFilter === null) || category === activeFilter
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white border-2 border-primary-200 text-text-secondary hover:border-primary-400 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white border-2 border-primary-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-400 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white font-medium mb-2">Client: {project.client}</p>
                      <p className="text-gray-300">Year: {project.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-600 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary-500 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-text-secondary flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-secondary-100 text-secondary-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-modern link-external font-medium"
                      aria-label={`View ${project.title} project`}
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Approach"
            title="Strategy Development Process"
            description="We follow a structured approach to ensure successful project delivery and client satisfaction."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'Discovery & Research',
                description: 'We analyze market trends, competitor strategies, and target audience insights to develop a comprehensive understanding of your brand and market position.',
              },
              {
                number: '02',
                title: 'Strategy & Planning',
                description: 'Our team develops tailored marketing strategies, campaign plans, and creative concepts aligned with your business objectives and target audience.',
              },
              {
                number: '03',
                title: 'Execution & Optimization',
                description: 'We implement campaigns across multiple channels, continuously monitor performance, and optimize strategies to maximize ROI and campaign effectiveness.',
              },
            ].map((step) => (
              <motion.div 
                key={step.number} 
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary-200 hover:border-primary-400 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl font-bold text-primary-500 mb-4 shadow-lg shadow-primary-500/20">{step.number}</div>
                <h3 className="text-xl font-bold text-secondary-500 mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 text-primary-500 mx-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              "Advert Marketing transformed our brand presence with their innovative digital marketing strategies. Their team's expertise in SEO, social media marketing, and content strategy helped us achieve remarkable growth in market share and customer engagement."
            </p>
            <div>
              <p className="font-bold text-secondary-500">Sarah Johnson</p>
              <p className="text-primary-600">Marketing Director, TechStart Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how our marketing expertise can help you achieve your business goals and create impactful strategies that resonate with your audience.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-white text-secondary-500 font-medium rounded-xl hover:bg-primary-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;