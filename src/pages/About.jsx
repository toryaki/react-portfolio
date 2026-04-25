import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900">About Me</h1>
      
      <div className="bg-white p-8 rounded-2xl border border-gray-100 leading-relaxed text-gray-700 text-lg space-y-6">
        <p>
          Im a third-year student at the University of Central Florida, studying Digital Media with a focus on Web & Social Platforms. 
          I have always been passionate about art and design but often wondered how to implement it. Upon starting at my university, 
          I found myself with a growing interest in technology and digital experiences. 
        </p>
        <p>
          My journey has led me to a a deep passion in exploring the role of design in tech, and its significance to so many people 
          navigating today’s digitized world.
        </p>
        <p>
          Through personal projects and a deep excitement to learn, I aim to craft intuitive user experiences that blend beauty with purpose.
        </p>
        
        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {['UX/UI Design', 'Figma', 'Prototyping', 'User Research', 'React.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'].map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
