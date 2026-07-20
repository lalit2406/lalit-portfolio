export default function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border-4 border-slate-900 bg-slate-950 p-1.5 shadow-2xl relative aspect-[9/19] overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-30" />
      {/* Viewport */}
      <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-950">
        {children}
      </div>
    </div>
  );
}
