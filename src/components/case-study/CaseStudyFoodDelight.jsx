import { motion } from 'framer-motion';
import { AlertCircle, Lightbulb, Check, Cpu, Server, FileText } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TechBadge from '../ui/TechBadge';
import BrowserFrame from '../ui/BrowserFrame';
import PhoneFrame from '../ui/PhoneFrame';
import StickyNavigation from './StickyNavigation';
import ArchitectureFlow from './ArchitectureFlow';
import { foodModulesData, foodCodeSnippet } from '../../data/foodDelight';

export default function CaseStudyFoodDelight({
  project,
  activeModuleTab,
  setActiveModuleTab,
  activeSection,
  onNavigate,
  onBack
}) {
  const screenshots = {
    ...foodModulesData,
    home: foodModulesData.Home
  };
  const activeTab = activeModuleTab;
  const current = screenshots[activeTab] ?? screenshots.home;

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'reflection', label: 'Reflection' }
  ];

  return (
    <>
      <StickyNavigation items={navItems} activeSection={activeSection} colorTheme="food-delivery" />

      {/* Executive Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-4 rounded-xl border border-orange-500/10 bg-slate-955/40 space-y-3 text-left"
      >
        <h3 className="text-lg font-bold text-white font-heading">Executive Summary</h3>
        <p className="text-sm text-slate-400 leading-relaxed font-sans">
          Food Delight is a full-stack restaurant ordering platform focusing on restaurant discovery, menu browsing, customer authentication, ordering workflow, backend APIs, and MongoDB data storage.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript (Backend)', 'Responsive Design'].map((badge) => (
            <TechBadge key={badge} className="border-orange-950/40 text-orange-300 bg-orange-955/20">{badge}</TechBadge>
          ))}
        </div>
      </motion.div>

      {/* 1. PROJECT OVERVIEW */}
      <section id="overview" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="OVERVIEW" title="Project Overview" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 hover:border-slate-800 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5 text-rose-455">
                <AlertCircle size={18} />
                <h3 className="text-lg font-bold text-white font-heading">Ordering Barriers</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Customers struggled with slow restaurant menus navigation, lack of mobile layouts support, and unsecure orders dispatch workflows.
              </p>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 hover:border-slate-800 transition-all space-y-3"
            >
              <div className="flex items-center gap-2.5 text-orange-505">
                <Lightbulb size={18} />
                <h3 className="text-lg font-bold text-white font-heading">Full-Stack Pipeline</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Built a clean frontend using HTML, CSS, and native JavaScript connected directly to a TypeScript Node/Express backend that manages orders securely in MongoDB.
              </p>
            </motion.div>
          </div>

          {/* Right Column (40%): Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Project Information</h3>
            <div className="space-y-2.5 font-sans text-sm">
              {[
                { label: 'Industry', value: 'Food Ordering' },
                { label: 'Platform', value: 'Responsive Web' },
                { label: 'Architecture', value: 'Express + MongoDB' },
                { label: 'Timeline', value: '6 Weeks Development' },
                { label: 'Role', value: 'Lead Developer' },
                { label: 'Development Type', value: 'Full-Stack Portfolio Project' }
              ].map((row, idx) => (
                <div key={idx} className={`flex justify-between items-center pb-2 \${idx < 5 ? 'border-b border-slate-900/60' : ''}`}>
                  <span className="text-slate-500 font-mono font-bold uppercase text-xs">{row.label}</span>
                  <span className="text-slate-355 font-medium text-sm text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section id="gallery" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="PRODUCT SHOWCASE" 
          title="Interactive Platform Gallery" 
          description="Explore the catalog search, restaurant details, and merchant admin viewports using the tabs below."
        />

        {/* Navigation Tabs */}
        <div role="tablist" aria-label="Interface navigation tabs" className="flex flex-wrap gap-2 pb-2 border-b border-slate-900 overflow-x-auto scrollbar-none">
          {Object.keys(foodModulesData).map((tab) => (
            <button
              role="tab"
              id={`tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              aria-selected={activeModuleTab === tab}
              aria-controls={`panel-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              key={tab}
              onClick={() => setActiveModuleTab(tab)}
              className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none transition-colors duration-200 border ${
                activeModuleTab === tab
                  ? 'border-transparent text-orange-405'
                  : 'bg-slate-955 border-slate-900 text-slate-500 hover:text-slate-300'
              }`}
            >
              {activeModuleTab === tab && (
                <motion.div
                  layoutId="activeFoodDelightModuleTab"
                  className="absolute inset-0 bg-orange-500/15 border border-orange-500/30 rounded-lg -z-10"
                  transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <div role="tabpanel" id={`panel-${activeModuleTab.toLowerCase().replace(/\s+/g, '-')}`} aria-labelledby={`tab-${activeModuleTab.toLowerCase().replace(/\s+/g, '-')}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center p-4 rounded-xl border border-slate-900 bg-slate-955/20 min-h-[360px] relative">
            
            {/* Desktop Mockup */}
            {current && current.desktop && (
              <motion.div
                key={`desktop-wrap-${activeTab}`}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full"
              >
                <BrowserFrame activeTab={activeTab} urlDomain="food-delight.org">
                  <img loading="lazy" src={`/images/projects/food-delivery/${current.desktop}`}
                    alt={`${activeTab} Desktop View`}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </BrowserFrame>
              </motion.div>
            )}

            {/* Mobile Mockup Overlay */}
            {current && current.mobile && (
              <motion.div
                key={`mobile-wrap-${activeTab}`}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-32 md:w-36 z-20 shadow-2xl transition-all"
              >
                <PhoneFrame>
                  <img loading="lazy" src={`/images/projects/food-delivery/${current.mobile}`}
                    alt={`${activeTab} Mobile View`}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </PhoneFrame>
              </motion.div>
            )}

          </div>

          {/* Right Side: Information Panel */}
          <motion.div
            key={`info-wrap-${activeTab}`}
            initial={{ opacity: 0, scale: 0.98, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Module Details */}
            <div className="p-4 rounded-xl border border-slate-900 bg-slate-955 space-y-3 text-left">
              <div>
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">MODULE VIEW</span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">{current ? current.title || activeTab : activeTab}</h3>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-900/60">
                <div>
                  <span className="text-xs font-mono tracking-widest text-orange-500 uppercase block font-bold">Purpose</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.purpose : ''}</p>
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-orange-500 uppercase block font-bold">Key Functionality</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.functionality : ''}</p>
                </div>
                <div>
                  <span className="text-xs font-mono tracking-widest text-orange-500 uppercase block font-bold">Implementation Detail</span>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-0.5">{current ? current.implementation : ''}</p>
                </div>
              </div>
            </div>

            {/* Tech & Engineering Highlights */}
            {current && current.techs && (
              <div className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 space-y-3 text-left">
                <div>
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">MODULE TECHNOLOGIES</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {current.techs.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded border border-slate-900 bg-slate-955 text-slate-355 text-xs font-sans">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900/60">
                  <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">Engineering Highlights</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {current.chips && current.chips.map((hl) => (
                      <span key={hl} className="px-2.5 py-0.5 rounded border border-slate-900 bg-orange-500/5 text-orange-400 text-xs font-mono">
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </motion.div>

        </div>
      </section>

      {/* 3. ORDERING WORKFLOW */}
      <section id="workflow" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="ORDERING WORKFLOW" title="Interactive Customer Journey" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 select-none">
          {[
            { step: '1. Pincode Input', detail: 'User enters pincode to verify service availability.' },
            { step: '2. Store Selection', detail: 'User selects a restaurant from the displayed list.' },
            { step: '3. Cart Building', detail: 'Adds menu items locally to set order parameters.' },
            { step: '4. Authentication', detail: 'Logs in or registers securely using credentials.' },
            { step: '5. Order Confirmed', detail: 'Submits payload directly to MongoDB databases.' }
          ].map((item, idx, arr) => (
            <div key={idx} className="relative flex flex-col items-center justify-between p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-2 text-center h-[140px]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-orange-450 font-bold uppercase block">{item.step}</span>
                <p className="text-[11px] text-slate-455 leading-normal font-sans pt-0.5">{item.detail}</p>
              </div>
              {idx < arr.length - 1 && (
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-800 font-bold hidden md:block">➔</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. BACKEND ARCHITECTURE & TECHNICAL DECISIONS */}
      <section id="architecture" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading 
          category="SYSTEM TOPOLOGY" 
          title="TypeScript Backend Request Flow" 
          description="Pipes frontend requests via REST APIs into Express routing layers. TypeScript is used exclusively in backend services; the client-side uses pure HTML, CSS, and JavaScript."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Flowchart */}
          <div className="lg:col-span-7 p-6 rounded-xl border border-slate-900 bg-slate-955/20 flex items-center justify-center">
            <ArchitectureFlow
              colorTheme="food-delivery"
              nodes={[
                { layer: 'FRONTEND CLIENT', tech: 'Frontend', detail: 'Renders food listing and search pages.' },
                { layer: 'API ROUTING', tech: 'Express Routes', detail: 'Routes requests to specific controller endpoints.' },
                { layer: 'CONTROLLER CONTROLS', tech: 'Controllers', detail: 'Runs server-side validation and DB updates.' },
                { layer: 'DATA STORE', tech: 'MongoDB', detail: 'Persists active orders document tables.' }
              ]}
            />
          </div>

          {/* Right Column (40%): Code Snippet */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl border border-slate-900 bg-slate-955/20 overflow-hidden font-mono text-xs shadow-2xl flex flex-col h-[230px]"
            >
              <div className="h-8 bg-slate-950 border-b border-slate-900 px-4 flex items-center justify-between shrink-0 select-none">
                <span className="text-xs text-slate-400 font-semibold">orderController.ts</span>
                <span className="text-[10px] text-orange-400 font-bold">TypeScript</span>
              </div>
              <div className="p-4 flex-1 overflow-auto bg-slate-950/60 text-slate-300 text-left select-text leading-relaxed">
                <pre>{foodCodeSnippet}</pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 space-y-3"
            >
              <h3 className="text-lg font-bold text-white font-heading">Key Technical Decisions</h3>
              <div className="space-y-2.5 font-sans text-sm">
                <div className="flex gap-2.5 items-start">
                  <Check size={14} className="text-orange-505 mt-0.5 shrink-0" />
                  <p className="text-slate-400 leading-normal">
                    <strong>Decoupled UI Architecture</strong>: Kept client templates clear of backend database compilation variables.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Check size={14} className="text-orange-505 mt-0.5 shrink-0" />
                  <p className="text-slate-400 leading-normal">
                    <strong>Mongoose Indexing Mapping</strong>: Programmed index mappings on order schemas to facilitate fast user lookups.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. CORE FEATURES LIST */}
      <section className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="CORE FEATURES" title="Implemented Features Summary" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Restaurant Search', desc: 'Allows users to find nearby food options based on pincode entries.', impl: 'Express query routing controllers.' },
            { title: 'Food Listing & Menus', desc: 'Lists available dishes, pricing details, and handles cart quantities.', impl: 'Vanilla JavaScript DOM events.' },
            { title: 'User Authentication', desc: 'Authenticates user profile accesses and validates checkout parameters.', impl: 'Bcrypt password encryption and JWT sessions.' },
            { title: 'Merchant Admin Panel', desc: 'Enables managers to add food menu items and toggle active items.', impl: 'Express admin middleware validation rules.' },
            { title: 'Offers Showcase', desc: 'Renders active discount code tables and coupon conditions.', impl: 'MongoDB collection schemas querying.' },
            { title: 'Contact & Feedback', desc: 'Enables customers to report delays or post support forms requests.', impl: 'Node.js Express mailer routers.' }
          ].map((feat) => (
            <div key={feat.title} className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 space-y-1">
              <h4 className="text-sm font-bold text-white font-heading uppercase text-orange-500">{feat.title}</h4>
              <p className="text-xs text-slate-400 leading-normal">
                <strong>Purpose:</strong> {feat.desc}
              </p>
              <p className="text-xs text-slate-500 leading-normal">
                <strong>Implementation:</strong> {feat.impl}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DEVELOPMENT TIMELINE */}
      <section id="timeline" className="space-y-8 text-left scroll-mt-20">
        <SectionHeading category="DEVELOPMENT JOURNEY" title="Milestones Timeline" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative pl-6 border-l border-slate-900 space-y-6 select-none">
              {[
                { phase: 'Planning & Setup', date: 'Phase 1', desc: 'Defined application workflows, resolved coordinate designs, and created schemas.' },
                { phase: 'Frontend & UI Layouts', date: 'Phase 2', desc: 'Built static page structures, menu details layouts, and responsive CSS elements.' },
                { phase: 'Backend API & TS integration', date: 'Phase 3', desc: 'Programmed REST APIs, Express route managers, and MongoDB collections in TypeScript.' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-955 border-2 border-orange-500 z-10" />
                  
                  <span className="text-xs font-mono text-orange-400 font-bold block">{step.date}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5 font-heading">{step.phase}</h4>
                  <p className="text-xs text-slate-455 leading-relaxed mt-1 font-sans">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (40%): Future Scope */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Planned Enhancements</h3>
            <div className="p-4 rounded-xl border border-slate-905 bg-slate-950 space-y-3 text-xs">
              {[
                { title: 'Online Payments integration', desc: 'Introduce digital checkouts through card systems.' },
                { title: 'Active Order Tracking', desc: 'Integrate status markers updating users during deliveries.' },
                { title: 'Merchant Sales charts', desc: 'Render dashboard data graphs inside Admin sections.' }
              ].map((feat) => (
                <div key={feat.title} className="space-y-0.5">
                  <div className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <h4 className="text-xs font-bold text-white">{feat.title}</h4>
                  </div>
                  <p className="text-sm text-slate-455 leading-relaxed pl-3.5">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. REFLECTIONS & ENGINEERING CHALLENGES */}
      <section id="reflection" className="space-y-8 text-left select-none scroll-mt-20">
        <SectionHeading category="RETROSPECTIVE" title="Insights & Retrospective" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (60%): Challenges */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Engineering Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { topic: 'MongoDB Schema Design', desc: 'Challenge: Structured order items fields. Solution: Compound index definitions in mongoose models. Outcome: Accelerated history fetches.', icon: Cpu },
                { topic: 'Menu Rendering state', desc: 'Challenge: Rendering cart item updates dynamically. Solution: Isolated DOM controllers. Outcome: Stable client scroll performance.', icon: Server },
                { topic: 'API Data Ingestion checks', desc: 'Challenge: Safeguarding ordering routes inputs. Solution: TypeScript validations on backend. Outcome: Eliminated database parse failures.', icon: FileText }
              ].map((lesson, idx) => {
                const IconComp = lesson.icon;
                return (
                  <motion.div
                    key={lesson.topic}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 rounded-xl border border-slate-900 bg-slate-955/20 hover:border-slate-800 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-orange-455">
                        <IconComp size={12} />
                      </div>
                      <h4 className="text-sm font-bold text-white font-heading">{lesson.topic}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans pt-0.5">{lesson.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column (40%): Lessons Learned */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-white font-heading">Lessons Learned</h3>
            <div className="p-4 rounded-xl border border-slate-905 bg-slate-950 space-y-3 text-xs">
              {[
                { title: 'HTML/CSS Layout rules', desc: 'Utilizing grid parameters avoids page shifts.' },
                { topic: 'Express REST architecture', desc: 'Structuring routes folders keeps controllers organized.' },
                { topic: 'Responsive layouts tests', desc: 'Testing viewports bounds prevents content overlaps on mobile.' }
              ].map((feat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <h4 className="text-xs font-bold text-white">{feat.title || feat.topic}</h4>
                  </div>
                  <p className="text-sm text-slate-455 leading-relaxed pl-3.5">{feat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Quote & Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 rounded-xl border border-slate-905 bg-slate-955 space-y-4 text-left"
        >
          <h3 className="text-lg font-bold text-white font-heading">Final Thoughts</h3>
          <p className="text-sm text-slate-355 leading-relaxed font-sans font-medium">
            Food Delight strengthened my understanding of full-stack web development by combining frontend user experiences with backend APIs, authentication, and MongoDB-powered data management. This project helped me build practical experience in designing complete web applications that balance usability with scalable backend architecture.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white transition-all shadow-md shadow-orange-500/10 inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white border border-slate-800 transition-all inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
              >
                GitHub Repository
              </a>
            )}
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl bg-slate-955 hover:bg-slate-900 text-sm font-semibold text-slate-455 hover:text-white border border-slate-900 transition-all inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
            >
              Back to Projects
            </button>
          </div>
        </motion.div>

        {/* Next Case Study Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          onClick={() => onNavigate('netflix-clone')}
          className="p-5 rounded-xl border border-slate-900 bg-slate-955 hover:border-slate-850 hover:bg-slate-955 transition-all cursor-pointer text-left space-y-3 group block focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:outline-none"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-orange-455 font-bold block">Next Case Study</span>
            <span className="text-sm font-mono text-slate-500 group-hover:text-orange-405 transition-colors">View Next Project →</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white font-heading">Netflix Clone</h3>
            <p className="text-sm text-slate-400 font-sans">Responsive Streaming Platform built with React & Movie APIs</p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['React', 'Tailwind CSS', 'Axios'].map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded border border-slate-900 bg-slate-900/60 text-slate-355 text-xs font-sans">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
