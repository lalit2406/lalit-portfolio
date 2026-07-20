import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Send, Check } from 'lucide-react';
import { personal } from '../data/personal';
import { socials } from '../data/socials';
import { spacing } from '../constants/spacing';
import { animations } from '../constants/animations';
import Container from './ui/Container';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';

const GithubIcon = ({ size = 16, className = '' }) => (
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

const LinkedinIcon = ({ size = 16, className = '' }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef();
  const { desc, projectTypes, budgetTiers } = personal.contactConfig;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0],
    budget: budgetTiers[1],
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProjectType = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSelectBudget = (tier) => {
    setFormData((prev) => ({ ...prev, budget: tier }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    // Setup template params for EmailJS
    const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  subject: `${formData.projectType} | ${formData.budget}`,
  project_type: formData.projectType,
  budget: formData.budget,
  message: formData.message,
  to_name: personal.name,
};

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''; 
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
 
    if (serviceId && templateId && publicKey) {
      import('@emailjs/browser')
        .then((emailjsMod) => {
          emailjsMod.default
            .send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
              setStatus('success');
              triggerConfetti();
              resetForm();
            })
            .catch((err) => {
              console.error('EmailJS Error:', err);
              setStatus('error');
              setErrorMessage(`Could not send message. Please email me directly at ${socials.email}.`);
            });
        })
        .catch((err) => {
          console.error('Failed to load EmailJS module:', err);
          setStatus('error');
          setErrorMessage('Could not load transmission component. Please reload the page or contact me directly.');
        });
    } else {
      // Simulation Mode (Perfect for demonstration/portfolio reviews)
      setTimeout(() => {
        setStatus('success');
        triggerConfetti();
        resetForm();
      }, 1500);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: projectTypes[0],
      budget: budgetTiers[1],
      message: '',
    });
  };

  const triggerConfetti = () => {
    import('canvas-confetti').then((confettiMod) => {
      confettiMod.default({
        particleCount: 80,
 spread: 60,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#8b5cf6', '#10b981'],
      });
    });
  };

  return (
    <section id="contact" className="pt-6 pb-12 md:pt-8 md:pb-16 px-6 md:px-8 relative overflow-hidden">
      <div className="glow-bg top-1/2 -left-36 opacity-15"></div>

      <Container size="default">
        <div className={spacing.grid.contact}>
          
          {/* Left Column: CTA, Info, Links */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeUp}
          >
            <div>
              <span className="text-[9px] uppercase font-mono tracking-[0.15em] text-blue-400 font-bold mb-2.5 block">
                Collaboration
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-heading mb-5 text-white">
                Let's build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">extraordinary</span> together.
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {desc}
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 text-sm font-medium">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
                  <Mail size={16} />
                </div>
                {socials.email}
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-violet-400 shrink-0">
                  <GithubIcon size={16} />
                </div>
                {socials.github.replace('https://', '')}
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <LinkedinIcon size={16} />
                </div>
                {socials.linkedin.replace('https://', '')}
              </a>

              {/* Resume download */}
              <a
                href={socials.resume}
                onClick={(e) => {
                  if (socials.resume === '#') {
                    e.preventDefault();
                    alert('Resume download action triggered (Mock File).');
                  }
                }}
                className="flex items-center gap-3 text-slate-300 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <FileText size={16} />
                </div>
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>

          {/* Right Column: Pre-qualifying Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeUp}
          >
            <GlassCard hoverable={false} className="p-6 md:p-8 border border-slate-800/40 relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    className="py-12 text-center flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2">
                      <Check size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-white dark:text-white">Message Transmitted!</h3>
                    <p className="text-slate-400 dark:text-slate-400 text-xs sm:text-sm max-w-sm">
                     Thank you for reaching out, {formData.name}. We will review your project details and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setStatus('idle')}
                      variant="ghost"
                      size="sm"
                      className="mt-6 border border-slate-800"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Row Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 input-group">
                        <label htmlFor="contact-name" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block transition-colors">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          aria-required="true"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Elon Musk"
                          className="w-full bg-slate-900/60 border border-slate-800 hover:border-slate-750 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none premium-input"
                        />
                      </div>
                      <div className="space-y-2 input-group">
                        <label htmlFor="contact-email" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block transition-colors">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          aria-required="true"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elon@spacex.com"
                          className="w-full bg-slate-900/60 border border-slate-800 hover:border-slate-750 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none premium-input"
                        />
                      </div>
                    </div>

                    {/* Project Type Badge Selector */}
                    <div className="space-y-3">
                      <span id="project-type-label" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block">
                        Project Type
                      </span>
                      <div role="radiogroup" aria-labelledby="project-type-label" className="flex flex-wrap gap-2.5">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            role="radio"
                            aria-checked={formData.projectType === type}
                            onClick={() => handleSelectProjectType(type)}
                            className={`relative px-4 py-2 rounded-xl text-xs font-semibold border cursor-pointer select-none transition-colors duration-200 ${
                              formData.projectType === type
                                ? 'text-white border-transparent'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                          >
                            {formData.projectType === type && (
                              <motion.div
                                layoutId="activeProjectType"
                                className="absolute inset-0 bg-blue-600 border border-blue-500 rounded-xl -z-10 shadow-md shadow-blue-500/10"
                                transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
                              />
                            )}
                            <span className="relative z-10">{type}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="space-y-3">
                      <span id="budget-label" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block">
                        Estimated Budget
                      </span>
                      <div role="radiogroup" aria-labelledby="budget-label" className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {budgetTiers.map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            role="radio"
                            aria-checked={formData.budget === tier}
                            onClick={() => handleSelectBudget(tier)}
                            className={`relative py-2 px-1 text-center rounded-xl text-xs font-semibold border cursor-pointer select-none transition-colors duration-200 ${
                              formData.budget === tier
                                ? 'text-white border-transparent'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                          >
                            {formData.budget === tier && (
                              <motion.div
                                layoutId="activeBudgetTier"
                                className="absolute inset-0 bg-blue-600 border border-blue-500 rounded-xl -z-10 shadow-md shadow-blue-500/10"
                                transition={{ type: "tween", ease: "easeOut", duration: 0.22 }}
                              />
                            )}
                            <span className="relative z-10">{tier}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2 input-group">
                      <label htmlFor="contact-message" className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block transition-colors">
                        Project Details *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        aria-required="true"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your product requirements, deadlines, or design specifications..."
                        className="w-full bg-slate-900/60 border border-slate-800 hover:border-slate-750 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none resize-none premium-input"
                      />
                    </div>

                    {/* Error Notification */}
                    {errorMessage && (
                      <div role="alert" aria-live="assertive" className="text-xs font-semibold text-red-500">
                        {errorMessage}
                      </div>
                    )}

                    {/* Send Button */}
                    <Button
                      type="submit"
                      disabled={status === 'sending'}
                      variant="primary"
                      className="w-full py-4 text-xs font-semibold tracking-widest disabled:bg-blue-700/60"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2"></span>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          <Send size={13} className="mr-2" />
                          Transmit Brief
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
