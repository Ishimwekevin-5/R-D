
import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'NEURAL_LINK.V2',
    category: 'BIOTECH',
    description: 'Advanced brain-computer interfaces designed for sub-millisecond data transfer.',
    imageUrl: 'https://picsum.photos/seed/lab1/800/600'
  },
  {
    id: '02',
    title: 'VOID_ARCH',
    category: 'INFRASTRUCTURE',
    description: 'High-density spatial storage systems utilizing dark matter compression.',
    imageUrl: 'https://picsum.photos/seed/lab2/800/600'
  },
  {
    id: '03',
    title: 'ZENITH_OS',
    category: 'SOFTWARE',
    description: 'A sovereign operating system optimized for quantum-classical hybrid hardware.',
    imageUrl: 'https://picsum.photos/seed/lab3/800/600'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="mono text-[10px] text-white/40 tracking-widest uppercase mb-4 block">Archive 2024</span>
          <h2 className="text-4xl font-light">Laboratory <span className="italic">Outputs</span></h2>
        </div>
        <button className="mono text-[10px] tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
          VIEW_ALL_RECORDS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden bg-white/5 border border-white/10 mb-6 relative">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10 mono text-[9px]">
                {project.id} // {project.category}
              </div>
            </div>
            <h3 className="mono text-sm tracking-widest mb-2 group-hover:text-white transition-colors">{project.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
