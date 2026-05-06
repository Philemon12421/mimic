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
        <div className="absolute inset-0 bg-[#111827]/5 blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="relative bg-white p-12 rounded-[48px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-[#E5E7EB]">
          <Logo size={100} />
        </div>
      </motion.div>
      
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-black text-[#111827] tracking-tight">Engine Synthesis Active</h2>
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                backgroundColor: ['#E5E7EB', '#111827', '#E5E7EB']
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
        <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.4em] pt-6 max-w-[200px] leading-relaxed">
          Allocating Logic Resources For Strategy Mapping
        </p>
      </div>
    </div>
  );
}
