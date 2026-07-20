import { motion } from 'framer-motion';

export default function SectionHeading({ category, title, description, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`space-y-2 ${className}`}
    >
      <span className="text-xs font-mono tracking-widest text-slate-500 uppercase block font-bold">
        {category}
      </span>
      <h2 className="text-2xl font-bold text-white font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
