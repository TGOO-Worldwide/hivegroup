interface Reason {
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  title: string;
  subtitle: string;
  reasons: Reason[];
}

export default function WhyChooseSection({ title, subtitle, reasons }: WhyChooseSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
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

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 hover:border-primary-300 group"
            >
              {/* Golden Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Golden Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
