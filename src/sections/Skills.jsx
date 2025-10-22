// src/sections/Skills.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade, Zoom } from 'react-awesome-reveal';
import { 
  Code2, 
  Database, 
  Cloud, 
  Palette,
  Server,
  Smartphone,
  GitBranch,
  Shield
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Palette size={24} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
        { name: 'TypeScript', level: 80, icon: '🔷' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'HTML5 & CSS3', level: 98, icon: '🌐' },
        { name: 'Responsive Design', level: 95, icon: '📱' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python (Flask)', level: 88, icon: '🐍' },
        { name: 'RESTful APIs', level: 90, icon: '🔗' },
        { name: 'SQLAlchemy', level: 85, icon: '⚡' },
        { name: 'Authentication', level: 87, icon: '🔐' },
        { name: 'JWT', level: 85, icon: '🛡️' }
      ]
    },
    database: {
      title: 'Database & Cloud',
      icon: <Database size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQLite', level: 90, icon: '💾' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Firebase', level: 75, icon: '🔥' },
        { name: 'MongoDB', level: 70, icon: '🍃' }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: <Cloud size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git & GitHub', level: 92, icon: '📚' },
        { name: 'Vercel', level: 88, icon: '▲' },
        { name: 'Netlify', level: 85, icon: '🌐' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'CI/CD', level: 75, icon: '🔄' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Tech Stack
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Technologies I use to bring ideas to life
          </p>
        </Fade>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === key 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                {category.icon}
                <span>{category.title.split(' ')[0]}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-effect rounded-2xl p-6 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-white group-hover:text-tech-cyan transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-tech-green font-bold">{skill.level}%</span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech Stack Visualization */}
        <Fade direction="up" triggerOnce>
          <div className="mt-16 glass-effect rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Technology Ecosystem
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: 'React Ecosystem', tech: ['React', 'Vite', 'Tailwind'] },
                { name: 'Backend Stack', tech: ['Flask', 'Python', 'SQLAlchemy'] },
                { name: 'Database', tech: ['SQLite', 'PostgreSQL', 'Firebase'] },
                { name: 'DevOps', tech: ['Vercel', 'Netlify', 'Git'] }
              ].map((stack, index) => (
                <motion.div
                  key={stack.name}
                  className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-white mb-3">{stack.name}</h4>
                  <div className="space-y-2">
                    {stack.tech.map((tech) => (
                      <div key={tech} className="text-sm text-gray-400">
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;