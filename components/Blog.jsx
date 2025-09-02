'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  ArrowRight, 
  User, 
  Tag,
  Clock,
  TrendingUp,
  BookOpen,
  Lightbulb
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Build AI Applications with OpenAI and Next.js',
      excerpt: 'A comprehensive guide to building modern AI applications using OpenAI API and Next.js framework with real-world examples.',
      image: '/images/blog/blog-1.jpg',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of SaaS: AI Integration Best Practices',
      excerpt: 'Discover the latest trends and best practices for integrating AI into your SaaS applications for better user experience.',
      image: '/images/blog/blog-2.jpg',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'AI & ML',
      featured: false
    },
    {
      id: 3,
      title: 'Optimizing Performance in AI-Powered Applications',
      excerpt: 'Learn advanced techniques to optimize performance and reduce costs in AI-powered applications while maintaining quality.',
      image: '/images/blog/blog-3.jpg',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Performance',
      featured: false
    },
    {
      id: 4,
      title: 'Security Best Practices for AI Applications',
      excerpt: 'Essential security measures and best practices to protect your AI applications and user data from potential threats.',
      image: '/images/blog/blog-4.jpg',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Security',
      featured: false
    },
    {
      id: 5,
      title: 'Building Scalable AI APIs with Next.js',
      excerpt: 'Step-by-step guide to building scalable and maintainable AI APIs using Next.js API routes and serverless functions.',
      image: '/images/blog/blog-5.jpg',
      author: 'David Wilson',
      date: '2024-01-05',
      readTime: '12 min read',
      category: 'Backend',
      featured: false
    },
    {
      id: 6,
      title: 'User Experience Design for AI Applications',
      excerpt: 'How to create intuitive and user-friendly interfaces for AI applications that users will love to interact with.',
      image: '/images/blog/blog-6.jpg',
      author: 'Lisa Taylor',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Design',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: 24, icon: BookOpen },
    { name: 'AI & ML', count: 8, icon: TrendingUp },
    { name: 'Development', count: 12, icon: User },
    { name: 'Design', count: 4, icon: Lightbulb }
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm text-gray-300 mb-4">
            <BookOpen className="w-4 h-4 text-purple-400" />
            Latest Blogs & News
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Insights &{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights about AI development, 
            best practices, and industry news.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              variants={categoryVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500/50 text-white shadow-lg' 
                  : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-purple-500/30'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="font-medium">{category.name}</span>
              <span className="text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className={`group relative rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-blue-900/10 hover:border-purple-500/20 transition-all duration-500 ${
                post.featured && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <TrendingUp className="w-3 h-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Image Placeholder */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 ${
                post.featured && index === 0 ? 'h-64' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 ${
                  post.featured && index === 0 ? 'text-xl' : 'text-lg'
                }`}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author and Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-400">{post.author}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-xs text-purple-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>

              {/* Background Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Blog;