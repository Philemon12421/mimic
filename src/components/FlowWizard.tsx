import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Loader2, CircleDot, CheckCircle2 } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [activeStep, isGenerating]);

  const handleInputChange = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleNext = (index: number) => {
    if (answers[flow.questions[index]]?.trim()) {
      if (index === flow.questions.length - 1) {
        handleGenerate();
      } else {
        setActiveStep(index + 1);
      }
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

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 h-full flex flex-col overflow-hidden" ref={scrollRef}>
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-1">{flow.title}</h2>
          <p className="text-neutral-400 text-xs">Internal Intelligence Processing Active</p>
        </div>
        <button 
          onClick={onCancel}
          className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
        >
          Cancel Process
        </button>
      </div>

      <div className="flex-1 space-y-16 pb-24">
        {flow.questions.map((question, index) => {
          const isVisible = index <= activeStep;
          if (!isVisible) return null;

          return (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-[10px] font-mono text-neutral-300 mt-1.5">0{index + 1}</span>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-medium text-neutral-900 tracking-tight">{question}</h3>
                  <div className="relative group">
                    <input
                      autoFocus={index === activeStep}
                      disabled={index < activeStep || isGenerating}
                      placeholder="Type your response..."
                      value={answers[question] || ''}
                      onChange={(e) => handleInputChange(question, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleNext(index);
                      }}
                      className="w-full bg-transparent border-b border-neutral-100 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-neutral-200 disabled:text-neutral-400"
                    />
                    {index === activeStep && !isGenerating && (
                      <button
                        onClick={() => handleNext(index)}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
                          answers[question]?.trim() ? 'bg-black text-white' : 'text-neutral-200'
                        }`}
                      >
                        <ArrowRight size={16} />
                      </button>
                    )}
                    {index < activeStep && (
                      <CheckCircle2 size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-black" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
          >
            <Loader2 className="w-8 h-8 animate-spin text-black" />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">Synthesizing</p>
              <p className="text-xs text-neutral-400 uppercase tracking-tighter mt-1 font-mono">Running Local Rule Engines...</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
