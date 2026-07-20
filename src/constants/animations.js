// Shared Framer Motion animation presets
export const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, // 70ms stagger delay between child elements
        delayChildren: 0.1,
      },
    },
  },
  
  fadeUp: {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  },
  
  slideInLeft: {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  },
  
  slideInRight: {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: 'easeOut', delay: 0.1 },
    },
  },
  
  scaleUp: {
    hidden: { opacity: 0, scale: 0.97, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  },
  
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  
  click: {
    scale: 0.98,
  }
};
