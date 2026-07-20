import { useState, useEffect, lazy, Suspense } from 'react';
import Container from './ui/Container';
import { projects } from '../data/projects';

// Components (Statically imported to ensure above-the-fold metadata displays immediately)
import CaseStudyHero from './case-study/CaseStudyHero';
import CaseStudyStats from './case-study/CaseStudyStats';
import CaseStudyFooter from './case-study/CaseStudyFooter';
import ReadingProgressBar from './case-study/ReadingProgressBar';

// Dynamically loaded individual case study content chunks to optimize bundle size
const CaseStudyRSEducation = lazy(() => import('./case-study/CaseStudyRSEducation'));
const CaseStudyAgriTech = lazy(() => import('./case-study/CaseStudyAgriTech'));
const CaseStudyUno = lazy(() => import('./case-study/CaseStudyUno'));
const CaseStudyNetflix = lazy(() => import('./case-study/CaseStudyNetflix'));
const CaseStudyFoodDelight = lazy(() => import('./case-study/CaseStudyFoodDelight'));
const CaseStudyFallback = lazy(() => import('./case-study/CaseStudyFallback'));

export default function CaseStudyLayout({ project }) {
  const [activeModuleTab, setActiveModuleTab] = useState('Home');
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync default tab when changing projects
  useEffect(() => {
    setActiveModuleTab('Home');
  }, [project]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!project) return;
    
    const sections = project.id === 'agritech' 
      ? ['agritech-overview', 'agritech-gallery', 'agritech-timeline', 'agritech-reflection']
      : ['overview', 'gallery', 'architecture', 'timeline', 'reflection'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Normalize active section name
          const cleanId = entry.target.id.replace('agritech-', '');
          setActiveSection(cleanId);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [project]);

  // Scroll to top on mount or when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return null;

  const handleBack = () => {
    window.location.hash = '#projects';
  };

  // Resolve previous and next projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handleNavigate = (id) => {
    window.location.hash = `#/projects/${id}`;
  };

  const colorTheme = project.id === 'agritech' ? 'agritech' : 'rseducation';

  return (
    <div className="min-h-screen bg-slate-955 text-slate-100 font-sans relative overflow-hidden py-10 text-left">
      {/* Reading Progress Bar */}
      <ReadingProgressBar scrollProgress={scrollProgress} colorTheme={colorTheme} />

      {/* Background grain noise layer */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none mix-blend-overlay z-0" />

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Soft lighting glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,rgba(139,92,246,0.015)_50%,rgba(0,0,0,0)_100%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,rgba(0,0,0,0)_100%)] pointer-events-none -z-10" />

      {/* Skip to Main Content Link for accessibility */}
      <a 
        href="#case-study-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:border focus:border-blue-500 focus:text-blue-400 focus:rounded-md focus:font-mono focus:text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to case study content
      </a>

      <main id="case-study-content">
        <Container size="default" className="relative z-10 space-y-10">
          {/* Case Study Hero */}
          <CaseStudyHero 
            project={project} 
            onBack={handleBack} 
            colorTheme={colorTheme} 
          />

          {/* Case Study Stats */}
          <CaseStudyStats 
            project={project} 
            colorTheme={colorTheme} 
          />

          {/* Dynamic Project Content (Dynamic lazy imports wrapped in Suspense fallback) */}
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-500/20 font-mono text-xs">Loading case study modules...</div>}>
            {project.id === 'rseducation' ? (
              <CaseStudyRSEducation
                project={project}
                activeModuleTab={activeModuleTab}
                setActiveModuleTab={setActiveModuleTab}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            ) : project.id === 'agritech' ? (
              <CaseStudyAgriTech
                project={project}
                activeModuleTab={activeModuleTab}
                setActiveModuleTab={setActiveModuleTab}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            ) : project.id === 'uno' ? (
              <CaseStudyUno
                project={project}
                activeModuleTab={activeModuleTab}
                setActiveModuleTab={setActiveModuleTab}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            ) : project.id === 'netflix-clone' ? (
              <CaseStudyNetflix
                project={project}
                activeModuleTab={activeModuleTab}
                setActiveModuleTab={setActiveModuleTab}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            ) : project.id === 'food-delivery' ? (
              <CaseStudyFoodDelight
                project={project}
                activeModuleTab={activeModuleTab}
                setActiveModuleTab={setActiveModuleTab}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            ) : (
              <CaseStudyFallback
                project={project}
                onNavigate={handleNavigate}
                onBack={handleBack}
              />
            )}
          </Suspense>

          {/* Navigation Footer */}
          <CaseStudyFooter
            prevProject={prevProject}
            nextProject={nextProject}
            onNavigate={handleNavigate}
            onBack={handleBack}
            colorTheme={colorTheme}
          />
        </Container>
      </main>
    </div>
  );
}
