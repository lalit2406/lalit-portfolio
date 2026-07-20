import { motion } from 'framer-motion';
import { Cpu, Server, FileText } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TechBadge from '../ui/TechBadge';
import BrowserFrame from '../ui/BrowserFrame';
import PhoneFrame from '../ui/PhoneFrame';
import StickyNavigation from './StickyNavigation';
import ArchitectureFlow from './ArchitectureFlow';
import { netflixModulesData, netflixCodeSnippet } from '../../data/netflixClone';

export default function CaseStudyNetflix({
  project,
  activeModuleTab,
  setActiveModuleTab,
  activeSection,
  onNavigate,
  onBack
}) {
  const screenshots = {
    ...netflixModulesData,
    home: netflixModulesData['Landing Page']
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
      <StickyNavigation items={navItems} activeSection={activeSection} colorTheme="netflix" />

      {/* Executive Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-4 rounded-xl border border-red-500/10 bg-slate-955/40 space-y-3 text-left animate-fade-in"
      >
        <h3 className="text-lg font-bold text-white font-heading">Executive Summary</h3>
        <p className="text-sm text-slate-400 leading-relaxed font-sans">
          Netflix Clone is a responsive frontend platform recreating the streaming portal experience. It integrates directly with TMDB API endpoints via an optimized Axios pipeline to render movie categories at 60 FPS.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['React', 'JavaScript', 'Axios', 'React Router', 'Movie API', 'Responsive UI'].map((badge) => (
            <TechBadge key={badge} className="border-red-950/40 text-red-300 bg-red-955/20">{badge}</TechBadge>
          ))}
        </div>
      </motion.div>

      {/* 1. OVERVIEW SECTION */}
      <section id="overview" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="OVERVIEW" title="Project Objectives" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-2">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider text-red-500">The Scope</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Design a pixel-perfect catalog layout showcasing fluid poster sliders, genre matching options, and responsive content grids that adapt to compact screen sizes.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-2">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider text-red-500">Key Focus</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Minimize layout shifting and poster rendering delays by structuring responsive image sources and caching API queries locally to prevent redundant network lookups.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PRODUCT GALLERY */}
      <section id="gallery" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="PRODUCT SHOWCASE" 
          title="Interactive Mockups Gallery" 
          description="Explore the key interfaces of the web platform using the tabs below."
        />

        {/* Navigation Tabs */}
        <div role="tablist" aria-label="Interface navigation tabs" className="flex flex-wrap gap-2 pb-2 border-b border-slate-900 overflow-x-auto scrollbar-none">
          {Object.keys(netflixModulesData).map((tab) => (
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
                  layoutId="activeNetflixModuleTab"
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
                <BrowserFrame activeTab={activeTab} urlDomain="netflix.lalit.dev">
                  <img loading="lazy" src={`/images/projects/netflix-clone/${current.desktop}`}
                    alt={`${activeTab} Desktop View`}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </BrowserFrame>
              </motion.div>
            )}

            {/* Mobile Mockup Overlay */}
            {current && current.mobile && (
              <motion.div
                key={`mobile-wrap-${activeTab}`}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-32 md:w-36 z-20 shadow-2xl transition-all"
              >
                <PhoneFrame>
                  <img loading="lazy" src={`/images/projects/netflix-clone/${current.mobile}`}
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
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">SECTION</span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">{current ? current.title || activeTab : activeTab} View</h3>
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
                  <span className="text-xs font-mono tracking-widest text-red-500 uppercase block font-bold">Implementation Detail</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.implementation : ''}</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. UI ARCHITECTURE */}
      <section id="architecture" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="UI ARCHITECTURE" 
          title="Component & Axios Data pipeline" 
          description="Designed to isolate client UI layouts from backend dependencies, routing query lookups through Axios network request brokers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Flowchart */}
          <div className="lg:col-span-7 p-6 rounded-xl border border-slate-900 bg-slate-955/20 flex items-center justify-center">
            <ArchitectureFlow
              colorTheme="netflix"
              nodes={[
                { layer: 'REACT VIEW', tech: 'React UI', detail: 'Grid cards and row categories sliders.' },
                { layer: 'AXIOS ENGINE', tech: 'Axios', detail: 'Handles baseline query URLs and timeout thresholds.' },
                { layer: 'TMDB API', tech: 'Movie API', detail: 'Returns media assets payloads databases.' },
                { layer: 'RENDERED UI', tech: 'Rendered Components', detail: 'Displays grid rows and trailer popups.' }
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
              className="rounded-xl border border-slate-900 bg-slate-955/20 overflow-hidden font-mono text-xs shadow-2xl flex flex-col h-[180px]"
            >
              <div className="h-8 bg-slate-950 border-b border-slate-900 px-4 flex items-center justify-between shrink-0 select-none">
                <span className="text-xs text-slate-400 font-semibold">tmdbClient.js</span>
                <span className="text-[10px] text-red-400 font-bold">Axios</span>
              </div>
              <div className="p-4 flex-1 overflow-auto bg-slate-950/60 text-slate-300 text-left select-text leading-relaxed">
                <pre>{netflixCodeSnippet}</pre>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. ROADMAP TIMELINE */}
      <section id="timeline" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="DEVELOPMENT JOURNEY" title="Milestones Timeline" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Roadmap */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l border-slate-900 space-y-6 select-none">
              {[
                { phase: '1. UI Recreation', date: 'Phase 1', desc: 'Designed the CSS grid patterns, flex rows sliders, and trailer details overlay templates.' },
                { phase: '2. TMDB API Integration', date: 'Phase 2', desc: 'Integrated Axios service handlers to query movie listings and details arrays from TMDB.' },
                { phase: '3. Responsive Optimizations', date: 'Phase 3', desc: 'Tuned CSS aspect-ratio properties and configured dynamic poster asset sizing for mobile.' }
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

          {/* Right Column (40%): Future Enhancements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Planned Enhancements</h3>
            <div className="p-4 rounded-xl border border-slate-905 bg-slate-950 space-y-3 text-xs">
              {[
                { title: 'User Authentication', desc: 'Allow user-specific logins and credentials checks.' },
                { title: 'Custom Watchlist', desc: 'Persist saved movies list inside local storage datasets.' },
                { title: 'Personal Recommendations', desc: 'Integrate content filters suggesting items matching previous clicks.' }
              ].map((feat) => (
                <div key={feat.title} className="space-y-0.5">
                  <div className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                  </div>
                  <p className="text-sm text-slate-455 leading-relaxed pl-3.5">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. REFLECTIONS & LESSONS LEARNED */}
      <section id="reflection" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading category="REFLECTIONS" title="Insights & Retrospective" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Takeaways */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Key Takeaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { topic: 'Fluid Poster Sizing', desc: 'Requesting responsive poster sizes from TMDB reduces loading overhead.', icon: Cpu },
                { topic: 'Query Cache Controls', desc: 'Local caching of fetch queries cuts network traffic and improves transitions.', icon: Server },
                { topic: 'Modular Row Units', desc: 'Encapsulating row items isolates component updates during page scroll.', icon: FileText }
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
            Netflix Clone validates my frontend engineering capabilities in design systems replication, responsive layout grids, and external movie API integrations.
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

        {/* Next Case Study Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          onClick={() => onNavigate('uno')}
          className="p-5 rounded-xl border border-slate-900 bg-slate-955 hover:border-slate-850 hover:bg-slate-955 transition-all cursor-pointer text-left space-y-3 group block focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-red-455 font-bold block">Next Case Study</span>
            <span className="text-sm font-mono text-slate-500 group-hover:text-red-405 transition-colors">View Next Project →</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">UNO Multiplayer Card Game</h3>
            <p className="text-sm text-slate-400 font-sans">Real-time card game engine built over WebSockets</p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['React', 'Socket.io', 'Node.js'].map((tech) => (
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
