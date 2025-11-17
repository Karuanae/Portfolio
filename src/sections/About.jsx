// src/sections/About.jsx
import React from 'react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '1+', label: 'Years Experience' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-32 bg-white relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the future,
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              one line at a time
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                I'm a passionate Full-Stack Developer trained at Moringa School, 
                specializing in modern web technologies and creating exceptional 
                digital experiences that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My background in Industrial Chemistry has equipped me with strong 
                analytical thinking and problem-solving skills, which I leverage to 
                build robust, scalable applications that stand the test of time.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in the power of technology to transform ideas into reality, 
                and I'm committed to writing clean, efficient code that makes a 
                meaningful impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Education */}
          <div>
            {/* Education Section */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg mb-4">
                  <span className="text-sm font-semibold text-blue-700">Education</span>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-200 pb-2">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Fullstack Web Development
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">Moringa School</p>
                  <p className="text-sm text-gray-500 mb-2">2024 - 2025</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive training in modern web technologies including React, 
                    Python Flask, databases, and full-stack architecture.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-indigo-200 pb-2">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Software Engineering
                  </h4>
                  <p className="text-indigo-600 font-medium mb-2">Advanced Track</p>
                  <p className="text-sm text-gray-500 mb-2">2025</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Advanced software development principles, design patterns, 
                    and scalable system architecture.
                  </p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-purple-600 rounded-full"></div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    BSc Industrial Chemistry
                  </h4>
                  <p className="text-purple-600 font-medium mb-2">
                    Jomo Kenyatta University
                  </p>
                  <p className="text-sm text-gray-500 mb-2">Graduated</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Strong foundation in analytical thinking, problem-solving, 
                    and scientific methodology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Value Section - Below Main Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Experience Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-7 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="mb-5">
              <div className="inline-block px-4 py-2 bg-white rounded-lg mb-3">
                <span className="text-sm font-semibold text-indigo-700">Experience</span>
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                Freelance Full-Stack Developer
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                Crafting modern, responsive full-stack applications using 
                cutting-edge technologies like React.js, Flask, and cloud platforms.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span>Delivered 10+ production-ready web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span>Focused on clean, maintainable code and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span>Collaborated with clients to bring their visions to life</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Unique Value Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-7 border-2 border-green-100 hover:border-green-200 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="mb-5">
              <div className="inline-block px-4 py-2 bg-white rounded-lg mb-3">
                <span className="text-sm font-semibold text-green-700">Unique Perspective</span>
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">
                Science Meets Technology
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                Combining scientific methodology from Industrial Chemistry with 
                creative problem-solving in tech to deliver innovative solutions.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">•</span>
                  <span>Data-driven approach to problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">•</span>
                  <span>Rigorous testing and quality assurance mindset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">•</span>
                  <span>Analytical thinking applied to code architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <p className="text-base text-gray-700 mb-3">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;