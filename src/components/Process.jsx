import { motion } from 'framer-motion';
import { processSteps } from '../data/personal';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';

export default function Process() {
  return (
    <section id="process" className={spacing.section.padding}>
      <div className="glow-bg top-1/3 left-1/4 opacity-10"></div>

      <Container size="default">
        {/* Section Header */}
        <SectionTitle
          badge="How I Work"
          title={<>A Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Development Process</span></>}
          subtitle="No black boxes or sudden surprises. Here is how we turn your web ideas into production-ready software."
        />

        {/* Process Timeline Grid */}
        <div className="relative border-l border-slate-800/80 md:border-l-0 md:grid md:grid-cols-5 md:gap-4 md:before:absolute md:before:top-1/2 md:before:left-0 md:before:w-full md:before:h-[1px] md:before:bg-slate-800/80 pl-6 md:pl-0">
          
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="mb-12 md:mb-0 relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={animations.fadeUp}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[35px] md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors"></div>
                </div>

                {/* Step Card Content */}
                <GlassCard className="p-6 border border-slate-800/40 md:h-full relative md:mt-8">
                  {/* Step Number Tag */}
                  <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                    {item.step}
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Header Icon */}
                      <div className={`p-2.5 rounded-xl border w-fit mb-5 ${item.color}`}>
                        <Icon size={16} />
                      </div>

                      <h3 className="text-sm font-bold font-heading mb-1 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[9px] uppercase font-mono tracking-[0.12em] text-blue-400/85 mb-3 block">
                        {item.subtitle}
                      </p>
                      
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
