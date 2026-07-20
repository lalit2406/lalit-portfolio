export default function Card({
  children,
  className = '',
  hoverable = true,
  onClick,
  ...props
}) {
  const baseClasses = 'rounded-2xl border border-slate-800/40 bg-slate-900/40 text-left transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hoverable ? 'hover:scale-[1.02] hover:border-blue-500/20' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
