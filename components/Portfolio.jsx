'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Smartphone, 
  Globe, 
  Database, 
  Code2,
  ShoppingCart,
  Heart,
  Users,
  Star
} from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: ["Payment Integration", "Admin Panel", "Inventory Management", "User Authentication"],
      icon: ShoppingCart,
      color: "from-emerald-500 to-teal-500",
      stats: { users: "10K+", rating: 4.8, reviews: 150 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and billing.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Material-UI"],
      features: ["Patient Records", "Appointment System", "Billing Integration", "Real-time Updates"],
      icon: Heart,
      color: "from-red-500 to-pink-500",
      stats: { users: "5K+", rating: 4.9, reviews: 89 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      category: "SaaS Platform",
      description: "Analytics dashboard for social media managers to track performance across multiple platforms.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Python", "Redis", "Chart.js", "Bootstrap"],
      features: ["Multi-platform Analytics", "Real-time Data", "Custom Reports", "Team Collaboration"],
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      stats: { users: "15K+", rating: 4.7, reviews: 234 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Secure mobile banking application with biometric authentication and transaction history.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Styled Components"],
      features: ["Biometric Auth", "Transaction History", "Bill Payments", "Fund Transfers"],
      icon: Smartphone,
      color: "from-purple-500 to-violet-500",
      stats: { users: "25K+", rating: 4.9, reviews: 456 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web Application",
      description: "Modern real estate platform with virtual tours, mortgage calculator, and agent management.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Prisma", "Cloudinary", "Chakra UI"],
      features: ["Virtual Tours", "Mortgage Calculator", "Agent Portal", "Advanced Search"],
      icon: Globe,
      color: "from-orange-500 to-amber-500",
      stats: { users: "8K+", rating: 4.6, reviews: 123 },
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "AI-Powered CRM",
      category: "Enterprise Software",
      description: "Customer relationship management system with AI-powered insights and automation features.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Django", "TensorFlow", "Redis", "Ant Design"],
      features: ["AI Insights", "Lead Scoring", "Email Automation", "Sales Pipeline"],
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      stats: { users: "12K+", rating: 4.8, reviews: 198 },
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Purple Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Our Portfolio</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our latest work and see how we've helped businesses transform 
            their digital presence with innovative solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-gray-600" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  {project.category}
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.links.live}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.links.github}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.stats.users} users</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{project.stats.rating}</span>
                    <span className="text-gray-500">({project.stats.reviews})</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span className="text-xs text-gray-400 truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;