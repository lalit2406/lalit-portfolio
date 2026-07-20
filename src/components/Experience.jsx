import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience } from '../data/experience';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';
import Tag from './ui/Tag';

const accentStyles = {
  blue: {
    border: 'hover:border-blue-500/35 hover:shadow-[0_8px_30px_rgba(59,130,246,0.035)]',
    icon: 'text-blue-400',
    iconBg: 'bg-blue-500/5 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30',
    text: 'text-blue-400',
    timelineBorder: 'border-slate-850 group-hover:border-blue-500/40 group-hover:text-blue-400',
  },
  cyan: {
    border: 'hover:border-cyan-500/35 hover:shadow-[0_8px_30px_rgba(34,211,238,0.035)]',
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-500/5 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30',
    text: 'text-cyan-400',
    timelineBorder: 'border-slate-850 group-hover:border-cyan-500/40 group-hover:text-cyan-400',
  },
  purple: {
    border: 'hover:border-purple-500/35 hover:shadow-[0_8px_30px_rgba(168,85,247,0.035)]',
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/5 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30',
    text: 'text-purple-400',
    timelineBorder: 'border-slate-850 group-hover:border-purple-500/40 group-hover:text-purple-400',
  },
  orange: {
    border: 'hover:border-orange-500/35 hover:shadow-[0_8px_30px_rgba(249,115,22,0.035)]',
    icon: 'text-orange-400',
    iconBg: 'bg-orange-500/5 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/30',
    text: 'text-orange-400',
    timelineBorder: 'border-slate-850 group-hover:border-orange-500/40 group-hover:text-orange-400',
  },
  green: {
    border: 'hover:border-green-500/35 hover:shadow-[0_8px_30px_rgba(34,197,94,0.035)]',
    icon: 'text-green-400',
    iconBg: 'bg-green-500/5 border-green-500/20 text-green-400 group-hover:bg-green-500/10 group-hover:border-green-500/30',
    text: 'text-green-400',
    timelineBorder: 'border-slate-850 group-hover:border-green-500/40 group-hover:text-green-400',
  },
  emerald: {
    border: 'hover:border-emerald-500/35 hover:shadow-[0_8px_30px_rgba(16,185,129,0.035)]',
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30',
    text: 'text-emerald-400',
    timelineBorder: 'border-slate-850 group-hover:border-emerald-500/40 group-hover:text-emerald-400',
  },
};

