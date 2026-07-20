import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Cpu, Quote } from 'lucide-react';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import GlassCard from './ui/GlassCard';

const recognitions = [
  {
    title: 'Industrial Training Endorsement',
    text: 'Lalit demonstrated excellent full-stack capabilities, constructing schema routers, database models, and responsive React modules matching production clean-code specifications.',
    source: 'S. Kumar',
    role: 'Industrial Training Advisor',
    icon: CheckCircle,
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5'
  },
  {
    title: 'Academic Project Outcomes',
    text: 'The student registration portal built by Lalit resolved admissions routing bottlenecks. The query matching filters return university properties in sub-50ms speeds, replacing manual updates.',
    source: 'Academic Review Panel',
    role: 'Project Evaluation Board',
    icon: Award,
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5'
  },
  {
    title: 'Team Collaboration Metrics',
    text: 'Collaborated on WebSocket turn-management synchronization for the multiplayer UNO game. Designed Socket.io validations on the server-side to resolve concurrency loops.',
    source: 'Full Stack Peer Developer',
    role: 'Team Project Collaboration',
    icon: Users,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5'
  },
  {
    title: 'Database Load Performance',
    text: 'Optimized high-frequency REST updates from hundreds of virtual IoT nodes to MongoDB. Introduced database aggregation workers, saving 70% database write loads.',
    source: 'Ingestion Benchmark Logs',
    role: 'Telemetry Performance Audit',
    icon: Cpu,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
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
      className={`relative p-8 border border-slate-800/40 text-left flex flex-col justify-between rounded-3xl ${borderGlow} ${className}`}
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

export default function ProfessionalRecognition() {
  return (
    <section id="recognition" className={spacing.section.padding}>
      <div className="glow-bg top-1/2 left-10 opacity-15"></div>

      <Container size="default">
        {/* Section Header */}
        <SectionTitle
          badge="Endorsements"
          title={<>Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Recognition</span></>}
          subtitle="Feedback, achievements, and milestones from industrial training, academic review panels, and project collaborations."
        />

        {/* Recognitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {recognitions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={animations.fadeUp}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                <SpotlightCard className="h-full hover:border-slate-700">
                  {/* Quote Icon */}
                  <Quote size={40} className="text-slate-850 dark:text-slate-900 absolute top-6 right-6 pointer-events-none opacity-20" />

                  <div>
                    {/* Category Icon Badge */}
                    <div className={`p-2.5 rounded-xl border w-max mb-5 ${item.color}`}>
                      <Icon size={16} />
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 font-heading tracking-tight uppercase tracking-wider text-slate-400">
                      {item.title}
                    </h3>

                    {/* Content Text */}
                    <p className="text-slate-300 dark:text-slate-400 text-xs leading-relaxed mb-6 italic relative z-10">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t border-slate-900 pt-5 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 select-none">
                      {item.source.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none mb-1">
                        {item.source}
                      </h4>
                      <span className="text-[9px] text-slate-500 font-mono tracking-wider block">
                        {item.role}
                      </span>
                    </div>
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
