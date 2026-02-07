
import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="scanning-line" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      
      {/* Decorative dots at grid intersections */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
    </div>
  );
};

export default GridBackground;
