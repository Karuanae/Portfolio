// src/components/Footer.jsx
import React from 'react';

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
    { name: 'GitHub', href: 'https://github.com/Karuanae' },
    { name: 'Email', href: 'mailto:emilykaruanamwang@gmail.com' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Emily Karuana
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Fullstack Developer specializing in React.js and Python Flask. 
              Building elegant, scalable solutions for modern web applications.
            </p>

            <a
              href="mailto:emilykaruanamwang@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Start a Project
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium inline-block hover:translate-x-2 transform transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === 'GitHub' ? '_blank' : '_self'}
                  rel={link.name === 'GitHub' ? 'noopener noreferrer' : ''}
                  className="block p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '10+', label: 'Projects' },
            { value: '8+', label: 'Technologies' },
            { value: '2+', label: 'Years Experience' },
            { value: '100%', label: 'Dedication' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Emily Karuana. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Built with React & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;