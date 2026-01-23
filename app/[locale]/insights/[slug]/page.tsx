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
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-12">
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
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 text-sm font-bold text-primary-700 bg-primary-100 rounded-full">
              {post.category}
            </span>
            <time className="text-sm text-white/60">
              {new Date(post.createdAt).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {translation.title}
          </h1>
          <p className="text-xl text-white/80">
            {translation.excerpt}
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div
            className="article-content prose prose-lg max-w-none 
              prose-headings:text-neutral-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary-200
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-neutral-800
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-neutral-700 prose-h4:font-semibold
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-a:text-primary-600 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-strong:text-neutral-900 prose-strong:font-bold
              prose-ul:my-8 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:space-y-4
              prose-li:text-neutral-700 prose-li:leading-relaxed prose-li:pl-2
              prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:shadow-sm
              prose-thead:bg-neutral-800
              prose-th:text-white prose-th:font-semibold prose-th:border prose-th:border-neutral-600 prose-th:p-4 prose-th:text-left
              prose-td:border prose-td:border-neutral-300 prose-td:p-4 prose-td:bg-white
              prose-tr:even:bg-neutral-50"
            dangerouslySetInnerHTML={{ __html: translation.contentHtml }}
          />

          <style jsx global>{`
            .article-content {
              /* Alert Boxes */
              .article-content > div[class*="bg-primary-"] {
                border-radius: 12px;
                padding: 24px;
                margin: 32px 0;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
              }
              
              .article-content > div[class*="bg-primary-"] p:first-child {
                font-weight: 600;
                font-size: 1.125rem;
                margin-bottom: 12px;
              }
              
              /* Green Boxes */
              .article-content > div[class*="bg-green-"] {
                background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                border-left: 4px solid #10b981;
                border-radius: 12px;
                padding: 24px;
                margin: 32px 0;
              }
              
              /* CTA Boxes */
              .article-content > div[class*="bg-primary-600"] {
                background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                border-radius: 16px;
                padding: 48px 32px;
                margin: 48px 0;
                text-align: center;
                box-shadow: 0 20px 40px rgba(245, 158, 11, 0.2);
              }
              
              .article-content > div[class*="bg-primary-600"] h3 {
                color: white !important;
                font-size: 2rem;
                margin-bottom: 16px;
              }
              
              .article-content > div[class*="bg-primary-600"] p {
                color: rgba(255, 255, 255, 0.95) !important;
                font-size: 1.125rem;
                margin-bottom: 24px;
              }
              
              .article-content > div[class*="bg-primary-600"] a {
                display: inline-block;
                background: white;
                color: #d97706 !important;
                padding: 16px 32px;
                border-radius: 8px;
                font-weight: 700;
                text-decoration: none;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                transition: all 0.2s;
              }
              
              .article-content > div[class*="bg-primary-600"] a:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
              }

              /* Lists Enhancement */
              .article-content ul li::marker {
                color: #f59e0b;
                font-weight: bold;
              }
              
              .article-content ol li::marker {
                color: #f59e0b;
                font-weight: bold;
              }

              /* Tables Enhancement */
              .article-content table {
                border-radius: 8px;
                overflow: hidden;
              }
              
              .article-content table tbody tr:hover {
                background-color: #fef3c7 !important;
              }
            }
          `}</style>

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <section className="mt-16 border-t-2 border-primary-200 pt-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="text-primary-500">❓</span>
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faq.map((item: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Context-Specific */}
          <div className="mt-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{cta.title}</h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <Link
              href={cta.link}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              {cta.linkText}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary-500" />
              <h2 className="text-2xl font-bold text-neutral-900">Artigos Relacionados</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${locale}/insights/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="h-full bg-white border-2 border-neutral-200 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-bold text-primary-700 bg-primary-100 rounded-full">
                          {relatedPost.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedPost.translation.title}
                      </h3>
                      
                      <p className="text-neutral-600 text-sm line-clamp-2">
                        {relatedPost.translation.excerpt}
                      </p>
                    </div>
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
