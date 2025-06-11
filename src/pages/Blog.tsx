import { useState, useEffect } from 'react';
import { Clock, Calendar, Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card, { CardContent, CardFooter } from '../components/ui/Card';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends and technologies that will shape the future of web development in the coming years.',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'Alex Johnson',
      authorImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'April 15, 2025',
      readTime: '6 min read',
      featured: true
    },
    {
      id: '2',
      title: 'Building Scalable Mobile Applications with React Native',
      excerpt: 'Learn how to architect and build scalable, performant mobile applications using React Native and best practices.',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Sarah Williams',
      authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 28, 2025',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'The Role of AI in Modern UX Design',
      excerpt: 'Discover how artificial intelligence is transforming user experience design and what it means for designers.',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Michael Chen',
      authorImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 15, 2025',
      readTime: '5 min read'
    },
    {
      id: '4',
      title: 'Cloud Migration Strategies for Enterprise Applications',
      excerpt: 'A comprehensive guide to planning and executing successful cloud migrations for large enterprise applications.',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Jessica Rivera',
      authorImage: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'March 5, 2025',
      readTime: '10 min read'
    },
    {
      id: '5',
      title: 'Security Best Practices for Modern Web Applications',
      excerpt: 'Essential security measures and practices to protect your web applications from common vulnerabilities and threats.',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'David Smith',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'February 22, 2025',
      readTime: '7 min read'
    },
    {
      id: '6',
      title: 'Leveraging Data Analytics for Business Growth',
      excerpt: 'How businesses can use data analytics to gain insights, make informed decisions, and drive sustainable growth.',
      category: 'Data Analytics',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Emily Taylor',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      date: 'February 10, 2025',
      readTime: '9 min read'
    }
  ];

  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search term and selected category
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let filtered = blogPosts;
      
      if (searchTerm) {
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (selectedCategory) {
        filtered = filtered.filter(post => post.category === selectedCategory);
      }
      
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 500);
  }, [searchTerm, selectedCategory]);

  // Featured post
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
              Our <span className="text-primary-500">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary">
              Stay updated with the latest digital marketing trends, tips, and insights from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-white border-2 border-primary-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-400 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-600 rounded-full">
                      Featured
                    </span>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary-100 text-secondary-600 rounded-full ml-2">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-500 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-secondary mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-primary-200"
                    />
                    <div>
                      <p className="font-medium text-secondary-500">
                        {featuredPost.author}
                      </p>
                      <div className="flex items-center text-sm text-primary-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{featuredPost.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Latest Insights"
            title="Blog Posts"
            description="Discover valuable insights and strategies to help your business thrive in the digital landscape."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                className="bg-white/80 backdrop-blur-sm border-2 border-primary-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-400 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                >
                <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-primary-600 font-medium">{post.category}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-text-secondary">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                  <p className="text-text-secondary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                        />
                      <span className="text-sm text-text-secondary">{post.author}</span>
                  </div>
                </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;