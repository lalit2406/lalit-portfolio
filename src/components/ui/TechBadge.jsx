export default function TechBadge({ children, className = '' }) {
  return (
    <span className={`px-2.5 py-0.5 rounded border border-slate-900 bg-slate-955 text-slate-355 text-xs font-sans ${className}`}>
      {children}
    </span>
  );
}
