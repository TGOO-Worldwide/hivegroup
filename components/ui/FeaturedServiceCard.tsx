'use client';

import Link from 'next/link';
import HiveIcon, { HiveIconName } from './HiveIcon';
import { CheckCircle, ArrowRight } from '@phosphor-icons/react';

interface FeaturedServiceCardProps {
  icon: HiveIconName;
  title: string;
  description: string;
  features: string[];
  href: string;
  ctaLabel: string;
  highlight?: boolean;
  className?: string;
}

export default function FeaturedServiceCard({
  icon,
  title,
  description,
  features,
  href,
  ctaLabel,
  highlight = false,
  className = '',
}: FeaturedServiceCardProps) {
  return (
    <div
      className={`
        group relative
        backdrop-blur-sm
        bg-white/80
        border
        rounded-3xl
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-3
        ${
          highlight
            ? 'border-primary-400/60 shadow-premium ring-2 ring-primary-400/30'
            : 'border-primary-200/40 shadow-md hover:shadow-premium'
        }
        ${className}
      `}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-gold px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-white tracking-wider">
              ★ PRINCIPAL
            </span>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div
        className={`
          relative p-8
          ${
            highlight
              ? 'bg-gradient-to-br from-primary-500 to-primary-600'
              : 'bg-gradient-charcoal'
          }
        `}
      >
        {/* Icon Container with Hive SVG */}
        <div className="mb-6">
          <div className="relative inline-flex items-center justify-center w-20 h-20 transition-transform duration-300 group-hover:scale-110">
            <img
              src="/hive-3.svg"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
            />
            <HiveIcon
              name={icon}
              size={36}
              className="relative z-10 text-white drop-shadow-md"
              weight="regular"
            />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-white/90 leading-relaxed">
          {description}
        </p>

        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Features Section */}
      <div className="p-8 bg-white/60 backdrop-blur-sm">
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start group/item">
              <CheckCircle
                size={20}
                weight="fill"
                className={`
                  flex-shrink-0 mt-0.5 mr-3
                  transition-colors duration-200
                  ${
                    highlight
                      ? 'text-primary-500 group-hover/item:text-primary-600'
                      : 'text-charcoal-500 group-hover/item:text-primary-600'
                  }
                `}
              />
              <span className="text-sm text-charcoal-700 leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={href}
          className={`
            group/btn
            flex items-center justify-center
            w-full px-6 py-4
            rounded-xl
            font-semibold
            transition-all duration-300
            ${
              highlight
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                : 'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-md hover:shadow-lg'
            }
          `}
        >
          <span>{ctaLabel}</span>
          <ArrowRight
            size={18}
            weight="bold"
            className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>

      {/* Bottom Gradient Line */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-1
          transform scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 origin-left
          ${highlight ? 'bg-gradient-gold' : 'bg-gradient-charcoal'}
        `}
      />
    </div>
  );
}
