// src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Calendar, ArrowDown, Sparkles, Download, Code2, Zap } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-tech-cyan rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-tech-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-72 h-72 bg-tech-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.12, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            {/* Professional Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 px-4 py-3 glass-effect rounded-2xl border border-tech-purple/30"
            >
              {/* <div className="p-2 bg-tech-purple/20 rounded-lg">
                <Code2 size={18} className="text-tech-purple" />
              </div> */}
              {/* <div>
                <p className="text-sm font-medium text-tech-cyan">Fullstack Developer</p>
                <p className="text-xs text-gray-400">React.js • Python Flask • Modern Stack</p>
              </div> */}
            </motion.div>

            {/* Main Heading with Cool Font */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-tech-cyan via-tech-purple to-tech-blue bg-clip-text text-transparent">
                  EMILY
                </span>
                <br />
                <span className="bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent">
                  KARUANA
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-0.5 tech-gradient rounded-full"></div>
                <Slide direction="right" triggerOnce>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                    Creative Problem Solver
                  </h2>
                </Slide>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Crafting <span className="text-tech-cyan font-semibold">digital experiences</span> with 
                React.js, Python Flask, and cutting-edge technologies. 
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Transforming complex challenges into <span className="text-tech-purple font-semibold">elegant solutions</span> 
                that drive real impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 tech-gradient rounded-2xl text-white font-semibold flex items-center justify-center space-x-3 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown size={20} className="relative z-10 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue to-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="/public/CV.pdf"
                download
                className="group px-8 py-4 glass-effect rounded-2xl text-gray-300 font-semibold flex items-center justify-center space-x-3 border border-tech-cyan/30 hover:border-tech-cyan/60 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} className="text-tech-cyan" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <span className="text-gray-400 text-sm font-medium">Follow me:</span>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Karuanae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-xl hover:bg-tech-cyan/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} className="text-gray-400 group-hover:text-tech-cyan transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:emilykaruanamwangi@gmail.com"
                  className="p-3 glass-effect rounded-xl hover:bg-tech-purple/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} className="text-gray-400 group-hover:text-tech-purple transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image & Availability */}
          <div className="relative">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end mb-8"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background Glow */}
                  <div className="absolute inset-0 tech-gradient rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                  
                  {/* Image Frame */}
                  <div className="absolute inset-4 tech-gradient rounded-2xl p-1">
                    <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative">
                      {/* Your Image - Replace with your actual image */}
                      {/* <div className="w-full h-full bg-gradient-to-br from-tech-cyan/20 to-tech-purple/20 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="w-24 h-24 bg-tech-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-white">EK</span>
                          </div>
                          <p className="text-sm">Your Photo Here</p>
                        </div>
                      </div> */}
                      
                      {/* Replace the above div with your actual image: */}
                      <img 
                        src="/public/Profile.jpg" 
                        alt="Emily Karuana"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 tech-gradient rounded-2xl flex items-center justify-center"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={24} className="text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-tech-cyan/30"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="w-6 h-6 tech-gradient rounded-full"></div>
                  </motion.div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  className="absolute bottom-8 -right-4 glass-effect rounded-2xl p-4 border border-tech-green/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech-green">1+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                </motion.div>

                {/* Projects Badge */}
                <motion.div
                  className="absolute top-8 -left-4 glass-effect rounded-2xl p-4 border border-tech-purple/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tech-purple">10+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Availability Badge - Now positioned below the image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="inline-flex items-center space-x-4 px-6 py-4 glass-effect rounded-2xl border border-tech-green/30 hover:border-tech-green/50 transition-all duration-300 group cursor-pointer max-w-md w-full">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="relative">
                    <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-tech-green rounded-full animate-ping"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-tech-green font-semibold text-sm">Available for Projects</p>
                    <p className="text-gray-400 text-xs">Starting from next month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap size={16} className="text-tech-green group-hover:scale-110 transition-transform" />
                  <Calendar size={16} className="text-tech-cyan group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex justify-center lg:justify-end mt-6"
            >
              <div className="flex flex-wrap gap-2 justify-center max-w-md">
                {['React', 'Flask', 'Python', 'Tailwind', 'SQL'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 glass-effect rounded-lg text-xs text-gray-400 border border-white/10 hover:border-tech-cyan/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.7 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-tech-cyan transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 tech-gradient rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;