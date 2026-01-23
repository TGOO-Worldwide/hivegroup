'use client';

interface ServiceHeroAnimatedProps {
  title: string;
  subtitle: string;
}

export default function ServiceHeroAnimated({ title, subtitle }: ServiceHeroAnimatedProps) {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 py-20 overflow-hidden -mt-20 pt-32">
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
        {/* Static Title */}
        <div className="text-center">
          {title === 'Local do Cidadão' ? (
            <div className="flex justify-center mb-8">
              <img
                src="/local-do-cidadao-2.svg"
                alt="Local do Cidadão"
                className="h-20 md:h-24 lg:h-28 w-auto"
              />
            </div>
          ) : (
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6 tracking-tight">
              {title}
            </h1>
          )}
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
