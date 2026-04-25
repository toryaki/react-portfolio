import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-8 py-16 min-h-[80vh]"
    >
      <div className="w-full md:w-1/2 text-left mb-12 md:mb-0 md:pr-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-gray-900">Tory Deutsch</h1>
        <p className="text-xl font-light text-gray-600">Designing with precision and care.</p>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-end">
        <img 
          src={heroImg} 
          alt="Tory Deutsch Hero" 
          className="w-48 md:w-64 h-auto object-contain rounded-2xl"
        />
      </div>
    </motion.div>
  );
}

export default Home;
