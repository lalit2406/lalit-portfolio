import { useState } from 'react';
import { motion } from 'framer-motion';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';

const principles = [
  {
    title: 'Architecture First',
    desc: 'I design scalable, modular systems before writing a single line of code. Decoupling services and modeling database schemas beforehand ensures long-term codebase health and easy maintainability.',
    illustration: (
      <svg className="w-8 h-8 text-blue-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3h6m0 0v3M18 9v3h-6" />
      </svg>
    ),
    borderGlow: 'hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.02)]'
  },
  {
    title: 'Performance Driven',
    desc: 'Optimization is not an afterthought. I implement asset lazy-loading, caching headers, debounced handlers, and index-optimized database queries to maintain sub-second page loads and fluid user interactions.',
    illustration: (
      <svg className="w-8 h-8 text-indigo-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19c6-1 7-15 18-15" />
        <circle cx="12" cy="11" r="2" fill="currentColor" className="animate-pulse" />
        <line x1="3" y1="19" x2="21" y2="19" />
      </svg>
    ),
    borderGlow: 'hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.02)]'
  },
  {
    title: 'Clean Engineering',
    desc: 'I build software that lasts. By writing readable, well-documented code, segregating presentation layers, and designing highly reusable components, I ensure that application scaling remains cheap and predictable.',
    illustration: (
      <svg className="w-8 h-8 text-purple-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    borderGlow: 'hover:border-purple-500/20 hover:shadow-[0_8px_30px_rgba(168,85,247,0.02)]'
  },
  {
    title: 'Security Mindset',
    desc: 'Security is woven into the architecture. I implement secure session tokens, strict role-based access controllers (ACL), payload schemas validations, and safe encryption standards.',
    illustration: (
      <svg className="w-8 h-8 text-emerald-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    borderGlow: 'hover:border-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.02)]'
  },
  {
    title: 'Business-Oriented Development',
    desc: 'Code is a tool to solve problems, not the goal. I prioritize alignment with business objectives, building features that directly deliver user value, operational efficiency, and high converting flows.',
    illustration: (
      <svg className="w-8 h-8 text-blue-400 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7L12 17l-5-5-5 5" />
        <path d="M17 7h5v5" />
      </svg>
    ),
    borderGlow: 'hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.02)]'
  }
];

// Spotlight Card component to replicate Vercel-style lighting on mouseover
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
      className={`relative py-7 px-6 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl ${borderGlow} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      hoverable={false}
      whileHover={{
        y: -4,
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Spotlight layer */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.07), transparent)`,
          }}
        />
      )}
      {children}
    </GlassCard>
  );
}

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className={spacing.section.padding}>
      {/* Background glow filters */}
      <div className="glow-bg top-10 left-10 md:left-1/4"></div>
      <div className="glow-bg bottom-0 right-10 md:right-1/4 opacity-40"></div>

      <Container size="default">
        {/* Section Header */}
        <SectionTitle
          badge="ENGINEERING PROFILE"
          title={<>Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Principles</span></>}
          subtitle="How I build software - focusing on clean architecture, performance, security, and solving business objectives."
        />

        {/* 6-column grid for balancing 3 on row 1 and 2 on row 2 on desktop */}
        <div className="grid grid-cols-6 gap-6 mt-16">
          {principles.map((pr, index) => {
            // Layout classes:
            // Mobile: full-width (col-span-6)
            // Tablet: half-width (md:col-span-3) for first 4, full-width (md:col-span-6) for last
            // Desktop: Row 1 has 3 items (lg:col-span-2), Row 2 has 2 items (lg:col-span-3)
            let colSpanClasses = 'col-span-6';
            if (index < 4) {
              colSpanClasses += ' md:col-span-3 lg:col-span-2';
            } else {
              colSpanClasses += ' md:col-span-6 lg:col-span-3';
            }
            // For card 4 on desktop to span 3 columns
            if (index === 3) {
              colSpanClasses = 'col-span-6 md:col-span-3 lg:col-span-3';
            }

            return (
              <motion.div
                key={pr.title}
                className={colSpanClasses}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={animations.fadeUp}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                <SpotlightCard borderGlow={pr.borderGlow} className="h-full">
                  <div>
                    {pr.illustration}
                    <h3 className="text-base font-bold text-white font-heading tracking-tight mb-2.5">
                      {pr.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {pr.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
