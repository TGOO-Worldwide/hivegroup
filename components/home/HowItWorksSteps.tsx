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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2">
                  {/* Large Golden Number */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-6 transform -mt-16">
                    <span className="text-white font-bold text-3xl">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop only, not after last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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
