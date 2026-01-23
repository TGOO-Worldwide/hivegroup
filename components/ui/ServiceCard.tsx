'use client';

import Link from 'next/link';
import HiveIcon, { HiveIconName } from './HiveIcon';
import { ArrowRight } from '@phosphor-icons/react';

interface ServiceCardProps {
  icon: HiveIconName;
  title: string;
  description: string;
  href: string;
  highlight?: boolean;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  highlight = false,
  className = '',
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group relative block ${className}`}
    >
      {/* Glass Card Container */}
      <div
        className={`
          relative h-full
          backdrop-blur-sm
          bg-white/60
          border border-primary-200/40
          rounded-2xl
          p-8
          transition-all duration-300 ease-out
          hover:bg-white/80
          hover:border-primary-400/60
          hover:shadow-premium
          hover:-translate-y-2
          ${highlight ? 'ring-2 ring-primary-400/30 shadow-lg' : 'shadow-sm'}
        `}
      >
        {/* Highlight Badge */}
        {highlight && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-gradient-gold px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-xs font-bold text-white tracking-wide">
                PRINCIPAL
              </span>
            </div>
          </div>
        )}

        {/* Golden Corner Accent (appears on hover) */}
        <div
          className="
            absolute top-0 right-0 
            w-20 h-20 
            bg-gradient-gold 
            opacity-0 group-hover:opacity-10
            transition-opacity duration-300
            rounded-tr-2xl
          "
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />

        {/* Icon Container with Hive SVG Background */}
        <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
          <div className="relative inline-flex items-center justify-center w-16 h-16">
            {/* Hive SVG Background */}
            <img
              src="/hive.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Icon in White on Center */}
            <HiveIcon
              name={icon}
              size={28}
              className="relative z-10 text-white drop-shadow-sm"
              weight="regular"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-xl font-bold text-charcoal-900 tracking-tight leading-tight group-hover:text-primary-700 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-charcoal-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Arrow CTA (appears on hover) */}
        <div className="mt-6 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
          <span className="text-sm font-semibold mr-2">Explorar</span>
          <ArrowRight size={16} weight="bold" />
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
      </div>
    </Link>
  );
}
