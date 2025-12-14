// src/sections/Hero.jsx
import React from 'react';
import { Github, Mail, Download, ArrowRight, Sparkles, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-white py-32 px-6 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white rounded-full shadow-sm border border-gray-100">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 tracking-wide">
                Fullstack Developer
              </span>
              <Code2 size={16} className="text-blue-600" />
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.95] tracking-tight">
                Emily
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Karuana
                </span>
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent"></div>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                  Crafting exceptional digital experiences
                </p>
              </div>

              <p className="text-lg text-gray-900 leading-relaxed max-w-lg">
                Specializing in React, Python Flask, and modern web technologies. 
                Transforming ideas into elegant, scalable solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/public/CV.pdf"
                download
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm hover:shadow transition-all duration-300"
              >
                <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-sm text-gray-500 font-medium">Connect:</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Karuanae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-sm"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href="mailto:emilykaruanamwangi@gmail.com"
                  className="p-3 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-sm"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant Image Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Card with Premium Design */}
              <div className="relative">
                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Main Content Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25"></div>
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                      <img 
                        src="/Profile1.jpg" 
                        alt="Emily Karuana"
                        className="w-full h-full object-cover"
                      />
                    </div>
                 
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100/50">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1+</div>
                      <div className="text-sm text-gray-600 mt-1 font-medium">Years Exp.</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100/50">
                      <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                      <div className="text-sm text-gray-600 mt-1 font-medium">Projects</div>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="mt-6 flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">Available for Projects</p>
                      <p className="text-xs text-gray-600 mt-0.5">Starting from next month</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['React', 'Flask', 'Python', 'Tailwind', 'SQL'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;