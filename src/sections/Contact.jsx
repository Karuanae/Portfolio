// src/sections/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import { 
  Mail, 
  Phone, 
  Github, 
  MapPin, 
  Send,
  MessageCircle,
  Calendar,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-tech-cyan" size={24} />,
      title: 'Email',
      value: 'emilykaruanamwang@gmail.com',
      link: 'mailto:emilykaruanamwang@gmail.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="text-tech-green" size={24} />,
      title: 'Phone',
      value: '+254 725 990 958',
      link: 'tel:+254725990958',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Github className="text-tech-purple" size={24} />,
      title: 'GitHub',
      value: '@Karuanae',
      link: 'https://github.com/Karuanae',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="text-tech-blue" size={24} />,
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-tech-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </Fade>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="mr-3 text-tech-cyan" size={28} />
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you have a specific idea in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  variants={itemVariants}
                  className="group p-6 glass-effect rounded-2xl border border-gray-700 hover:border-tech-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  target={method.title === 'GitHub' ? '_blank' : '_self'}
                  rel={method.title === 'GitHub' ? 'noopener noreferrer' : ''}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-tech-cyan transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {method.value}
                      </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${method.color}`}></div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability & Reference */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="p-6 tech-gradient rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="text-white" size={24} />
                  <h4 className="font-bold text-white">Current Availability</h4>
                </div>
                <p className="text-white/90">
                  Available for new projects starting next month. Let's schedule a call to discuss your requirements!
                </p>
              </div>

              <div className="p-6 glass-effect rounded-2xl border border-tech-green/20">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <Calendar className="mr-2 text-tech-green" size={20} />
                  Professional Reference
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300 font-medium">Peter Mwangi</p>
                  <p className="text-gray-400">Dikoras Limited</p>
                  <p className="text-gray-400">+254 725 086009</p>
                  <p className="text-gray-400">petermwangi@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-effect rounded-3xl p-8 border border-gray-700">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-tech-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-tech-green" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-tech-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-tech-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-tech-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Project discussion"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-tech-cyan focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project, timeline, and requirements..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full tech-gradient py-4 px-6 rounded-xl text-white font-semibold flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;