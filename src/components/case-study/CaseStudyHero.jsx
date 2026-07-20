import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Clock, User, Calendar } from 'lucide-react';
import { FlagshipShowcase } from '../ui/InteractiveScreenshotShowcase';

export default function CaseStudyHero({ project, onBack, colorTheme }) {
  const isAgri = colorTheme === 'agritech';
  const accentClass = isAgri ? 'text-emerald-400' : 'text-blue-400';
  const ringClass = isAgri ? 'focus-visible:ring-emerald-500' : 'focus-visible:ring-blue-500';

  return (
    <header className="relative overflow-hidden flex items-center min-h-[500px] lg:min-h-[520px] mb-8 md:mb-12">
      {/* subtle noise */}
      <div className="absolute inset-0 bg-grain bg-repeat opacity-[0.015] pointer-events-none"></div>
 
      {/* Left Arrow Back Button (Navbar equivalent) */}
      <motion.button
        onClick={onBack}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        className={`absolute top-6 left-6 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-405 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1.5 font-sans text-xs font-semibold focus-visible:ring-2 ${ringClass} focus-visible:outline-none`}
      >
        <ArrowLeft size={12} />
        Back
      </motion.button>
 
      <div className="max-w-[1680px] mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-[46%_54%] gap-12 items-start pt-14 lg:pt-16 text-left select-none">
        
        {/* Left Column (about 46%) */}
        <div className="w-full space-y-8">
          
          {/* Label Monospace (Badge) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
            className="flex items-center gap-2"
          >
            <span className={`text-xs font-mono font-bold tracking-widest uppercase ${accentClass}`}>
              {project.status} Project
            </span>
          </motion.div>
 
          {/* Title & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.22 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              {project.title}
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-xl">
              {project.subtitle}
            </p>
          </motion.div>
 
          {/* Main Role / Details Card (Contribution card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.32 }}
            className="p-4 rounded-xl border border-slate-900 bg-slate-955/40 backdrop-blur-sm space-y-2"
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold block">My Contribution</span>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {project.myRole}
            </p>
          </motion.div>
 
          {/* Project Details Grid List (Horizontal Metadata) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.42 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1"
          >
            {[
              { icon: Briefcase, label: 'Industry', value: project.client },
              { icon: Clock, label: 'Timeline', value: project.timeline },
              { icon: User, label: 'Role', value: 'Full Stack Dev' },
              { icon: Calendar, label: 'Year', value: '2026' }
            ].map((meta, idx) => {
              const Icon = meta.icon;
              return (
                <div key={idx} className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-lg bg-slate-955 border border-slate-900 flex items-center justify-center text-slate-500 shrink-0">
                    <Icon size={13} />
                  </div>
                  <div className="font-sans leading-none">
                    <span className="text-[9px] font-mono text-slate-500 uppercase block font-semibold">{meta.label}</span>
                    <span className="text-xs text-slate-355 font-bold mt-1 block">{meta.value}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
 
        </div>
 
        {/* Right Column (about 54% - Showcase) */}
        <div className="w-full">
          <FlagshipShowcase project={project} />
        </div>
 
      </div>
    </header>
  );
}
