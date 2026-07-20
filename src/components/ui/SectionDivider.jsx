import { motion } from 'framer-motion';

export default function SectionDivider({ 
  className = '', 
  glowWidth = 'w-[60%]', 
  glowBrightness = 'via-blue-500/40 via-indigo-500/45 via-blue-500/40', 
  duration = 4, 
  repeatDelay = 0,
  ease = 'linear',
  initialLeft = '-60%',
  animateLeft = '100%'
}) {
  return (
    <div className={`relative h-12 md:h-16 w-full flex items-center justify-center overflow-visible select-none pointer-events-none ${className}`}>
      {/* Soft radial background transition glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] md:w-[600px] h-[60px] bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,rgba(99,102,241,0.01)_60%,rgba(0,0,0,0)_100%)] rounded-full filter blur-xl" />
      </div>

      {/* Elegant faded divider line with traveling glow */}
      <div className="w-full max-w-[1680px] px-6 md:px-8 relative flex items-center justify-center overflow-hidden">
        {/* Background line base */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800/40 to-transparent relative">
          {/* Animating glow overlay */}
          <motion.div
            initial={{ left: initialLeft }}
            animate={{ left: animateLeft }}
            transition={{
              duration,
              ease,
              repeat: Infinity,
              ...(repeatDelay > 0 ? { repeatDelay } : {})
            }}
            className={`absolute top-0 h-[1px] ${glowWidth} bg-gradient-to-r from-transparent ${glowBrightness} to-transparent blur-[1.5px]`}
          />
        </div>
      </div>
    </div>
  );
}
