import Script from 'next/script';

interface FAQItem {
  question: string;
  answer: string;
}

interface JsonLdFAQProps {
  faqs: FAQItem[];
  locale: string;
}

export default function JsonLdFAQ({ faqs, locale }: JsonLdFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script
      id="json-ld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
