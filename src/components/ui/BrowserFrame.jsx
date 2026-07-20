export default function BrowserFrame({ activeTab, urlDomain, children, className = '' }) {
  return (
    <div className={`w-full rounded-xl border border-slate-900 bg-slate-955 overflow-hidden shadow-2xl relative ${className}`}>
      {/* Browser Header */}
      <div className="bg-slate-950 border-b border-slate-900 px-3 py-2 flex items-center gap-1.5 select-none">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        <div className="w-32 h-3.5 rounded bg-slate-900 mx-auto rounded-md flex items-center justify-center">
          <span className="text-[9px] font-mono text-slate-500 uppercase">
            {urlDomain}/{(activeTab || '').toLowerCase().replace(/\s+/g, '-')}
          </span>
        </div>
      </div>
      {/* Viewport */}
      <div className="relative aspect-video bg-slate-955 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
