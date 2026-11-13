import { getAllPosts } from '@/lib/pages';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

  const categories = Array.from(new Set(posts.map(p => p.category)));
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <>
      {/* Hero Section - Clean */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 border-b-4 border-primary-500">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            {t('insights')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Guias completos e artigos práticos sobre fiscalidade, contabilidade e gestão empresarial em Portugal
          </p>
        </div>
      </section>

      {/* All Posts - Clean List */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-neutral-200">
              {categories.map((cat) => (
                <span key={cat} className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-pointer">
                  {cat}
                </span>
              ))}
            </div>
          )}
          
          {/* Articles List */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/${locale}/insights/${post.slug}`}
                className="group block"
              >
                <article className="relative bg-white border border-neutral-200 rounded-lg p-6 hover:border-primary-400 hover:shadow-md transition-all">
                  {/* Badge Featured */}
                  {index === 0 && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-md">
                        Em Destaque
                      </span>
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-50 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">•</span>
                    <time className="text-sm text-neutral-500">
                      {new Date(post.createdAt).toLocaleDateString(locale, {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.translation.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.translation.excerpt}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Ler artigo completo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Precisa de Apoio Profissional?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            A Hive Group tem Contabilistas Certificados e especialistas prontos para ajudar com contabilidade, fiscalidade e gestão empresarial
          </p>
          <Link
            href={`/${locale}/contactos`}
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-sm"
          >
            Marcar Reunião Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
