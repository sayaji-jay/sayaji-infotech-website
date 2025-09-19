'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridLayout from '@/components/ui/GridLayout';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Share2,
  Star,
  Users,
  Code2,
  ShoppingCart,
  Heart,
  Database,
  Globe,
  Smartphone,
  Activity,
  Building,
  Wifi,
  Settings,
  FileSearch,
  Zap
} from 'lucide-react';

const iconMap = {
  ShoppingCart,
  Heart,
  Users,
  Smartphone,
  Globe,
  Database,
  Activity,
  Building,
  Wifi,
  Settings,
  FileSearch,
  Zap
};

const ProjectDetail = () => {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.slug) {
      fetchProject(params.slug);
    }
  }, [params.slug]);

  const fetchProject = async (slug) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/projects/${slug}`);

      if (!response.ok) {
        throw new Error('Project not found');
      }

      const data = await response.json();
      setProject({
        ...data,
        icon: iconMap[data.icon] || Database
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const shareProject = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project?.title || 'Project',
          text: project?.description || 'Check out this project',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            <p className="text-white mt-4">Loading project...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-6">{error}</p>
            <Link
              href="/#portfolio"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const IconComponent = project?.icon || Database;

  return (
    <>
      <Header />
      <GridLayout className="min-h-screen">
        <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <button
              onClick={shareProject}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">{project?.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {project?.title}
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              {project?.description}
            </p>

            {/* Project Stats */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="flex items-center space-x-1 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{project?.stats?.users} users</span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{project?.stats?.rating}</span>
                  <span className="text-gray-500">({project?.stats?.reviews})</span>
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <a
                href={project?.links?.live}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>

              <a
                href={project?.links?.github}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              {project?.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`${project?.image ? 'hidden' : 'flex'} absolute inset-0 bg-gradient-to-br ${project?.color} opacity-20 items-center justify-center`}>
                <IconComponent className="w-20 h-20 text-gray-600" />
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project?.content?.overview}
                </p>
              </div>

              {/* Sections */}
              {project?.content?.sections?.map((section, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{section.content}</p>

                  {/* Section Image */}
                  {section.image && (
                    <div className="mb-6">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-64 object-cover rounded-lg border border-white/10"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/600/400';
                        }}
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project?.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Technical Stack */}
              {project?.content?.technicalStack && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Stack</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(project.content.technicalStack).map(([category, technologies]) => (
                      <div key={category} className="bg-white/5 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-purple-300 mb-4">{category}</h4>
                        <div className="space-y-2">
                          {technologies.map((tech, idx) => (
                            <div key={idx} className="text-gray-400 text-sm">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Impact */}
              {project?.content?.businessImpact && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.content.businessImpact.map((impact, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project?.color}`}></div>
                        <span className="text-gray-300">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project?.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back to Portfolio */}
          <div className="mt-16 mb-12 text-center">
            <Link
              href="/#portfolio"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:bg-purple-600/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View All Projects</span>
            </Link>
          </div>
        </div>
        </div>
      </GridLayout>
      <Footer />
    </>
  );
};

export default ProjectDetail;