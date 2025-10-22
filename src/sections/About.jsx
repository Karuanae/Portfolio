// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Slide, Fade } from 'react-awesome-reveal';
import { Code2, GraduationCap, Briefcase, Atom } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3', label: 'Years Experience' },
    { number: '5', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Fade direction="up" triggerOnce>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
        </Fade>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Fade direction="left" triggerOnce cascade>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate <span className="text-tech-cyan font-semibold">Full-Stack Developer</span> 
                  trained at Moringa School, specializing in modern web technologies and 
                  creating exceptional digital experiences.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  My background in <span className="text-tech-green font-semibold">Industrial Chemistry</span> 
                  has equipped me with unparalleled analytical thinking and problem-solving 
                  skills, which I leverage to build robust, scalable applications.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  I believe in the power of technology to transform ideas into reality, 
                  and I'm committed to writing clean, efficient code that makes a difference.
                </p>
              </div>
            </Fade>

            {/* Stats */}
            <Slide direction="up" triggerOnce>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 glass-effect rounded-2xl"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Slide>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              className="glass-effect rounded-2xl p-6 border-l-4 border-tech-cyan"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 tech-gradient rounded-lg mr-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-tech-green pl-4">
                  <h4 className="font-semibold text-white">Fullstack Web Development</h4>
                  <p className="text-tech-cyan">Moringa School</p>
                </div>
                <div className="border-l-2 border-tech-blue pl-4">
                  <h4 className="font-semibold text-white">Software Engineering</h4>
                  <p className="text-tech-cyan">2025</p>
                </div>
                <div className="border-l-2 border-tech-purple pl-4">
                  <h4 className="font-semibold text-white">BSc Industrial Chemistry</h4>
                  <p className="text-tech-cyan">Jomo Kenyatta University</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="glass-effect rounded-2xl p-6 border-l-4 border-tech-purple"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 tech-gradient-reverse rounded-lg mr-4">
                  <Briefcase size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Freelance Full-Stack Developer</h4>
                <p className="text-gray-400">
                  Crafting modern, responsive full-stack applications using cutting-edge 
                  technologies like React.js, Flask, and cloud platforms.
                </p>
              </div>
            </motion.div>

            {/* Unique Value Card */}
            <motion.div
              className="glass-effect rounded-2xl p-6 border-l-4 border-tech-green"
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-tech-green rounded-lg mr-4">
                  <Atom size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Unique Perspective</h3>
              </div>
              <p className="text-gray-400">
                Combining scientific methodology from Industrial Chemistry with 
                creative problem-solving in tech to deliver innovative solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;