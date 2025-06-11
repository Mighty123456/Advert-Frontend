import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Target, BarChart } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  timeline: string;
  team: string;
  targetAudience: string[];
  metrics: string[];
  caseStudies?: {
    title: string;
    description: string;
    results: string[];
  }[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  'web-dev': {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Transforming visions into dynamic websites',
    longDescription: `Our web development service is designed to create powerful, scalable, and user-friendly digital solutions that drive business growth. We combine cutting-edge technology with creative design to deliver websites that not only look stunning but also perform exceptionally well.

    From responsive corporate websites to complex e-commerce platforms, we handle projects of all sizes with the same level of dedication and attention to detail. Our team of experienced developers stays current with the latest technologies and best practices to ensure your website is built using the most efficient and secure methods.`,
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Custom solutions tailored to your business needs',
      'Responsive design for all devices',
      'Fast loading times and optimal performance',
      'SEO-friendly architecture',
      'Secure and scalable infrastructure',
      'Easy content management',
      'Integration with third-party services',
      'Ongoing support and maintenance'
    ],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'We begin by understanding your business goals, target audience, and specific requirements to create a detailed project roadmap.'
      },
      {
        title: 'Design & Prototyping',
        description: 'Our designers create wireframes and mockups, ensuring the website aligns with your brand identity and user experience goals.'
      },
      {
        title: 'Development',
        description: 'Our developers build the website using modern technologies, following best practices for performance and security.'
      },
      {
        title: 'Testing & Quality Assurance',
        description: 'We conduct thorough testing across devices and browsers to ensure flawless functionality.'
      },
      {
        title: 'Launch & Deployment',
        description: 'We handle the deployment process and ensure a smooth transition to the live environment.'
      },
      {
        title: 'Post-Launch Support',
        description: 'We provide ongoing maintenance, updates, and support to keep your website running optimally.'
      }
    ],
    timeline: '4-8 weeks depending on project complexity',
    team: 'Project Manager, UI/UX Designer, Frontend Developer, Backend Developer, QA Engineer',
    targetAudience: [
      'Businesses needing a new website',
      'Companies looking to redesign existing websites',
      'E-commerce businesses',
      'Startups and entrepreneurs',
      'Organizations requiring web applications'
    ],
    metrics: [
      'Page load speed under 2 seconds',
      'Mobile responsiveness score > 90',
      'SEO optimization score > 90',
      'Security compliance (SSL, GDPR, etc.)',
      'Cross-browser compatibility',
      'Accessibility standards compliance'
    ],
    caseStudies: [
      {
        title: 'E-commerce Platform Redesign',
        description: 'Complete overhaul of an existing e-commerce platform for a retail client',
        results: [
          '40% increase in conversion rate',
          '60% improvement in page load speed',
          '35% growth in mobile sales',
          '50% reduction in cart abandonment'
        ]
      }
    ]
  },
  'seo': {
    id: 'seo',
    title: 'SEO & Lead Generation',
    description: 'Boost your online visibility and drive qualified leads',
    longDescription: `Our SEO and Lead Generation service is designed to increase your website's visibility in search engines and convert that visibility into valuable business leads. We combine technical expertise with strategic content creation to help your business rank higher and attract more qualified traffic.

    Our comprehensive approach includes on-page optimization, content strategy, link building, and technical SEO to ensure your website performs at its best in search results. We also implement lead generation strategies to convert visitors into potential customers.`,
    image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Increased organic traffic',
      'Higher search engine rankings',
      'More qualified leads',
      'Improved conversion rates',
      'Better ROI on marketing spend',
      'Long-term sustainable growth',
      'Competitive advantage',
      'Data-driven insights'
    ],
    process: [
      {
        title: 'SEO Audit',
        description: 'We conduct a comprehensive analysis of your current SEO performance and identify opportunities for improvement.'
      },
      {
        title: 'Keyword Research',
        description: 'We identify the most valuable keywords for your business and target audience.'
      },
      {
        title: 'On-Page Optimization',
        description: 'We optimize your website content and structure for better search engine visibility.'
      },
      {
        title: 'Content Strategy',
        description: 'We develop and implement a content strategy to attract and engage your target audience.'
      },
      {
        title: 'Link Building',
        description: "We build quality backlinks to improve your website's authority and rankings."
      },
      {
        title: 'Performance Tracking',
        description: 'We monitor and analyze results, making adjustments to optimize performance.'
      }
    ],
    timeline: '3-6 months for initial results, ongoing optimization',
    team: 'SEO Specialist, Content Strategist, Link Building Expert, Analytics Specialist',
    targetAudience: [
      'Businesses looking to improve online visibility',
      'Companies seeking more qualified leads',
      'E-commerce businesses',
      'Local businesses',
      'B2B companies'
    ],
    metrics: [
      'Organic traffic growth',
      'Keyword rankings',
      'Conversion rate',
      'Lead quality',
      'ROI on SEO investment',
      'Backlink profile strength'
    ]
  },
  'campaign': {
    id: 'campaign',
    title: 'Campaign & Event Promotion',
    description: 'Amplify your events and campaigns with strategic marketing',
    longDescription: `Our Campaign & Event Promotion service is designed to create buzz, drive engagement, and maximize attendance for your events and marketing campaigns. We combine creative storytelling with strategic distribution to ensure your message reaches the right audience at the right time.

    From product launches to corporate events, trade shows to digital campaigns, we handle every aspect of promotion including social media marketing, email campaigns, influencer partnerships, and traditional advertising. Our data-driven approach ensures measurable results and maximum ROI for your promotional efforts.`,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Increased event attendance and engagement',
      'Enhanced brand visibility and awareness',
      'Strategic audience targeting and reach',
      'Multi-channel promotion campaigns',
      'Real-time performance tracking',
      'Cost-effective marketing solutions',
      'Professional event branding',
      'Post-event follow-up and analysis'
    ],
    process: [
      {
        title: 'Campaign Strategy',
        description: 'We develop a comprehensive promotion strategy tailored to your event type, target audience, and business objectives.'
      },
      {
        title: 'Content Creation',
        description: 'Our creative team develops compelling content including graphics, videos, and copy that resonates with your audience.'
      },
      {
        title: 'Multi-Channel Distribution',
        description: 'We execute the campaign across multiple channels including social media, email, paid advertising, and traditional media.'
      },
      {
        title: 'Influencer Partnerships',
        description: 'We identify and collaborate with relevant influencers to amplify your campaign reach and credibility.'
      },
      {
        title: 'Performance Monitoring',
        description: 'We track campaign performance in real-time and make adjustments to optimize results.'
      },
      {
        title: 'Post-Event Analysis',
        description: 'We provide detailed reports on campaign performance and recommendations for future events.'
      }
    ],
    timeline: '2-6 weeks depending on campaign scope',
    team: 'Campaign Manager, Creative Designer, Social Media Specialist, Content Writer, Analytics Specialist',
    targetAudience: [
      'Event organizers and planners',
      'Product launch campaigns',
      'Corporate event promotions',
      'Trade show and exhibition marketing',
      'Digital marketing campaigns',
      'Brand awareness initiatives'
    ],
    metrics: [
      'Event attendance rates',
      'Social media engagement',
      'Brand mention volume',
      'Website traffic increase',
      'Lead generation numbers',
      'ROI on promotional spend'
    ],
    caseStudies: [
      {
        title: 'Tech Conference Promotion',
        description: 'Comprehensive promotion campaign for a major technology conference',
        results: [
          '150% increase in event registration',
          '500% growth in social media mentions',
          '80% improvement in brand awareness',
          '45% increase in website traffic'
        ]
      }
    ]
  },
  'branding': {
    id: 'branding',
    title: 'Branding & Strategy',
    description: 'Build a powerful brand that resonates with your audience',
    longDescription: `Our Branding & Strategy service helps businesses create compelling brand identities that connect with their target audience and drive business growth. We go beyond just logos and colors to develop comprehensive brand strategies that position your business for success.

    From brand positioning and messaging to visual identity and brand guidelines, we create cohesive brand experiences that build trust, loyalty, and recognition. Our strategic approach ensures your brand stands out in a crowded marketplace and resonates with your ideal customers.`,
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Strong brand recognition and recall',
      'Consistent brand messaging',
      'Increased customer trust and loyalty',
      'Competitive market positioning',
      'Professional brand identity',
      'Clear brand guidelines',
      'Enhanced market differentiation',
      'Long-term brand value'
    ],
    process: [
      {
        title: 'Brand Research',
        description: 'We conduct market research, competitor analysis, and audience insights to understand your brand landscape.'
      },
      {
        title: 'Brand Positioning',
        description: 'We develop your unique value proposition and position your brand in the market.'
      },
      {
        title: 'Brand Identity Design',
        description: 'We create visual elements including logo, color palette, typography, and brand guidelines.'
      },
      {
        title: 'Brand Messaging',
        description: 'We develop your brand voice, tone, and key messaging that resonates with your audience.'
      },
      {
        title: 'Brand Implementation',
        description: 'We apply your brand consistently across all touchpoints and marketing materials.'
      },
      {
        title: 'Brand Monitoring',
        description: 'We track brand performance and provide ongoing brand management support.'
      }
    ],
    timeline: '4-8 weeks for complete brand development',
    team: 'Brand Strategist, Creative Director, Graphic Designer, Copywriter, Market Researcher',
    targetAudience: [
      'Startups and new businesses',
      'Companies rebranding',
      'Businesses expanding to new markets',
      'Organizations needing brand refresh',
      'Companies with inconsistent branding',
      'Businesses seeking market differentiation'
    ],
    metrics: [
      'Brand awareness and recognition',
      'Brand sentiment analysis',
      'Customer loyalty metrics',
      'Market share growth',
      'Brand consistency scores',
      'Customer perception surveys'
    ],
    caseStudies: [
      {
        title: 'Startup Brand Transformation',
        description: 'Complete brand development for a fintech startup',
        results: [
          '200% increase in brand recognition',
          '85% improvement in customer trust scores',
          '60% growth in market share',
          '90% positive brand sentiment'
        ]
      }
    ]
  },
  'graphic': {
    id: 'graphic',
    title: 'Graphic Designing',
    description: 'Create stunning visuals that capture attention and convey your message',
    longDescription: `Our Graphic Design service delivers visually compelling designs that effectively communicate your brand message and engage your audience. We combine creativity with strategic thinking to create designs that not only look great but also drive results.

    From logos and brand identity to marketing materials, social media graphics, and print collateral, we create cohesive visual solutions that strengthen your brand and help you achieve your business goals. Our designs are optimized for both digital and print applications.`,
    image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Professional and polished visual identity',
      'Consistent brand representation',
      'Increased engagement and conversion',
      'Memorable brand recognition',
      'Versatile design solutions',
      'Print and digital optimization',
      'Scalable design systems',
      'Quick turnaround times'
    ],
    process: [
      {
        title: 'Design Brief',
        description: 'We gather requirements, understand your goals, and establish design parameters and objectives.'
      },
      {
        title: 'Concept Development',
        description: 'We create multiple design concepts and present options for your review and feedback.'
      },
      {
        title: 'Design Refinement',
        description: 'We refine the selected concept based on your feedback and requirements.'
      },
      {
        title: 'Final Design',
        description: 'We deliver the final design files in all required formats and specifications.'
      },
      {
        title: 'Design Implementation',
        description: 'We provide guidance on implementing the designs across various platforms and materials.'
      },
      {
        title: 'Ongoing Support',
        description: 'We offer ongoing design support and updates as your business evolves.'
      }
    ],
    timeline: '1-3 weeks depending on project complexity',
    team: 'Senior Graphic Designer, Creative Director, Art Director, Production Specialist',
    targetAudience: [
      'Businesses needing brand identity',
      'Marketing teams requiring visual assets',
      'Startups and entrepreneurs',
      'Event organizers',
      'E-commerce businesses',
      'Service-based companies'
    ],
    metrics: [
      'Design quality and professionalism',
      'Brand consistency scores',
      'Engagement rates on visual content',
      'Conversion improvement',
      'Client satisfaction ratings',
      'Design turnaround times'
    ],
    caseStudies: [
      {
        title: 'E-commerce Brand Identity',
        description: 'Complete visual identity design for an online retail brand',
        results: [
          '300% increase in social media engagement',
          '50% improvement in brand recognition',
          '40% boost in conversion rates',
          '95% client satisfaction score'
        ]
      }
    ]
  },
  'social': {
    id: 'social',
    title: 'Social Media Marketing',
    description: 'Build meaningful connections and grow your audience on social platforms',
    longDescription: `Our Social Media Marketing service helps businesses build authentic connections with their audience, increase brand awareness, and drive meaningful engagement across all major social platforms. We create strategic, content-driven campaigns that resonate with your target audience and deliver measurable results.

    From content creation and community management to paid advertising and influencer partnerships, we handle every aspect of your social media presence. Our data-driven approach ensures continuous optimization and maximum ROI for your social media investment.`,
    image: 'https://images.pexels.com/photos/3183158/pexels-photo-3183158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    benefits: [
      'Increased brand awareness and visibility',
      'Higher engagement and community growth',
      'Improved customer relationships',
      'Enhanced brand loyalty',
      'Increased website traffic',
      'Better lead generation',
      'Cost-effective marketing',
      'Real-time audience insights'
    ],
    process: [
      {
        title: 'Platform Strategy',
        description: 'We analyze your business and audience to determine the best social media platforms for your goals.'
      },
      {
        title: 'Content Planning',
        description: 'We develop a comprehensive content strategy and editorial calendar tailored to your audience.'
      },
      {
        title: 'Content Creation',
        description: 'We create engaging, platform-optimized content including posts, stories, videos, and graphics.'
      },
      {
        title: 'Community Management',
        description: 'We actively engage with your audience, respond to comments, and build meaningful relationships.'
      },
      {
        title: 'Paid Advertising',
        description: 'We create and manage targeted social media advertising campaigns to reach your ideal audience.'
      },
      {
        title: 'Performance Analysis',
        description: 'We track performance metrics and continuously optimize strategies for better results.'
      }
    ],
    timeline: 'Ongoing with monthly strategy reviews',
    team: 'Social Media Manager, Content Creator, Community Manager, Paid Ads Specialist, Analytics Expert',
    targetAudience: [
      'Businesses wanting to increase online presence',
      'Brands seeking audience engagement',
      'E-commerce businesses',
      'Service-based companies',
      'B2B organizations',
      'Local businesses'
    ],
    metrics: [
      'Follower growth rate',
      'Engagement rates',
      'Reach and impressions',
      'Click-through rates',
      'Conversion from social traffic',
      'Brand sentiment analysis'
    ],
    caseStudies: [
      {
        title: 'Restaurant Social Media Growth',
        description: 'Comprehensive social media marketing for a local restaurant chain',
        results: [
          '400% increase in social media followers',
          '250% growth in engagement rates',
          '60% increase in online orders',
          '80% improvement in brand sentiment'
        ]
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceDetails[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-500">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-primary-200 hover:text-primary-100 mb-6 group transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white relative">
              <span className="relative z-10">{service.title}</span>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-primary-500 rounded-full"></div>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full translate-y-32 -translate-x-32"></div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
              <h2 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                </div>
                Overview
              </h2>
              <div className="prose max-w-none">
                <p className="text-white/90 whitespace-pre-line leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </div>
            </section>

            {/* Process */}
            <section className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
              <h2 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                </div>
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4 group hover:bg-white/5 p-4 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-secondary-500 flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
              <h2 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                </div>
                Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies */}
            {service.caseStudies && (
              <section className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
                <h2 className="text-2xl font-bold text-primary-500 mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  </div>
                  Case Studies
                </h2>
                <div className="space-y-6">
                  {service.caseStudies.map((caseStudy, index) => (
                    <div key={index} className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-6 backdrop-blur-sm hover:bg-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-[1.02] group">
                      <h3 className="text-xl font-semibold text-primary-500 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {caseStudy.title}
                      </h3>
                      <p className="text-white/80 mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {caseStudy.description}
                      </p>
                      <h4 className="font-medium text-primary-500 mb-3 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                        Results:
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start group/item hover:bg-white/5 p-2 rounded transition-all duration-300">
                            <CheckCircle className="w-5 h-5 text-primary-500 mr-2 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                            <span className="text-white/80 group-hover/item:text-white/90 transition-colors duration-300 leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Service Image */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Key Information */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] space-y-6">
                <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-primary-500 mb-4 flex items-center group-hover:text-primary-400 transition-colors duration-300">
                    <Clock className="w-5 h-5 mr-2 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    Timeline
                  </h3>
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{service.timeline}</p>
                </div>

                <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-primary-500 mb-4 flex items-center group-hover:text-primary-400 transition-colors duration-300">
                    <Users className="w-5 h-5 mr-2 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    Team
                  </h3>
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">{service.team}</p>
                </div>

                <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-primary-500 mb-4 flex items-center group-hover:text-primary-400 transition-colors duration-300">
                    <Target className="w-5 h-5 mr-2 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    Target Audience
                  </h3>
                  <ul className="space-y-2">
                    {service.targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start group/item hover:bg-white/5 p-2 rounded transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-white/80 group-hover/item:text-white/90 transition-colors duration-300 leading-relaxed">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-primary-500 mb-4 flex items-center group-hover:text-primary-400 transition-colors duration-300">
                    <BarChart className="w-5 h-5 mr-2 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
                    Key Metrics
                  </h3>
                  <ul className="space-y-2">
                    {service.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start group/item hover:bg-white/5 p-2 rounded transition-all duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-white/80 group-hover/item:text-white/90 transition-colors duration-300 leading-relaxed">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link to="/contact" className="block">
                  <Button className="w-full bg-primary-500 text-secondary-500 hover:bg-primary-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 