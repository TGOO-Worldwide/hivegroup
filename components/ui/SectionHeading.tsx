import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const containerClass = {
    left: '',
    center: 'mx-auto',
    right: 'ml-auto',
  }[align];

  return (
    <div className={`section-heading ${alignmentClass} ${className}`}>
      {badge && (
        <div className={`mb-4 inline-block ${align === 'center' ? 'mx-auto' : ''}`}>
          {badge}
        </div>
      )}
      <h2 className={`section-title ${containerClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${containerClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
