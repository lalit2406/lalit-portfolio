import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { personal, navLinks } from '../data/personal';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // 1. Scrolled state check
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // 2. Scroll percentage calculation
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollProgress((window.scrollY / totalScroll) * 100);
          }

          // 3. Active section tracking based on viewport collision
          const scrollPos = window.scrollY + 200;
          for (const link of navLinks) {
            const element = document.querySelector(link.href);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(link.href);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial call on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandName = personal.name.toUpperCase();

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    
    // Check if on a case study subpage
    if (window.location.hash.startsWith('#/projects/')) {
      window.location.hash = href;
      return;
    }
    
    e.preventDefault();
    setActiveSection(href);
    
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 select-none ${
        isScrolled
          ? 'py-3 bg-slate-955/80 backdrop-blur-md border-b border-slate-900/50 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            if (window.location.hash.startsWith('#/projects/')) {
              window.location.hash = '';
              return;
            }
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base font-bold tracking-widest font-heading text-white"
        >
          {brandName}<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1.5 px-3 transition-colors duration-200 select-none ${
                    isActive ? 'text-white font-bold' : 'hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-550 rounded-full"
                      transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Vertical Separator */}
          <div className="h-4 w-[1px] bg-slate-900"></div>

          {/* Theme Switch & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-855 border border-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 text-[10px] font-bold font-mono uppercase tracking-wider rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div 
          id="mobile-menu" 
          role="region" 
          aria-label="Mobile Navigation Menu"
          className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg py-6 px-6 flex flex-col space-y-4 shadow-xl border-t border-slate-900"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-base font-medium py-2 border-b border-slate-900/60 transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="w-full text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all"
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Subtle Scroll Progress Indicator integrated in Navbar */}
      <div 
        className="absolute bottom-0 left-0 h-[1.2px] bg-blue-500 transition-all duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </nav>
  );
}
