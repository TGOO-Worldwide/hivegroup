import Link from 'next/link';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ContactCTA({ title, description, buttonText, buttonLink }: ContactCTAProps) {
  return (
    <section className="bg-primary-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <Link
              href={buttonLink}
              className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-neutral-100 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
