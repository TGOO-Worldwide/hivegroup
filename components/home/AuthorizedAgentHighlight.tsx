'use client';

import Link from 'next/link';
import { HiveIcon } from '@/components/ui';
import { ArrowRight, Stamp, ShieldCheck } from '@phosphor-icons/react';

interface AuthorizedAgentHighlightProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tagline: string;
  ctaLabel: string;
  href: string;
}

export default function AuthorizedAgentHighlight({
  title,
  subtitle,
  description,
  features,
  tagline,
  ctaLabel,
  href,
}: AuthorizedAgentHighlightProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      {/* Hex Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="hex-pattern" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern)"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge Premium */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-gold rounded-full shadow-xl mb-6">
            <Stamp size={24} weight="fill" className="text-white" />
            <span className="text-sm font-bold text-white tracking-wider">
              AGENTE AUTORIZADO OFICIAL
            </span>
          </div>

          {/* Title - Logo SVG */}
          <div className="flex justify-center mb-6">
            <img
              src="/local-do-cidadao-2.svg"
              alt="Agente Autorizado Local do Cidadão"
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <p className="text-xl text-primary-300 font-semibold mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {/* Features Cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                relative
                backdrop-blur-sm
                bg-white/5
                border border-white/10
                rounded-2xl
                p-6
                hover:bg-white/10
                hover:border-primary-400/50
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              <div className="flex items-start gap-4">
                <ShieldCheck
                  size={28}
                  weight="fill"
                  className="flex-shrink-0 text-primary-400 group-hover:text-primary-300 transition-colors duration-200"
                />
                <p className="text-base text-white/90 leading-relaxed">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline + CTA */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-white">
            {tagline}
          </p>

          <Link
            href={href}
            className="
              group
              inline-flex items-center gap-3
              px-8 py-4
              bg-white
              text-charcoal-900 font-bold text-lg
              rounded-2xl
              shadow-2xl hover:shadow-primary-500/50
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

          {/* Reference */}
          <div className="pt-4">
            <a
              href="https://localdocidadao.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-300 hover:text-primary-200 transition-colors"
            >
              <span>Saiba mais em localdocidadao.pt</span>
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
