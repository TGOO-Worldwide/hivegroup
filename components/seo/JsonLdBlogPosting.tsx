import Script from 'next/script';

interface JsonLdBlogPostingProps {
  title: string;
  excerpt: string;
  content: string;
  publishedTime: string;
  modifiedTime?: string;
  locale: string;
  slug: string;
  featuredImage?: string;
}

export default function JsonLdBlogPosting({
  title,
  excerpt,
  content,
  publishedTime,
  modifiedTime,
  locale,
  slug,
  featuredImage
}: JsonLdBlogPostingProps) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "articleBody": content.replace(/<[^>]*>/g, ''), // Remove HTML tags
    "url": `https://hivegroup.pt/${locale}/insights/${slug}`,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": "Organization",
      "name": "Hive Group Portugal",
      "url": `https://hivegroup.pt/${locale}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hive Group Portugal",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hivegroup.pt/logo.png"
      }
    },
    "image": featuredImage || "https://hivegroup.pt/default-blog-image.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hivegroup.pt/${locale}/insights/${slug}`
    },
    "inLanguage": locale === 'pt' ? 'pt-PT' : locale === 'en' ? 'en-GB' : locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'it-IT'
  };

  return (
    <Script
      id="json-ld-blog-posting"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
    />
  );
}
