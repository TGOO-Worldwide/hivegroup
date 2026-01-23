import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        gold: 'bg-primary-100 text-primary-800 border border-primary-200',
        charcoal: 'bg-charcoal-100 text-charcoal-800 border border-charcoal-200',
        outline: 'border-2 border-primary-600 text-primary-600',
        gradient: 'bg-gradient-gold text-white',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'gold',
      size: 'md',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function Badge({
  children,
  variant,
  size,
  className,
  icon,
}: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, size, className })}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </span>
  );
}
