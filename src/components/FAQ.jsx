import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/personal';
import { spacing } from '../constants/spacing';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';
import SectionDivider from './ui/SectionDivider';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${spacing.section.padding} pb-4 md:pb-6`}>
      <div className="glow-bg top-10 right-10 opacity-10"></div>

      <Container size="default">
        {/* Section Header with scaled-down title (10-15%) and expanded margin */}
        <SectionTitle
          badge="Information"
          title={<>Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Questions</span></>}
          subtitle="Have questions about terms, coding, or support? Here are transparent answers."
          titleClass="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight font-heading leading-tight"
          className="mb-16 md:mb-20"
        />

        {/* Accordions group centered and constrained to ~77% page width */}
        <div className="max-w-[1300px] mx-auto w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <GlassCard
                key={faq.q}
                hoverable={false}
                className="rounded-2xl border border-slate-800/40 overflow-hidden"
              >
                <button
                  id={`faq-question-${index}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-900/30 transition-colors"
                >
                  <span className="font-heading text-xs sm:text-sm font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-850 text-slate-400 shrink-0">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-[11px] sm:text-xs text-slate-400 leading-relaxed border-t border-slate-900/40 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>

        {/* Brighter, wider, continuous linear flow section divider */}
        <SectionDivider
          glowWidth="w-[90%]"
          glowBrightness="via-blue-500/60 via-indigo-500/70 via-blue-500/60"
          duration={2.5}
          repeatDelay={0}
          initialLeft="-90%"
          animateLeft="100%"
          className="my-8 md:my-10"
        />

        {/* Bridge Section to Collaboration */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pb-4 relative z-10 select-none">
          <span className="text-[9px] uppercase font-mono tracking-[0.15em] text-slate-500 font-bold block">
            NEXT STEP
          </span>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
            Still have questions? Let's build something together.
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans max-w-md mx-auto">
            Whether you're planning a new product, redesigning an existing application, or discussing technical ideas, I'd be happy to help.
          </p>
          
          {/* Subtle animated down arrow */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-blue-400 flex justify-center pt-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
