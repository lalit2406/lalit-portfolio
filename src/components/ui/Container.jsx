import { spacing } from '../../constants/spacing';

export default function Container({ children, size = 'default', className = '' }) {
  const maxWidthClass = size === 'small' ? spacing.containerSmall : spacing.container;
  
  return (
    <div className={`${maxWidthClass} px-6 md:px-8 w-full ${className}`}>
      {children}
    </div>
  );
}
