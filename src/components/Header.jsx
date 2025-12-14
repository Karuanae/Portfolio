// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">EK</span>
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Emily Karuana
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 font-medium text-sm transition-all duration-300 rounded-lg group ${
                  scrolled 
                    ? activeSection === item.section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : activeSection === item.section
                      ? 'text-white bg-white/10'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
                {item.section === 'services' && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full animate-pulse">
                    New
                  </span>
                )}
                <span className={`absolute bottom-1 left-5 right-5 h-0.5 rounded-full transition-transform duration-300 ${
                  activeSection === item.section 
                    ? 'scale-x-100 bg-gradient-to-r from-blue-600 to-indigo-600' 
                    : 'scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-blue-400 to-indigo-400'
                }`}></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium ${
                    activeSection === item.section ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.section === 'services' && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full">
                      New
                    </span>
                  )}
                </a>
              ))}
              <div className="px-6 py-3 border-t border-gray-100">
                <a
                  href="#contact"
                  className="block text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;