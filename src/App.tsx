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
  Download,
  Shield
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
    <div className="p-8 md:p-16 max-w-5xl mx-auto space-y-12">
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-[0.2em]">Archive</span>
        <h2 className="text-4xl font-bold tracking-tight text-[#111827]">Temporal Signal History</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { title: 'The Minimalist Dev Blog Strategy', date: '2024-04-28', score: 92 },
          { title: 'TikTok Math Shorts Architecture', date: '2024-04-27', score: 88 },
          { title: 'SaaS Loyalty Loop Implementation', date: '2024-04-27', score: 94 },
          { title: 'Open Source Sustainability Model', date: '2024-04-26', score: 81 }
        ].map((item, i) => (
          <div key={i} className="saas-card flex items-center justify-between group cursor-pointer hover:border-[#111827] transition-all">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] flex items-center justify-center text-xs font-bold text-[#6B7280] group-hover:bg-[#111827] group-hover:text-white transition-all">
                0{i+1}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#111827]">{item.title}</h4>
                <p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">{item.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="text-right">
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest">Score</p>
                <p className="text-2xl font-bold text-[#111827]">{item.score}</p>
              </div>
              <button className="p-3 bg-neutral-50 rounded-xl hover:bg-[#111827] hover:text-white transition-all text-[#6B7280]">
                <Download size={18} />
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
        animate={{ width: isSidebarCollapsed ? 80 : 280 }}
        className="flex flex-col h-full bg-white border-r border-[#F3F4F6] z-50 shrink-0"
      >
        <div className="p-8 pb-4">
          <Logo size={isSidebarCollapsed ? 32 : 40} showText={!isSidebarCollapsed} />
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-8 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.2em]">Main Navigation</div>
          {menuItems.map((item) => (
            <button
              id={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
              key={item.label}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-all duration-200 group relative ${
                activeTab === item.label ? 'bg-[#F9FAFB] text-[#111827]' : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F9FAFB]/50'
              }`}
            >
              {activeTab === item.label && (
                <motion.div 
                  layoutId="active-pill" 
                  className="absolute left-0 w-1 h-5 bg-[#111827] rounded-r-full" 
                />
              )}
              <span className={`shrink-0 ${activeTab === item.label ? 'text-[#111827]' : 'text-[#9CA3AF] group-hover:text-[#111827]'}`}>{item.icon}</span>
              {!isSidebarCollapsed && <span className={`font-semibold tracking-tight ${activeTab === item.label ? 'text-[#111827]' : ''}`}>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#F3F4F6] space-y-1">
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-2 text-[#6B7280] hover:text-[#111827] transition-colors rounded-lg hover:bg-neutral-50"
          >
            {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isSidebarCollapsed && <span className="font-semibold">Collapse</span>}
          </button>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-3 py-2 text-[#6B7280] hover:text-red-600 transition-colors rounded-lg hover:bg-red-50/50"
          >
            <LogOut size={18} />
            {!isSidebarCollapsed && <span className="font-semibold">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedFlow || '') + (generatedIdea?.title || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
  <div className="p-8 md:p-16 max-w-5xl mx-auto space-y-16">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-100">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#6B7280] text-[11px] font-bold tracking-[0.2em] uppercase">
          <Settings size={14} className="text-[#111827]" />
          Platform Configuration
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-[#111827]">Settings</h2>
      </div>
      <div className="px-4 py-2 bg-[#F9FAFB] border border-neutral-100 rounded-full text-[10px] font-bold text-[#111827] uppercase tracking-widest">
        Hardware Acceleration: ON
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <section className="space-y-8">
        <div className="pb-4 border-b border-neutral-50">
          <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest">Performance Nodes</h3>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Neural Latency', desc: 'Prioritize depth over speed in signal synthesis.' },
            { label: 'Recursive Search', desc: 'Enable multi-pass cluster analysis for obscure niches.' },
            { label: 'Real-time Scrubbing', desc: 'Auto-refresh trend vectors every 60 seconds.' }
          ].map(op => (
            <div key={op.label} className="saas-card bg-white flex flex-col gap-4 group cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#111827]">{op.label}</span>
                <div className="w-10 h-6 bg-neutral-100 rounded-full p-1 group-hover:bg-[#111827]/10 transition-colors flex items-center justify-end">
                  <div className="w-4 h-4 bg-white shadow-sm border border-neutral-200 rounded-full" />
                </div>
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="pb-4 border-b border-neutral-50">
          <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest">Security & Protocol</h3>
        </div>
        <div className="space-y-6">
           <div className="p-8 bg-[#111827] text-white rounded-3xl space-y-6 shadow-xl shadow-[#111827]/10">
             <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
               <Shield className="text-white" size={24} />
             </div>
             <div className="space-y-2">
               <h4 className="font-bold text-lg">Local Logic Processing</h4>
               <p className="text-xs text-neutral-400 leading-relaxed">
                 All brainstorming and synthesis processes occur locally within your secured session. No data is stored on remote servers.
               </p>
             </div>
           </div>
           
           <button className="secondary-button w-full py-4 text-red-600 hover:bg-red-50 hover:border-red-100">
             Clear Platform Cache
           </button>
        </div>
      </section>
    </div>
  </div>
);
