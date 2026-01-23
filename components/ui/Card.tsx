import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-2xl transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-premium',
        premium: 'bg-gradient-to-br from-white to-primary-50 border border-primary-200 hover:shadow-premium-lg',
        charcoal: 'bg-charcoal-900 text-white border border-charcoal-800 hover:border-primary-600',
        glass: 'bg-white/80 backdrop-blur-sm border border-neutral-200',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      hover: {
        lift: 'hover:-translate-y-1',
        glow: 'hover:shadow-premium-lg',
        scale: 'hover:scale-[1.02]',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'lift',
    },
  }
);

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  variant,
  padding,
  hover,
  className,
}: CardProps) {
  return (
    <div className={cardVariants({ variant, padding, hover, className })}>
      {children}
    </div>
  );
}
