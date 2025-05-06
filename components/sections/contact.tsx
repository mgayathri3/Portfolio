'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Mail, Send, Check } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: custom * 0.2
      }
    })
  };

  return (
    <div className="w-full">
      <motion.h2 
        className="text-3xl font-bold mb-6 md:mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact <span className="text-[#38BDF8]">Me</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div 
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
          className="card-neumorphic flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-[#94A3B8] mb-8">
              Feel free to contact me for any project or collaboration. I'm
              always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="btn-social">
                <Mail size={20} className="text-[#38BDF8]" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:gayathri.m352004@gmail.com" className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
                gayathri.m352004@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="btn-social">
                <GitHub size={20} className="text-[#38BDF8]" />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <a 
                  href="https://github.com/mgayathri3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  github.com/mgayathri3
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="btn-social">
                <Linkedin size={20} className="text-[#38BDF8]" />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/gayathrim352004/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                >
                  linkedin.com/in/gayathrim352004
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="card-neumorphic">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-16 h-16 bg-[#38BDF8]/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-[#38BDF8]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-[#94A3B8] text-center">
                  Thank you for your message. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-[#F8FAFC] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}