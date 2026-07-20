import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Magnetic({ children, disabled }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (disabled) return <div className="w-full sm:w-auto">{children}</div>;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Slight pull distance (max ~6px for premium, non-exaggerated feel)
    const x = (clientX - centerX) * 0.12;
    const y = (clientY - centerY) * 0.12;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.5 }}
      className="w-full sm:w-auto"
    >
      {children}
    </motion.div>
  );
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  // Add 'group' to baseClasses so child icons can easily transition with group-hover
  const baseClasses = 'inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer group relative overflow-hidden';
  
  const sizeClasses = {
    default: 'px-8 py-4 rounded-xl text-sm',
    sm: 'px-5 py-2.5 rounded-lg text-xs',
    icon: 'p-2.5 rounded-lg shrink-0',
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 border border-blue-500/20',
    secondary: 'glass-panel text-white hover:bg-slate-800/40 border border-slate-700/50',
    outline: 'border border-slate-700 hover:border-blue-500 hover:text-blue-500 bg-transparent',
    ghost: 'bg-transparent hover:bg-slate-800/20 text-slate-300 hover:text-white border border-transparent',
    icon: 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-500 hover:border-slate-700',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  const isMagnetic = variant === 'primary' || variant === 'secondary';

  // Standard interactive states for buttons
  const motionProps = {
    whileHover: {
      scale: 1.02,
      filter: 'brightness(1.06)',
      boxShadow: variant === 'primary'
        ? '0 12px 24px -6px rgba(59, 130, 246, 0.45)'
        : '0 12px 24px -6px rgba(0, 0, 0, 0.35)',
    },
    whileTap: {
      scale: 0.98,
    },
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    }
  };

  const innerButton = href ? (
    <motion.a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (isMagnetic) {
    return <Magnetic disabled={disabled}>{innerButton}</Magnetic>;
  }

  return innerButton;
}
