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
} from 'lucide-react';
import { Logo } from './Logo';

export default function Huddles() {
  const socialPlatforms = [
    { name: 'Instagram', icon: <Instagram size={24} />, handle: '@minic_ignite' },
    { name: 'YouTube', icon: <Youtube size={24} />, handle: 'MINIC Academy' },
    { name: 'TikTok', icon: <Globe size={24} />, handle: '@minic.trends' },
    { name: 'Twitter', icon: <Twitter size={24} />, handle: '@minic_ai' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, handle: 'MINIC Labs' },
  ];

  return (
    <div className="p-16 max-w-7xl mx-auto space-y-32">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-10">
          <Logo size={56} />
        </div>
        <h1 className="text-7xl font-black tracking-tight text-neutral-900 leading-none">COLLABORATION<br /><span className="text-neutral-200">SURFACE.</span></h1>
        <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed mt-6 uppercase tracking-widest font-mono">Sync your social presence to activate intelligent automated exports and distribution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialPlatforms.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="p-10 space-y-8 group border border-neutral-100 hover:border-black transition-all bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="p-5 bg-neutral-50 rounded-lg transition-all duration-300 group-hover:bg-black group-hover:text-white text-black">
                {platform.icon}
              </div>
              <Plus size={18} className="text-neutral-100 group-hover:text-black transition-colors" />
            </div>

            <div className="space-y-1">
              <h3 className="font-black text-xl text-neutral-900 uppercase tracking-tighter">{platform.name}</h3>
              <p className="text-neutral-400 font-mono text-[10px] tracking-widest uppercase">{platform.handle}</p>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-4 border border-neutral-100 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Link Identity
              <ExternalLink size={14} />
            </button>
          </motion.div>
        ))}

        <div className="p-10 border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center space-y-4 hover:border-black transition-all cursor-pointer bg-neutral-50/20 group">
          <Plus size={28} strokeWidth={1} className="text-neutral-300 group-hover:text-black transition-colors" />
          <span className="text-[10px] uppercase tracking-widest font-black text-neutral-400">Add Platform</span>
        </div>
      </div>

      {/* Share Section */}
      <section className="space-y-16">
        <div className="flex items-center gap-8">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] whitespace-nowrap">Global Distribution</h2>
          <div className="h-px w-full bg-neutral-100" />
          <Share2 className="text-neutral-400 shrink-0" size={18} />
        </div>

        <div className="p-20 flex flex-col items-center justify-center space-y-12 border border-neutral-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-neutral-100 opacity-20 transform translate-x-10 -translate-y-10 scale-150 pointer-events-none">
            <Logo size={300} />
          </div>
          
          <p className="text-center text-neutral-900 max-w-2xl text-2xl font-medium leading-tight tracking-tight relative z-10 italic">
            "MINIC synchronizes your intelligence with your audience. Once your huddles are active, we generate copy-ready captions tailored to each platform's unique algorithm."
          </p>
          
          <div className="flex items-center gap-10 relative z-10">
            <div className="flex -space-x-3 overflow-hidden">
               {socialPlatforms.slice(0, 4).map((p, i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-neutral-50 flex items-center justify-center text-neutral-900 shadow-sm">
                   {p.icon}
                 </div>
               ))}
            </div>
            <div className="h-6 w-px bg-neutral-200" />
            <span className="text-[10px] font-black uppercase tracking-widest text-black">4 Nodes Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          <div className="p-12 border border-neutral-100 rounded-[2.5rem] space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest">Growth Analytics</h4>
            <div className="space-y-4">
              {[
                { label: 'Signal Reach', val: '+240%' },
                { label: 'Cluster Density', val: '0.84' },
                { label: 'Sentiment Index', val: 'Highly Positive' }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center border-b border-neutral-50 pb-2">
                  <span className="text-xs text-neutral-400 font-mono uppercase">{item.label}</span>
                  <span className="font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 bg-neutral-900 text-white rounded-[2.5rem] space-y-6 flex flex-col justify-center text-center">
            <div className="flex justify-center mb-4">
              <Logo size={40} />
            </div>
            <p className="text-sm font-medium leading-relaxed opacity-60 italic">
              "The automated distribution allows me to focus on synthesis while the engine handles the narrative architecture."
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Strategist</span>
          </div>
        </div>
      </section>
    </div>
  );
}
