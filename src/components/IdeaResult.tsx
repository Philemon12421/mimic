import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Download,
  Activity,
  Search,
  Tag,
  Circle,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronDown,
  Copy,
  Twitter,
  Linkedin,
  Facebook,
  FileText,
  Code,
  FileJson
} from 'lucide-react';
import { IdeaOutput } from '../types';

interface IdeaResultProps {
  idea: IdeaOutput;
  onBack: () => void;
}

function StepAccordion({ step, index }: { step: string; index: number; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border border-[#E5E7EB] rounded-2xl bg-white overflow-hidden transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center text-xs font-bold text-[#6B7280] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
            {index + 1}
          </div>
          <span className="font-bold text-[#111827] text-sm md:text-base">
            Action Vector {index + 1}
          </span>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-[#9CA3AF] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 ml-12 text-[#4B5563] text-sm md:text-base leading-relaxed">
              {step}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IdeaResult({ idea, onBack }: IdeaResultProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = (format: 'txt' | 'md' | 'json') => {
    let content = '';
    let fileName = `idea-${idea.title.toLowerCase().replace(/\s+/g, '-')}`;
    let mimeType = '';

    if (format === 'txt') {
      content = `TITLE: ${idea.title}\n\nIDEA: ${idea.idea}\n\nSTEPS:\n${idea.steps.join('\n')}`;
      fileName += '.txt';
      mimeType = 'text/plain';
    } else if (format === 'md') {
      content = `# ${idea.title}\n\n## The Concept\n${idea.idea}\n\n## Roadmap\n${idea.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;
      fileName += '.md';
      mimeType = 'text/markdown';
    } else if (format === 'json') {
      content = JSON.stringify(idea, null, 2);
      fileName += '.json';
      mimeType = 'application/json';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
    setShowExportMenu(false);
  };

  return (
    <div className="min-h-full bg-[#F9FAFB] pb-32">
      {/* Top Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between px-6 py-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] hover:text-[#111827] transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Dashboard
        </button>
        <div className="flex items-center gap-4 relative">
          <button 
            onClick={() => setShowShareModal(true)}
            className="secondary-button !px-4 hover:bg-neutral-50"
          >
            <Share2 size={16} />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="primary-button !px-4"
            >
              <Download size={16} />
              Export Brief
            </button>
            <AnimatePresence>
              {showExportMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-48 bg-white border border-[#E5E7EB] rounded-2xl shadow-xl p-2 z-[100]"
                >
                  <button onClick={() => handleExport('txt')} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F9FAFB] rounded-xl transition-colors">
                    <FileText size={16} /> Plain Text
                  </button>
                  <button onClick={() => handleExport('md')} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F9FAFB] rounded-xl transition-colors">
                    <Code size={16} /> Markdown
                  </button>
                  <button onClick={() => handleExport('json')} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#4B5563] hover:bg-[#F9FAFB] rounded-xl transition-colors">
                    <FileJson size={16} /> JSON Data
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 space-y-12">
        {/* Export Modal Overlay */}
        <AnimatePresence>
          {showShareModal && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowShareModal(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl space-y-8"
              >
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-[#111827]">Share Intelligence</h3>
                  <p className="text-sm text-[#6B7280]">Distribute this synthesis across your networks.</p>
                </div>

                <div className="space-y-4">
                  <label className="saas-label">Direct Link</label>
                  <div className="flex gap-2">
                    <input 
                      readOnly 
                      value={window.location.href}
                      className="saas-input bg-[#F9FAFB] truncate"
                    />
                    <button 
                      onClick={handleCopyLink}
                      className="secondary-button !px-4"
                    >
                      {copied ? <CheckCircle2 className="text-green-500" size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: <Twitter />, label: 'Twitter', color: '#1DA1F2' },
                    { icon: <Linkedin />, label: 'LinkedIn', color: '#0A66C2' },
                    { icon: <Facebook />, label: 'Facebook', color: '#1877F2' }
                  ].map(platform => (
                    <button key={platform.label} className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-neutral-50 border border-neutral-100 transition-all">
                      <div className="text-[#111827]">{platform.icon}</div>
                      <span className="text-[10px] font-bold uppercase tracking-widest">{platform.label}</span>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setShowShareModal(false)}
                  className="w-full py-4 text-sm font-bold text-[#6B7280] hover:text-[#111827] transition-colors"
                >
                  Close Panel
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <div className="saas-card bg-white !p-0 overflow-hidden shadow-2xl shadow-black/[0.03] border-[#E5E7EB]">
          <div className="p-8 lg:p-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-[#6B7280] text-[11px] font-bold tracking-[0.2em] uppercase">
                  <Activity size={14} className="text-[#111827]" />
                  Verified Blueprint Output
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-[1.1]">
                  {idea.title}
                </h1>
              </div>
              
              <div className="shrink-0 flex items-center gap-6 p-8 bg-[#F9FAFB] rounded-[32px] border border-[#E5E7EB] shadow-inner relative group">
                <div className="text-center relative z-10">
                  <p className="text-[10px] font-black text-[#6B7280] uppercase tracking-[0.2em] mb-2">Impact Score</p>
                  <p className="text-5xl font-black text-[#111827]">{idea.score_rating}</p>
                </div>
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-[#E5E7EB]" />
                  <motion.div 
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-t-[#111827] border-r-transparent border-b-transparent border-l-transparent" 
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {idea.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-xl text-[10px] font-bold text-[#4B5563] uppercase tracking-wider shadow-sm">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
          
          <div className="px-8 lg:px-12 py-16 bg-[#111827] text-white relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
              <div className="absolute top-0 right-0 p-12"><Layers size={300} /></div>
            </div>
            <div className="flex items-start gap-12 relative z-10">
              <div className="shrink-0 w-20 h-20 bg-white/5 rounded-[24px] flex items-center justify-center text-white border border-white/10 backdrop-blur-xl">
                <Layers size={40} />
              </div>
              <p className="text-2xl md:text-4xl font-semibold leading-[1.3] text-white tracking-tight">
                {idea.idea}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Execution Column */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-3">
                  <BarChart3 size={20} className="text-[#2563EB]" />
                  <h3 className="text-xl font-bold text-[#111827]">Strategic Execution Roadmap</h3>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest hidden md:block">Logic Sequencing</span>
              </div>
              
              <div className="space-y-4">
                {idea.steps.map((step, i) => (
                  <StepAccordion key={i} step={step} index={i} />
                ))}
              </div>
            </section>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-8">
            <section className="saas-card-glow p-8 lg:p-10 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#111827]">
                  <Search size={20} className="text-[#111827]" />
                  <h4 className="font-bold text-lg">Strategy Nodes</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {idea.seo_keywords.map(kw => (
                    <div key={kw} className="p-4 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] hover:border-[#2563EB]/30 hover:bg-white transition-all group">
                      <div className="flex items-center justify-between">
                         <span className="text-xs font-bold text-[#4B5563] group-hover:text-[#2563EB]">{kw}</span>
                         <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all text-[#2563EB]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-100">
                <div className="flex items-start gap-4 p-6 bg-[#EEF2FF] rounded-[24px] border border-[#E0E7FF]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2563EB] shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-[#111827]">Integrity Check</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      Cross-referenced across all relevant clusters.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="saas-card bg-neutral-50 border border-[#E5E7EB] flex flex-col items-center text-center p-12 space-y-8">
               <div className="relative">
                  <div className="absolute inset-0 bg-[#111827]/5 blur-3xl rounded-full" />
                  <div className="relative w-16 h-16 bg-white rounded-[24px] flex items-center justify-center border border-[#E5E7EB] text-[#111827]">
                    <Sparkles size={32} />
                  </div>
               </div>
               <div className="space-y-3">
                  <h4 className="font-black text-2xl tracking-tight text-[#111827]">Adaptive Refinement</h4>
                  <p className="text-[10px] text-[#6B7280] uppercase tracking-[0.3em] font-black">Synthesis Correction Required?</p>
               </div>
               <button 
                onClick={onBack}
                className="w-full py-5 bg-[#111827] text-white font-bold rounded-[16px] hover:bg-black transition-all shadow-xl shadow-black/10 text-sm"
               >
                 Restart Synthesis
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
