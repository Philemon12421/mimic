import { motion } from 'motion/react';
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Globe, 
  ExternalLink,
  Share2,
  Plus,
  Activity,
  Users
} from 'lucide-react';
import { Logo } from './Logo';

export default function Huddles() {
  const socialPlatforms = [
    { name: 'Instagram', icon: <Instagram size={20} />, handle: '@minic_ignite' },
    { name: 'YouTube', icon: <Youtube size={20} />, handle: 'MINIC Academy' },
    { name: 'TikTok', icon: <Globe size={20} />, handle: '@minic.trends' },
    { name: 'Twitter', icon: <Twitter size={20} />, handle: '@minic_ai' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, handle: 'MINIC Labs' },
  ];

  return (
    <div className="p-8 md:p-16 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-100">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#6B7280] text-[11px] font-bold tracking-[0.2em] uppercase">
            <Users size={14} className="text-[#2563EB]" />
            Community Sync v1.0
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#111827]">
            Integrate your <span className="text-[#6B7280]">audience.</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="primary-button !bg-[#2563EB]">
            <Plus size={16} />
            Connect New Node
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPlatforms.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="saas-card flex flex-col justify-between h-[280px] group hover:border-[#2563EB]/30"
          >
            <div className="flex items-start justify-between">
              <div className="p-4 bg-neutral-50 rounded-xl text-[#111827] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                {platform.icon}
              </div>
              <div className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase tracking-tighter border border-green-100">
                Active
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#111827]">{platform.name}</h3>
                <p className="text-sm text-[#6B7280]">{platform.handle}</p>
              </div>

              <button className="secondary-button w-full group-hover:border-[#2563EB]/50 group-hover:text-[#2563EB]">
                Configure Identity
                <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        ))}

        <button className="saas-card border-dashed flex flex-col items-center justify-center text-center gap-4 hover:bg-neutral-50/50 hover:border-[#111827] transition-all group h-[280px]">
          <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-[#111827] transition-all">
            <Plus size={24} className="text-[#6B7280] group-hover:text-[#111827]" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-[#111827]">Extend Network</h4>
            <p className="text-xs text-[#6B7280]">Add another distribution channel</p>
          </div>
        </button>
      </div>

      {/* Global Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
        <div className="lg:col-span-8 saas-card bg-[#111827] text-white border-none p-12 space-y-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-10 -translate-y-10">
            <Logo size={280} />
          </div>
          
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
              <Share2 size={12} />
              Cross-Platform Logic
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic">
              "We synchronize your synthesis with your audience. Automated captions tailored to each platform's unique algorithm."
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {socialPlatforms.slice(0, 4).map((p, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#111827] bg-white flex items-center justify-center text-[#111827]">
                    {p.icon}
                  </div>
                ))}
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Integrated Intelligence</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 saas-card flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#6B7280] uppercase tracking-widest">
              <Activity size={14} />
              Growth Core
            </div>
            <div className="space-y-6 pt-2">
              {[
                { label: 'Signal Reach', val: '+240%', trend: 'up' },
                { label: 'Cluster Density', val: '0.84', trend: 'stable' },
                { label: 'Sentiment Index', val: 'High', trend: 'up' }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-end border-b border-neutral-50 pb-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-bold text-[#111827]">{item.val}</p>
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-neutral-50 text-[#6B7280]'}`}>
                    {item.trend === 'up' ? '↑' : '→'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="secondary-button w-full mt-8">
            Export Global Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
