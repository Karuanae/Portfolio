// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { 
  Heart, 
  Code2, 
  Coffee, 
  Sparkles,
  ArrowUp,
  Mail
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Karuanae', icon: '💻' },
    { name: 'Email', href: 'mailto:emilykaruanamwang@gmail.com', icon: '✉️' },
    { name: 'Portfolio', href: '#', icon: '🌟' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <Fade direction="up" triggerOnce>
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 tech-gradient rounded-lg">
                  <Code2 size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Emily Karuana</span>
              </motion.div>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                Fullstack Developer crafting digital experiences with React.js, Python Flask, 
                and modern technologies. Turning complex challenges into elegant solutions.
              </p>
              
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Coffee size={16} />
                  <span className="text-sm">Fueled by coffee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={16} />
                  <span className="text-sm">Driven by innovation</span>
                </div>
              </div>
            </div>
          </Fade>

          {/* Quick Links */}
          <Fade direction="up" triggerOnce delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-tech-cyan transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-tech-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>

          {/* Connect */}
          <Fade direction="up" triggerOnce delay={400}>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    target={link.name === 'GitHub' ? '_blank' : '_self'}
                    rel={link.name === 'GitHub' ? 'noopener noreferrer' : ''}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.name}</span>
                    <div className="w-0 h-0.5 bg-tech-cyan group-hover:w-4 transition-all duration-300"></div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="mailto:emilykaruanamwang@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 tech-gradient rounded-xl text-white font-semibold mt-6 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                <span>Start a Project</span>
              </motion.a>
            </div>
          </Fade>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span> Crafted with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Emily Karuana</span>
            </motion.div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} All rights reserved</span>
              <span>•</span>
              <span>Built with React & Tailwind</span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 glass-effect rounded-xl hover:bg-white/10 transition-colors group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp size={20} className="text-tech-cyan group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-4 h-4 bg-tech-cyan rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-10 right-10 w-3 h-3 bg-tech-purple rounded-full opacity-50"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  );
};

export default Footer;