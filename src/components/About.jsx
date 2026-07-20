import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Layers, BookOpen } from 'lucide-react';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';

const profileCards = [
  {
    title: 'Software Architecture',
    statement: 'Designing modular controller pipelines, decoupled API endpoints, and clean data routing structures.',
    icon: Cpu,
    glow: 'hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.02)]'
  },
  {
    title: 'Clean Code Practices',
    statement: 'Writing readable, self-documenting code with reusable hooks and atomic presentation components.',
    icon: Code2,
    glow: 'hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.02)]'
  },
  {
    title: 'Scalable Systems',
    statement: 'Tuning database indexes, caching query hits, and profiling bundle sizes to handle concurrency.',
    icon: Layers,
    glow: 'hover:border-purple-500/20 hover:shadow-[0_8px_30px_rgba(168,85,247,0.02)]'
  },
  {
    title: 'Continuous Learning',
    statement: 'Researching system architectures, time-series query structures, and web optimization practices.',
    icon: BookOpen,
    glow: 'hover:border-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.02)]'
  }
];

// Spotlight Card component with throttled mouse spotlight tracking
function SpotlightCard({ children, className = '', borderGlow = '' }) {
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
      className={`relative p-5 border border-slate-800/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl text-left flex flex-col justify-between rounded-2xl ${borderGlow} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      hoverable={false}
    >
      {/* Spotlight Radial Light */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.05), transparent)`,
          }}
        />
      )}
      {children}
    </GlassCard>
  );
}

export default function About() {
  return (
    <section id="about" className={spacing.section.padding}>
      <div className="glow-bg top-1/4 -right-24 opacity-30"></div>
      
      <Container size="default">
        <div className={spacing.grid.about}>
          
          {/* Left Column: Engineering Philosophy */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={animations.slideInLeft}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              badge="ENGINEERING PROFILE"
              title={<>Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Philosophy</span></>}
              align="left"
              className="mb-6"
            />
            
            <div className="space-y-6 text-slate-355 leading-relaxed text-xs">
              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold font-heading text-white uppercase tracking-wider">Engineering Philosophy</h3>
                <p>
                  I believe software engineering is about designing scalable, maintainable systems that align database structures with clear, predictable workflows. I prioritize separation of concerns, type interfaces, and index-optimized databases.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold font-heading text-white uppercase tracking-wider">Core Motivation</h3>
                <p>
                  Building applications lets me map complex business workflows into high-speed server APIs and responsive user interfaces. I enjoy isolating performance bottlenecks and debouncing rendering cycles to maintain sub-second speeds.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold font-heading text-white uppercase tracking-wider">Architectural Approach</h3>
                <p>
                  I layout data schemas and validation rules before drafting frontend layout branches. Enforcing clean API contracts and compiling atomic reusable components ensures code updates remain cheap and predictable.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-[10px] font-bold font-heading text-white uppercase tracking-wider">Problem-Solving Mindset</h3>
                <p>
                  I isolate issues using database profile explain queries (`.explain()`), telemetry tracing, and component rendering metrics, resolving defects with structural adjustments rather than patchwork overrides.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering profile cards */}
          <motion.div 
            className="lg:col-span-5 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={animations.slideInRight}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-4">
              {profileCards.map((item) => {
                const Icon = item.icon;
                return (
                  <SpotlightCard key={item.title} borderGlow={item.glow}>
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 h-9 w-9 flex items-center justify-center border border-blue-500/15">
                        <Icon size={16} />
                      </div>
                      {/* Content */}
                      <div className="space-y-1 select-text">
                        <h3 className="text-xs font-bold font-heading text-white">{item.title}</h3>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{item.statement}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
