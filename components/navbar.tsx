'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background based on scroll position
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));
      
      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 200 && rect.bottom >= 200;
          
          if (isVisible) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
          isScrolled ? 'bg-[#0F172A]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/#home" className="text-2xl font-bold text-[#F8FAFC]">
            Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <Link 
                key={section.id}
                href={`/#${section.id}`}
                className={activeSection === section.id ? 'active-nav-link' : 'nav-link'}
              >
                {section.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-[#F8FAFC] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-[#0F172A]/95 z-40 pt-24 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-6 items-center">
            {sections.map((section) => (
              <Link 
                key={section.id}
                href={`/#${section.id}`}
                className={`text-xl ${activeSection === section.id ? 'active-nav-link' : 'nav-link'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {section.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}