import { motion } from 'motion/react';
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
  Sparkles
} from 'lucide-react';
import { IdeaOutput } from '../types';

interface IdeaResultProps {
  idea: IdeaOutput;
  onBack: () => void;
}

export default function IdeaResult({ idea, onBack }: IdeaResultProps) {
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
        <div className="flex items-center gap-4">
          <button className="secondary-button !px-4 hover:bg-neutral-50">
            <Share2 size={16} />
          </button>
          <button className="primary-button !px-4">
            <Download size={16} />
            Export Brief
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-20 space-y-12">
        {/* Hero Section */}
        <div className="saas-card bg-white !p-0 overflow-hidden shadow-xl shadow-black/5">
          <div className="p-8 lg:p-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-[#6B7280] text-[11px] font-bold tracking-[0.2em] uppercase">
                  <Activity size={14} className="text-[#2563EB]" />
                  Verified Intelligence Output
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
                  {idea.title}
                </h1>
              </div>
              
              <div className="shrink-0 flex items-center gap-6 p-6 bg-[#F9FAFB] rounded-2xl border border-neutral-100">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest mb-1">Impact Score</p>
                  <p className="text-4xl font-bold text-[#2563EB]">{idea.score_rating}</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#2563EB] border-t-neutral-100 animate-spin-slow duration-[3s]" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {idea.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-[#EEF2FF] border border-[#E0E7FF] rounded-full text-[10px] font-bold text-[#4B5563] uppercase tracking-tighter">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
          
          <div className="px-8 lg:px-12 py-12 bg-[#111827] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 p-12"><Layers size={200} /></div>
            </div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20">
                <Layers size={24} />
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                {idea.idea}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Execution Column */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <BarChart3 size={20} className="text-[#2563EB]" />
                  <h3 className="text-lg font-bold text-[#111827]">Strategic Roadmap</h3>
                </div>
                <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Execution Steps</span>
              </div>
              
              <div className="space-y-8">
                {idea.steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-xs font-bold text-[#111827] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all">
                      {i + 1}
                    </div>
                    <div className="space-y-1 pt-1">
                      <p className="text-base text-[#374151] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Side Panel: Metadata & Optimization */}
          <div className="lg:col-span-5 space-y-8">
            <section className="saas-card p-10 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#111827]">
                  <Search size={18} className="text-[#2563EB]" />
                  <h4 className="font-bold">Neural SEO Clusters</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {idea.seo_keywords.map(kw => (
                    <span key={kw} className="px-3 py-2 bg-[#F9FAFB] text-[11px] font-semibold text-[#4B5563] rounded-lg border border-[#E5E7EB] hover:border-neutral-300 transition-colors cursor-default">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-100">
                <div className="flex items-start gap-4 p-5 bg-blue-50/40 rounded-2xl border border-blue-100/50">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2563EB] shadow-sm">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-[#111827]">Optimized Concept</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      Cross-referenced with current market volatility and competitor density across all clusters.
                    </p>
                  </div>
                </div>
              </div>

              <button className="secondary-button w-full">
                <ExternalLink size={14} />
                View Detailed Research
              </button>
            </section>

            <div className="saas-card bg-[#2563EB] text-white border-none flex flex-col items-center text-center p-10 space-y-6">
               <div className="relative">
                  <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                  <div className="relative w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Sparkles size={24} />
                  </div>
               </div>
               <div className="space-y-2">
                  <h4 className="font-bold text-lg">Adaptive Engine</h4>
                  <p className="text-xs text-blue-100 opacity-60 uppercase tracking-widest font-bold">Feedback Loop Verified</p>
               </div>
               <p className="text-sm text-blue-50 leading-relaxed">
                 Refine the output parameters to re-generate more specific concepts.
               </p>
               <button className="w-full py-3 bg-white text-[#2563EB] font-bold rounded-xl hover:bg-neutral-50 transition-all">
                 Refine Synthesis
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
