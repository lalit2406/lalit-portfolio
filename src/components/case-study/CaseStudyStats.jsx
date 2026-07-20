import { motion } from 'framer-motion';
import { animations } from '../../constants/animations';

export default function CaseStudyStats({ project, colorTheme }) {
  const isAgri = colorTheme === 'agritech';
  const valColor = isAgri ? 'text-emerald-400' : 'text-blue-400';

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 select-none">
      {project.statistics.map((stat, index) => (
        <motion.div 
          key={index} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={animations.fadeUp}
          transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
          whileHover={{
            y: -3,
            borderColor: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 15px 30px -10px rgba(0,0,0,0.4)',
          }}
          className="p-4 rounded-xl border border-slate-900 bg-slate-955 text-left space-y-1 transition-colors duration-300"
        >
          <div className={"text-xl font-extrabold font-heading tracking-tight " + valColor}>
            {stat.value}
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-mono font-bold">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
