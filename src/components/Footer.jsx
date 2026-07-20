import { ArrowUp } from 'lucide-react';
import { personal } from '../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brandName = personal.name.toUpperCase();

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 py-8 px-6 md:px-8 relative overflow-hidden text-left">
      {/* Background grain noise */}
      <div className="absolute inset-0 bg-grain opacity-[0.012] pointer-events-none mix-blend-overlay z-0" />

      <div className="max-w-[1680px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 relative z-10">
        
        {/* Left Side: Brand and Short Engineering Statement */}
        <div className="space-y-2.5">
          <a
            href="#home"
            onClick={handleBackToTop}
            className="text-base font-bold tracking-widest font-heading text-white hover:text-blue-400 transition-colors"
          >
            {brandName}<span className="text-blue-500">.</span>
          </a>
          <p className="text-[11px] text-slate-400 max-w-[280px] leading-relaxed">
            Building scalable software with clean architecture and modern web technologies.
          </p>
        </div>

        {/* Right Side: Technology Credits & Back to Top */}
        <div className="flex flex-col items-start md:items-end gap-3 font-mono text-[10px]">
          <div className="text-slate-500 flex items-center gap-1.5">
            <span>Built with React • Tailwind CSS • Framer Motion • Vite</span>
          </div>

          <button
            onClick={handleBackToTop}
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-855 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={11} />
          </button>
        </div>

      </div>

      {/* Bottom licensing bar */}
      <div className="max-w-[1680px] mx-auto mt-8 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-slate-600 relative z-10">
        <div>
          © {currentYear} {personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5" aria-label="Git branch: production, status: active">
          <span>branch: production</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
