import { getAllPosts } from '@/lib/pages';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface InsightsPageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: InsightsPageProps): Promise<Metadata> {
  const t = await getTranslations('navigation');
  
  return {
    title: `${t('insights')} - Hive Group Portugal`,
    description: 'Blog e artigos sobre contabilidade, finanças, imobiliário e negócios em Portugal.',
    alternates: {
      canonical: `/${locale}/insights`,
      languages: {
        'pt': '/pt/insights',
        'en': '/en/insights',
        'fr': '/fr/insights',
        'es': '/es/insights',
        'it': '/it/insights',
      },
    },
  };
}

export default async function InsightsPage({ params: { locale } }: InsightsPageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const posts = await getAllPosts(locale);
  const t = await getTranslations('navigation');

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              {t('insights')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-3xl mx-auto">
              Artigos, notícias e análises sobre o mundo dos negócios em Portugal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/insights/${post.slug}`}
                className="group"
              >
                <article className="h-full bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.translation.title}
                    </h2>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {post.translation.excerpt}
                    </p>
                    <time className="text-xs text-neutral-500">
                      {new Date(post.createdAt).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
