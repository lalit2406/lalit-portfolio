import { typography } from '../../constants/typography';

export default function Badge({ children, ping = true, className = '', color = 'blue' }) {
  const colorMap = {
    blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    slate: 'border-slate-800 bg-slate-900 text-slate-400',
  };

  const pingColorMap = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    slate: 'bg-slate-500',
  };

  const badgeColorClass = colorMap[color] || colorMap.blue;
  const pingColorClass = pingColorMap[color] || pingColorMap.blue;

  return (
    <div className={`px-4 py-1.5 rounded-full border ${typography.badgeText} flex items-center gap-2 w-fit ${badgeColorClass} ${className}`}>
      {ping && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pingColorClass} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${pingColorClass}`}></span>
        </span>
      )}
      {children}
    </div>
  );
}
