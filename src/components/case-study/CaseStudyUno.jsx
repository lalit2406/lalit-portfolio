import { motion } from 'framer-motion';
import { AlertCircle, Lightbulb, Check, Cpu, Server, MessageSquare } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TechBadge from '../ui/TechBadge';
import BrowserFrame from '../ui/BrowserFrame';
import PhoneFrame from '../ui/PhoneFrame';
import StickyNavigation from './StickyNavigation';
import ArchitectureFlow from './ArchitectureFlow';
import { unoModulesData, unoCodeSnippet } from '../../data/uno';

export default function CaseStudyUno({
  project,
  activeModuleTab,
  setActiveModuleTab,
  activeSection,
  onNavigate,
  onBack
}) {
  const screenshots = {
    ...unoModulesData,
    home: unoModulesData.Lobby
  };
  const activeTab = activeModuleTab;
  const current = screenshots[activeTab] ?? screenshots.home;

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <>
      <StickyNavigation items={navItems} activeSection={activeSection} colorTheme="uno" />

      {/* Executive Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-4 rounded-xl border border-red-500/10 bg-slate-950/60 space-y-3 text-left"
      >
        <h3 className="text-lg font-bold text-white font-heading">Executive Summary</h3>
        <p className="text-sm text-slate-400 leading-relaxed font-sans">
          UNO Multiplayer is a real-time card game engine supporting up to 4 active players. It leverages a server-side state-machine and Socket.io rooms to resolve matches and card validations under 15ms.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['React', 'Socket.io', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion'].map((badge) => (
            <TechBadge key={badge} className="border-red-950/40 text-red-300 bg-red-955/20">{badge}</TechBadge>
          ))}
        </div>
      </motion.div>

      {/* 1. PROJECT OVERVIEW */}
      <section id="overview" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="OVERVIEW" title="Project Overview" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-950 hover:border-slate-800 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5 text-red-500">
                <AlertCircle size={18} />
                <h3 className="text-lg font-bold text-white font-heading">Synchronization Lag</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Real-time browser matches suffer from out-of-order player events and desynchronizations on slow or dropped client connection pipes.
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-950 hover:border-slate-800 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5 text-amber-500">
                <Lightbulb size={18} />
                <h3 className="text-lg font-bold text-white font-heading">Real-Time State Machine</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Developed a central Socket server holding a validation state-machine that verifies card plays before broadcasting updates to room sockets.
              </p>
            </motion.div>
          </div>

          {/* Right Column (40%): Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Project Information</h3>
            <div className="space-y-2.5 font-sans text-sm">
              {[
                { label: 'Industry', value: 'Real-Time Gaming' },
                { label: 'Platform', value: 'WebSocket SPA' },
                { label: 'Architecture', value: 'Socket.io Server' },
                { label: 'Timeline', value: '8 Weeks Development' },
                { label: 'Role', value: 'Full Stack Game Dev' },
                { label: 'Development Type', value: 'Open-Source Project' }
              ].map((row, idx) => (
                <div key={idx} className={`flex justify-between items-center pb-2 \${idx < 5 ? 'border-b border-slate-900/60' : ''}`}>
                  <span className="text-slate-500 font-mono font-bold uppercase text-xs">{row.label}</span>
                  <span className="text-slate-355 font-medium text-sm text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom highlighted engineering goal card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-4 rounded-xl border border-red-900/10 bg-slate-955 hover:border-red-900/20 transition-all flex flex-col md:flex-row gap-4 items-start justify-between"
        >
          <div className="space-y-1 text-left max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-red-500 font-bold block">Engineering Goal</span>
            <p className="text-sm text-slate-355 leading-relaxed font-sans font-medium">
              Create an event-driven socket engine that resolves packet collision errors and prevents duplicate plays on network disruptions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section id="gallery" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="PRODUCT SHOWCASE" 
          title="Interactive Playroom Gallery" 
          description="Click through the tabs below to explore different parts of the application."
        />

        {/* Navigation Tabs */}
        <div role="tablist" aria-label="Interface navigation tabs" className="flex flex-wrap gap-2 pb-2 border-b border-slate-900 overflow-x-auto scrollbar-none">
          {Object.keys(unoModulesData).map((tab) => (
            <button
              role="tab"
              id={`tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              aria-selected={activeModuleTab === tab}
              aria-controls={`panel-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              key={tab}
              onClick={() => setActiveModuleTab(tab)}
              className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none transition-colors duration-200 border ${
                activeModuleTab === tab
                  ? 'border-transparent text-red-405'
                  : 'bg-slate-955 border-slate-900 text-slate-500 hover:text-slate-300'
              }`}
            >
              {activeModuleTab === tab && (
                <motion.div
                  layoutId="activeUnoModuleTab"
                  className="absolute inset-0 bg-red-500/15 border border-red-500/30 rounded-lg -z-10"
                  transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div role="tabpanel" id={`panel-${activeModuleTab.toLowerCase().replace(/\s+/g, '-')}`} aria-labelledby={`tab-${activeModuleTab.toLowerCase().replace(/\s+/g, '-')}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center p-4 rounded-xl border border-slate-900 bg-slate-955/20 min-h-[360px] relative">
            
            {/* Desktop Mockup */}
            {current && current.desktop && (
              <motion.div
                key={`desktop-wrap-${activeTab}`}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                <BrowserFrame activeTab={activeTab} urlDomain="uno-multiplayer.vercel.app">
                  <img loading="lazy" src={`/images/projects/uno/${current.desktop}`}
                    alt={`${activeTab} Desktop View`}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </BrowserFrame>
              </motion.div>
            )}

            {/* Overlapping/Centered Mobile Mockup */}
            {current && current.mobile && (
              <motion.div
                key={`mobile-wrap-${activeTab}`}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                className={
                  current.desktop
                    ? 'absolute bottom-2 right-2 md:bottom-4 md:right-4 w-32 md:w-36 z-20 shadow-2xl transition-all'
                    : 'w-48 max-w-full'
                }
              >
                <PhoneFrame>
                  <img loading="lazy" src={`/images/projects/uno/${current.mobile}`}
                    alt={`${activeTab} Mobile View`}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </PhoneFrame>
              </motion.div>
            )}

          </div>

          {/* Right Side: Information Panel */}
          <motion.div
            key={`info-wrap-${activeTab}`}
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Module Details */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-955 space-y-3 text-left">
              <div>
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">STAGE NAME</span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">{current ? current.title || activeTab : activeTab}</h3>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-900/60">
                <div>
                  <span className="text-xs font-mono tracking-widest text-red-500 uppercase block font-bold">Purpose</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.purpose : ''}</p>
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-red-500 uppercase block font-bold">Key Functionality</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.functionality : ''}</p>
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-red-500 uppercase block font-bold">Engineering Implementation</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.implementation : ''}</p>
                </div>
              </div>
            </div>

            {/* Tech & Engineering Highlights */}
            {current && current.techs && (
              <div className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 space-y-3 text-left">
                <div>
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">STAGE TECHNOLOGIES</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {current.techs.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded border border-slate-900 bg-slate-955 text-slate-355 text-xs font-sans">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900/60">
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">Engineering Highlights</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {current.chips && current.chips.map((hl) => (
                      <span key={hl} className="px-2.5 py-0.5 rounded border border-slate-900 bg-red-500/5 text-red-400 text-xs font-mono">
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </motion.div>

        </div>
      </section>

      {/* 3. SYSTEM ARCHITECTURE & TECHNICAL DECISIONS */}
      <section id="architecture" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="SYSTEM TOPOLOGY" 
          title="Socket Event Broker & State Pipeline" 
          description="The platform routes player inputs via WebSocket actions directly into isolated server state modules, triggering game sync updates."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Flowchart */}
          <div className="lg:col-span-7 p-6 rounded-xl border border-slate-900 bg-slate-955/20 flex items-center justify-center">
            <ArchitectureFlow
              colorTheme="uno"
              nodes={[
                { layer: 'CLIENT VIEW', tech: 'React Client', detail: 'Renders dynamic card hands and lobby selectors.' },
                { layer: 'SOCKET IO', tech: 'Socket.io', detail: 'Pipes player events directly to room namespaces.' },
                { layer: 'ENGINE LAYER', tech: 'Game Engine', detail: 'Checks draw limits and card matching criteria.' },
                { layer: 'STATE MANAGER', tech: 'State Manager', detail: 'Constructs next turn states and deck bounds.' },
                { layer: 'ROOM BROADCAST', tech: 'Room Broadcast', detail: 'Dispatches synced gameplay states to all clients.' }
              ]}
            />
          </div>

          {/* Right Column (40%): Code Snippet */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-slate-900 bg-slate-955/20 overflow-hidden font-mono text-xs shadow-2xl flex flex-col h-[230px]"
            >
              <div className="h-8 bg-slate-950 border-b border-slate-900 px-4 flex items-center justify-between shrink-0 select-none">
                <span className="text-xs text-slate-400 font-semibold">gameController.js</span>
                <span className="text-[10px] text-red-400 font-bold">Express</span>
              </div>
              <div className="p-4 flex-1 overflow-auto bg-slate-950/60 text-slate-300 text-left select-text leading-relaxed">
                <pre>{unoCodeSnippet}</pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-3"
            >
              <h3 className="text-lg font-bold text-white font-heading">Key Technical Decisions</h3>
              <div className="space-y-2.5 font-sans text-sm">
                <div className="flex gap-2.5 items-start">
                  <Check size={14} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-slate-400 leading-normal">
                    <strong>Transaction Sequence Tokens</strong>: Validates client inputs with chronological sequence tags to avoid double card plays.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Check size={14} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-slate-400 leading-normal">
                    <strong>Server Authority Model</strong>: Suppresses client-side state overwriting, isolating game rules evaluation on the backend.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. GAMEPLAY ROADMAP */}
      <section id="timeline" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="TIMELINE" title="Product Development Stages" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Workflow Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l border-slate-900 space-y-8 max-w-3xl select-none">
              {[
                { phase: '1. Research & Analysis', date: 'Weeks 1-2', desc: 'Mapped desynchronization scenarios and analyzed latency checks.' },
                { phase: '2. Architecture Design', date: 'Weeks 3-4', desc: 'Designed the centralized server-side state-machine modules.' },
                { phase: '3. Core Development', date: 'Weeks 5-6', desc: 'Integrated Socket namespaces, color-picking logic, and turn handshakes.' },
                { phase: '4. Optimization & Release', date: 'Weeks 7-8', desc: 'Implemented state token validations and compressed packet sizes.' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-955 border-2 border-red-500 z-10" />
                  
                  <span className="text-xs font-mono text-red-400 font-bold block">{step.date}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5 font-heading">{step.phase}</h4>
                  <p className="text-xs text-slate-455 leading-relaxed mt-1 font-sans">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (40%): Validation Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 p-4 rounded-xl border border-slate-900 bg-slate-955/20 space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">Validation Checklist</span>
            <div className="grid grid-cols-1 gap-2.5 font-sans text-sm">
              {[
                'Websocket lobby events synchronize under 15ms overhead',
                'Server validation correctly drops illegal card play events',
                'Chat box messages update list coordinates seamlessly',
                'Color picker modal block inputs from non-active players',
                'Disconnect events trigger dynamic room status changes',
                'Client rendering maintains a stable 60 FPS build'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <Check size={14} className="text-red-500 mt-0.5 shrink-0" />
                  <span className="text-slate-350 font-medium text-sm leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. LESSONS LEARNED & TAKEAWAYS */}
      <section id="reflection" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading category="RETROSPECTIVE" title="Insights & Retrospective" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Lessons Learned */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { topic: 'State Sync Throttling', desc: 'Throttling player logs broadcasts optimizes network utilization.', icon: Cpu },
                { topic: 'Lobby Namespace Isolation', desc: 'Separating rooms into isolated namespaces prevents message leaks.', icon: Server },
                { topic: 'Dynamic Action Triggers', desc: 'Mapping cards actions to clean controller files simplifies additions.', icon: MessageSquare }
              ].map((lesson, idx) => {
                const IconComp = lesson.icon;
                return (
                  <motion.div
                    key={lesson.topic}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 rounded-xl border border-slate-900 bg-slate-950 hover:border-slate-800 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-red-450">
                        <IconComp size={12} />
                      </div>
                      <h4 className="text-lg font-bold text-white font-heading">{lesson.topic}</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans pt-0.5">{lesson.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (40%): Future Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Planned Enhancements</h3>
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-3">
              {[
                { title: 'AI Bot Replacements', desc: 'Auto-spawn bot entities to cover disconnected player slots.' },
                { title: 'Ranked Leaderboards', desc: 'Track player wins and establish ranking database schemas.' },
                { title: 'Custom Card Cosmetics', desc: 'Offer custom card layout themes and avatar indicators.' }
              ].map((feat) => (
                <div key={feat.title} className="space-y-0.5">
                  <div className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                  </div>
                  <p className="text-sm text-slate-455 leading-relaxed pl-3.5">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Quote & Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 rounded-xl border border-slate-905 bg-slate-955 space-y-4 text-left"
        >
          <h3 className="text-lg font-bold text-white font-heading">Final Thoughts</h3>
          <p className="text-sm text-slate-355 leading-relaxed font-sans">
            UNO Multiplayer shows my capacity to build event-driven, real-time application pipelines validating dynamic user actions with sub-15ms overhead latency.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-sm font-semibold text-white transition-all shadow-md shadow-red-500/10 inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white border border-slate-800 transition-all inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
            >
              GitHub Repository
            </a>
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl bg-slate-955 hover:bg-slate-900 text-sm font-semibold text-slate-455 hover:text-white border border-slate-900 transition-all inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
            >
              Back to Projects
            </button>
          </div>
        </motion.div>

        {/* Next Case Study Preview Card (Direct link back to RS Education) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          onClick={() => onNavigate('rseducation')}
          className="p-5 rounded-xl border border-slate-900 bg-slate-955 hover:border-slate-850 hover:bg-slate-955 transition-all cursor-pointer text-left space-y-3 group block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-red-455 font-bold block">Next Case Study</span>
            <span className="text-sm font-mono text-slate-500 group-hover:text-red-405 transition-colors">View Next Project →</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">RS Education</h3>
            <p className="text-sm text-slate-400 font-sans">Educational Services Portal Case Study</p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['React', 'Node.js', 'MongoDB'].map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded border border-slate-900 bg-slate-900/60 text-slate-355 text-xs font-sans">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
