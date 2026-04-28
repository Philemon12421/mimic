import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Share2, 
  Download,
  Activity,
  Search,
  Tag,
  Circle
} from 'lucide-react';
import { IdeaOutput } from '../types';

interface IdeaResultProps {
  idea: IdeaOutput;
  onBack: () => void;
}

export default function IdeaResult({ idea, onBack }: IdeaResultProps) {
  return (
    <div className="min-h-full bg-white p-8 lg:p-16 pb-32">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Navigation */}
        <div className="flex items-center justify-between py-4 border-b border-neutral-100">
          <button 
            onClick={onBack}
            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-black transition-all"
          >
            <ArrowLeft size={16} />
            Reset Engine
          </button>
          <div className="flex items-center gap-6">
            <button className="text-neutral-400 hover:text-black transition-colors">
              <Share2 size={18} />
            </button>
            <button className="flex items-center gap-3 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all">
              <Download size={14} />
              Export
            </button>
          </div>
        </div>

        {/* Hero */}
        <div className="space-y-10">
          <div className="flex items-center justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-3 text-neutral-400">
                <Activity size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Structured Output #001</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-sans font-black tracking-tight leading-[0.9] text-neutral-900">
                {idea.title}
              </h1>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-center w-32 h-32 border-4 border-black rounded-full text-center">
              <span className="text-xs font-black uppercase tracking-tighter text-neutral-400">Viral Score</span>
              <span className="text-4xl font-black text-black">{idea.score_rating}</span>
            </div>
          </div>
          
          <div className="p-12 bg-neutral-50 rounded-[2rem] border border-neutral-100">
            <p className="text-3xl text-neutral-900 font-medium leading-tight tracking-tight">
              {idea.idea}
            </p>
          </div>
        </div>

        {/* content sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Left: Execution */}
          <section className="space-y-12">
            <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
              <Circle size={10} fill="currentColor" className="text-black" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black">Execution Pipeline</h3>
            </div>
            <div className="space-y-8">
              {idea.steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-xs font-mono text-neutral-300 mt-1">0{i + 1}</span>
                  <p className="text-lg text-neutral-600 leading-relaxed group-hover:text-black transition-colors">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Metadata */}
          <section className="space-y-12">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
                  <Search size={14} />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black">SEO Clusters</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {idea.seo_keywords.map(kw => (
                    <span key={kw} className="px-4 py-2 bg-neutral-50 text-[10px] font-black uppercase tracking-widest text-neutral-500 rounded-lg">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
                  <Tag size={14} />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {idea.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-neutral-400 lowercase">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 border border-black/5 bg-neutral-50 rounded-[2rem] flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Activity size={24} className="text-black" />
              </div>
              <div>
                <h4 className="font-black text-lg text-neutral-900 uppercase tracking-tighter">Processed</h4>
                <p className="text-[10px] text-neutral-400 font-mono uppercase mt-1">INTERNAL ENGINE VALIDATED</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
