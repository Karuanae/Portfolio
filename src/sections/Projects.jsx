// src/sections/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import { 
  ExternalLink, 
  Github, 
  Shield, 
  Calendar, 
  Palette,
  Code2,
  ArrowRight,
  X
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Dikoras - Law Firm Platform',
      description: 'A comprehensive full-stack solution for a law firm featuring client management, case tracking, and secure document handling.',
      fullDescription: 'Developed a professional law firm platform with advanced features including client portals, case management, document automation, and secure communication channels. Implemented real-time notifications and a sophisticated admin dashboard.',
      icon: <Shield className="text-blue-400" size={32} />,
      technologies: ['React.js', 'Flask', 'SQLAlchemy', 'JWT', 'Tailwind CSS', 'WebSockets'],
      features: ['Client Portal', 'Case Management', 'Document Automation', 'Secure Messaging', 'Admin Dashboard', 'Real-time Updates'],
      status: 'Completed',
      gradient: 'from-blue-500 to-cyan-500',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'MedSchedule - Healthcare System',
      description: 'Digital healthcare platform connecting patients with doctors through intelligent appointment scheduling and medical records management.',
      fullDescription: 'Built a comprehensive healthcare management system featuring patient-doctor matching, appointment scheduling, electronic medical records, and prescription management. Includes role-based access and telemedicine integration.',
      icon: <Calendar className="text-green-400" size={32} />,
      technologies: ['React.js', 'Python Flask', 'SQLite', 'JWT Auth', 'REST API', 'Chart.js'],
      features: ['Appointment Scheduling', 'Patient Records', 'Doctor Portal', 'Prescription Mgmt', 'Analytics Dashboard', 'Telemedicine Ready'],
      status: 'In Development',
      gradient: 'from-green-500 to-emerald-500',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'ArtVault - Creative Marketplace',
      description: 'A digital art gallery and marketplace platform empowering local artists to showcase and sell their work globally.',
      fullDescription: 'Created an e-commerce platform specifically for artists featuring digital galleries, commission systems, payment integration, and social features. Includes artist profiles, customer reviews, and advanced search functionality.',
      icon: <Palette className="text-purple-400" size={32} />,
      technologies: ['React.js', 'Flask', 'Firebase', 'Stripe API', 'Cloud Storage', 'WebRTC'],
      features: ['Digital Gallery', 'Payment Processing', 'Artist Profiles', 'Commission System', 'Live Chat', 'Social Features'],
      status: 'Completed',
      gradient: 'from-purple-500 to-pink-500',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-4 bg-gradient-to-r ${project.gradient}`}></div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              {project.icon}
              <div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 mb-6">
                <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                  <Code2 size={48} className="text-gray-500" />
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex space-x-4">
                <motion.a
                  href={project.githubLink}
                  className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  className="flex items-center space-x-2 px-6 py-3 tech-gradient rounded-xl text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing my journey in building innovative digital solutions
            </p>
          </div>
        </Fade>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-tech-cyan/50 transition-all duration-500 h-full flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {project.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="p-6 border-t border-gray-700">
                  <motion.div 
                    className="flex items-center justify-between text-tech-cyan"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">View Project Details</span>
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <Fade direction="up" triggerOnce>
          <div className="text-center mt-16">
            <motion.div
              className="inline-flex items-center space-x-4 px-8 py-4 glass-effect rounded-2xl border border-tech-cyan/20"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="text-tech-cyan" size={24} />
              <div className="text-left">
                <p className="text-white font-semibold">Interested in working together?</p>
                <p className="text-gray-400 text-sm">Let's build something amazing!</p>
              </div>
              <motion.a
                href="#contact"
                className="px-6 py-2 tech-gradient rounded-xl text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </Fade>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;