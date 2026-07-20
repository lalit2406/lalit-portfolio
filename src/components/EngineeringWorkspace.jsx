import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { techEcosystem } from '../data/skills';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';
import Tag from './ui/Tag';

const consoleScript = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: ['Lalit', 'Software Engineer'] },
  { type: 'command', text: 'current_focus' },
  { type: 'output', text: ['Building scalable MERN applications'] },
  { type: 'command', text: 'strongest_project' },
  { type: 'output', text: ['RS Education Solution', 'Enterprise Student Management Platform'] },
  { type: 'command', text: 'stack' },
  { type: 'output', text: ['React', 'Node.js', 'Express', 'MongoDB'] },
  { type: 'command', text: 'git status' },
  { type: 'output', text: ['On branch production', '', 'Working tree clean'] },
  { type: 'command', text: 'npm run build' },
  { type: 'output', text: ['✓ Build completed successfully'] },
  { type: 'command', text: 'currently_learning' },
  { type: 'output', text: ['System Design', 'Advanced Backend Architecture'] },
  { type: 'command', text: 'availability' },
  { type: 'output', text: ['Open To Work'] }
];

const techTooltipDetails = {
  React: { status: 'Advanced', details: 'Experience: 2+ Yrs', desc: 'Reusable Components, Hooks architecture, Performance Tuning' },
  JavaScript: { status: 'Advanced', details: 'ES6+ Runtime', desc: 'Event Loop, Promises/Async, Scope & Closures' },
  'Tailwind CSS': { status: 'Advanced', details: 'Utility CSS', desc: 'Responsive Layouts, Custom Plugins, Design Tokens' },
  Vite: { status: 'Advanced', details: 'Build Engine', desc: 'Fast HMR setups, Rollup configs, Static Bundling' },
  'Node.js': { status: 'Advanced', details: 'V8 Runtime', desc: 'Non-blocking I/O, File System APIs, Clusters' },
  Express: { status: 'Advanced', details: 'Router API', desc: 'Custom Middlewares, Route Groups, Rate Limiting' },
  MongoDB: { status: 'Intermediate', details: 'NoSQL DBMS', desc: 'Aggregation frameworks, Mongoose schemas, Indexing' },
  'Socket.io': { status: 'Intermediate', details: 'WebSocket Lib', desc: 'Realtime namespaces, Rooms syncing, Binary channels' },
  Git: { status: 'Advanced', details: 'Version Sync', desc: 'Interactive rebasing, Cherry-picking, Branch flows' },
  GitHub: { status: 'Advanced', details: 'Hosting Platform', desc: 'PR Reviews, GitHub Actions CI/CD workflows' },
  'VS Code': { status: 'Advanced', details: 'Modern IDE', desc: 'Remote-SSH configs, debugging configurations, workspaces' },
  Postman: { status: 'Advanced', details: 'API Client', desc: 'Automated request testing, Environment configurations' },
  Vercel: { status: 'Advanced', details: 'SaaS Deploy', desc: 'Edge routing, serverless executions, instant CDN deployments' },
  Render: { status: 'Intermediate', details: 'Cloud Platform', desc: 'Web Service hosting, automated git sync, cron jobs' }
};

