import { typography } from '../../constants/typography';

export default function Tag({ children, className = '' }) {
  return (
    <span className={`px-2.5 py-1 rounded bg-slate-850 border border-slate-800 text-slate-300 ${typography.mono} text-[10px] ${className}`}>
      {children}
    </span>
  );
}
