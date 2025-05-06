'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="py-6 bg-[#1E293B] text-center text-[#94A3B8] relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center gap-1 text-sm md:text-base">
          © {currentYear} Gayathri. All rights are reserved <Heart className="h-4 w-4 text-red-500" />
        </p>
      </div>
    </motion.footer>
  );
}