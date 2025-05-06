'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, FileText } from 'lucide-react';

export function About() {
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
    <div className="w-full max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-6 md:mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About <span className="text-[#38BDF8]">Me</span>
      </motion.h2>
      
      <div className="w-full">
        <motion.div 
          className="mb-8"
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Get to know me</h3>
          <p className="text-[#94A3B8] mb-4">
          I'm a passionate AI and Data Science enthusiast with a strong foundation in machine learning, data visualization, and web technologies. I enjoy building smart, user-focused solutions that turn data into real-world impact.
          </p>
          <p className="text-[#94A3B8] mb-6">
          I’ve worked on diverse projects ranging from predictive analytics to dynamic dashboards. I'm dedicated to writing clean, efficient code and constantly learning new trends in technology and AI innovation.
          </p>
          <a 
            href="/resume/gayathri-cv.pdf" 
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-outline inline-flex items-center gap-2 hover:scale-105"
          >
            <FileText size={20} />
            Resume
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="card-neumorphic"
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <div className="text-[#38BDF8] mb-4 flex justify-center">
              <Briefcase size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">Experience</h4>
            <ul className="text-[#94A3B8] text-sm space-y-2">
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">ML & Robotics Intern</p>
                <p>ATLANWA • 2024-2025</p>
              </li>
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">App Developer - CivicPulse</p>
                <p>ACM-CEG • 2025</p>
              </li>
              {/* <li>
                <p className="font-medium">Junior Developer</p>
                <p>WebStudio • 2017-2018</p>
              </li> */}
            </ul>
          </motion.div>
          
          <motion.div 
            className="card-neumorphic"
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <div className="text-[#38BDF8] mb-4 flex justify-center">
              <GraduationCap size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">Education</h4>
            <ul className="text-[#94A3B8] text-sm space-y-2">
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">B.Tech in Artificial Intelligence and Data Science</p>
                <p>Velammal Engineering College </p>
                <p>2022–2026</p>
                <p>CGPA: 8.45</p>
              </li>
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">HSC – Computer Science Stream</p>
                <p>V.S.K.D Matriculation Higher Secondary School </p>
                <p>2020–2022</p>
                <p>Percentage: 89.5%</p>
              </li>
              {/* <li>
                <p className="font-medium">Web Development Bootcamp</p>
                <p>Code Academy • 2016</p>
              </li> */}
            </ul>
          </motion.div>
          
          <motion.div 
            className="card-neumorphic"
            custom={4}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <div className="text-[#38BDF8] mb-4 flex justify-center">
              <Code size={40} />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">Projects</h4>
            <ul className="text-[#94A3B8] text-sm space-y-2">
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">CivicPulse - Citizen Feedback Platform</p>
                <p>Web Apllication using HTL, CSS, JS, and Firebase Realtime Database</p>
              </li>
              <li className="pb-2 border-b border-[#38BDF8]/10">
                <p className="font-medium">Underground Water Quality Prediction</p>
                <p>Machine Learning Project using Python, Scikit-Learn, and IoT Integration</p>
              </li>
              <li>
                <p className="font-medium">HR Management Dashboard</p>
                <p>Full-stack Flask, HTML, CSS, JavaScript, MySQL application</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}