'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, skills } from '@/lib/data';  // Assuming you already have projects and skills in data
import Image from 'next/image';
import { ExternalLink, X } from 'lucide-react';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  const handleModalClose = () => {
    setSelectedCertificate(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.1 }
    })
  };
  
  const staggerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const modalVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalContentVariant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Certificates data array
  const certificates = [
    {
      id: 1,
      image: "/certificates/coursera%20ai%20essentials_page-0001.jpg",
      title: "Google AI Essentials",
      organization: "Google",
      date: "February 2025"
    },
    {
      id: 2,
      image:"/certificates/ACM-CEG.jpg",
      title: "CODHer'25",
      organization: "CEG",
      date: "March 2025"
    },
    {
      id: 2,
      image:"/certificates/forage_page-0001.jpg",
      title: "Data Visualization",
      organization: "Forage",
      date: "November 2024"
    },
    {
      id: 3,
      image: "/certificates/hp life.jpg",
      title: "HP Life Certificate",
      organization: "HP Life",
      date: "December 2025"
    },
    {
      id: 4,
      image: "/certificates/TCS ion certificate_page-0001.jpg",
      title: "TCSion Certificate",
      organization: "TCSion",
      date: "December 2024"
    },
    {
      id: 5,
      image: "/certificates/contentstack certificate_page-0001.jpg",
      title: "Contentstack Certificate",
      organization: "Contentstack",
      date: "October 2024"
    }
  ];
  const projects = [
  {
    id: 1,
    image: "/projects/civicpulse.png", // Add this image to your public/projects folder
    title: "Civic Pulse",
    description: "A community feedback portal with sentiment analysis and location-based insights. Built using MERN stack and deployed on Render.",
    link: "https://github.com/mgayathri3/civic_pulse"
  },
  {
    id: 2,
    image: "/projects/hrdashboard.png", // Add to public folder
    title: "HR Management Dashboard",
    description: "An interactive HR analytics dashboard built using Python. Offers insights on employee attrition, satisfaction, and workforce distribution.",
    link: "https://github.com/mgayathri3/HR_management-Dashboard"
  },
  {
    id: 3,
    image: "/projects/bot.png", // Add image
    title: "WhatsApp News Bot",
    description: "A Python-based news bot that scrapes top headlines, summarizes them with OpenAI API, and delivers updates directly to WhatsApp.",
    link: "https://github.com/mgayathri3/Automated-WhatsApp-News-Delivery-Bot-"
  },
  {
    id: 4,
    image: "/projects/securesign.png", // Add image
    title: "SecureSignIn",
    description: "A full-stack authentication system with dual database architecture (MySQL & MongoDB), role-based access, and a modern React UI.",
    link: "https://securesignin-sn2o.onrender.com/"
  },
  {
    id: 5,
    image: "/projects/portfolio.png", // Add this image to your public/projects folder
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing my projects, certificates, and tech stack using Next.js, Tailwind CSS, and Framer Motion.",
    link: "https://github.com/mgayathri3/Portfolio" // Or your actual repo link
  }
];


  return (
    <div className="w-full">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Portfolio <span className="text-[#38BDF8]">Showcase</span>
      </motion.h2>
      
      <p className="text-[#94A3B8] text-center mb-10 max-w-2xl mx-auto">
        Explore my journey through projects, certifications, and technical expertise. Each section
        represents a milestone in my continuous learning path.
      </p>
      
      <motion.div 
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#1E293B]/80 p-1 rounded-lg inline-flex">
          <button 
            className={`px-6 py-3 rounded-md text-sm md:text-base transition-all duration-300 ${
              activeTab === 'projects' ? 'tab-active' : 'text-[#F8FAFC] hover:text-[#38BDF8]'
            }`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`px-6 py-3 rounded-md text-sm md:text-base transition-all duration-300 ${
              activeTab === 'certificates' ? 'tab-active' : 'text-[#F8FAFC] hover:text-[#38BDF8]'
            }`}
            onClick={() => setActiveTab('certificates')}
          >
            Certificates
          </button>
          <button 
            className={`px-6 py-3 rounded-md text-sm md:text-base transition-all duration-300 ${
              activeTab === 'techstack' ? 'tab-active' : 'text-[#F8FAFC] hover:text-[#38BDF8]'
            }`}
            onClick={() => setActiveTab('techstack')}
          >
            Tech Stack
          </button>
        </div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {activeTab === 'projects' && (
          <motion.div 
            key="projects"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card group"
                variants={itemVariant}
              >
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#94A3B8] text-sm mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {activeTab === 'certificates' && (
          <motion.div 
            key="certificates"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            {certificates.map((certificate) => (
              <motion.div 
                key={certificate.id}
                className="project-card group"
                variants={itemVariant}
              >
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={certificate.image} 
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedCertificate(certificate.image)}
                      className="btn-primary transform scale-90 group-hover:scale-100 transition-transform duration-300"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-[#94A3B8] mb-1">{certificate.organization}</p>
                  <p className="text-[#94A3B8] text-sm">{certificate.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {activeTab === 'techstack' && (
          <motion.div 
            key="techstack"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={staggerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div 
                key={skill.id}
                className="skill-card"
                variants={itemVariant}
              >
                <div className="w-12 h-12 relative mb-2">
                  <Image 
                    src={skill.logo} 
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#00000080] flex items-center justify-center p-4"
            onClick={handleModalClick}
          >
            <motion.div
              variants={modalContentVariant}
              className="relative w-full max-w-[700px] bg-[#1E293B] rounded-xl overflow-hidden 
                shadow-lg"
            >
              <div className="relative w-full p-5">
                <div className="relative w-full" style={{ height: '450px' }}>
                  <Image
                    src={selectedCertificate}
                    alt="Certificate Preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <button
                  onClick={handleModalClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#1E293B] text-[#F8FAFC] 
                    hover:bg-[#38BDF8] transition-colors duration-300"
                  aria-label="Close preview"
                >
                  <X size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
