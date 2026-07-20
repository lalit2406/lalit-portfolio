import { motion } from 'framer-motion';
import { typography } from '../../constants/typography';

export default function SectionTitle({ badge, title, subtitle, className = '', align = 'center', titleClass = '' }) {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center';
  const paragraphMarginClass = align === 'left' ? 'mt-3' : 'mx-auto mt-3.5';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      className={`${alignmentClass} mb-12 ${className} relative z-10 select-none`}
    >
      {badge && (
        <motion.span 
          variants={itemVariants}
          className={`${typography.caption} text-blue-400 mb-2 block`}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2 
        variants={itemVariants}
        className={`${titleClass || typography.h2} text-white tracking-tight`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={itemVariants}
          className={`${typography.bodyPrimary} max-w-xl ${paragraphMarginClass} leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
