import { motion } from 'framer-motion';
import { ExternalLink, Check, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Tag from './ui/Tag';
import ProjectButton from './ui/ProjectButton';
import BrowserFrame from './ui/BrowserFrame';
import InteractiveScreenshotShowcase, { FlagshipShowcase } from './ui/InteractiveScreenshotShowcase';

const GithubIcon = ({ size = 14, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Mock UI data for the flagship gallery
const flagshipGallery = [
  {
    title: 'Landing Portal',
    desc: 'Main public application entrypoint',
    image: 'home-desktop.webp'
  },
  {
    title: 'Admin Analytics',
    desc: 'Real-time counselor yield metrics',
    image: 'dashboard-desktop.webp'
  },
  {
    title: 'Admission Forms',
    desc: 'Multi-step enrollment pipeline',
    image: 'student-profile-desktop.webp'
  },
  {
    title: 'Student Profiles',
    desc: 'Admissions eligibility parameters',
    image: 'student-profile-desktop.webp'
  },
  {
    title: 'University Hub',
    desc: 'Database course index metrics',
    image: 'online-universities-desktop.webp'
  },
  {
    title: 'Access Controls',
    desc: 'Scoped role permission matrix',
    image: '_login.webp'
  }
];

export default function Projects() {
  // Filter projects
  const flagship = projects.find((p) => p.id === 'rseducation');
  const secondaryProjects = projects.filter((p) => p.id !== 'rseducation' && p.id !== 'portfolio');

  return (
    <section id="projects" className={`${spacing.section.padding} bg-slate-950`}>
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.015] pointer-events-none mix-blend-overlay z-0" />

      {/* Grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <Container size="default" className="relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          badge="FEATURED WORK"
          title={<>Building Products That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Solve Real Problems</span></>}
          subtitle="A collection of production-focused applications designed to solve practical business problems through modern software engineering."
        />

        {/* ==================================================== */}
        {/* FLAGSHIP FEATURED PROJECT PANEL */}
        {/* ==================================================== */}
        {flagship && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (Layered screenshots mockup with depth) */}
              <div className="lg:col-span-6 w-full">
                <FlagshipShowcase project={flagship} />
              </div>

              {/* Right Column (Project info details) */}
              <div className="lg:col-span-6 space-y-5 text-left">
                {/* Status Badge & Timeline */}
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-0.8 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[9px] font-mono uppercase font-bold tracking-wider">
                    Featured Product
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-mono uppercase font-bold">
                    {flagship.status}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {flagship.timeline}
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight font-heading">
                    {flagship.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5 max-w-xl">
                    Enterprise-grade student management platform developed to simplify admissions, lead management, counselling, university selection, fee workflows, document handling and communication between students and administrators.
                  </p>
                </div>

                {/* Tech & Architecture Labels */}
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {flagship.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-900/60">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block w-full mb-1 font-bold">Architecture</span>
                    {flagship.architectureLabels.map((lbl) => (
                      <span key={lbl} className="px-2 py-0.5 rounded border border-slate-900 bg-slate-900/40 text-slate-350 text-[9px] font-mono">
                        {lbl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Solved engineering challenge highlight */}
                <div className="py-2.5 px-4 rounded-xl border border-slate-850 bg-slate-950/20 space-y-1">
                  <div className="text-[8px] font-mono uppercase tracking-wider text-blue-400 font-bold">Key Engineering Challenge Solved</div>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed font-sans">{flagship.engineeringChallenge}</p>
                </div>

                {/* Highlights checklists */}
                <div className="pt-2">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-2 font-bold">Key Highlights</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {[
                      'Student Admission Management',
                      'University Management',
                      'Lead Tracking',
                      'Fee Management',
                      'PDF Generation',
                      'Admin Dashboard',
                      'Authentication',
                      'Responsive UI'
                    ].map((hl) => (
                      <div key={hl} className="flex items-center gap-1.5 text-xs text-slate-350 select-none">
                        <Check size={12} className="text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons Action bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-900/60">
                  <button
                    onClick={() => window.location.hash = '#/projects/rseducation'}
                    className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-xs font-bold text-white transition-all shadow-md shadow-blue-500/10 cursor-pointer flex items-center gap-1.5"
                  >
                    <Eye size={13} />
                    View Case Study
                  </button>
                  
                  <ProjectButton
                    href={flagship.live}
                    icon={ExternalLink}
                    variant="primary"
                  >
                    Live Demo
                  </ProjectButton>

                  {flagship.githubFrontend ? (
                    <>
                      <ProjectButton
                        href={flagship.githubFrontend}
                        icon={GithubIcon}
                        variant="secondary"
                      >
                        Frontend Code
                      </ProjectButton>
                      <ProjectButton
                        href={flagship.githubBackend}
                        icon={GithubIcon}
                        variant="secondary"
                      >
                        Backend Code
                      </ProjectButton>
                    </>
                  ) : (
                    flagship.github && (
                      <ProjectButton
                        href={flagship.github}
                        icon={GithubIcon}
                        variant="secondary"
                      >
                        Source Code
                      </ProjectButton>
                    )
                  )}
                </div>

              </div>

            </div>

            {/* ==================================================== */}
            {/* HORIZONTAL FEATURES GALLERY (Mini mock layouts) */}
            {/* ==================================================== */}
            <div className="mt-14 select-none">
              <span className="text-[9px] uppercase font-mono tracking-widest text-slate-500 block mb-3 font-bold text-left">Platform Modules Gallery</span>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth cursor-grab">
                {flagshipGallery.map((view) => (
                  <div
                    key={view.title}
                    className="w-56 sm:w-60 shrink-0 aspect-[16/10] rounded-xl border border-slate-900 bg-slate-955/80 hover:border-slate-800 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden flex flex-col justify-between group/gallery-card shadow-lg"
                  >
                    {/* Visual mockup slot */}
                    <div className="flex-1 bg-slate-955 border-b border-slate-900/60 relative overflow-hidden flex items-center justify-center p-2 select-none">
                      <BrowserFrame activeTab={view.title} urlDomain="rs-education.org">
                        <img
                          src={`/images/projects/rseducation/${view.image}`}
                          alt={view.title}
                          className="w-full h-full object-contain object-top select-none group-hover/gallery-card:scale-[1.04] transition-all duration-300"
                        />
                      </BrowserFrame>
                    </div>
                    {/* Description tag */}
                    <div className="p-3 bg-slate-950 shrink-0 text-left">
                      <div className="text-[10px] font-bold text-white">{view.title}</div>
                      <div className="text-[8px] text-slate-500 mt-0.5">{view.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================================================== */}
        {/* SECONDARY PROJECTS GRID (AgriTech, UNO, Netflix, Food) */}
        {/* ==================================================== */}
        <div className="pt-8 border-t border-slate-900/80">
          <h3 className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block mb-6 text-left font-bold">Secondary Engineering Products</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={animations.fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
                  whileHover={{
                    y: -5,
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
                  }}
                  className="rounded-2xl border border-slate-900 bg-slate-955 overflow-hidden flex flex-col justify-between group/sec-card text-left transition-colors duration-300"
                >
                  {/* Interactive Screenshot Showcase */}
                  <div className="relative aspect-video rounded-t-2xl border-b border-slate-900 bg-slate-950 overflow-hidden shrink-0">
                    <InteractiveScreenshotShowcase 
                      projectId={project.id}
                      desktopScreens={project.desktopScreens}
                      mobileScreens={project.mobileScreens}
                    />
                  </div>

                  {/* Secondary card content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Status and Timeline Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-[8px] font-mono uppercase font-bold ${
                          project.status === 'Production' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">{project.timeline}</span>
                      </div>

                      <h4 className="text-base font-bold text-white font-heading tracking-tight mb-1.5">
                        {project.title}
                      </h4>
                      <p className="text-[11px] text-slate-450 leading-relaxed mb-4">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Tech & Architecture labels */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Tag key={tech} className="text-[8px] py-0.5 px-2">{tech}</Tag>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-900">
                          {project.architectureLabels.map((lbl) => (
                            <span key={lbl} className="px-1.5 py-0.5 rounded border border-slate-900 bg-slate-900/40 text-slate-400 text-[8px] font-mono">
                              {lbl}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Solved challenge highlight */}
                      <div className="p-3 rounded-lg border border-slate-900 bg-slate-950/20 text-left space-y-0.5">
                        <div className="text-[7px] font-mono uppercase tracking-wider text-blue-400 font-bold">Challenge Solved</div>
                        <p className="text-[10px] text-slate-300 leading-relaxed font-sans">{project.engineeringChallenge}</p>
                      </div>

                      {/* Card triggers */}
                      <div className="flex justify-between items-center pt-3.5 border-t border-slate-900">
                        <button
                          onClick={() => window.location.hash = `#/projects/${project.id}`}
                          className="text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          View Project Details <span className="text-[8px] font-sans">→</span>
                        </button>
                        
                        <div className="flex gap-2">
                          {project.live ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 text-slate-500 hover:text-white transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink size={12} />
                            </a>
                          ) : (
                            <span
                              className="p-1 text-slate-700 cursor-not-allowed"
                              title="Live Demo Coming Soon"
                            >
                              <ExternalLink size={12} className="opacity-40" />
                            </span>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-slate-500 hover:text-white transition-colors"
                            title="Source Code"
                          >
                            <GithubIcon size={12} />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
