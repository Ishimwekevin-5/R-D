
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="mono text-[10px] font-bold tracking-[0.5em] text-white">AREA LABORATORIES</span>
          <span className="mono text-[8px] text-white/30 uppercase">Experimental Systems Division // Tokyo - Berlin - SF</span>
        </div>
        
        <div className="flex gap-12 mono text-[10px] text-white/40">
          <div className="flex flex-col gap-1">
            <span className="text-white">SOCIAL</span>
            <a href="#" className="hover:text-white transition-colors">X_TWITTER</a>
            <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white">LEGAL</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS_OF_RESEARCH</a>
          </div>
        </div>

        <div className="text-right">
          <span className="mono text-[9px] text-white/20">ESTABLISHED_2018.V01</span>
          <div className="mt-2 text-[8px] mono text-white/40">
            SYSTEM_STATUS: <span className="text-green-500">OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
