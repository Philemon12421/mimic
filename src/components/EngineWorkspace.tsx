import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Loader2, 
  ChevronDown, 
  Info, 
  Brain, 
  History,
  Lightbulb,
  ArrowRight,
  Zap,
  Target,
  MessageSquare,
  Briefcase,
  Users,
  Cpu
} from 'lucide-react';
import { UserType, USER_FLOWS, IdeaOutput } from '../types';
import { generateBlueprint } from '../services/blueprintService';
import { Logo } from './Logo';

import ProfessionalLoading from './ProfessionalLoading';

interface EngineWorkspaceProps {
  onGenerated: (idea: IdeaOutput) => void;
}

export default function EngineWorkspace({ onGenerated }: EngineWorkspaceProps) {
  const [selectedType, setSelectedType] = useState<UserType>('content_creators');
  const [outputType, setOutputType] = useState('Software Architecture');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'Identity' | 'Strategy' | 'Context'>('Identity');

  const outputTypes = [
    { id: 'Software Architecture', icon: <Cpu size={14} />, label: 'Software' },
    { id: 'Content Strategy', icon: <MessageSquare size={14} />, label: 'Content' },
    { id: 'Marketing Campaign', icon: <Target size={14} />, label: 'Marketing' },
    { id: 'Business Model', icon: <Briefcase size={14} />, label: 'Business' },
    { id: 'Community Blueprint', icon: <Users size={14} />, label: 'Community' }
  ];

  const flow = USER_FLOWS[selectedType];

  const categories = {
    Identity: flow.questions.slice(0, 4),
    Strategy: flow.questions.slice(4, 8),
    Context: flow.questions.slice(8, 12)
  };

  const answeredCount = (Object.values(answers) as string[]).filter(v => v.trim().length > 0).length;
  const progress = (answeredCount / 12) * 100;

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSuggestionClick = (id: string, suggestion: string) => {
    setAnswers(prev => ({ ...prev, [id]: suggestion }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateBlueprint(selectedType, answers, outputType);
      onGenerated(result);
    } catch (error) {
      console.error(error);
      alert('Sensing noise in the logic. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const isFormValid = flow.questions.every(q => answers[q.id]?.trim().length > 1);

  return (
    <div className="min-h-full bg-[#F9FAFB] p-4 lg:p-12">
      {isGenerating && <ProfessionalLoading />}
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 pt-4">
          <div className="space-y-4 flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white"
            >
              <Zap size={10} />
              Protocol Blueprint Engine
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-[#111827] leading-[0.9]">
              Engine <br />
              <span className="text-neutral-400">Workspace.</span>
            </h1>
          </div>
          
          <div className="flex flex-col gap-4 items-end">
             <div className="flex bg-white border border-[#E5E7EB] rounded-[20px] p-1.5 shadow-sm">
              {(['Identity', 'Strategy', 'Context'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-[16px] text-[11px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#111827] text-white' : 'text-[#6B7280] hover:bg-neutral-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="w-full max-w-[280px] space-y-2">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#9CA3AF]">
                <span>Analysis Progress</span>
                <span className="text-[#111827]">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-[#111827]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Form (Complex Static Form) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="saas-card-glow p-8 lg:p-12 space-y-10">
              {/* Output Type Selector */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-widest text-[#6B7280]">1. Select Your Target Architecture</label>
                <div className="flex flex-wrap gap-3">
                  {outputTypes.map(ot => (
                    <button
                      key={ot.id}
                      onClick={() => setOutputType(ot.id)}
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${
                        outputType === ot.id 
                          ? 'border-[#2563EB] bg-[#F0F7FF] text-[#2563EB] ring-4 ring-[#2563EB]/5' 
                          : 'border-[#E5E7EB] hover:border-[#D1D5DB] text-[#4B5563]'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${outputType === ot.id ? 'bg-[#2563EB] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'}`}>
                        {ot.icon}
                      </div>
                      <span className="text-sm font-bold">{ot.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#E5E7EB] w-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {categories[activeCategory].map((q) => (
                  <div key={q.id} className="form-group">
                    <label className="saas-label flex items-center justify-between">
                      {q.question}
                      <Info size={14} className="text-[#9CA3AF] cursor-help" />
                    </label>
                    <textarea 
                      className="saas-input min-h-[90px] resize-none"
                      placeholder={q.placeholder}
                      value={answers[q.id] || ''}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    />
                    <div className="flex flex-wrap gap-2 mt-3">
                      {q.suggestions.map(s => (
                        <button
                          key={s}
                          onClick={() => handleSuggestionClick(q.id, s)}
                          className="px-2.5 py-1 bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-full text-[10px] font-bold text-[#4B5563] transition-colors border border-transparent hover:border-[#D1D5DB]"
                        >
                          + {s}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#E5E7EB] flex items-center justify-between gap-6">
                <div className="text-xs text-[#6B7280] font-medium italic">
                  * All fields are processed through our Logical Clustering Core.
                </div>
                <div className="flex gap-4">
                  {activeCategory !== 'Context' ? (
                    <button 
                      onClick={() => setActiveCategory(activeCategory === 'Identity' ? 'Strategy' : 'Context')}
                      className="secondary-button"
                    >
                      Next Section
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button 
                      disabled={!isFormValid || isGenerating}
                      onClick={handleGenerate}
                      className="primary-button !px-8"
                    >
                      {isGenerating ? <Loader2 className="animate-spin" /> : <><Sparkles size={18}/> Synthesize Idea</>}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Insight Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="saas-card p-8 bg-[#111827] text-white border-none space-y-6">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                 <Brain size={24} />
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-bold">Optimization Log</h3>
                 <p className="text-xs text-neutral-400 leading-relaxed">
                   Current session is focused on <span className="text-[#2563EB] font-bold">{activeCategory}</span> analysis. Fill all 12 parameters for maximum synthesis accuracy.
                 </p>
               </div>
               
               <div className="space-y-4 pt-4">
                  {[
                    { label: 'Data Density', val: `${Math.round((Object.keys(answers).length / 12) * 100)}%` },
                    { label: 'Logic Clarity', val: 'Analyzing...' }
                  ].map(stat => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{stat.label}</span>
                      <span className="text-xs font-mono text-[#111827] font-bold">{stat.val}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="saas-card p-8 space-y-6">
              <h4 className="font-bold text-[#111827] flex items-center gap-2">
                <Lightbulb size={16} className="text-[#2563EB]" />
                Pro Tip
              </h4>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                Use our built-in suggestions to quickly populate industry-standard parameters while maintaining your unique core mission.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-12">
          {[
            { icon: <Zap size={20} />, title: "Instant Generation", desc: "Get highly relevant ideas in under 5 seconds." },
            { icon: <Shield size={20} />, title: "Secure Synthesis", desc: "Your project data is never sold or shared." },
            { icon: <Lightbulb size={20} />, title: "Smart Refinement", desc: "Engine learns from your context for better results." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 bg-white border border-[#E5E7EB] rounded-xl flex items-center justify-center text-[#2563EB] shadow-sm">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#111827]">{item.title}</h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Shield({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
