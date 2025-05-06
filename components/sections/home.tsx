'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, ChevronDown } from 'lucide-react';
import { TypingEffect } from '@/components/typing-effect';

export function Home() {
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Full Stack Developer'];
  const profileImageUrl = "/images/WhatsApp Image 2025-04-20 at 19.29.42_027d0a4f.jpg";
  
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20">
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-[#38BDF8]">Gayathri</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#94A3B8] mb-6 h-12">
          <TypingEffect texts={roles} />
        </h2>
        
        <p className="text-sm md:text-base mb-10 text-[#94A3B8] max-w-lg mx-auto md:mx-0">
          Passionate about creating beautiful, functional, and user-centered digital experiences.
          Dedicated to crafting clean code and intuitive designs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start mb-6">
          <button onClick={scrollToPortfolio} className="btn-primary w-full sm:w-auto">
            Projects
          </button>
          <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto">
            Contact Me
          </button>
        </div>
        
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="GitHub"
          >
            <GitHub size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-social"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#38BDF8] shadow-[0_0_20px_#38BDF8]">
          <Image 
            src={profileImageUrl}
            alt="Profile"
            fill
            sizes="(max-width: 768px) 16rem, 20rem"
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ChevronDown 
          size={32} 
          className="text-[#38BDF8] animate-bounce cursor-pointer" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </motion.div>
    </div>
  );
}