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

  const categories = [...new Set(posts.map(p => p.category))];
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5b214' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {t('insights')}
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Guias completos, análises e dicas práticas sobre fiscalidade, contabilidade e gestão empresarial em Portugal.
            </p>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <span key={cat} className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary-500" />
              <h2 className="text-2xl font-bold text-neutral-900">Artigo em Destaque</h2>
            </div>
            
            <Link
              href={`/${locale}/insights/${featuredPost.slug}`}
              className="group"
            >
              <article className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary-300 transition-all hover:shadow-2xl">
                {featuredPost.translation.featuredImage && (
                  <div className="relative h-64 md:h-auto bg-neutral-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
                    <span className="absolute top-4 left-4 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-bold">
                      ⭐ Featured
                    </span>
                  </div>
                )}
                
                <div className={`p-8 ${!featuredPost.translation.featuredImage ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-100 rounded-full">
                      {featuredPost.category}
                    </span>
                    <time className="text-sm text-neutral-500">
                      {new Date(featuredPost.createdAt).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.translation.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-700 mb-6 line-clamp-3">
                    {featuredPost.translation.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                    <span>Ler artigo completo</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-primary-500" />
            <h2 className="text-2xl font-bold text-neutral-900">Todos os Artigos</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/${locale}/insights/${post.slug}`}
                className="group"
              >
                <article className="h-full bg-white border-2 border-neutral-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all hover:-translate-y-1">
                  {post.translation.featuredImage && (
                    <div className="h-48 bg-neutral-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-100 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-xs text-neutral-500">
                        {new Date(post.createdAt).toLocaleDateString(locale, {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    
                    <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.translation.title}
                    </h2>
                    
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {post.translation.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Ler mais</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de Apoio Profissional?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            A Hive Group tem TOC certificados e especialistas prontos para ajudar com contabilidade, fiscalidade e gestão empresarial.
          </p>
          <Link
            href={`/${locale}/contactos`}
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Marcar Reunião Gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
