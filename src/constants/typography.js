// Reusable typography class systems normalized across all sections
export const typography = {
  // Main Hero Headings
  h1: 'text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading leading-[1.15]',
  
  // Section Headings
  h2: 'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading leading-tight',
  
  // Card & List Title Headings
  h3: 'text-sm sm:text-base font-bold font-heading tracking-tight leading-snug',
  h4: 'text-xs sm:text-sm font-bold font-heading tracking-tight leading-snug',
  
  // Core copy / body typography (with normalized line height)
  bodyLarge: 'text-sm sm:text-base font-normal leading-relaxed text-slate-400 font-sans',
  bodyPrimary: 'text-xs sm:text-sm font-normal leading-relaxed text-slate-400 font-sans',
  bodySecondary: 'text-[11px] sm:text-xs font-normal leading-relaxed text-slate-500 font-sans',
  
  // Badges & Monospace labels
  caption: 'text-[9px] uppercase font-mono tracking-[0.15em] text-slate-500 font-bold',
  badgeText: 'font-mono text-[9px] font-bold tracking-wider uppercase',
  mono: 'font-mono text-[9px] uppercase tracking-wider',
};
