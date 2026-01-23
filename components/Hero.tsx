import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, description, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
            {description}
          </p>
          {ctaText && ctaLink && (
            <div className="mt-10">
              <Link
                href={ctaLink}
                className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
