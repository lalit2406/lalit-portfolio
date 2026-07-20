import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

// Reusable Flagship Showcase: dual layered desktop + mobile overlapping view
export function FlagshipShowcase({ project, className = '' }) {
  const [deskIndex, setDeskIndex] = useState(0);
  const [mobIndex, setMobIndex] = useState(0);

  const desktopList = project.desktopScreens || [project.images.desktop];
  const mobileList = project.mobileScreens || [project.images.mobile];

  const handleNextDesk = (e) => {
    e.stopPropagation();
    setDeskIndex((prev) => (prev + 1) % desktopList.length);
  };
  const handlePrevDesk = (e) => {
    e.stopPropagation();
    setDeskIndex((prev) => (prev - 1 + desktopList.length) % desktopList.length);
  };

  const handleNextMob = (e) => {
    e.stopPropagation();
    setMobIndex((prev) => (prev + 1) % mobileList.length);
  };

  return (
    <div className={`relative bg-slate-955 rounded-2xl border border-slate-900 p-4 pb-8 shadow-2xl flex items-center justify-start overflow-visible group select-none ${className}`}>
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-2xl pointer-events-none"></div>

      {/* Desktop Browser mockup frame */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -3, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.52 }}
        className="w-[80%] mr-auto relative rounded-xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden aspect-video transition-all duration-300"
      >
        <div className="h-6 bg-slate-955 border-b border-slate-900 px-3 flex items-center justify-between z-20 relative">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
          </div>
          {/* URL Input */}
          <div className="w-28 h-3.5 bg-slate-950 border border-slate-850 rounded text-[6px] text-slate-500 flex items-center justify-center font-mono">
            {project.id}.lalit.dev
          </div>
          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Content Image with crossfade - object-cover fits landscape layout perfectly */}
        <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={`desk-${deskIndex}`}
              src={desktopList[deskIndex]}
              alt="Desktop View"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              loading="lazy"
              className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </AnimatePresence>

          {/* Left/Right Desktop controls */}
          {desktopList.length > 1 && (
            <>
              <button
                onClick={handlePrevDesk}
                aria-label="Previous desktop screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-955/80 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
              >
                <ChevronLeft size={10} />
              </button>
              <button
                onClick={handleNextDesk}
                aria-label="Next desktop screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-955/80 border border-slate-855 hover:border-slate-700 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
              >
                <ChevronRight size={10} />
              </button>

              {/* Dots indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {desktopList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setDeskIndex(idx); }}
                    aria-label={`Go to desktop screenshot ${idx + 1}`}
                    aria-current={deskIndex === idx ? 'true' : undefined}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      deskIndex === idx ? 'bg-blue-500 w-2.5' : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Layered Phone mockup frame */}
      <motion.div 
        onClick={handleNextMob}
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -3, 0]
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ 
          opacity: { duration: 0.55, ease: 'easeOut', delay: 0.62 },
          scale: { duration: 0.55, ease: 'easeOut', delay: 0.62 },
          y: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1.2 }
        }}
        className="absolute -bottom-6 right-6 sm:right-10 w-20 sm:w-26 rounded-2xl border border-slate-850 bg-slate-955 shadow-2xl p-1.5 aspect-[9/19.5] overflow-hidden z-30 cursor-pointer transition-shadow duration-300"
        title="Click to cycle mobile screens"
      >
        <div className="w-full h-full rounded-xl overflow-hidden border border-slate-900 relative bg-slate-950 flex flex-col justify-between">
          {/* Dynamic Island Notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full z-20" />
          
          {/* Content Image with crossfade - object-cover fits portrait layout perfectly */}
          <div className="w-full h-full relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={`mob-${mobIndex}`}
                src={mobileList[mobIndex]}
                alt="Mobile View"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                loading="lazy"
                className="w-full h-full object-cover object-top select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </AnimatePresence>

            {/* Dot indicator at base */}
            {mobileList.length > 1 && (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1 z-30">
                {mobileList.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1 h-1 rounded-full transition-all ${
                      mobIndex === idx ? 'bg-blue-500 w-1.5' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Reusable Interactive Screenshot Showcase: browser frame with view togglers
export default function InteractiveScreenshotShowcase({ 
  projectId,
  desktopScreens = [], 
  mobileScreens = [],
  defaultMode = 'desktop',
  className = ''
}) {
  const [mode, setMode] = useState(defaultMode); // 'desktop' | 'mobile'
  const [deskIndex, setDeskIndex] = useState(0);
  const [mobIndex, setMobIndex] = useState(0);

  const activeIndex = mode === 'desktop' ? deskIndex : mobIndex;
  const screensList = mode === 'desktop' ? desktopScreens : mobileScreens;
  const activeImage = screensList[activeIndex] || '';

  const handleNext = (e) => {
    e.stopPropagation();
    if (screensList.length <= 1) return;
    if (mode === 'desktop') {
      setDeskIndex((prev) => (prev + 1) % screensList.length);
    } else {
      setMobIndex((prev) => (prev + 1) % screensList.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (screensList.length <= 1) return;
    if (mode === 'desktop') {
      setDeskIndex((prev) => (prev - 1 + screensList.length) % screensList.length);
    } else {
      setMobIndex((prev) => (prev - 1 + screensList.length) % screensList.length);
    }
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    if (mode === 'desktop') {
      setDeskIndex(index);
    } else {
      setMobIndex(index);
    }
  };

  const toggleMode = (e, targetMode) => {
    e.stopPropagation();
    setMode(targetMode);
  };

  const showControls = screensList.length > 1;
  const hasMobileView = mobileScreens && mobileScreens.length > 0;

  return (
    <div className={`relative w-full h-full group ${className}`}>
      
      {/* Desktop Mode (Browser Mockup) */}
      {mode === 'desktop' && (
        <div className="w-full h-full bg-slate-950 flex flex-col overflow-hidden relative">
          {/* Browser Top Navigation Header */}
          <div className="h-6 bg-slate-955 border-b border-slate-900/60 px-3 flex items-center justify-between shrink-0 select-none z-20">
            {/* Left Traffic dots */}
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            </div>

            {/* Center URL Address Bar */}
            <div className="w-24 sm:w-36 h-3.5 bg-slate-900 border border-slate-850 rounded text-[6px] text-slate-500 flex items-center justify-center font-mono">
              {projectId}.lalit.dev
            </div>

            {/* Right Screen/Layout View Toggles */}
            <div className="flex items-center gap-1">
              {hasMobileView && (
                <div role="group" aria-label="Mockup View Mode" className="flex items-center bg-slate-900 border border-slate-850 rounded-md p-0.5">
                  <button
                    onClick={(e) => toggleMode(e, 'desktop')}
                    aria-label="Desktop Mockup View"
                    aria-pressed={mode === 'desktop'}
                    className={`p-0.5 rounded text-[8px] transition-colors cursor-pointer ${
                      mode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-350'
                    }`}
                    title="Desktop View"
                  >
                    <Monitor size={8} />
                  </button>
                  <button
                    onClick={(e) => toggleMode(e, 'mobile')}
                    aria-label="Mobile Mockup View"
                    aria-pressed={mode === 'mobile'}
                    className={`p-0.5 rounded text-[8px] transition-colors cursor-pointer ${
                      mode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-350'
                    }`}
                    title="Mobile View"
                  >
                    <Smartphone size={8} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Browser Content Area - object-cover preserves scale without borders */}
          <div className="flex-1 relative overflow-hidden bg-slate-955">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${mode}-${activeIndex}`}
                src={activeImage}
                alt={`${projectId} Desktop view screenshot ${activeIndex + 1} of ${screensList.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                loading="lazy"
                className="w-full h-full object-cover object-top select-none pointer-events-none"
              />
            </AnimatePresence>

            {/* Hover Slide arrows */}
            {showControls && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-955/80 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                >
                  <ChevronLeft size={10} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-955/80 border border-slate-855 hover:border-slate-700 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                >
                  <ChevronRight size={10} />
                </button>
              </>
            )}

            {/* Bottom dot indicators */}
            {showControls && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {screensList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => handleDotClick(e, idx)}
                    aria-label={`Go to screenshot ${idx + 1}`}
                    aria-current={activeIndex === idx ? 'true' : undefined}
                    className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx ? 'bg-blue-500 w-2.5' : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Mode (Phone Mockup inside aspect-video wrapper) */}
      {mode === 'mobile' && (
        <div className="w-full h-full bg-slate-955 flex items-center justify-center p-3.5 relative overflow-hidden">
          
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff003_1px,transparent_1px),linear-gradient(to_bottom,#ffffff003_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

          {/* Toggle buttons inside background */}
          <div role="group" aria-label="Mockup View Mode" className="absolute top-2 right-2 z-30 flex items-center bg-slate-900 border border-slate-850 rounded-md p-0.5 select-none">
            <button
              onClick={(e) => toggleMode(e, 'desktop')}
              aria-label="Desktop Mockup View"
              aria-pressed={mode === 'desktop'}
              className={`p-0.5 rounded text-[8px] transition-colors cursor-pointer ${
                mode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-355'
              }`}
              title="Desktop View"
            >
              <Monitor size={8} />
            </button>
            <button
              onClick={(e) => toggleMode(e, 'mobile')}
              aria-label="Mobile Mockup View"
              aria-pressed={mode === 'mobile'}
              className={`p-0.5 rounded text-[8px] transition-colors cursor-pointer ${
                mode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-355'
              }`}
              title="Mobile View"
            >
              <Smartphone size={8} />
            </button>
          </div>

          {/* Phone Frame Mockup - object-cover preserves scale without borders */}
          <div className="h-full aspect-[9/19.5] rounded-[1.25rem] border-[2px] border-slate-800 bg-slate-905 p-0.5 shadow-2xl relative flex flex-col overflow-hidden z-20">
            {/* Notch */}
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black rounded-full z-30" />
            
            {/* Screen Content */}
            <div className="flex-1 rounded-[1rem] overflow-hidden border border-slate-900 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${mode}-${activeIndex}`}
                  src={activeImage}
                  alt={`${projectId} Mobile view screenshot ${activeIndex + 1} of ${screensList.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  loading="lazy"
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </AnimatePresence>

              {/* Hover Slide arrows */}
              {showControls && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="absolute left-1 top-1/2 -translate-y-1/2 p-0.5 rounded-full bg-slate-955/80 border border-slate-850 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                  >
                    <ChevronLeft size={6} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-0.5 rounded-full bg-slate-955/80 border border-slate-850 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30 cursor-pointer"
                  >
                    <ChevronRight size={6} />
                  </button>
                </>
              )}

              {/* Bottom dot indicators */}
              {showControls && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {screensList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => handleDotClick(e, idx)}
                      aria-label={`Go to screenshot ${idx + 1}`}
                      aria-current={activeIndex === idx ? 'true' : undefined}
                      className={`w-1 h-1 rounded-full transition-all cursor-pointer ${
                        activeIndex === idx ? 'bg-blue-500 w-1.5' : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
