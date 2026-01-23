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
      
      {/* Hero - News Style */}
      <section className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href={`/${locale}/insights`} className="text-primary-600 hover:underline font-medium">
              Insights
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500">{post.category}</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
            {translation.title}
          </h1>
          
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
            <time>
              {new Date(post.createdAt).toLocaleDateString(locale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>Hive Group</span>
          </div>
          
          {/* Excerpt */}
          <p className="text-xl text-neutral-600 leading-relaxed border-l-4 border-primary-500 pl-6">
            {translation.excerpt}
          </p>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Content - News Style Typography */}
          <div
            className="article-content prose prose-lg max-w-none
              prose-headings:text-neutral-900 prose-headings:font-bold prose-headings:leading-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pt-8 prose-h2:border-t prose-h2:border-neutral-200
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-neutral-800
              prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-2 prose-h4:text-neutral-700 prose-h4:font-semibold
              prose-p:text-neutral-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
              prose-a:text-primary-600 prose-a:underline prose-a:underline-offset-2 prose-a:font-medium hover:prose-a:text-primary-700
              prose-strong:text-neutral-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-3
              prose-ol:my-6 prose-ol:space-y-3
              prose-li:text-neutral-700 prose-li:leading-relaxed prose-li:text-lg
              prose-table:border-collapse prose-table:w-full prose-table:my-10
              prose-thead:bg-neutral-100
              prose-th:text-neutral-900 prose-th:font-semibold prose-th:border prose-th:border-neutral-300 prose-th:p-4 prose-th:text-left prose-th:text-sm
              prose-td:border prose-td:border-neutral-200 prose-td:p-4 prose-td:bg-white prose-td:text-base
              prose-tr:even:bg-neutral-50"
            dangerouslySetInnerHTML={{ __html: translation.contentHtml }}
          />

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <section className="mt-16 pt-10 border-t border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                {faq.map((item: any, index: number) => (
                  <div key={index} className="border-b border-neutral-200 pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-neutral-600 text-base leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Context-Specific */}
          <div className="mt-16 bg-neutral-900 rounded-lg p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white mb-4">{cta.title}</h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              {cta.description}
            </p>
            <Link
              href={cta.link}
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded font-semibold hover:bg-primary-600 transition-colors text-sm"
            >
              {cta.linkText}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-neutral-50 border-t border-neutral-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-neutral-900 mb-6 uppercase tracking-wide">Leia também</h2>
            
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${locale}/insights/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="flex gap-4 py-4 border-b border-neutral-200 last:border-b-0 hover:bg-neutral-100 -mx-4 px-4 transition-colors">
                    <div className="flex-1">
                      <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-neutral-900 mt-1 group-hover:text-primary-600 transition-colors leading-snug">
                        {relatedPost.translation.title}
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 flex-shrink-0 mt-4 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
