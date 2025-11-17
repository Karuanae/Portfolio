// src/sections/Skills.jsx
import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Python (Flask)', level: 88 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'SQLAlchemy', level: 85 },
        { name: 'Authentication', level: 87 },
        { name: 'JWT', level: 85 }
      ]
    },
    database: {
      title: 'Database & Cloud',
      skills: [
        { name: 'SQLite', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Vercel', level: 88 },
        { name: 'Netlify', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  };

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tech Stack &
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap gap-3 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                activeCategory === key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:scale-105'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border-2 border-blue-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Technology Ecosystem
            </h3>
            <p className="text-gray-600">Complete stack for modern web development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Frontend Stack', 
                tech: ['React.js', 'Vite', 'Tailwind CSS']
              },
              { 
                name: 'Backend Stack', 
                tech: ['Flask', 'Python', 'SQLAlchemy']
              },
              { 
                name: 'Database Layer', 
                tech: ['SQLite', 'PostgreSQL', 'Firebase']
              },
              { 
                name: 'DevOps Tools', 
                tech: ['Vercel', 'Netlify', 'Git']
              }
            ].map((stack) => (
              <div
                key={stack.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="inline-block px-3 py-1 bg-blue-100 rounded-lg mb-4">
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                    {stack.name}
                  </span>
                </div>
                <ul className="space-y-2">
                  {stack.tech.map((tech) => (
                    <li key={tech} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Languages', value: '5+' },
            { label: 'Frameworks', value: '8+' },
            { label: 'Tools', value: '10+' },
            { label: 'Projects', value: '10+' }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;