'use client';

import Link from 'next/link';
import { HiveIcon } from '@/components/ui';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

interface CoreServiceHighlightProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  href: string;
}

export default function CoreServiceHighlight({
  title,
  subtitle,
  description,
  benefits,
  ctaLabel,
  href,
}: CoreServiceHighlightProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold rounded-full shadow-md">
              <span className="text-xs font-bold text-white tracking-wider">
                ★ CORE SERVICE
              </span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-xl text-primary-700 font-semibold">
                {subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-charcoal-600 leading-relaxed">
              {description}
            </p>

            {/* Benefits List */}
            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle
                    size={24}
                    weight="fill"
                    className="flex-shrink-0 text-primary-600 group-hover:text-primary-700 transition-colors duration-200"
                  />
                  <span className="text-base text-charcoal-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href={href}
                className="
                  group
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-gradient-gold
                  text-white font-bold text-lg
                  rounded-2xl
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  hover:scale-105
                "
              >
                <span>{ctaLabel}</span>
                <ArrowRight
                  size={24}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Card */}
          <div className="relative">
            {/* Premium Card */}
            <div
              className="
                relative
                backdrop-blur-lg
                bg-white/80
                border-2 border-primary-300/50
                rounded-3xl
                p-12
                shadow-premium
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                group
              "
            >
              {/* Icon Container */}
              <div className="mb-8 inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HiveIcon
                  name="calculator"
                  size={64}
                  className="text-white"
                  weight="light"
                />
              </div>

              {/* Stats or Highlights */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                    100%
                  </div>
                  <p className="text-base text-charcoal-600">
                    Conformidade Legal
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                    24/7
                  </div>
                  <p className="text-base text-charcoal-600">
                    Suporte Dedicado
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                    500+
                  </div>
                  <p className="text-base text-charcoal-600">
                    Clientes Satisfeitos
                  </p>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-gold rounded-b-3xl" />
            </div>

            {/* Decorative Hex Pattern */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary-400">
                <pattern id="hex" width="20" height="20" patternUnits="userSpaceOnUse">
                  <polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="currentColor" opacity="0.3"/>
                </pattern>
                <rect width="100" height="100" fill="url(#hex)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
