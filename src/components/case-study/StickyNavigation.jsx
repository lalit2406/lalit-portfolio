export default function StickyNavigation({ items, activeSection, colorTheme }) {
  const isAgri = colorTheme === 'agritech';
  const ringColor = isAgri ? 'focus-visible:ring-emerald-500' : 'focus-visible:ring-blue-500';
  const activeClass = isAgri ? 'text-emerald-400 border-emerald-400' : 'text-blue-400 border-blue-400';
  
  return (
    <nav className="sticky top-0 z-[40] w-full border-b border-slate-900 bg-slate-955/80 backdrop-blur-md select-none -mx-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-none h-12">
          <div className="flex gap-6">
            {items.map((item) => (
              <a
                key={item.id}
                href={isAgri ? "#agritech-" + item.id : "#" + item.id}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = isAgri ? "agritech-" + item.id : item.id;
                  const el = document.getElementById(targetId);
                  if (el) {
                    const offset = 60;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={
                  "text-xs font-mono font-bold tracking-wider transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 focus-visible:ring-2 " +
                  ringColor +
                  " focus-visible:outline-none " +
                  (activeSection === item.id ? activeClass : "text-slate-500 border-transparent hover:text-slate-355")
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
