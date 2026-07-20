import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import Loader from './components/Loader';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/ui/SectionDivider';

// Lazy load sections below the fold for faster initial load
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const EngineeringWorkspace = lazy(() => import('./components/EngineeringWorkspace'));
const EngineeringExpertise = lazy(() => import('./components/EngineeringExpertise'));
const Experience = lazy(() => import('./components/Experience'));
const EngineeringPrinciples = lazy(() => import('./components/EngineeringPrinciples'));
const Process = lazy(() => import('./components/Process'));
const ProfessionalRecognition = lazy(() => import('./components/ProfessionalRecognition'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Lazy load Case Study Page and Projects dataset
const CaseStudyLayout = lazy(() => import('./components/CaseStudyLayout'));
import { projects } from './data/projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('portfolio');
  const [activeProject, setActiveProject] = useState(null);

  // Listen to hash routes to swap page views
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#/projects/')) {
        const projectId = hash.replace('#/projects/', '');
        const found = projects.find((p) => p.id === projectId);
        if (found) {
          setActiveProject(found);
          setCurrentView('case-study');
          return;
        } else {
          // Safe fallback for invalid project hash
          window.location.hash = '';
          setCurrentView('portfolio');
          setActiveProject(null);
          return;
        }
      }
      
      // Fallback redirect for legacy route
      if (hash.startsWith('#/case-study/rs-education')) {
        const found = projects.find((p) => p.id === 'rseducation');
        if (found) {
          setActiveProject(found);
          setCurrentView('case-study');
          return;
        }
      }

      setCurrentView('portfolio');
      setActiveProject(null);
    };

    handleHashChange(); // Run check on load
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);



  return (
    <MotionConfig reducedMotion="user">
      <>
        {/* Premium Loader Screen */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Loader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Main Portfolio Shell */}
        {!isLoading && (
          <>
            {currentView === 'portfolio' ? (
              <Layout>
                {/* Header */}
                <Navbar />
                
                {/* Main Sections */}
                <div className="max-w-[1680px] mx-auto w-full">
                  <Hero />
                  <SectionDivider />
                  <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-500/20 font-mono text-xs">Loading profile content...</div>}>
                    <About />
                    <SectionDivider />
                    <Projects />
                    <SectionDivider />
                    <EngineeringWorkspace />
                    <SectionDivider />
                    <EngineeringExpertise />
                    <SectionDivider />
                    <Experience />
                    <SectionDivider />
                    <EngineeringPrinciples />
                    <SectionDivider />
                    <Process />
                    <SectionDivider />
                    <ProfessionalRecognition />
                    <SectionDivider />
                    <FAQ />
                    <Contact />
                  </Suspense>
                </div>

                {/* Footer */}
                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </Layout>
            ) : (
              <Suspense fallback={<div className="min-h-screen bg-slate-955 flex items-center justify-center text-slate-400 font-mono text-xs">Loading case study details...</div>}>
                <CaseStudyLayout project={activeProject} />
              </Suspense>
            )}
          </>
        )}
      </>
    </MotionConfig>
  );
}

export default App;