export default function Experience() {
  const containerRef = useRef(null);

  // Scroll tracking for the connecting vertical timeline line (1px thin line)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollClickToProject = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden bg-slate-950">
      {/* Background grain/noise texture overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none mix-blend-overlay z-0" />

      {/* Subtle central radial glow (5-8% opacity) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Sparse glowing particles along the timeline */}
      <div className="absolute left-[30px] md:left-1/2 top-[15%] w-1.5 h-1.5 rounded-full bg-blue-400/10 blur-[1px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute left-[30px] md:left-1/2 top-[40%] w-1 h-1 rounded-full bg-purple-400/10 blur-[1px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute left-[30px] md:left-1/2 top-[65%] w-1.5 h-1.5 rounded-full bg-indigo-400/15 blur-[1px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute left-[30px] md:left-1/2 top-[88%] w-1 h-1 rounded-full bg-blue-400/10 blur-[1px] -translate-x-1/2 pointer-events-none" />

      {/* Spotlight accent */}
      <div className="glow-bg top-10 right-10 opacity-10"></div>

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <SectionTitle
          badge="My Journey"
          title={<>My <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Journey</span></>}
          subtitle="The experiences, projects, and milestones that shaped me into a Software Engineer."
        />

        {/* Timeline container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto mt-16">
          
          {/* Vertical connecting line backdrop (Thinner 1px line) */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-slate-900 rounded-full" />
          
          {/* Animated vertical connecting line progress (Thinner 1px line) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 origin-top rounded-full z-10"
          />

          {/* Milestones timeline grid */}
          <div className="relative">
            {experience.map((item, index) => {
              const Icon = item.icon;
              const styles = accentStyles[item.accentColor] || accentStyles.blue;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year + '-' + index}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-8 md:mb-12 pl-16 md:pl-0 group animate-timeline-row"
                >
                  {/* Central Node Badge sitting directly on the line */}
                  <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 z-20 transition-all duration-300">
                    {/* Mobile View Dot holding icon */}
                    <div className={`md:hidden w-6 h-6 rounded-full bg-slate-950 border flex items-center justify-center ${
                      item.status ? 'border-emerald-500/30' : 'border-slate-800'
                    }`}>
                      <Icon size={10} className={item.status ? 'text-emerald-400 animate-pulse' : 'text-slate-600'} />
                    </div>

                    {/* Desktop View Year Node Badge attached directly to the line (Glows only if status exists) */}
                    <div className={`hidden md:flex px-2.5 py-1 rounded-full bg-slate-950 border text-[10px] font-mono font-bold shadow-lg transition-all duration-300 group-hover:scale-[1.08] ${
                      item.status
                        ? 'border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                        : 'border-slate-800 text-slate-500 group-hover:border-slate-700 group-hover:text-slate-400'
                    }`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Left Column Box (Desktop Left Card or Empty space) */}
                  <div className={`w-full ${isLeft ? 'order-1' : 'hidden md:block order-1 opacity-0 pointer-events-none'}`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Compact Card with reduced top/bottom padding */}
                        <GlassCard className={`py-4 px-5 border text-left relative ${styles.border}`}>
                          <span className="text-[10px] font-mono font-bold text-blue-500 block mb-2 md:hidden">{item.year}</span>
                          
                          {/* Card Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg border transition-all duration-300 ${styles.iconBg}`}>
                              <Icon size={16} />
                            </div>
                            <div>
                              {item.status && (
                                <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px] font-mono text-emerald-400 mb-1">
                                  {item.status}
                                </span>
                              )}
                              <h3 className="text-sm font-bold font-heading text-white">{item.title}</h3>
                            </div>
                          </div>

                          {/* Story Narrative */}
                          <p className="text-xs text-slate-400 leading-relaxed mb-3">{item.desc}</p>
                          
                          {/* Achievements list */}
                          {item.achievements && (
                            <ul className="mb-3 space-y-1.5 mt-2 pl-1">
                              {item.achievements.map((ach) => (
                                <li key={ach} className="flex items-start gap-2 text-[11px] text-slate-350 leading-relaxed">
                                  <span className="text-emerald-500 font-semibold shrink-0 mt-0.5">✓</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Project Shortcuts Connections */}
                          {item.projectLinks && (
                            <div className="mt-3 pt-3 border-t border-slate-900/60 flex flex-wrap items-center gap-2">
                              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Project:</span>
                              <div className="flex flex-wrap gap-1">
                                {item.projectLinks.map((link) => (
                                  <button
                                    key={link.id}
                                    onClick={() => scrollClickToProject(`#${link.id}`)}
                                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-[9px] text-blue-400 hover:text-blue-300 hover:border-slate-700 transition-colors font-mono cursor-pointer flex items-center gap-1"
                                  >
                                    <span>{link.title}</span>
                                    <span className="text-[8px] font-sans">→</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Tech list tags */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.tech.map((t) => (
                              <Tag key={t} className="text-[9px] py-0.5 px-2">{t}</Tag>
                            ))}
                          </div>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Column Box (Desktop Right Card or Empty space) */}
                  <div className={`w-full ${!isLeft ? 'order-2' : 'hidden md:block order-2 opacity-0 pointer-events-none'}`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                      >
                        {/* Compact Card with reduced top/bottom padding */}
                        <GlassCard className={`py-4 px-5 border text-left relative ${styles.border}`}>
                          <span className="text-[10px] font-mono font-bold text-blue-500 block mb-2 md:hidden">{item.year}</span>
                          
                          {/* Card Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg border transition-all duration-300 ${styles.iconBg}`}>
                              <Icon size={16} />
                            </div>
                            <div>
                              {item.status && (
                                <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[8px] font-mono text-emerald-400 mb-1">
                                  {item.status}
                                </span>
                              )}
                              <h3 className="text-sm font-bold font-heading text-white">{item.title}</h3>
                            </div>
                          </div>

                          {/* Story Narrative */}
                          <p className="text-xs text-slate-400 leading-relaxed mb-3">{item.desc}</p>
                          
                          {/* Achievements list */}
                          {item.achievements && (
                            <ul className="mb-3 space-y-1.5 mt-2 pl-1">
                              {item.achievements.map((ach) => (
                                <li key={ach} className="flex items-start gap-2 text-[11px] text-slate-350 leading-relaxed">
                                  <span className="text-emerald-500 font-semibold shrink-0 mt-0.5">✓</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Project Shortcuts Connections */}
                          {item.projectLinks && (
                            <div className="mt-3 pt-3 border-t border-slate-900/60 flex flex-wrap items-center gap-2">
                              <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Project:</span>
                              <div className="flex flex-wrap gap-1">
                                {item.projectLinks.map((link) => (
                                  <button
                                    key={link.id}
                                    onClick={() => scrollClickToProject(`#${link.id}`)}
                                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 text-[9px] text-blue-400 hover:text-blue-300 hover:border-slate-700 transition-colors font-mono cursor-pointer flex items-center gap-1"
                                  >
                                    <span>{link.title}</span>
                                    <span className="text-[8px] font-sans">→</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Tech list tags */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.tech.map((t) => (
                              <Tag key={t} className="text-[9px] py-0.5 px-2">{t}</Tag>
                            ))}
                          </div>
                        </GlassCard>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
