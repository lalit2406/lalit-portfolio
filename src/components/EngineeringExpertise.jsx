import { useState } from 'react';
import { motion } from 'framer-motion';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';

const expertiseCards = [
  {
    title: 'Frontend Architecture',
    desc: 'Structuring modular, single-page application trees with predictable global state containers, unidirectional data flows, optimized hook structures, and strict component segregation.',
    illustration: (
      <svg className="w-6 h-6 text-blue-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <rect x="3" y="14" width="6" height="4" rx="1" />
        <rect x="15" y="14" width="6" height="4" rx="1" />
        <path d="M12 7v4m0 0H6v3m6-3h6v3" />
      </svg>
    ),
    glow: 'hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.02)]'
  },
  {
    title: 'Backend Engineering',
    desc: 'Architecting asynchronous middleware pipelines, error-handling routers, and REST controller endpoints in Node.js environments configured to process requests with low overhead.',
    illustration: (
      <svg className="w-6 h-6 text-indigo-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="14" width="16" height="6" rx="1" />
        <line x1="12" y1="10" x2="12" y2="14" />
      </svg>
    ),
    glow: 'hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.02)]'
  },
  {
    title: 'Authentication & Security',
    desc: 'Implementing secure authorization flows using stateless JWT payloads, strict Cross-Origin Resource Sharing (CORS) rules, data input sanitation, and password hashing (bcrypt).',
    illustration: (
      <svg className="w-6 h-6 text-emerald-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
        <path d="M17 11V7a5 5 0 0 0-10 0v4" />
      </svg>
    ),
    glow: 'hover:border-emerald-500/20 hover:shadow-[0_8px_30px_rgba(16,185,129,0.02)]'
  },
  {
    title: 'Database Design',
    desc: 'Modeling non-relational document collections, embedding schemas vs. referencing objects, designing compound indexes, and query profiling to maintain fast database executions.',
    illustration: (
      <svg className="w-6 h-6 text-purple-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    glow: 'hover:border-purple-500/20 hover:shadow-[0_8px_30px_rgba(168,85,247,0.02)]'
  },
  {
    title: 'REST API Development',
    desc: 'Structuring resource-oriented endpoint layers using consistent HTTP verbs, standardized status codes, query pagination controllers, and request payload schema validators.',
    illustration: (
      <svg className="w-6 h-6 text-blue-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8l4 4-4 4M7 16l-4-4 4-4M14 4l-4 16" />
      </svg>
    ),
    glow: 'hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.02)]'
  },
  {
    title: 'Performance Optimization',
    desc: 'Profiling bundle footprints, enforcing asset lazy-loading, caching query results, debouncing render updates, and optimizing script execution loops to preserve 60 FPS speeds.',
    illustration: (
      <svg className="w-6 h-6 text-indigo-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    glow: 'hover:border-indigo-500/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.02)]'
  }
];

// Spotlight Card component with mouse spotlight reaction
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
      className={`relative py-6 px-5 border border-slate-800/40 text-left flex flex-col justify-between rounded-2xl ${borderGlow} ${className}`}
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
      {/* Spotlight Radial Light */}
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

export default function EngineeringExpertise() {
  return (
    <section id="expertise" className={spacing.section.padding}>
      {/* Background glow filters */}
      <div className="glow-bg top-10 left-10 md:left-1/4"></div>
      <div className="glow-bg bottom-0 right-10 md:right-1/4 opacity-40"></div>

      <Container size="default">
        {/* Section Header */}
        <SectionTitle
          badge="TECHNICAL PROFILE"
          title={<>Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Expertise</span></>}
          subtitle="A documentation of my technical capabilities, system preferences, and architectural workflows."
        />

        {/* 3-column grid for balancing 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={animations.fadeUp}
              transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
            >
              <SpotlightCard borderGlow={card.glow} className="h-full">
                <div>
                  {card.illustration}
                  <h3 className="text-base font-bold text-white font-heading tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
