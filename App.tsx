
import React from 'react';
import Navigation from './components/Navigation';
import GridBackground from './components/GridBackground';
import ResearchCore from './components/ResearchCore';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center z-10"
          >
            <span className="mono text-[11px] tracking-[0.8em] text-white/30 mb-6 block uppercase">Aesthetica Techne Research</span>
            <h1 className="text-6xl md:text-9xl font-light tracking-tighter mb-8 flex flex-col items-center">
              <span>AREA</span>
              <span className="italic text-white/20 -mt-4 md:-mt-8">LABORATORIES</span>
            </h1>
            <p className="mono text-[10px] text-white/40 max-w-xl mx-auto uppercase leading-[2.5] tracking-widest">
              Synthesizing the intersection of high-fidelity computational aesthetics and human-centric experimental design.
            </p>
          </motion.div>

          {/* Abstract Visual Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/[0.03] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/[0.05] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-white/[0.08] rounded-full pointer-events-none" />
          
          <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-bounce opacity-20">
            <span className="mono text-[8px] tracking-[0.5em] uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-white" />
          </div>
        </section>

        {/* AI Research Section */}
        <ResearchCore />

        {/* Capabilities Section - Micro Bento Layout */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-white/5 p-12 border border-white/10 flex flex-col justify-end min-h-[400px]">
              <h3 className="text-4xl font-light mb-6">Generative <span className="italic">Systems.</span></h3>
              <p className="text-sm text-white/50 max-w-sm leading-relaxed">Developing autonomous pipelines for high-fidelity content generation across media types.</p>
            </div>
            <div className="bg-[#0f0f0f] p-8 border border-white/10 flex flex-col justify-between">
              <span className="mono text-[10px] text-white/30">CAP_01</span>
              <p className="text-lg">Spatial Computing Architecture</p>
            </div>
            <div className="bg-white p-8 flex flex-col justify-between">
              <span className="mono text-[10px] text-black/30 font-bold">CAP_02</span>
              <p className="text-lg text-black font-medium">Human-AI Interaction Paradigms</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-between">
              <span className="mono text-[10px] text-white/30">CAP_03</span>
              <p className="text-lg">Biometric Feedback Loops</p>
            </div>
            <div className="md:col-span-3 bg-[#0a0a0a] p-12 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-light mb-4">Laboratory Philosophy</h3>
                <p className="text-sm text-white/50">We believe in the friction between the digital and the biological, finding beauty in the glitch and precision in the unknown.</p>
              </div>
              <button className="bg-white text-black px-10 py-4 mono text-[10px] font-bold whitespace-nowrap">JOIN_RESEARCH_PHASE</button>
            </div>
          </div>
        </section>

        <Projects />

        {/* Contact/CTA */}
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-light mb-12">Building the <span className="italic text-white/40">unseen.</span></h2>
            <p className="text-white/60 mb-12 text-lg">Inquiries regarding research collaborations and capability deployment are handled via our central node.</p>
            <a href="mailto:access@area-labs.v4" className="text-3xl md:text-4xl font-light border-b border-white/20 pb-2 hover:text-white/40 transition-colors">
              access@area-labs.com
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
