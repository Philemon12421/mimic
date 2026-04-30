import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Loader2, CircleDot, CheckCircle2, Info, Sparkles, Brain } from 'lucide-react';
import { UserType, USER_FLOWS, IdeaOutput } from '../types';
import { generateIdea } from '../services/geminiService';

interface FlowWizardProps {
  type: UserType;
  onComplete: (idea: IdeaOutput) => void;
  onCancel: () => void;
}

export default function FlowWizard({ type, onComplete, onCancel }: FlowWizardProps) {
  const flow = USER_FLOWS[type];
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleNext = () => {
    if (answers[flow.questions[activeStep]]?.trim()) {
      if (activeStep === flow.questions.length - 1) {
        handleGenerate();
      } else {
        setActiveStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    } else {
      onCancel();
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateIdea(type, answers);
      onComplete(result);
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
    }
  };

  const progress = ((activeStep + 1) / flow.questions.length) * 100;

  return (
    <div className="min-h-full bg-[#F9FAFB] flex flex-col">
      <StyleTag />
      {/* Header */}
      <div className="bg-white border-b border-neutral-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onCancel}
            className="p-2 hover:bg-neutral-50 rounded-lg transition-colors text-[#6B7280]"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="h-6 w-px bg-neutral-100" />
          <h2 className="text-sm font-bold text-[#111827]">{flow.title} Configuration</h2>
        </div>
        
        <button 
          onClick={onCancel}
          className="text-xs font-bold text-[#EF4444] hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all"
        >
          Cancel Process
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 lg:p-16">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#111827]">Generate Strategy</h1>
              <p className="text-[#6B7280] leading-relaxed">Fill in the following parameters to synthesize your breakthrough idea.</p>
            </div>

            <div className="saas-card bg-white p-8 lg:p-10 space-y-8">
              {flow.questions.map((question, i) => (
                <div key={i} className="space-y-3">
                  <label className="saas-label flex items-center justify-between">
                    <span>{question}</span>
                    <span className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-widest">Parameter 0{i+1}</span>
                  </label>
                  <textarea
                    placeholder="Provide detailed context..."
                    value={answers[question] || ''}
                    onChange={(e) => handleInputChange(question, e.target.value)}
                    rows={i === 0 ? 2 : 4}
                    className="saas-input resize-none"
                  />
                </div>
              ))}

              <div className="pt-6">
                <button 
                  disabled={flow.questions.some(q => !answers[q]?.trim()) || isGenerating}
                  onClick={handleGenerate}
                  className="primary-button w-full py-5 text-lg shadow-xl shadow-[#111827]/10"
                >
                  {isGenerating ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Sparkles size={22} />
                      Generate Professional Ideas
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-[#9CA3AF] mt-4 font-medium">
                  By clicking generate, you initiate a multi-vector synthesis session.
                </p>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="saas-card bg-[#111827] text-white border-none p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Brain size={120} />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  <Info size={12} />
                  Engine Guidance
                </div>
                <h3 className="text-2xl font-bold">Optimization Protocol</h3>
                <ul className="space-y-6">
                  {[
                    { label: 'Be Specific', desc: 'Identify your target demographic or niche clearly.' },
                    { label: 'Define Goals', desc: 'State exactly what success looks like for this idea.' },
                    { label: 'Mention Constraints', desc: 'Include budget, time, or technical limitations.' }
                  ].map(tip => (
                    <li key={tip.label} className="space-y-1">
                      <p className="font-bold text-sm">{tip.label}</p>
                      <p className="text-xs text-neutral-400 leading-relaxed">{tip.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="saas-card bg-[#F9FAFB] border-dashed space-y-4">
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">
                <Activity size={14} />
                Live Engine Metrics
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Prompt Depth', val: '94%' },
                  { label: 'Signal Noise', val: 'Low' },
                  { label: 'Cluster Affinity', val: 'Balanced' }
                ].map(stat => (
                  <div key={stat.label} className="flex justify-between items-center text-xs">
                    <span className="text-[#6B7280]">{stat.label}</span>
                    <span className="font-mono font-bold text-[#111827]">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generation Overlay */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <div className="text-center space-y-8 max-w-sm">
              <div className="relative inline-block">
                <Loader2 className="w-20 h-20 animate-spin text-[#111827] opacity-20" />
                <Sparkles className="absolute inset-x-0 inset-y-0 m-auto w-8 h-8 text-[#111827] animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-[#111827]">Processing Engine...</h2>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Crunching signal clusters and performing semantic synthesis via the local neural engine.
                </p>
              </div>
              <div className="pt-8 flex flex-col gap-3">
                {['Clustering Vectors...', 'Scoring Viral Metrics...', 'Formatting Output...'].map((task, i) => (
                  <motion.div 
                    key={task}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.4 }}
                    className="flex justify-between items-center text-[11px] font-bold text-[#6B7280] uppercase tracking-widest"
                  >
                    <span>{task}</span>
                    <span className="text-[#10B981]">Complete</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const patternStyle = `
.pattern-grid {
  background-image: radial-gradient(#111827 0.5px, transparent 0.5px);
  background-size: 24px 24px;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
`;

function StyleTag() {
  return <style>{patternStyle}</style>;
}
