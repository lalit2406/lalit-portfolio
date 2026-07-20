import { useState, useEffect } from 'react';
import Lenis from 'lenis';

export default function Layout({ children }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track mouse coordinate glow
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    // Track scroll progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050816] transition-colors duration-300 overflow-hidden">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Modern Mouse Glow Follower overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.035), rgba(139, 92, 246, 0.01) 40%, transparent 80%)`
        }}
      />

      {/* Skip to Main Content Link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:border focus:border-blue-500 focus:text-blue-400 focus:rounded-md focus:font-mono focus:text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>

      {/* Main content viewport */}
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      
    </div>
  );
}
