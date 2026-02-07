
import React from 'react';
import { Menu, Search, FlaskConical } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FlaskConical className="w-6 h-6 text-white" />
          <span className="mono text-sm tracking-widest font-bold">AREA_LABS.V04</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 mono text-[10px] tracking-widest text-white/50">
          <a href="#" className="hover:text-white transition-colors">RESEARCH</a>
          <a href="#" className="hover:text-white transition-colors">CAPABILITIES</a>
          <a href="#" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#" className="hover:text-white transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/50 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white/50 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
