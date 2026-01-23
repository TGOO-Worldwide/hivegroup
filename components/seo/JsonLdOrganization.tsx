import Script from 'next/script';

interface JsonLdOrganizationProps {
  locale: string;
}

export default function JsonLdOrganization({ locale }: JsonLdOrganizationProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `https://hivegroup.pt/${locale}#organization`,
    "name": "Hive Group Portugal",
    "legalName": "Hive Group Portugal, Lda",
    "url": `https://hivegroup.pt/${locale}`,
    "logo": "https://hivegroup.pt/logo.png",
    "description": locale === 'pt' 
      ? "Grupo empresarial português com soluções integradas: contabilidade, finanças, crédito, seguros, imobiliário, jurídico, marketing, viagens, IT e desenvolvimento de negócio."
      : locale === 'en'
      ? "Portuguese business group with integrated solutions: accounting, finance, credit, insurance, real estate, legal, marketing, travel, IT and business development."
      : locale === 'fr'
      ? "Groupe d'entreprises portugais avec solutions intégrées: comptabilité, finances, crédit, assurances, immobilier, juridique, marketing, voyages, IT et développement commercial."
      : locale === 'es'
      ? "Grupo empresarial portugués con soluciones integradas: contabilidad, finanzas, crédito, seguros, inmobiliario, jurídico, marketing, viajes, IT y desarrollo de negocio."
      : "Gruppo aziendale portoghese con soluzioni integrate: contabilità, finanza, credito, assicurazioni, immobiliare, legale, marketing, viaggi, IT e sviluppo aziendale.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PT",
      "addressLocality": "Lisboa",
      "addressRegion": "Lisboa",
      "postalCode": "1000-000",
      "streetAddress": "Rua Exemplo, 123"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+351-212-433-909",
        "contactType": "customer service",
        "areaServed": "PT",
        "availableLanguage": ["pt-PT", "en-GB", "fr-FR", "es-ES", "it-IT"]
      },
      {
        "@type": "ContactPoint",
        "email": "business@hivegroup.pt",
        "contactType": "general inquiries"
      },
      {
        "@type": "ContactPoint",
        "email": "finance@hivegroup.pt",
        "contactType": "financial services"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/hivegroup",
      "https://www.facebook.com/hivegroup",
      "https://twitter.com/hivegroup"
    ],
    "knowsAbout": [
      "Accounting", "Finance", "Credit", "Insurance", "Real Estate",
      "Legal Services", "Digital Marketing", "Corporate Travel",
      "IT Services", "Business Development"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Portugal"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Script
      id="json-ld-organization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
