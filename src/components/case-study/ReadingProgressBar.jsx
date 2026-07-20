export default function ReadingProgressBar({ scrollProgress, colorTheme }) {
  const barColor = colorTheme === 'agritech' 
    ? 'from-emerald-500 via-emerald-400 to-green-500' 
    : 'from-blue-500 via-cyan-400 to-indigo-500';
    
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-slate-950/20 select-none">
      <div 
        className={`h-full bg-gradient-to-r ${barColor} transition-all duration-75`}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
