import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CaseStudyFooter({ 
  prevProject, 
  nextProject, 
  onNavigate, 
  onBack, 
  colorTheme 
}) {
  const isAgri = colorTheme === 'agritech';
  const ringColor = isAgri ? 'focus-visible:ring-emerald-500' : 'focus-visible:ring-blue-500';
  const borderHoverClass = isAgri ? 'hover:border-emerald-900/40' : 'hover:border-blue-900/40';

  return (
    <footer className="pt-10 border-t border-slate-900 flex flex-col md:flex-row gap-6 justify-between items-center text-xs">
      
      <button
        onClick={() => onNavigate(prevProject.id)}
        className={
          "flex items-center gap-2.5 px-4 py-3 rounded-xl border border-slate-900 bg-slate-955/20 hover:bg-slate-950 text-slate-400 hover:text-white transition-all cursor-pointer group text-left w-full md:w-fit focus-visible:ring-2 " +
          ringColor +
          " " +
          borderHoverClass +
          " focus-visible:outline-none"
        }
      >
        <ArrowLeft size={13} className="transform group-hover:-translate-x-0.5 transition-transform" />
        <div className="font-sans leading-snug">
          <div className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">Previous Project</div>
          <div className="font-bold">{prevProject.title}</div>
        </div>
      </button>

      <button
        onClick={onBack}
        className={`px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-white font-bold transition-all cursor-pointer text-center focus-visible:ring-2 ${ringColor} focus-visible:outline-none`}
      >
        Return to Portfolio
      </button>

      <button
        onClick={() => onNavigate(nextProject.id)}
        className={
          "flex items-center justify-end gap-2.5 px-4 py-3 rounded-xl border border-slate-900 bg-slate-955/20 hover:bg-slate-950 text-slate-400 hover:text-white transition-all cursor-pointer group text-right w-full md:w-fit focus-visible:ring-2 " +
          ringColor +
          " " +
          borderHoverClass +
          " focus-visible:outline-none"
        }
      >
        <div className="font-sans leading-snug">
          <div className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">Next Project</div>
          <div className="font-bold">{nextProject.title}</div>
        </div>
        <ArrowRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
      </button>

    </footer>
  );
}
