import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Zap, Shield, Globe, Cpu, ChevronRight, MessageCircle, HelpCircle, Users, Briefcase, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface LandingPageProps {
  onStart: () => void;
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-[#2563EB]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Rapid Synthesis",
      desc: "Convert raw concepts into structural blueprints in under 3 seconds."
    },
    {
      icon: <Cpu size={24} />,
      title: "Protocol Logic",
      desc: "Our engine uses multi-vector analysis to find deep structural connections."
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Session",
      desc: "All logic processing happens within an encrypted terminal sandbox."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#111827] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <Logo size={40} />
        <div className="hidden md:flex items-center gap-10">
          {['Product', 'Intelligence', 'Community'].map(link => (
            <a key={link} href="#" className="text-sm font-bold tracking-tight hover:opacity-60 transition-opacity" onClick={(e) => e.preventDefault()}>{link}</a>
          ))}
          <button 
            onClick={onStart}
            className="px-8 py-3 bg-[#111827] text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/10"
          >
            Launch Engine
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-[#6B7280] mb-8"
        >
          <Sparkles size={12} className="text-[#111827]" />
          Advanced Idea Engine v1.2
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(3rem,10vw,8rem)] font-black tracking-[-0.04em] leading-[0.95] mb-12"
        >
          Strategy for <br />
          <Typewriter words={['creators.', 'builders.', 'founders.', 'thinkers.', 'innovators.']} />
        </motion.h1>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#E5E7EB] pt-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium tracking-tight text-[#4B5563] max-w-2xl leading-tight"
          >
            A high-performance logic processor designed for those who build the future. 
            Synthesize complexity into clarity using advanced structural mapping.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onStart}
            className="group relative inline-flex items-center gap-4 bg-[#111827] text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-black transition-all shadow-2xl shadow-black/20 shrink-0"
          >
            Launch Terminal 
            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </main>

      {/* Feature Grid */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-[20px] flex items-center justify-center text-[#111827] border border-[#E5E7EB]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-lg text-[#6B7280] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-20 border-t border-[#E5E7EB] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-xs font-black tracking-widest uppercase text-[#9CA3AF]">© 2024 Idea Engine Labs</span>
        </div>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-[#6B7280]">
           <span>Protocol 4.0</span>
           <span className="text-[#111827]">Secure Link Active</span>
        </div>
      </footer>
    </div>
  );
}
