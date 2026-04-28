/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Video, 
  PenTool, 
  GraduationCap, 
  Briefcase, 
  Search, 
  TrendingUp, 
  Settings, 
  Users,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Dashboard from './components/Dashboard';
import Huddles from './components/Huddles';
import FlowWizard from './components/FlowWizard';
import IdeaResult from './components/IdeaResult';
import { Logo } from './components/Logo';
import LandingPage from './components/LandingPage';
import { UserType, IdeaOutput } from './types';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<UserType | null>(null);
  const [generatedIdea, setGeneratedIdea] = useState<IdeaOutput | null>(null);

  if (!isAuthenticated) {
    return <LandingPage onStart={() => setIsAuthenticated(true)} />;
  }

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Video size={20} />, label: 'Content Creators', type: 'content_creators' },
    { icon: <PenTool size={20} />, label: 'Bloggers', type: 'bloggers' },
    { icon: <GraduationCap size={20} />, label: 'Students', type: 'students' },
    { icon: <Briefcase size={20} />, label: 'Businesses', type: 'businesses' },
    { icon: <Search size={20} />, label: 'Researchers', type: 'researchers' },
    { icon: <TrendingUp size={20} />, label: 'Trend Hunters', type: 'trend_hunters' },
    { icon: <Users size={20} />, label: 'Huddles' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  const handleMenuClick = (item: any) => {
    if (item.type) {
      setSelectedFlow(item.type as UserType);
      setActiveTab('Generated');
    } else {
      setActiveTab(item.label);
      setSelectedFlow(null);
      setGeneratedIdea(null);
    }
  };

  const renderContent = () => {
    if (generatedIdea) {
      return (
        <IdeaResult 
          idea={generatedIdea} 
          onBack={() => {
            setGeneratedIdea(null);
            setSelectedFlow(null);
            setActiveTab('Dashboard');
          }} 
        />
      );
    }

    if (selectedFlow) {
      return (
        <FlowWizard 
          type={selectedFlow} 
          onComplete={(idea) => setGeneratedIdea(idea)}
          onCancel={() => setSelectedFlow(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard onSelectFlow={(type) => setSelectedFlow(type)} />;
      case 'Huddles':
        return <Huddles />;
      case 'History':
        return <HistoryView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return <Dashboard onSelectFlow={(type) => setSelectedFlow(type)} />;
    }
  };

  const HistoryView = () => (
    <div className="p-16 max-w-5xl mx-auto space-y-16">
      <div className="space-y-4">
        <h2 className="text-5xl font-black tracking-tight">History</h2>
        <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest leading-loose">
          TEMPORAL SIGNAL LOGS // ARCHIVE
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { title: 'The Minimalist Dev Blog Strategy', date: '2024-04-28', score: 92 },
          { title: 'TikTok Math Shorts Architecture', date: '2024-04-27', score: 88 },
          { title: 'SaaS Loyalty Loop Implementation', date: '2024-04-27', score: 94 },
          { title: 'Open Source Sustainability Model', date: '2024-04-26', score: 81 }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-neutral-100 flex items-center justify-between hover:border-black transition-all group group-hover:bg-neutral-50">
            <div className="flex items-center gap-8">
              <span className="text-[10px] font-mono text-neutral-300">00{i+1}</span>
              <div className="space-y-1">
                <h4 className="font-bold text-lg group-hover:text-black">{item.title}</h4>
                <p className="text-[10px] text-neutral-400 font-mono uppercase">{item.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-right">
                <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">Score</p>
                <p className="text-2xl font-black">{item.score}</p>
              </div>
              <button className="p-4 border border-neutral-100 rounded-xl hover:bg-black hover:text-white transition-all">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden text-sm bg-white">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarCollapsed ? 80 : 260 }}
        className="flex flex-col h-full bg-white border-r border-neutral-100 z-50 shrink-0"
      >
        <div className="p-8 pb-4">
          <Logo size={isSidebarCollapsed ? 32 : 40} showText={!isSidebarCollapsed} />
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-8">
          {menuItems.map((item) => (
            <button
              id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
              key={item.label}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                activeTab === item.label ? 'bg-black text-white' : 'text-neutral-400 hover:text-black hover:bg-black/5'
              }`}
            >
              <span className="shrink-0">{item.icon}</span>
              {!isSidebarCollapsed && <span className="font-medium">{item.label}</span>}
              {!isSidebarCollapsed && activeTab === item.label && (
                <motion.div layoutId="active-nav" className="ml-auto w-1 h-1 rounded-full bg-white" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-100 space-y-1">
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="w-full flex items-center gap-4 px-3 py-2 text-neutral-400 hover:text-black transition-colors"
          >
            {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isSidebarCollapsed && <span className="font-medium">Collapse</span>}
          </button>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-4 px-3 py-2 text-neutral-400 hover:text-red-600 transition-colors"
          >
            <LogOut size={18} />
            {!isSidebarCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedFlow || '') + (generatedIdea?.title || '')}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const SettingsView = () => (
  <div className="p-16 max-w-4xl mx-auto space-y-24">
    <div className="flex items-center justify-between">
      <div className="space-y-4">
        <h2 className="text-6xl font-black tracking-tight">Settings</h2>
        <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-widest leading-loose">
          ENGINE PREFERENCES & SECURITY CORE // S_02
        </p>
      </div>
      <div className="px-6 py-3 bg-neutral-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
        Hardware Acceleration Active
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black">Performance Nodes</h3>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Neural Latency', desc: 'Prioritize depth over speed in signal synthesis.' },
            { label: 'Recursive Search', desc: 'Enable multi-pass cluster analysis for obscure niches.' },
            { label: 'Real-time Scrubbing', desc: 'Auto-refresh trend vectors every 60 seconds.' }
          ].map(op => (
            <div key={op.label} className="p-8 border border-neutral-100 flex flex-col gap-4 hover:border-black transition-all group">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{op.label}</span>
                <div className="w-10 h-6 bg-neutral-100 rounded-full p-1 group-hover:bg-black transition-colors flex items-center justify-end">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black">Privacy Protocol</h3>
        </div>
        <div className="space-y-4">
           <div className="p-8 bg-neutral-50 rounded-[2rem] space-y-6">
             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
               <Shield className="text-black" size={24} />
             </div>
             <div className="space-y-2">
               <h4 className="font-bold">Air-Gapped Processing</h4>
               <p className="text-sm text-neutral-500 leading-relaxed">
                 All synthesis occurs locally. No external LLM weightings are used in the final output generation.
               </p>
             </div>
           </div>
           
           <button className="w-full py-6 border border-neutral-100 rounded-[2rem] text-[10px] font-black uppercase tracking-widest hover:border-black hover:bg-black hover:text-white transition-all">
             Purge Engine Memory
           </button>
        </div>
      </section>
    </div>
  </div>
);
