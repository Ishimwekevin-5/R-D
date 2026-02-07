
import React, { useState } from 'react';
import { generateLabReport } from '../services/gemini';
import { LabReport } from '../types';
import { Loader2, Terminal, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ResearchCore: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<LabReport | null>(null);

  const handleSynthesize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await generateLabReport(input);
      setReport(result);
    } catch (error) {
      console.error("Synthesis failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Input */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-white/30 mono text-xs uppercase tracking-tighter">
            <Terminal className="w-4 h-4" />
            <span>Research Core Access Point</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Synthesize <span className="text-white/40 italic">New Realities.</span>
          </h2>
          <p className="text-white/60 mb-10 max-w-md leading-relaxed">
            Our autonomous research units use large language neural networks to simulate 
            experimental outcomes across multiple theoretical dimensions.
          </p>

          <form onSubmit={handleSynthesize} className="relative group">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER RESEARCH SUBJECT..."
              className="w-full bg-white/5 border border-white/10 rounded-none p-6 mono text-sm focus:outline-none focus:border-white/30 transition-all placeholder:text-white/20"
            />
            <button 
              disabled={loading}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 mono text-xs font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'SYNTHESIZE'}
            </button>
          </form>
          
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="border-l border-white/20 pl-4 py-2">
              <span className="block mono text-[10px] text-white/40 mb-1">NETWORK_LATENCY</span>
              <span className="mono text-xs">24.5ms</span>
            </div>
            <div className="border-l border-white/20 pl-4 py-2">
              <span className="block mono text-[10px] text-white/40 mb-1">CORE_UPTIME</span>
              <span className="mono text-xs">99.98%</span>
            </div>
          </div>
        </div>

        {/* Right Column: Results Display */}
        <div className="lg:col-span-7">
          <div className="min-h-[500px] bg-white/[0.02] border border-white/10 relative overflow-hidden flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center"
                >
                  <Loader2 className="w-12 h-12 animate-spin mb-4 text-white/20" />
                  <p className="mono text-[10px] tracking-widest animate-pulse">EXTRACTING DATA CHUNKS...</p>
                </motion.div>
              ) : report ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full space-y-8"
                >
                  <div className="flex justify-between items-start border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-2xl font-bold uppercase mb-1">{report.subject}</h3>
                      <p className="mono text-[10px] text-white/40 uppercase">ID: {report.id} / TS: {report.timestamp}</p>
                    </div>
                    <div className="bg-white/5 px-3 py-1 mono text-[10px] border border-white/10">
                      APPROVED
                    </div>
                  </div>

                  <div>
                    <h4 className="mono text-[10px] text-white/40 mb-2 uppercase tracking-widest">Executive Summary</h4>
                    <p className="text-sm leading-relaxed text-white/80">{report.summary}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="mono text-[10px] text-white/40 mb-4 uppercase tracking-widest">Key Findings</h4>
                      <ul className="space-y-3">
                        {report.findings.map((f, i) => (
                          <li key={i} className="flex gap-3 text-xs text-white/60">
                            <ChevronRight className="w-3 h-3 flex-shrink-0 mt-1" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="h-48">
                      <h4 className="mono text-[10px] text-white/40 mb-4 uppercase tracking-widest">Performance Metrics</h4>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={report.metrics} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" stroke="#222" horizontal={false} />
                          <XAxis type="number" hide />
                          <YAxis 
                            dataKey="label" 
                            type="category" 
                            stroke="#555" 
                            fontSize={10} 
                            tick={{ fill: '#888' }}
                            width={70}
                          />
                          <Tooltip 
                            contentStyle={{ background: '#000', border: '1px solid #333', fontSize: '10px' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Bar dataKey="value" fill="#ffffff" barSize={10} radius={[0, 4, 4, 0]}>
                            {report.metrics.map((_, index) => (
                              <Cell key={`cell-${index}`} fillOpacity={0.4 + (index * 0.2)} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center">
                  <Terminal className="w-16 h-16 text-white/5 mx-auto mb-6" />
                  <p className="mono text-[10px] text-white/20 tracking-[0.3em]">WAITING FOR INPUT SEQUENCE...</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchCore;
