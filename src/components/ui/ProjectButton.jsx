import Button from './Button';

export default function ProjectButton({
  children,
  href,
  icon: Icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size="sm"
      className={`flex items-center gap-2 ${className}`}
      {...props}
    >
      {Icon && <Icon size={12} />}
      {children}
    </Button>
  );
}
