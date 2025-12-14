// src/sections/Projects.jsx
import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Dikoras - Law Firm Platform',
      description: 'A comprehensive full-stack solution for a law firm featuring client management, case tracking, and secure document handling.',
      fullDescription: 'Developed a professional law firm platform with advanced features including client portals, case management, document automation, and secure communication channels. Implemented real-time notifications and a sophisticated admin dashboard.',
      technologies: ['React.js', 'Flask', 'SQLAlchemy', 'JWT', 'Tailwind CSS', 'WebSockets'],
      features: ['Client Portal', 'Case Management', 'Document Automation', 'Secure Messaging', 'Admin Dashboard', 'Real-time Updates'],
      status: 'Completed',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'MedSchedule - Healthcare System',
      description: 'Digital healthcare platform connecting patients with doctors through intelligent appointment scheduling and medical records management.',
      fullDescription: 'Built a comprehensive healthcare management system featuring patient-doctor matching, appointment scheduling, electronic medical records, and prescription management. Includes role-based access and telemedicine integration.',
      technologies: ['React.js', 'Python Flask', 'SQLite', 'JWT Auth', 'REST API', 'Chart.js'],
      features: ['Appointment Scheduling', 'Patient Records', 'Doctor Portal', 'Prescription Mgmt', 'Analytics Dashboard', 'Telemedicine Ready'],
      status: 'In Development',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'ArtVault - Creative Marketplace',
      description: 'A digital art gallery and marketplace platform empowering local artists to showcase and sell their work globally.',
      fullDescription: 'Created an e-commerce platform specifically for artists featuring digital galleries, commission systems, payment integration, and social features. Includes artist profiles, customer reviews, and advanced search functionality.',
      technologies: ['React.js', 'Flask', 'Firebase', 'Stripe API', 'Cloud Storage', 'WebRTC'],
      features: ['Digital Gallery', 'Payment Processing', 'Artist Profiles', 'Commission System', 'Live Chat', 'Social Features'],
      status: 'Completed',
      liveLink: '#',
      githubLink: '#',
      image: '/api/placeholder/600/400'
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Completed' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-900"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-100">
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                  <span className="text-gray-400 text-sm">Project Preview</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-gray-50 transition-all text-gray-700 font-medium"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white font-medium hover:shadow-lg transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-32 bg-white relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing my journey in building innovative digital solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl"></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-600 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-blue-50 rounded-lg text-xs text-blue-600 border border-blue-200 font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-6">
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    <span>View Project Details</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 mb-4">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;