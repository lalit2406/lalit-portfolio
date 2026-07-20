import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { text: '$ npm run start:portfolio', delay: 0 },
  { text: '[info] Initializing Workspace...', delay: 300 },
  { text: '[info] Loading Components...', delay: 650 },
  { text: '[info] Fetching Projects...', delay: 1000 },
  { text: '[info] Compiling Portfolio...', delay: 1350 },
  { text: '[success] Ready.', delay: 1700 }
];

export default function Loader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timers = steps.map((step, idx) => {
      return setTimeout(() => {
        setLines((prev) => [...prev, step.text]);
        setActiveStep(idx + 1);
      }, step.delay);
    });

    const completionTimer = setTimeout(() => {
      onComplete();
    }, 2100); // 1.7s + 400ms buffer to read "Ready." before fade out

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-955 text-slate-350 font-mono text-xs"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background grain noise layer */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none mix-blend-overlay z-0" />

      {/* Terminal Container */}
      <div className="w-full max-w-[340px] p-6 rounded-2xl border border-slate-900 bg-slate-950 shadow-2xl relative space-y-2.5 z-10 text-left select-none">
        
        {/* Top Header tab bar */}
        <div className="flex items-center gap-1.5 border-b border-slate-900 pb-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-2 h-2 rounded-full bg-slate-850" />
          <span className="text-[9px] text-slate-500 tracking-wider ml-1 font-mono">TERMINAL_BOOT</span>
        </div>

        {/* Console outputs */}
        <div className="space-y-2 min-h-[130px] font-mono text-[11px] leading-relaxed">
          {lines.map((line, index) => {
            const isCommand = line.startsWith('$');
            const isSuccess = line.startsWith('[success]');
            return (
              <div 
                key={index} 
                className={`${
                  isCommand 
                    ? 'text-emerald-450 font-bold' 
                    : isSuccess 
                      ? 'text-blue-400 font-bold' 
                      : 'text-slate-300'
                }`}
              >
                {line}
              </div>
            );
          })}
          {activeStep < steps.length && (
            <span className="inline-block w-1.5 h-3 bg-blue-500 animate-pulse">█</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
