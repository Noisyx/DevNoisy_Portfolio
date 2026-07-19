import React from 'react';
import { motion } from 'framer-motion';

export default function WorkflowMockup() {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[600px]"
    >
      {/* Glow Effect behind the image */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 to-emerald-400 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"></div>
      
      {/* Floating Image Container */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl"
      >
        {/* Mac OS Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/60">
          <div className="h-3 w-3 rounded-full bg-slate-700"></div>
          <div className="h-3 w-3 rounded-full bg-slate-700"></div>
          <div className="h-3 w-3 rounded-full bg-slate-700"></div>
        </div>

        {/* The Image */}
        <div className="relative w-full">
          <img 
            src="/Workflow2.jpg" 
            alt="Workflow Preview" 
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
