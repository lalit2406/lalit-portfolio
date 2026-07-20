import { motion } from 'framer-motion';

export default function ArchitectureFlow({ nodes, colorTheme }) {
  // Map colorTheme to text colors for the technology label
  const getThemeTextClass = (theme) => {
    switch (theme) {
      case 'blue':
      case 'rseducation':
        return 'text-blue-450';
      case 'emerald':
      case 'agritech':
        return 'text-emerald-405';
      case 'uno':
        return 'text-red-500';
      case 'netflix':
      case 'netflix-clone':
        return 'text-red-450';
      case 'food-delivery':
        return 'text-orange-450';
      default:
        return 'text-slate-400';
    }
  };

  const getThemeBorderHoverClass = (theme) => {
    switch (theme) {
      case 'blue':
      case 'rseducation':
        return 'hover:border-blue-500/30';
      case 'emerald':
      case 'agritech':
        return 'hover:border-emerald-500/30';
      case 'uno':
        return 'hover:border-red-500/30';
      case 'netflix':
      case 'netflix-clone':
        return 'hover:border-red-500/30';
      case 'food-delivery':
        return 'hover:border-orange-500/30';
      default:
        return 'hover:border-slate-800';
    }
  };

  const techColorClass = getThemeTextClass(colorTheme);
  const borderHoverClass = getThemeBorderHoverClass(colorTheme);

  return (
    <div className="flex flex-col items-center justify-center w-full py-6 select-none">
      {nodes.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center w-full">
          {/* Card Node */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.12 }}
            className={`w-full sm:w-[400px] md:w-[460px] max-w-full min-h-[96px] px-6 md:px-8 py-5 md:py-6 rounded-xl bg-slate-950 border border-slate-900 shadow-lg text-center flex flex-col justify-center transition-all ${borderHoverClass}`}
          >
            <div className="font-semibold text-white text-[13px] md:text-[15px] uppercase tracking-wider mb-1 font-mono">
              {step.layer}
            </div>
            <div className={`text-[12px] md:text-[13px] font-bold font-mono mb-1.5 ${techColorClass}`}>
              {step.tech}
            </div>
            <div className="text-[11px] md:text-[12px] text-slate-400 font-sans leading-relaxed">
              {step.detail}
            </div>
          </motion.div>

          {/* Connector Line */}
          {idx < nodes.length - 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: '32px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.12 + 0.08 }}
              className="flex flex-col items-center justify-center text-slate-700 font-mono text-[9px] my-2 shrink-0"
            >
              <div className="w-[1px] h-6 bg-slate-800" />
              <span className="leading-none -mt-0.5 select-none text-[8px]">▼</span>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
