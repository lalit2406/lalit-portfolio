import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  hoverable = true,
  glowColor, // e.g. 'from-blue-500/20 to-indigo-500/10'
  onClick,
  ...props
}) {
  const baseClasses = 'glass-panel rounded-3xl relative overflow-hidden flex flex-col justify-between';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  // Default motion configuration for hover/tap states
  const hoverProps = hoverable
    ? {
        whileHover: {
          y: -3,
          borderColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
        },
      }
    : {};

  const tapProps = onClick
    ? {
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <motion.div
      onClick={onClick}
      className={`${baseClasses} ${clickClasses} ${className}`}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      {...hoverProps}
      {...tapProps}
      {...props}
    >
      {/* Dynamic Glow Layer if provided */}
      {glowColor && (
        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px] -z-10`} />
      )}
      
      {children}
    </motion.div>
  );
}
