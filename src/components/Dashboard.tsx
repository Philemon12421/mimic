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
  Activity,
  Globe,
  Settings
} from 'lucide-react';
import { UserType, USER_FLOWS } from '../types';

interface DashboardProps {
  onSelectFlow: (type: UserType) => void;
}

const CATEGORIES = [
  { id: 'content_creators', icon: <Video className="w-5 h-5" />, label: 'Content' },
  { id: 'bloggers', icon: <PenTool className="w-5 h-5" />, label: 'Writing' },
  { id: 'students', icon: <GraduationCap className="w-5 h-5" />, label: 'Education' },
  { id: 'businesses', icon: <Briefcase className="w-5 h-5" />, label: 'Strategy' },
  { id: 'researchers', icon: <Search className="w-5 h-5" />, label: 'Insights' },
  { id: 'trend_hunters', icon: <TrendingUp className="w-5 h-5" />, label: 'Market' },
] as const;

export default function Dashboard({ onSelectFlow }: DashboardProps) {
  return (
    <div className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto space-y-16">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-100">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#6B7280] text-[11px] font-bold tracking-[0.2em] uppercase">
            <Activity size={14} className="text-[#111827]" />
            Control Center v1.2
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-[#111827]"
          >
            Design your next <span className="text-[#6B7280]">breakthrough.</span>
          </motion.h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="secondary-button whitespace-nowrap">
            <History size={16} />
            History
          </button>
          <button className="primary-button whitespace-nowrap">
            <Globe size={16} />
            Global Feed
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelectFlow(cat.id as UserType)}
            className="saas-card text-left flex flex-col justify-between h-[240px] group"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 bg-neutral-50 rounded-xl text-[#111827] group-hover:bg-[#111827] group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>
              <ArrowRight className="text-neutral-300 group-hover:text-[#111827] transition-all transform group-hover:translate-x-1" size={20} />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#111827]">{cat.label}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                {USER_FLOWS[cat.id as UserType].description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-[#111827] uppercase tracking-wider">
                Begin Session
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Analytics / Integration Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        <div className="lg:col-span-8 saas-card bg-[#F9FAFB] border-none flex flex-col md:flex-row items-center gap-10 p-10">
          <div className="shrink-0 w-32 h-32 rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-[#111827] text-white">
            <TrendingUp size={48} />
          </div>
          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-bold text-[#111827]">Engine Optimization</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xl">
              Our proprietary synthesis engine is currently running with 98.4% accuracy across all data vectors. Your ideas are protected by end-to-end local hardware encryption.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['Neural Mapping', 'Sentiment Clusters', 'Vector Analysis'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-[#111827] border border-neutral-100 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 saas-card flex flex-col justify-between">
          <div className="space-y-2">
            <h4 className="text-[11px] font-black text-[#6B7280] uppercase tracking-[0.2em]">Live Status</h4>
            <div className="space-y-3 pt-4">
               {[
                 { label: 'Latency', val: '12ms' },
                 { label: 'Throughput', val: '4.2t/s' },
                 { label: 'Uptime', val: '99.9%' }
               ].map(stat => (
                 <div key={stat.label} className="flex justify-between items-center text-xs">
                   <span className="text-[#6B7280]">{stat.label}</span>
                   <span className="font-mono font-bold text-[#111827]">{stat.val}</span>
                 </div>
               ))}
            </div>
          </div>
          <button className="secondary-button w-full mt-6">
            <Settings size={14} />
            Runtime Settings
          </button>
        </div>
      </div>
    </div>
  );
}
