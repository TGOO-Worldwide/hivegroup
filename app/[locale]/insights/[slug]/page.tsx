import { getPostBySlug } from '@/lib/pages';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import JsonLdBlogPosting from '@/components/seo/JsonLdBlogPosting';
import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import JsonLdFAQ from '@/components/seo/JsonLdFAQ';

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
  const t = await getTranslations('common');

  if (!post) {
    notFound();
  }

  const { translation } = post;
  const faq = translation.faqJson ? JSON.parse(translation.faqJson) : null;

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
      
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <Link
              href={`/${locale}/insights`}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-4 inline-block"
            >
              ← {t('backToHome')}
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              {translation.title}
            </h1>
            <time className="text-sm text-neutral-500">
              {new Date(post.createdAt).toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-primary-600 prose-strong:text-neutral-900"
            dangerouslySetInnerHTML={{ __html: translation.contentHtml }}
          />

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <section className="mt-16 border-t border-neutral-200 pt-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Perguntas Frequentes
              </h2>
              <div className="space-y-6">
                {faq.map((item: any, index: number) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-neutral-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
