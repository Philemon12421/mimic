import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Zap, Shield, Globe, Cpu, ChevronRight, MessageCircle, HelpCircle, Users, Briefcase } from 'lucide-react';
import { Logo } from './Logo';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const features = [
    {
      title: 'Neural Synthesis',
      description: 'Proprietary pattern matching that connects market signals with high-velocity opportunities.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Global Trends',
      description: 'Real-time indexing of emerging subcultures across Reddit, Wikipedia, and RSS vectors.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Strategic Guardrails',
      description: 'Built-in SEO optimization and viral propensity scoring for every generated concept.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const useCases = [
    { category: 'Content Creators', case: 'Exploding short-form video niche discovery.' },
    { category: 'SaaS Founders', case: 'Micro-SaaS validation within unserved developer communities.' },
    { category: 'Researchers', case: 'Multi-vector data clustering for competitive analysis.' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo showText />
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Use-Cases', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-500 hover:text-black transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#111827] transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="h-4 w-px bg-neutral-200" />
            <button 
              onClick={onStart}
              className="primary-button"
            >
              Get Started
            </button>
          </div>
          <button onClick={onStart} className="md:hidden primary-button">Start</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-40 md:py-56 text-center max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50 border border-neutral-100 rounded-full text-[11px] font-bold uppercase tracking-widest text-neutral-500"
        >
          <Zap size={12} className="text-[#111827]" />
          Advanced Idea Engine v1.2
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] text-[#111827]"
        >
          Strategy for <br />
          <span className="text-neutral-400">creators.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto font-medium leading-relaxed"
        >
          The most intuitive tool to quickly generate breakthrough ideas. Formal, structured, and actionable output for any domain.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6"
        >
          <button 
            onClick={onStart}
            className="w-full md:w-auto px-10 py-4 bg-[#111827] text-white text-lg font-bold rounded-[12px] hover:scale-[1.05] active:scale-95 transition-all shadow-xl shadow-[#111827]/10 flex items-center justify-center gap-3"
          >
            Launch Free Tool
            <ArrowRight size={20} />
          </button>
          <button 
            className="w-full md:w-auto px-10 py-4 bg-white border border-neutral-200 text-lg font-bold rounded-[12px] hover:bg-neutral-50 transition-all"
            onClick={() => document.getElementById('use-cases')?.scrollIntoView()}
          >
            Capabilities
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-6 py-32 bg-neutral-50/50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">System Core</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Structured logic designed to eliminate brainstorming fatigue and deliver immediate clarity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="saas-card bg-white"
              >
                <div className="w-12 h-12 bg-[#111827] text-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="scroll-mt-24 px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#6B7280]">Context Matching</span>
              <h2 className="text-5xl font-bold tracking-tight leading-tight">Tailored to your <br />unique goals.</h2>
            </div>
            <div className="space-y-8">
              {useCases.map((uc, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="shrink-0 h-14 w-1 bg-neutral-100 group-hover:bg-[#111827] transition-all" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg text-[#111827]">{uc.category}</h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{uc.case}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-[#F9FAFB] border border-neutral-100 rounded-[3rem] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-[0.03] pattern-grid" />
            <Logo size={120} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 px-6 py-32 bg-[#111827] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Flexible protocol.</h2>
            <p className="text-neutral-400">No complex tiers. Just raw speed and intelligent synthesis.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Core', price: 'Free', features: ['All Categories', 'Standard Logic', '10 Daily Gens'] },
              { name: 'Professional', price: '$12', features: ['Neural Synthesis', 'Unlimited Gens', 'Export PDFs', 'Huddle Access'], highlight: true },
              { name: 'Enterprise', price: '$49', features: ['Bulk Generation', 'API Access', 'Custom Models', '24/7 Support'] }
            ].map((p, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[24px] border transition-all duration-500 relative ${
                  p.highlight ? 'bg-white text-[#111827] border-white scale-105 shadow-2xl' : 'border-neutral-800 hover:border-neutral-600'
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Recommended
                  </div>
                )}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-60">{p.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{p.price}</span>
                      {p.price !== 'Free' && <span className="text-sm opacity-50">/mo</span>}
                    </div>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-current opacity-20" />
                  <div className="space-y-4">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-sm">
                        <Check size={16} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all mt-4 ${
                    p.highlight ? 'bg-[#111827] text-white hover:bg-black' : 'bg-white text-[#111827] hover:bg-neutral-100'
                  }`}>
                    {p.price === 'Free' ? 'Sign Up Free' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-20 pb-10 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-sm">
          <div className="lg:col-span-2 space-y-6">
            <Logo showText />
            <p className="text-[#6B7280] max-w-xs leading-relaxed">
              Advancing human synthesis through specialized algorithmic logic. The professional choice for idea orchestration.
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-all"><Globe size={18} /></button>
              <button className="p-2 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-all"><Users size={18} /></button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-[#111827]">Product</h4>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#features" className="hover:text-[#111827] transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#111827] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors">Status</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-[#111827]">Company</h4>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#" className="hover:text-[#111827] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors flex items-center gap-2">Careers <span className="text-[10px] bg-neutral-100 px-2 py-0.5 rounded text-[#111827]">Hiring</span></a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-[#111827]">Support</h4>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#" className="hover:text-[#111827] transition-colors flex items-center gap-2"><MessageCircle size={14} /> Help Center</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors flex items-center gap-2"><HelpCircle size={14} /> FAQ</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors flex items-center gap-2"><Briefcase size={14} /> Sales</a></li>
              <li><a href="#" className="hover:text-[#111827] transition-colors">Changelog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} MINIC LABS INC.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#111827]">Terms</a>
            <a href="#" className="hover:text-[#111827]">Privacy</a>
            <a href="#" className="hover:text-[#111827]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
