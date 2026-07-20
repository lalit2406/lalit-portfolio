import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { personal } from '../data/personal';
import { socials } from '../data/socials';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';

const GithubIcon = ({ size = 14, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function EngineeringStatusPanel() {
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
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-7 border border-slate-900 bg-slate-950/60 rounded-2xl overflow-hidden shadow-2xl text-left select-none group/status"
    >
      {/* Vercel spotlight background */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.05), transparent)`,
          }}
        />
      )}

      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-5 mb-5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-850" />
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">ENGINEERING_STATUS</span>
        </div>
        
        {/* Current status ping */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[9px] font-mono text-emerald-400 font-bold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>LIVE_MONITOR</span>
        </div>
      </div>

      {/* Data items */}
      <div className="space-y-4 font-mono text-[10px]">
        {/* Status */}
        <div className="space-y-1">
          <div className="text-slate-500 text-[8px] uppercase tracking-wider">Current Status</div>
          <div className="text-white flex items-center gap-1.5 font-sans text-xs font-semibold">
            <span className="text-emerald-500">●</span> Building Production Applications
          </div>
        </div>

        {/* Primary Stack */}
        <div className="space-y-1.5">
          <div className="text-slate-500 text-[8px] uppercase tracking-wider">Primary Stack</div>
          <div className="flex flex-wrap gap-1.5 font-sans">
            {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded border border-slate-900 bg-slate-950 text-slate-350 text-[9px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="space-y-1">
          <div className="text-slate-500 text-[8px] uppercase tracking-wider">Current Focus</div>
          <div className="text-slate-300 font-sans text-xs font-medium leading-relaxed">
            Backend Engineering • System Design • Performance Optimization
          </div>
        </div>

        {/* Featured Product */}
        <div className="space-y-1">
          <div className="text-slate-500 text-[8px] uppercase tracking-wider">Featured Product</div>
          <div className="text-slate-300 font-sans text-xs font-semibold">
            RS Education Solution
            <span className="text-[10px] text-slate-500 font-normal block mt-0.5">Enterprise Student Management Platform</span>
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-1">
          <div className="text-slate-500 text-[8px] uppercase tracking-wider">Availability</div>
          <div className="px-3 py-2 rounded-lg border border-blue-500/10 bg-blue-500/5 text-blue-400 font-sans text-xs font-semibold">
            Open to Full-Time Software Engineering Opportunities
          </div>
        </div>

        {/* Latest Update */}
        <div className="space-y-1 pt-3 border-t border-slate-900 flex justify-between items-center text-slate-500 text-[8px]">
          <div>
            VERSION 4
          </div>
          <div>
            UPDATED JULY 2026
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { heroConfig } = personal;

  const scrollClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-6 overflow-hidden bg-slate-950">
      {/* Background glow and subtle mesh grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <Container size="default" className="relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context, Bio, Stats, Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Small Greeting */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animations.fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-slate-400 text-sm font-mono tracking-wider">
                {heroConfig.greeting}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animations.fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-tight text-white">
                I'm {heroConfig.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-455 via-indigo-400 to-violet-500">
                  {heroConfig.title}
                </span>
                <span className="text-white"> {heroConfig.subtitle}</span>
              </h2>
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={animations.fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl text-left"
            >
              {heroConfig.description}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                onClick={(e) => scrollClick(e, '#projects')}
                variant="primary"
                className="w-full sm:w-auto text-center"
              >
                View Projects
              </Button>
              <Button
                href={socials.resume}
                onClick={(e) => {
                  if (socials.resume === '#') {
                    e.preventDefault();
                    alert('Resume download action triggered (Mock File).');
                  }
                }}
                variant="secondary"
                className="w-full sm:w-auto text-center"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Secondary Actions (Metadata) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animations.fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.55 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono"
            >
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white flex items-center gap-1.5 premium-link pb-0.5"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white flex items-center gap-1.5 premium-link pb-0.5"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="text-slate-500 hover:text-white flex items-center gap-1.5 premium-link pb-0.5"
              >
                <Mail size={14} />
                Email
              </a>
            </motion.div>

            {/* Statistic Cards (Animated Last) */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {heroConfig.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  animate="visible"
                  variants={animations.fadeUp}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.72 + index * 0.07 }}
                  className="h-full"
                >
                  <GlassCard
                    hoverable={true}
                    className="p-4 border border-slate-800/40 text-center flex flex-col justify-center items-center rounded-2xl h-full"
                  >
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 mb-1">
                      {stat.label}
                    </span>
                    {stat.label === "Current Status" ? (
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400 font-sans leading-none">{stat.value}</span>
                      </div>
                    ) : (
                      <span className="text-lg md:text-xl font-bold font-heading text-white">
                        {stat.value}
                      </span>
                    )}
                  </GlassCard>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Image & Engineering Status Panel */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6 w-full"
            initial="hidden"
            animate="visible"
            variants={animations.scaleUp}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.65 }}
          >
            {/* Profile Image container */}
            <motion.div
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:w-[240px] lg:h-[240px] rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-xl shadow-blue-500/10 flex-shrink-0"
            >
              <img
                src="/images/profile_avatar.jpg"
                alt="Lalit Kumar"
                loading="lazy"
                width="240"
                height="240"
                className="w-full h-full object-cover rounded-full bg-slate-950"
              />
            </motion.div>

            <div className="w-full">
              <EngineeringStatusPanel />
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Technology ticker row below */}
      <div className="w-full border-y border-slate-900/60 dark:border-slate-800/20 py-5 mt-16 bg-slate-950/40 backdrop-blur-sm [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
        <div className="inline-flex flex-nowrap overflow-hidden w-full">
          <div className="flex space-x-16 items-center justify-center animate-infinite-scroll py-2 text-xs font-mono tracking-widest text-slate-500 uppercase select-none">
            {heroConfig.techTicker.map((tech, idx) => (
              <Fragment key={tech + idx}>
                <span>{tech}</span>
                <span>•</span>
              </Fragment>
            ))}
          </div>
          <div className="flex space-x-16 items-center justify-center animate-infinite-scroll py-2 text-xs font-mono tracking-widest text-slate-500 uppercase select-none" aria-hidden="true">
            {heroConfig.techTicker.map((tech, idx) => (
              <Fragment key={tech + '-dup-' + idx}>
                <span>{tech}</span>
                <span>•</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
