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
  Target
} from 'lucide-react';
import { UserType, USER_FLOWS, IdeaOutput } from '../types';
import { generateIdea } from '../services/geminiService';
import { Logo } from './Logo';

import ProfessionalLoading from './ProfessionalLoading';

interface EngineWorkspaceProps {
  onGenerated: (idea: IdeaOutput) => void;
}

export default function EngineWorkspace({ onGenerated }: EngineWorkspaceProps) {
  const [selectedType, setSelectedType] = useState<UserType>('content_creators');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const flow = USER_FLOWS[selectedType];

  const handleInputChange = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const prompt = flow.questions.map(q => `${q}: ${answers[q] || 'Not specified'}`).join('\n');
      const result = await generateIdea(selectedType, prompt);
      onGenerated(result);
    } catch (error) {
      console.error(error);
      alert('Sensing noise in the signal. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const isFormValid = flow.questions.every(q => answers[q]?.trim().length > 3);

  return (
    <div className="min-h-full bg-[#F9FAFB] p-6 lg:p-12">
      {isGenerating && <ProfessionalLoading />}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-full text-[11px] font-bold uppercase tracking-widest text-[#6B7280]"
          >
            <Zap size={12} className="text-[#2563EB]" />
            AI POWERED SYNTHESIS
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#111827]">
            AI Idea Generator
          </h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto font-medium leading-relaxed">
            The best online tool to quickly generate ideas. Automatic and free. <br className="hidden md:block"/>
            Brainstorm new ideas for your business in a few seconds.
          </p>
        </div>

        {/* Main Interface Grid */}
        <div className="saas-card-glow grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Input Form */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] space-y-10">
            <div className="space-y-8">
              {/* Type Selector */}
              <div className="form-group">
                <label className="saas-label">Idea Purpose</label>
                <div className="relative group">
                  <select 
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as UserType)}
                    className="saas-select pr-10"
                  >
                    {Object.entries(USER_FLOWS).map(([id, f]) => (
                      <option key={id} value={id}>{f.title}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none group-hover:text-[#111827] transition-colors" size={18} />
                </div>
                <p className="text-[11px] text-[#9CA3AF] leading-relaxed mt-2">
                  {flow.description}
                </p>
              </div>

              {/* Dynamic Questions */}
              {flow.questions.map((q, i) => (
                <div key={i} className="form-group">
                  <label className="saas-label">{q}</label>
                  {i === 0 ? (
                    <input 
                      className="saas-input"
                      placeholder="e.g. ACME Inc. or Modern Dev Blog"
                      value={answers[q] || ''}
                      onChange={(e) => handleInputChange(q, e.target.value)}
                    />
                  ) : (
                    <textarea 
                      className="saas-input min-h-[120px] resize-none"
                      placeholder="e.g. We are building a platform for..."
                      value={answers[q] || ''}
                      onChange={(e) => handleInputChange(q, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-6 relative">
               <button 
                disabled={!isFormValid || isGenerating}
                onClick={handleGenerate}
                className="primary-button w-full py-4 text-base font-bold shadow-lg shadow-[#2563EB]/20 group"
               >
                {isGenerating ? (
                  <Loader2 size={24} className="animate-spin text-white" />
                ) : (
                  <>
                    <Sparkles size={20} />
                    Generate Ideas
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
               </button>
               {!isFormValid && !isGenerating && (
                 <p className="text-center text-[10px] text-[#EF4444] font-bold uppercase tracking-widest mt-4">
                   All fields required for synthesis
                 </p>
               )}
            </div>
          </div>

          {/* Right: Suggestions & Live Insights */}
          <div className="bg-[#F9FAFB] p-8 lg:p-12 flex flex-col">
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#2563EB]/10 blur-3xl rounded-full scale-150 animate-pulse" />
                    <div className="relative bg-white p-6 rounded-[24px] shadow-xl border border-[#E5E7EB]">
                      <Logo size={48} className="animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-[#111827]">Sensing Neural Pathways</h4>
                    <div className="flex flex-col gap-2">
                       {['Harmonizing Clusters...', 'Calculating Viral Affinity...', 'Synthesizing Vectors...'].map((task, i) => (
                         <motion.div 
                           key={task}
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.4 }}
                           className="text-[11px] font-bold text-[#6B7280] uppercase tracking-widest"
                         >
                           {task}
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="text-center space-y-6 pt-12">
                    <div className="w-24 h-24 bg-white border border-[#E5E7EB] rounded-[32px] flex items-center justify-center mx-auto shadow-sm">
                      <Brain size={48} className="text-[#2563EB]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#111827]">Welcome to the Idea Engine</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        Fill in some information about your project and click generate to witness the synthesis.
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-12 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl space-y-2">
                      <div className="flex items-center gap-2 text-[#2563EB]">
                        <History size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Reliability</span>
                      </div>
                      <p className="font-bold text-[#111827]">99.8%</p>
                    </div>
                    <div className="p-4 bg-white border border-[#E5E7EB] rounded-2xl space-y-2">
                      <div className="flex items-center gap-2 text-[#2563EB]">
                        <Target size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Accuracy</span>
                      </div>
                      <p className="font-bold text-[#111827]">High-Perf</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
