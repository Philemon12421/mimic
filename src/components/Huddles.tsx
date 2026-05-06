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
  Users,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';

export default function Huddles() {
  const socialPlatforms = [
    { name: 'Instagram', icon: <Instagram size={24} />, handle: '@minic_ignite' },
    { name: 'YouTube', icon: <Youtube size={24} />, handle: 'MINIC Academy' },
    { name: 'Twitter', icon: <Twitter size={24} />, handle: '@minic_labs' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, handle: 'MINIC Labs' },
  ];

  return (
    <div className="p-8 md:p-24 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-16 border-b border-[#E5E7EB]">
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-3 text-[#6B7280] text-[11px] font-black tracking-[0.3em] uppercase">
            <Users size={16} className="text-[#111827]" />
            Audience Distribution v1.2
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#111827] leading-[0.9]">
            Integrate your <br />
            <span className="text-neutral-400">audience.</span>
          </h1>
        </div>
        
        <button className="primary-button group">
          <Plus size={20} className="group-hover:rotate-90 transition-transform" />
          Synchronize Node
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialPlatforms.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="saas-card-glow p-8 flex flex-col justify-between aspect-square group hover:border-[#111827]/30 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-[20px] flex items-center justify-center text-[#111827] border border-[#E5E7EB] group-hover:bg-[#111827] group-hover:text-white transition-all">
                {platform.icon}
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight text-[#111827]">{platform.name}</h3>
                <p className="text-[11px] font-black uppercase tracking-widest text-[#6B7280]">{platform.handle}</p>
              </div>
              
              <div className="h-px bg-[#E5E7EB] w-full" />
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#111827] opacity-0 group-hover:opacity-100 transition-opacity">
                Configure Protocol <ChevronRight size={12} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
        <div className="lg:col-span-12 xl:col-span-8 saas-card bg-[#111827] text-white border-none p-16 space-y-10 overflow-hidden relative shadow-2xl shadow-black/20">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-20 -translate-y-20">
            <Logo size={400} />
          </div>
          
          <div className="relative z-10 space-y-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/5 backdrop-blur-md">
              <Share2 size={12} />
              Algorithmic Logic Distribution
            </div>
            <p className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight text-neutral-200">
              "We synthesize your intellect into platform-specific vectors. Automated resonance across every known audience node."
            </p>
            
            <div className="flex items-center gap-8 pt-6">
              <div className="flex -space-x-4">
                {socialPlatforms.map((p, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#111827] bg-white flex items-center justify-center text-[#111827]">
                    {p.icon}
                  </div>
                ))}
              </div>
              <div className="h-6 w-px bg-white/10" />
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-neutral-500">Universal Hub Active</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-12 xl:col-span-4 saas-card-glow p-12 space-y-12 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-[11px] font-black text-[#6B7280] uppercase tracking-[0.3em]">
              <Activity size={18} />
              Growth Vectors
            </div>
            <div className="space-y-8">
              {[
                { label: 'Network Signal', val: '+240%', desc: 'Reach velocity' },
                { label: 'Active Clusters', val: '12.4k', desc: 'Node density' },
                { label: 'Sentiment Index', val: '0.98', desc: 'Signal quality' }
              ].map(item => (
                <div key={item.label} className="space-y-2 group cursor-default">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] text-[#6B7280] font-black uppercase tracking-[0.2em]">{item.label}</p>
                    <p className="text-3xl font-black text-[#111827]">{item.val}</p>
                  </div>
                  <div className="h-1 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      className="h-full bg-[#111827]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="secondary-button w-full">
            Export Global Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
