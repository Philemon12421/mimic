import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export default function ProfessionalLoading() {
  return (
    <div className="fixed inset-0 z-[200] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-[#2563EB]/10 blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="relative bg-white p-8 rounded-[32px] shadow-2xl border border-[#E5E7EB]">
          <Logo size={80} />
        </div>
      </motion.div>
      
      <div className="text-center space-y-3">
        <h2 className="text-xl font-bold text-[#111827]">Engine Synthesis Active</h2>
        <div className="flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                backgroundColor: ['#E5E7EB', '#2563EB', '#E5E7EB']
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-1.5 h-1.5 rounded-full"
            />
          ))}
        </div>
        <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-[0.3em] pt-4">
          Calculating Professional Vectors
        </p>
      </div>
    </div>
  );
}
