import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Ecommerce Mobile Prototype',
      description: 'Interviewed 16 parents to uncover pain points in managing children’s clothing. Conducted a competitive audit, mapped user flows, and ran low-fidelity usability tests. Designed a fashion e-commerce app with a tailored onboarding experience for parents that personalizes shopping as children grow. Illustrated a playful brand identity for the final product.',
      image: '/src/assets/project1.png',
      link: 'https://torydeutsch.com/chickpea'
    },
    {
      id: 2,
      title: 'Microsoft Internship',
      description: 'Redesigned Microsoft’s internal Incident Routing Tool, used daily by 2K+ support engineers to resolve customer issues. Built directly in Power Apps for faster delivery and introduced a search-first experience informed by telemetry data, reducing misroutes and validated through usability testing with 80% user preference over the previous workflow.',
      image: '/src/assets/project2.png',
      link: 'https://torydeutsch.com/icm-redesign'
    },
    {
      id: 3,
      title: 'Making digital accesibility approachable for UCF faculty',
      description: 'While working with the my university\'s Center for Distributed Learning (CDL), I served as the sole UX designer on UDOIT (Universal Design Online Content Inspection Tool)—an open-source application that helps faculty identify and remediate accessibility issues directly within Canvas LMS.',
      image: '/src/assets/project3.png'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">My Projects</h1>
      
      <div className="flex flex-col space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-3/5 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ minHeight: '300px' }}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line mb-6">
                {project.description}
              </p>
              {project.link && (
                <div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    View Case Study
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