// Backend micro status flipper
function BackendMicroAnimation() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: 'GET', color: 'text-emerald-400 bg-emerald-500/10' },
    { label: 'POST', color: 'text-blue-400 bg-blue-500/10' },
    { label: '200 OK', color: 'text-indigo-400 bg-indigo-500/10' }
  ];

  return (
    <div className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider transition-colors duration-500 shrink-0 ${steps[step].color}`}>
      {steps[step].label}
    </div>
  );
}

// Category visual identities
const catAnimations = {
  Frontend: (
    <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
      <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] rotate-45" />
      <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] -rotate-45" />
      <div className="w-1.5 h-1.5 rounded-full bg-blue-450 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
    </div>
  ),
  Backend: <BackendMicroAnimation />,
  Database: (
    <div className="relative w-4 h-5 flex flex-col justify-between items-center py-0.5 shrink-0">
      <div className="w-3 h-0.5 rounded-full border border-emerald-500/35 bg-emerald-950/20 animate-pulse" />
      <div className="w-3 h-1 border-x border-b border-emerald-500/25 bg-emerald-950/10 rounded-b-full -mt-0.5" />
      <div className="w-3 h-1 border-x border-b border-emerald-500/25 bg-emerald-950/10 rounded-b-full -mt-0.5" />
    </div>
  ),
  Realtime: (
    <div className="flex items-center justify-center w-5 h-5 shrink-0">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
      </div>
    </div>
  ),
  Deployment: (
    <div className="relative w-5 h-4 flex items-center justify-center text-teal-400 shrink-0">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
      <div className="absolute top-0.5 w-1 h-1 border-t-2 border-r-2 border-teal-400 -rotate-45 animate-[bounce_1.5s_infinite]" />
    </div>
  ),
  Tools: (
    <div className="relative w-5 h-4 flex items-center justify-center shrink-0">
      <svg className="w-3.5 h-3.5 text-red-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    </div>
  )
};

// Premium Card with mouse spotlight reaction
function SpotlightCard({ children, className = '', hoverable = true, liftClass = 'hover:-translate-y-1' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const currentTarget = e.currentTarget;
    window.requestAnimationFrame(() => {
      const rect = currentTarget.getBoundingClientRect();
      setMousePos({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    });
  };

  return (
    <GlassCard
      className={`relative transition-all duration-300 hover:shadow-2xl ${liftClass} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      hoverable={hoverable}
    >
      {/* Spotlight Radial Light */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.08), transparent)`,
          }}
        />
      )}
      {children}
    </GlassCard>
  );
}

export default function EngineeringWorkspace() {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentTyped, setCurrentTyped] = useState('');
  const [scriptIdx, setScriptIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsTerminalVisible(entry.isIntersecting);
    }, { threshold: 0.05 });
    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Simulated typing session loop
  useEffect(() => {
    if (!isTerminalVisible) return;
    if (scriptIdx >= consoleScript.length) {
      const restartTimer = setTimeout(() => {
        setTerminalOutput([]);
        setCurrentTyped('');
        setScriptIdx(0);
        setCharIdx(0);
      }, 2000); // 2s delay at output completion
      return () => clearTimeout(restartTimer);
    }

    const item = consoleScript[scriptIdx];

    if (item.type === 'command') {
      if (charIdx < item.text.length) {
        // Vary typing speed naturally (30ms - 110ms)
        const delay = Math.floor(Math.random() * 80) + 30;
        const typingTimer = setTimeout(() => {
          setCurrentTyped((prev) => prev + item.text[charIdx]);
          setCharIdx((prev) => prev + 1);
        }, delay);
        return () => clearTimeout(typingTimer);
      } else {
        const finishTimer = setTimeout(() => {
          setTerminalOutput((prev) => [...prev, `> ${item.text}`]);
          setCurrentTyped('');
          setScriptIdx((prev) => prev + 1);
          setCharIdx(0);
        }, 200);
        return () => clearTimeout(finishTimer);
      }
    } else {
      const printTimer = setTimeout(() => {
        setTerminalOutput((prev) => [...prev, ...item.text]);
        setScriptIdx((prev) => prev + 1);
        setCharIdx(0);
      }, 250);
      return () => clearTimeout(printTimer);
    }
  }, [scriptIdx, charIdx, isTerminalVisible]);

  return (
    <section id="workspace" className="relative py-24 px-6 overflow-hidden bg-slate-950">
      {/* Background grain noise layer */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none mix-blend-overlay z-0" />

      {/* Grid line patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Central lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(99,102,241,0.03)_0%,rgba(139,92,246,0.015)_50%,rgba(0,0,0,0)_100%)] pointer-events-none -z-10" />

      {/* Tiny sparse particles */}
      <div className="absolute left-[20%] top-[25%] w-1.5 h-1.5 rounded-full bg-blue-500/10 blur-[1px] pointer-events-none" />
      <div className="absolute right-[15%] top-[40%] w-1 h-1 rounded-full bg-purple-500/10 blur-[1px] pointer-events-none" />
      <div className="absolute left-[35%] bottom-[20%] w-1.5 h-1.5 rounded-full bg-indigo-500/10 blur-[1px] pointer-events-none" />

      <Container size="default" className="relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          badge="ENGINEERING PROFILE"
          title={<>Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Workspace</span></>}
          subtitle="A real-time snapshot of the technologies, workflows and engineering principles I use to build production-quality software."
        />

        {/* Console & Tech Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Shell Terminal Panel (45%) */}
          <motion.div
            ref={terminalRef}
            className="lg:col-span-5 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeUp}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hoverable={false} className="border border-slate-800/40 font-mono shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[380px]">
              {/* Terminal Title Bar */}
              <div className="h-9 bg-slate-950 border-b border-slate-900/60 px-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1.5 font-semibold">
                  <TerminalIcon size={10} className="text-slate-650" />
                  sh
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Workspace body */}
              <div className="p-5 flex-1 overflow-y-auto bg-slate-950/20 text-xs space-y-2 select-text text-left">
                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={line.startsWith('>') ? 'text-blue-400 font-semibold' : 'text-slate-300 pl-3 leading-relaxed'}
                  >
                    {line}
                  </div>
                ))}
                
                {/* Current line being typed */}
                {scriptIdx < consoleScript.length && consoleScript[scriptIdx].type === 'command' && (
                  <div className="text-blue-400 font-semibold">
                    &gt; {currentTyped}
                    <span className="w-1.5 h-3.5 bg-blue-500 inline-block ml-0.5 animate-pulse" />
                  </div>
                )}

                {/* Blinking cursor while printing or waiting */}
                {(scriptIdx >= consoleScript.length || consoleScript[scriptIdx].type !== 'command') && (
                  <div className="text-blue-400 font-semibold">
                    <span className="w-1.5 h-3.5 bg-blue-500 inline-block ml-0.5 animate-pulse" />
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Technology ecosystem Panel (55%) */}
          <motion.div
            className="lg:col-span-7 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techEcosystem.map((catObj) => (
                <SpotlightCard
                  key={catObj.category}
                  hoverable={false}
                  liftClass=""
                  className="p-5 border border-slate-800/40 hover:border-slate-700/80 transition-all !overflow-visible"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
                      {catObj.category}
                    </span>
                    {/* Tiny animated identity */}
                    {catAnimations[catObj.category]}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {catObj.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      const tooltipInfo = techTooltipDetails[skill.name] || { status: 'Advanced', details: 'Skill Spec', desc: 'Production level proficiency.' };

                      return (
                        <div
                          key={skill.name}
                          className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-850 text-[11px] text-slate-350 font-medium select-none cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white hover:shadow-lg shadow-black/20 group/tooltip"
                        >
                          <SkillIcon size={12} className={`${skill.color}`} />
                          <span>{skill.name}</span>

                          {/* Hover Tooltip - Scales and Fades (150ms) */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-3 rounded-xl glass-panel border border-slate-850 text-[10px] text-slate-350 opacity-0 scale-95 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-150 ease-out z-30 shadow-2xl text-left select-text">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-bold text-white text-[10px]">{skill.name}</span>
                              <span className="px-1 py-0.2 rounded bg-blue-500/10 text-blue-400 text-[7px] font-mono uppercase font-bold">{tooltipInfo.status}</span>
                            </div>
                            <div className="text-blue-300 font-mono text-[7px] mb-1">{tooltipInfo.details}</div>
                            <p className="leading-snug text-slate-400 text-[8px]">{tooltipInfo.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Profile Info Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Core Stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1.5 block">
                  Core Stack
                </span>
                <h3 className="text-sm font-bold text-white block mb-1">MERN Stack</h3>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Architecture optimized for sub-second page loads, modular states, and REST APIs.
                </p>
              </div>
              <div className="flex gap-1.5 mt-2">
                <Tag className="text-[8px] py-0.5 px-1.5 bg-blue-500/5 text-blue-400 border-blue-500/10">React</Tag>
                <Tag className="text-[8px] py-0.5 px-1.5 bg-green-500/5 text-green-400 border-green-500/10">Node</Tag>
                <Tag className="text-[8px] py-0.5 px-1.5 bg-emerald-500/5 text-emerald-400 border-emerald-500/10">MongoDB</Tag>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1.5 block">
                  Featured Project
                </span>
                <h3 className="text-sm font-bold text-white block mb-1">RS Education Solution</h3>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Enterprise-grade student management platform automating admission and attendance workflows.
                </p>
              </div>
              <span className="text-[8px] font-mono text-blue-400">Node.js + MongoDB backend</span>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Current Goal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1.5 block">
                  Current Goal
                </span>
                <h3 className="text-sm font-bold text-white block mb-1">Scale backend systems</h3>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Preparing for Software Engineering roles, reviewing core algorithms, and improving System Design.
                </p>
              </div>
              <span className="text-[8px] font-mono text-slate-500">System Design & Interviews prep</span>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Currently Reading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div className="w-full">
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1 block">
                  Currently Reading
                </span>
                <h3 className="text-xs font-bold text-white block italic truncate mb-1">
                  Designing Data-Intensive Applications
                </h3>
                <div className="flex justify-between items-center text-[9px] text-slate-400 mt-2">
                  <span>Reading Progress</span>
                  <span className="font-bold text-blue-400 font-mono">65%</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden mt-1.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
              <span className="text-[8px] font-mono text-slate-500">By Martin Kleppmann</span>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: Latest Build */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1.5 block">
                  Latest Build
                </span>
                <h3 className="text-sm font-bold text-white block mb-1">Portfolio Version 4</h3>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Redesigned using custom components, CSS noise grain overlays, and Framer Motion micro-effects.
                </p>
              </div>
              <span className="text-[8px] font-mono text-slate-500">Updated: July 2026</span>
            </SpotlightCard>
          </motion.div>

          {/* Card 6: Open To Work */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SpotlightCard hoverable={true} className="p-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl h-36 hover:border-blue-500/30 group">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1.5 block">
                  Availability
                </span>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-sm font-bold text-emerald-400 leading-none">Available</h3>
                </div>
                <p className="text-[10px] text-slate-450 leading-relaxed">
                  Open for full-time Software Engineer positions, backend internships, or full-stack opportunities.
                </p>
              </div>
              <span className="text-[8px] font-mono text-emerald-500">Ready to deploy</span>
            </SpotlightCard>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}
