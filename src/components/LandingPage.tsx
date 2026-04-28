import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Zap, Shield, Globe, Cpu, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo showText />
          <div className="hidden md:flex items-center gap-10">
            {['Pricing', 'Features', 'Community'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-500 hover:text-black transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </a>
            ))}
            <button 
              onClick={onStart}
              className="px-6 py-2 bg-neutral-900 text-white text-sm font-semibold rounded-[10px] hover:bg-black hover:scale-[1.02] transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-32 md:py-48 text-center max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500"
        >
          <Zap size={10} className="text-black" />
          Intelligence Surface v1.0
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-neutral-900"
        >
          GENERATE<br />
          <span className="text-neutral-200">STRATEGY.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          The self-contained idea engine for high-velocity creators and modern strategists. No external APIs, just raw synthesis logic.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6"
        >
          <button 
            onClick={onStart}
            className="w-full md:w-auto px-10 py-5 bg-black text-white text-lg font-bold rounded-[12px] hover:scale-[1.05] active:scale-95 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3"
          >
            Launch Engine
            <ArrowRight size={20} />
          </button>
          <button className="w-full md:w-auto px-10 py-5 bg-white border border-neutral-200 text-lg font-bold rounded-[12px] hover:bg-neutral-50 transition-all">
            View Use Cases
          </button>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-32 bg-neutral-50/50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tight">Built for Precision</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">MINIC bypasses traditional LLM noise to deliver structured, actionable intelligence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="saas-card bg-white"
              >
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Applications</span>
              <h2 className="text-5xl font-black tracking-tight leading-none">Who is <br />MINIC for?</h2>
            </div>
            <div className="space-y-6">
              {useCases.map((uc, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="h-12 w-1 bg-black/10 group-hover:bg-black transition-all" />
                  <div>
                    <h4 className="font-bold text-lg">{uc.category}</h4>
                    <p className="text-neutral-500">{uc.case}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-neutral-50 border border-neutral-100 rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-20 border-2 border-dashed border-neutral-200 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-40 border border-neutral-200 rounded-full flex items-center justify-center bg-white shadow-2xl">
              <Logo size={80} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black tracking-tight">Simple Pricing</h2>
            <p className="text-neutral-400">One engine. Multiple modes. Zero complexity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Core', price: 'Free', features: ['6 Categories', 'Standard Logic', '10 Daily Gens'] },
              { name: 'Surface', price: '$19', features: ['All Categories', 'Neural Synthesis', 'Unlimited Gens', 'Export Support'], highlight: true },
              { name: 'Protocol', price: '$49', features: ['Priority Mapping', 'API Access', 'Custom Templates', 'Bulk Processing'] }
            ].map((p, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[2rem] border transition-all ${
                  p.highlight ? 'bg-white text-black border-white scale-105 shadow-2xl shadow-white/5' : 'border-neutral-800 hover:border-neutral-600'
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-1">{p.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black">{p.price}</span>
                      {p.price !== 'Free' && <span className="text-sm opacity-50">/mo</span>}
                    </div>
                  </div>
                  <div className="space-y-4 pt-10">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-3 text-sm">
                        <Check size={16} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all mt-10 ${
                    p.highlight ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-neutral-100'
                  }`}>
                    {p.price === 'Free' ? 'Get Started' : 'Subscribe'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-20 border-t border-neutral-100 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <Logo showText />
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              Advancing human strategy through specialized algorithmic synthesis.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm font-medium text-neutral-500">
            <a href="#" className="hover:text-black">Privacy Protocol</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">API Documentation</a>
            <a href="#" className="hover:text-black text-black">Status: Operational</a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-neutral-50 flex justify-between items-center text-[10px] uppercase font-black tracking-widest text-neutral-300">
          <span>&copy; {new Date().getFullYear()} MINIC LABS INC.</span>
          <span>S_02 // SYSTEM_ONLINE</span>
        </div>
      </footer>
    </div>
  );
}
