import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  const faqs: FAQ[] = [
    // General FAQs
    {
      id: '1',
      question: 'What services does Advert Marketing offer?',
      answer: 'Advert Marketing provides a comprehensive suite of digital marketing services including search engine optimization (SEO), social media marketing, content creation, campaign management, branding and strategy, and graphic design. We offer tailored solutions to help businesses establish and grow their online presence.',
      category: 'General',
    },
    {
      id: '2',
      question: 'How long has Advert Marketing been in business?',
      answer: 'Advert Marketing has been a trusted name in digital marketing for several years. Our experienced team has helped numerous businesses achieve their marketing goals through innovative strategies and proven methodologies.',
      category: 'General',
    },
    {
      id: '3',
      question: 'What industries do you specialize in?',
      answer: 'We work with businesses across various industries including retail, healthcare, education, real estate, and professional services. Our team adapts strategies to meet the unique needs and challenges of each industry, ensuring effective results regardless of your sector.',
      category: 'General',
    },
    
    // Services FAQs
    {
      id: '4',
      question: 'How long does it take to see results from digital marketing?',
      answer: 'Results vary depending on the service and your specific goals. SEO typically shows initial results within 3-6 months, while social media campaigns can generate engagement within weeks. We provide regular performance reports and adjust strategies to optimize results.',
      category: 'Services',
    },
    {
      id: '5',
      question: 'What is your approach to campaign management?',
      answer: 'We follow a data-driven approach to campaign management. This includes thorough research, strategic planning, creative execution, continuous monitoring, and optimization based on performance metrics. We maintain transparent communication and provide regular updates on campaign progress.',
      category: 'Services',
    },
    {
      id: '6',
      question: 'Do you offer ongoing marketing support?',
      answer: 'Yes, we offer various support packages to maintain and optimize your digital marketing efforts. Our team provides regular content updates, performance monitoring, strategy adjustments, and technical support to ensure your marketing campaigns continue to deliver results.',
      category: 'Services',
    },
    
    // Strategy FAQs
    {
      id: '7',
      question: 'How do you develop a marketing strategy?',
      answer: 'Our strategy development process begins with understanding your business goals, target audience, and market position. We conduct thorough research, analyze competitors, and create a customized strategy that aligns with your objectives. This includes channel selection, content planning, and performance metrics.',
      category: 'Strategy',
    },
    {
      id: '8',
      question: 'How do you measure campaign success?',
      answer: 'We use a combination of key performance indicators (KPIs) including website traffic, conversion rates, engagement metrics, ROI, and brand awareness. We provide detailed analytics reports and insights to help you understand the impact of your marketing efforts.',
      category: 'Strategy',
    },
    {
      id: '9',
      question: 'Can you work with our existing marketing team?',
      answer: 'Absolutely! We often collaborate with in-house marketing teams to enhance their efforts. We can provide additional expertise, resources, and support while ensuring seamless integration with your existing marketing operations.',
      category: 'Strategy',
    },
    
    // Pricing FAQs
    {
      id: '10',
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing options tailored to your needs and budget. This includes project-based pricing for specific campaigns, retainer-based services for ongoing support, and custom packages for comprehensive marketing solutions. We provide detailed proposals with transparent pricing before starting any work.',
      category: 'Pricing',
    },
    {
      id: '11',
      question: 'Do you offer any guarantees?',
      answer: 'While we can\'t guarantee specific results (as marketing outcomes depend on various factors), we guarantee our commitment to quality, transparency, and client satisfaction. We provide regular reports and adjust strategies to ensure you achieve your marketing objectives.',
      category: 'Pricing',
    },
    {
      id: '12',
      question: 'Are there any hidden costs?',
      answer: 'No, we believe in complete transparency. All costs are clearly outlined in our proposals, including any third-party expenses or platform fees. We discuss any potential additional costs upfront and get your approval before proceeding with any changes.',
      category: 'Pricing',
    },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  // Filter FAQs based on category and search term
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === null || activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Group FAQs by category
  const groupedFaqs: Record<string, FAQ[]> = {};
  filteredFaqs.forEach(faq => {
    if (!groupedFaqs[faq.category]) {
      groupedFaqs[faq.category] = [];
    }
    groupedFaqs[faq.category].push(faq);
  });

  // Toggle FAQ accordion
  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => 
      prev.includes(id) ? prev.filter(faqId => faqId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-br from-secondary-100 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-primary-200 bg-white text-text-secondary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Get Answers"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about our services and process."
            center
          />

          <div className="flex flex-wrap justify-center mt-8 mb-12">
              {categories.map((category) => (
              <button
                  key={category}
                  onClick={() => setActiveCategory(category === 'All' ? null : category)}
                className={`px-6 py-3 m-2 rounded-full transition-all duration-300 font-medium ${
                  (category === 'All' && activeCategory === null) || category === activeCategory
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white border-2 border-primary-200 text-text-secondary hover:border-primary-400 hover:bg-primary-50'
                }`}
                >
                  {category}
              </button>
              ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {Object.keys(groupedFaqs).length > 0 ? (
              Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
                <div key={category} className="mb-12 last:mb-0">
                  <SectionHeading
                    title={category}
                    description={`Common questions about ${category.toLowerCase()}`}
                  />
                  
                  <div className="mt-6 space-y-4">
                    {categoryFaqs.map((faq) => (
                      <motion.div
                        key={faq.id}
                        className="border-2 border-primary-200 rounded-xl overflow-hidden bg-white hover:border-primary-400 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * categoryFaqs.indexOf(faq) }}
                        whileHover={{ y: -2 }}
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full px-6 py-4 text-left bg-white hover:bg-primary-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-secondary-500">{faq.question}</h3>
                            <ChevronDown
                              className={`w-5 h-5 transform transition-transform text-primary-500 ${
                                openFaqs.includes(faq.id) ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            openFaqs.includes(faq.id) ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="p-4 border-t border-primary-200 bg-white">
                            <p className="text-text-secondary">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg mb-4">
                  No questions found matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                  className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-secondary-500 font-medium rounded-xl hover:bg-primary-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;