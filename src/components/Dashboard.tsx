import { motion } from 'motion/react';
import { 
  ArrowRight, 
  History, 
  Video,
  PenTool,
  GraduationCap,
  Briefcase,
  Search,
  TrendingUp,
  Circle,
  Hash
} from 'lucide-react';
import { UserType, USER_FLOWS } from '../types';

interface DashboardProps {
  onSelectFlow: (type: UserType) => void;
}

const CATEGORIES = [
  { id: 'content_creators', icon: <Video size={20} />, label: 'Content' },
  { id: 'bloggers', icon: <PenTool size={20} />, label: 'Writing' },
  { id: 'students', icon: <GraduationCap size={20} />, label: 'Education' },
  { id: 'businesses', icon: <Briefcase size={20} />, label: 'SaaS' },
  { id: 'researchers', icon: <Search size={20} />, label: 'Deep Dive' },
  { id: 'trend_hunters', icon: <TrendingUp size={20} />, label: 'Signals' },
] as const;

export default function Dashboard({ onSelectFlow }: DashboardProps) {
  return (
    <div className="p-8 lg:p-16 max-w-7xl mx-auto space-y-24 h-full flex flex-col">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-neutral-400">
          <Hash size={14} />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Intelligence Surface v1.0</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-black tracking-tight text-neutral-900 leading-[0.85]"
        >
          GENERATE<br />
          <span className="text-neutral-200">STRATEGY.</span>
        </motion.h1>
      </div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 flex-1">
        {CATEGORIES.map((cat, idx) => (
          <motion.button
            id={`cat-card-${cat.id}`}
            key={cat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            onClick={() => onSelectFlow(cat.id as UserType)}
            className="group relative p-8 aspect-square flex flex-col justify-between text-left border border-neutral-100 hover:border-black transition-all duration-300 bg-white"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 bg-neutral-50 rounded-lg group-hover:bg-black group-hover:text-white transition-all text-neutral-400">
                {cat.icon}
              </div>
              <Circle className="text-neutral-100 group-hover:text-black transition-colors" size={8} fill="currentColor" />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-neutral-900">{cat.label}</h3>
              <div className="h-0.5 w-0 group-hover:w-full bg-black transition-all duration-300" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Activity Bar */}
      <div className="pt-12 border-t border-neutral-100 flex items-center justify-between text-neutral-400">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Engine Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <History size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">342 Ideas Generated Today</span>
          </div>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest hover:text-black transition-colors">Documentation</button>
      </div>

      {/* Guide Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <div className="p-10 bg-neutral-50 rounded-[2rem] space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest">Intelligence Guide</h4>
          <p className="text-neutral-500 leading-relaxed">
            MINIC uses pattern-based synthesis to cluster signals. For best results, provide multi-vector inputs during the guided flow.
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-white border border-neutral-100 rounded-full text-[10px] font-bold">PROMPT_ENGINES</span>
            <span className="px-3 py-1 bg-white border border-neutral-100 rounded-full text-[10px] font-bold">SIGNAL_CLUSTERS</span>
          </div>
        </div>
        <div className="p-10 border border-neutral-100 rounded-[2rem] space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <TrendingUp size={20} />
            <span className="text-xs font-black uppercase tracking-widest">Live Engine Status</span>
          </div>
          <div className="space-y-3">
            {['Keyword Vectorization', 'Cluster Analysis', 'Sentiment Scoring'].map(task => (
              <div key={task} className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>{task}</span>
                <span className="text-black">ACTIVE</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
