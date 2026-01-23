'use client';

import { ArrowRight } from '@phosphor-icons/react';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function HowItWorksSteps({ title, subtitle, steps }: HowItWorksStepsProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1">
            <div className="h-full bg-gradient-gold opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Premium Step Card */}
                <div
                  className="
                    relative
                    backdrop-blur-sm
                    bg-white/90
                    border-2 border-primary-200/40
                    rounded-3xl
                    p-8
                    shadow-premium
                    hover:shadow-2xl
                    hover:border-primary-400/60
                    transition-all duration-500
                    hover:-translate-y-3
                    overflow-hidden
                  "
                >
                  {/* Number Badge */}
                  <div className="relative mb-8">
                    <div
                      className="
                        w-24 h-24
                        bg-gradient-gold
                        rounded-2xl
                        flex items-center justify-center
                        shadow-lg
                        mx-auto
                        transform -mt-16
                        group-hover:scale-110 group-hover:rotate-3
                        transition-all duration-500
                      "
                    >
                      <span className="text-white font-bold text-4xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base text-charcoal-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Gradient Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
                </div>

                {/* Arrow (Desktop only, not after last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight size={20} weight="bold" className="text-primary-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
