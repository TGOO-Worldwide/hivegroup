import { getPostBySlug, getAllPosts } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import JsonLdBlogPosting from '@/components/seo/JsonLdBlogPosting';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import JsonLdFAQ from '@/components/seo/JsonLdFAQ';

// Force dynamic rendering to ensure database connection at runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PostPageProps {
  params: { locale: string; slug: string };
}

export async function generateMetadata({ params: { locale, slug } }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(slug, locale);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { translation } = post;

  return {
    title: translation.seoTitle,
    description: translation.seoDescription,
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: {
        'pt': `/pt/insights/${slug}`,
        'en': `/en/insights/${slug}`,
        'fr': `/fr/insights/${slug}`,
        'es': `/es/insights/${slug}`,
        'it': `/it/insights/${slug}`,
      },
    },
    openGraph: {
      title: translation.seoTitle,
      description: translation.seoDescription,
      type: 'article',
      locale: locale,
    },
  };
}

export default async function PostPage({ params: { locale, slug } }: PostPageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const post = await getPostBySlug(slug, locale);
  const allPosts = await getAllPosts(locale);
  const t = await getTranslations('common');

  if (!post) {
    notFound();
  }

  const { translation } = post;
  const faq = translation.faqJson ? JSON.parse(translation.faqJson) : null;

  // Get related posts (same category, exclude current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  // Determine CTA based on category
  const getCTAByCategory = (category: string) => {
    const ctas: Record<string, { title: string; description: string; link: string; linkText: string }> = {
      'Fiscalidade': {
        title: 'Precisa de Apoio com IRS ou Fiscalidade?',
        description: 'A Hive Group tem TOC certificados prontos para otimizar a sua situação fiscal legalmente e maximizar deduções.',
        link: `/${locale}/contabilidade`,
        linkText: 'Conhecer Serviço de Contabilidade'
      },
      'Empresas': {
        title: 'Quer Abrir ou Gerir a Sua Empresa?',
        description: 'Tratamos de toda a constituição, contabilidade e obrigações fiscais. Acompanhamento mensal por TOC certificado.',
        link: `/${locale}/contabilidade`,
        linkText: 'Falar com Especialista'
      },
      'Serviços': {
        title: 'Precisa de Tratar de Documentos Oficiais?',
        description: 'Somos agente autorizado Local do Cidadão. Tratamos de certidões, carta de condução, registos e mais sem filas.',
        link: `/${locale}/agente-autorizado`,
        linkText: 'Conhecer Local do Cidadão'
      }
    };
    return ctas[category] || ctas['Empresas'];
  };

  const cta = getCTAByCategory(post.category);

  return (
    <>
      <JsonLdBlogPosting
        title={translation.title}
        excerpt={translation.excerpt}
        content={translation.contentHtml}
        publishedTime={post.createdAt.toISOString()}
        modifiedTime={post.updatedAt.toISOString()}
        locale={locale}
        slug={slug}
        featuredImage={translation.featuredImage || undefined}
      />
      <JsonLdBreadcrumb
        items={[
          { name: 'Home', url: `https://hivegroup.pt/${locale}` },
          { name: 'Insights', url: `https://hivegroup.pt/${locale}/insights` },
          { name: translation.title, url: `https://hivegroup.pt/${locale}/insights/${slug}` }
        ]}
      />
      {faq && faq.length > 0 && <JsonLdFAQ faqs={faq} locale={locale} />}
      
      {/* Hero with Category */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-10 border-b-4 border-primary-500">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/insights`}
            className="text-primary-400 hover:text-primary-300 text-sm font-medium mb-4 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar aos Insights
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-100 rounded-md">
              {post.category}
            </span>
            <span className="text-xs text-white/40">•</span>
            <time className="text-sm text-white/60">
              {new Date(post.createdAt).toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
            {translation.title}
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            {translation.excerpt}
          </p>
        </div>
      </section>

      <article className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div
            className="article-content prose prose-lg max-w-3xl mx-auto
              prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:leading-snug
              prose-h2:text-4xl prose-h2:mt-8 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary-200
              prose-h3:text-2xl prose-h3:mt-7 prose-h3:mb-4 prose-h3:text-neutral-800
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-neutral-700 prose-h4:font-semibold
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base
              prose-a:text-primary-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-strong:text-neutral-900 prose-strong:font-semibold
              prose-ul:my-5 prose-ul:space-y-2
              prose-ol:my-5 prose-ol:space-y-2
              prose-li:text-neutral-700 prose-li:leading-relaxed
              prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:shadow-sm
              prose-thead:bg-neutral-800
              prose-th:text-white prose-th:font-semibold prose-th:border prose-th:border-neutral-600 prose-th:p-4 prose-th:text-left prose-th:text-sm
              prose-td:border prose-td:border-neutral-300 prose-td:p-4 prose-td:bg-white prose-td:text-sm
              prose-tr:even:bg-neutral-50"
            dangerouslySetInnerHTML={{ __html: translation.contentHtml }}
          />

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <section className="mt-12 border-t-2 border-neutral-200 pt-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-primary-500 rounded-full" />
                <h2 className="text-3xl font-bold text-neutral-900">
                  Perguntas Frequentes
                </h2>
              </div>
              <div className="space-y-5">
                {faq.map((item: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-md transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">
                          {item.question}
                        </h3>
                        <p className="text-neutral-700 text-base leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Context-Specific */}
          <div className="mt-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 sm:p-10 text-center text-white border-2 border-primary-400/30">
            <h3 className="text-2xl font-bold mb-5">{cta.title}</h3>
            <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {cta.description}
            </p>
            <Link
              href={cta.link}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 hover:shadow-xl transition-all hover:-translate-y-0.5 shadow-lg text-base"
            >
              {cta.linkText}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-neutral-50 border-t-2 border-neutral-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary-500 rounded-full" />
              <h2 className="text-2xl font-bold text-neutral-900">Artigos Relacionados</h2>
            </div>
            
            <div className="space-y-5">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${locale}/insights/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-400 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-50 rounded-md">
                        {relatedPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">
                      {relatedPost.translation.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-base line-clamp-2 leading-relaxed">
                      {relatedPost.translation.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
