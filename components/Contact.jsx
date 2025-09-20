'use client';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  Users,
  Headphones
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Our team is here to help.',
      contact: '+87329 92181',
      action: 'tel:+918732992181'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime!',
      contact: 'office@sayajiinfotech.com',
      action: 'mailto:office@sayajiinfotech.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit our development center.',
      contact: 'SB-3, Race Course Towers, Race Course Rd, near Pashabhai Park,opp Natubhai Circle, Vadiwadi, Vadodara',
      action: '#'
    }
  ];


  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Gradient Fade Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/30 light:from-transparent light:to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/20 via-transparent to-slate-950/30 light:from-transparent light:to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium border border-purple-500/30 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-purple-300 light:text-purple-700 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            Get in Touch
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white light:text-gray-900 mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 light:from-purple-600 light:via-pink-600 light:to-blue-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 light:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team of experts
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Contact Form */}
          <div className="relative h-full">
            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] light:from-gray-50 light:to-white border border-white/10 light:border-gray-200 backdrop-blur-sm rounded-3xl p-6 lg:p-8 h-full flex flex-col light:shadow-lg">
              <h3 className="text-2xl font-bold text-white light:text-gray-900 mb-6">Send us a message</h3>
              
              <form className="space-y-4 lg:space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 mt-auto"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 rounded-3xl blur-xl" />
          </div>

          {/* Contact Information */}
          <div className="space-y-4 lg:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group relative p-4 lg:p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-pink-900/10 hover:border-purple-500/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm mb-2">
                      {info.description}
                    </p>
                    <a
                      href={info.action}
                      className="text-purple-400 light:text-purple-600 hover:text-purple-300 light:hover:text-purple-700 transition-colors duration-300 font-medium"
                    >
                      {info.contact}
                    </a>
                  </div>
                </div>

                {/* Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <Clock className="w-8 h-8 text-purple-400 light:text-purple-600 mx-auto mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Response Time</h4>
                <p className="text-gray-400 text-xs">Within 24 hours</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Team Size</h4>
                <p className="text-gray-400 text-xs">50+ Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;