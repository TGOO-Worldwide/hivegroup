'use client';

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/components/ui/scroll-based-velocity';

interface ServiceHeroAnimatedProps {
  title: string;
  subtitle: string;
}

export default function ServiceHeroAnimated({ title, subtitle }: ServiceHeroAnimatedProps) {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="hex-pattern-hero" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <polygon 
              points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="text-white"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-pattern-hero)"/>
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Static Title (above scroll) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Animated Scroll Velocity */}
        <ScrollVelocityContainer className="py-8">
          <ScrollVelocityRow 
            baseVelocity={15} 
            direction={1}
            className="text-3xl md:text-5xl font-bold text-white/20 tracking-tight py-4"
          >
            {title}
          </ScrollVelocityRow>
          <ScrollVelocityRow 
            baseVelocity={15} 
            direction={-1}
            className="text-3xl md:text-5xl font-bold text-white/10 tracking-tight py-4"
          >
            {subtitle}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-charcoal-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-charcoal-900" />
    </section>
  );
}
