import { Check, Cpu } from 'lucide-react';

export default function CaseStudyFallback({
  project,
  onNavigate,
  onBack
}) {
  return (
    <>
      {/* Standard Problem & Research Overview */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-start">
        <div className="space-y-3">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">THE CHALLENGE</span>
          <h2 className="text-xl font-bold text-white font-heading">Problem Statement Overview</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            {project.problem}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            {project.solution}
          </p>
        </div>
        <div className="p-6 rounded-2xl border border-slate-900 bg-slate-955 space-y-4 select-none">
          <span className="text-[9px] font-mono tracking-widest text-blue-400 uppercase block font-bold">Key Discovery Metrics</span>
          <div className="space-y-3 font-sans text-xs">
            {project.discoveryMetrics.map((metric, idx) => (
              <div key={idx} className={`flex justify-between items-start pb-2.5 \${idx < project.discoveryMetrics.length - 1 ? 'border-b border-slate-900/60' : ''}`}>
                <span className="text-slate-400 max-w-[200px] text-left">{metric.label}:</span>
                <span className="text-blue-400 font-bold font-mono text-right">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE & DIAGRAM */}
      <section className="mb-20 text-left space-y-6">
        <div className="max-w-2xl">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">SYSTEM TOPOLOGY</span>
          <h2 className="text-xl font-bold text-white font-heading mt-1">High-Throughput Process Pipeline</h2>
          <p className="text-xs text-slate-400 leading-relaxed mt-2">
            {project.topologyDescription || 'The project is architected over modular application layers. The routing controllers mapping handles queries through validation gateways before data storage execution.'}
          </p>
        </div>

        {/* HTML-rendered Architecture flow diagram */}
        <div className="p-6 rounded-2xl border border-slate-900 bg-slate-955 flex flex-col md:flex-row gap-4 items-center justify-around font-mono text-[9px] select-none">
          {project.topologyFlow.map((step, idx, arr) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
              <div className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-805 text-center w-full md:w-36">
                <div className="font-bold text-white mb-1 uppercase">{step.layer}</div>
                <div className="text-[8px] text-blue-400">{step.tech}</div>
                <div className="text-[8px] text-slate-500">{step.detail}</div>
              </div>
              {idx < arr.length - 1 && (
                <div className="text-slate-700 font-bold text-xs rotate-90 md:rotate-0">➔</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DATABASE DESIGN SCHEMA */}
      <section className="mb-20 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">DATA PERSISTENCE</span>
          <h2 className="text-xl font-bold text-white font-heading">Relational Schema & Collections Design</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            {project.databaseDescription || 'Data structures are represented with clear relation mapping configurations. Standard schema fields validate query properties for storage efficiency.'}
          </p>
          <div className="p-4 rounded-xl border border-slate-900 bg-slate-950 space-y-3 font-sans text-xs">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold block">Engineering Takeaways</span>
            <div className="flex gap-2.5 items-start">
              <Check size={14} className="text-blue-500 mt-0.5 shrink-0" />
              <span className="text-slate-350 leading-normal">Optimized retrieval indexing patterns reduce average lookup speeds.</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Check size={14} className="text-blue-500 mt-0.5 shrink-0" />
              <span className="text-slate-355 leading-normal">Decoupling schema validation checks prevents parsing faults at database limits.</span>
            </div>
          </div>
        </div>

        {/* Database code card view */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-900 bg-slate-955 overflow-hidden font-mono text-[10px] shadow-2xl flex flex-col h-[280px]">
          <div className="h-8 bg-slate-950 border-b border-slate-900 px-4 flex items-center justify-between shrink-0 select-none">
            <span className="text-slate-405 font-bold">schema.js</span>
            <span className="text-[8px] text-blue-400 font-bold uppercase">{project.databaseTech || 'MongoDB'}</span>
          </div>
          <div className="p-4 flex-1 overflow-auto bg-slate-955/20 text-slate-300 text-left select-text leading-relaxed">
            <pre className="scrollbar-none">{project.codeSchema}</pre>
          </div>
        </div>
      </section>

      {/* ROADMAP TIMELINE */}
      <section className="mb-20 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">ROADMAP TIMELINE</span>
          <h2 className="text-xl font-bold text-white font-heading">Product Milestones</h2>
          
          <div className="relative pl-6 border-l border-slate-900 space-y-6 select-none">
            {project.timelineSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-955 border-2 border-blue-500 z-10" />
                <span className="text-[9px] font-mono text-blue-400 font-bold block">{step.date}</span>
                <h4 className="text-xs font-bold text-white mt-0.5 font-heading">{step.phase}</h4>
                <p className="text-[11px] text-slate-450 leading-relaxed mt-1 font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* System Checklist metrics */}
        <div className="lg:col-span-5 p-6 rounded-2xl border border-slate-900 bg-slate-955 space-y-4 text-xs">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">Platform Diagnostics</span>
          <div className="space-y-3 font-sans">
            {[
              'Server status health checks return 200 OK payloads',
              'API routing endpoints block requests from unauthorized origins',
              'Responsive widgets fit screens up to 320px sizes',
              'Data records are stored dynamically inside document collections'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-2.5 items-start">
                <Check size={14} className="text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-350 leading-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LESSONS LEARNED & TAKEAWAYS */}
      <section className="mb-20 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">RETROSPECTIVE</span>
          <h2 className="text-xl font-bold text-white font-heading">Key Insights & Takeaways</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.whatILearned.map((lesson, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-900 bg-slate-955 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-blue-450">
                    <Cpu size={12} />
                  </div>
                  <h4 className="text-xs font-bold text-white font-heading uppercase">{lesson.topic}</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans pt-1">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements list */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block font-bold">Planned Additions</span>
          <div className="p-6 rounded-2xl border border-slate-900 bg-slate-955 space-y-3 text-xs">
            {project.futureImprovements.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex gap-2 items-center">
                  <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <h4 className="font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-slate-455 leading-relaxed pl-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Action drawers */}
      <section className="mb-20 text-left">
        <div className="p-6 rounded-2xl border border-slate-900 bg-slate-950 space-y-4">
          <h3 className="text-base font-bold text-white font-heading">Project Conclusions</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Developing the {project.title} project verified my capabilities in building and validating application systems according to modern development parameters.
          </p>
          <div className="flex flex-wrap gap-3 pt-1 text-xs">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                GitHub Repository
              </a>
            )}
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-900 transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              Return to Portfolio
            </button>
          </div>
        </div>

        {/* Link back to RS Education case study as next */}
        <div
          onClick={() => onNavigate('rseducation')}
          className="p-6 rounded-2xl border border-slate-900 bg-slate-955 hover:border-slate-850 hover:bg-slate-950 transition-all cursor-pointer text-left space-y-3 group block"
        >
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono uppercase tracking-wider text-blue-400 font-bold block">Next Case Study</span>
            <span className="font-mono text-slate-500 group-hover:text-blue-400 transition-colors">View Next Project →</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-heading">RS Education</h3>
            <p className="text-xs text-slate-400 font-sans">Educational Services Platform Case Study</p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
            {['React', 'Node.js', 'MongoDB'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded border border-slate-900 bg-slate-900/60 text-slate-350 font-sans">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
