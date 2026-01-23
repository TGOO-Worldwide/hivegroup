import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Traduções profissionais para cada página
const translations = {
  contabilidade: {
    fr: {
      title: 'Comptabilité Certifiée TOC',
      subtitle: 'Gestion comptable complète par des techniciens certifiés',
      seoTitle: 'Comptabilité Certifiée - Hive Group Portugal',
      seoDescription: 'Services de comptabilité professionnelle au Portugal. TOC certifiés, TVA, IRS, IRC, clôture annuelle.',
    },
    es: {
      title: 'Contabilidad Certificada TOC',
      subtitle: 'Gestión contable completa por técnicos certificados',
      seoTitle: 'Contabilidad Certificada - Hive Group Portugal',
      seoDescription: 'Servicios de contabilidad profesional en Portugal. TOC certificados, IVA, IRS, IRC, cierre anual.',
    },
    it: {
      title: 'Contabilità Certificata TOC',
      subtitle: 'Gestione contabile completa da tecnici certificati',
      seoTitle: 'Contabilità Certificata - Hive Group Portogallo',
      seoDescription: 'Servizi di contabilità professionale in Portogallo. TOC certificati, IVA, IRS, IRC, chiusura annuale.',
    },
  },
  'agente-autorizado': {
    fr: {
      title: 'Agent Autorisé Bureau du Citoyen',
      subtitle: 'Services administratifs officiels au Portugal',
      seoTitle: 'Agent Autorisé Bureau du Citoyen - Hive Group',
      seoDescription: 'Agent autorisé officiel pour services administratifs. Documentation automobile, permis, télécommunications.',
    },
    es: {
      title: 'Agente Autorizado Oficina del Ciudadano',
      subtitle: 'Servicios administrativos oficiales en Portugal',
      seoTitle: 'Agente Autorizado Oficina del Ciudadano - Hive Group',
      seoDescription: 'Agente autorizado oficial para servicios administrativos. Documentación automóvil, licencias, telecomunicaciones.',
    },
    it: {
      title: 'Agente Autorizzato Ufficio del Cittadino',
      subtitle: 'Servizi amministrativi ufficiali in Portogallo',
      seoTitle: 'Agente Autorizzato Ufficio del Cittadino - Hive Group',
      seoDescription: 'Agente autorizzato ufficiale per servizi amministrativi. Documentazione auto, patenti, telecomunicazioni.',
    },
  },
  finance: {
    fr: {
      title: 'Conseil Financier',
      subtitle: 'Planification financière et analyse des investissements',
      seoTitle: 'Conseil Financier - Hive Group Portugal',
      seoDescription: 'Conseil financier d\'entreprise. Planification, analyse d\'investissements, flux de trésorerie.',
    },
    es: {
      title: 'Consultoría Financiera',
      subtitle: 'Planificación financiera y análisis de inversiones',
      seoTitle: 'Consultoría Financiera - Hive Group Portugal',
      seoDescription: 'Consultoría financiera empresarial. Planificación, análisis de inversiones, flujo de caja.',
    },
    it: {
      title: 'Consulenza Finanziaria',
      subtitle: 'Pianificazione finanziaria e analisi degli investimenti',
      seoTitle: 'Consulenza Finanziaria - Hive Group Portogallo',
      seoDescription: 'Consulenza finanziaria aziendale. Pianificazione, analisi investimenti, flusso di cassa.',
    },
  },
  credit: {
    fr: {
      title: 'Solutions de Crédit',
      subtitle: 'Financement et crédit pour entreprises',
      seoTitle: 'Solutions de Crédit - Hive Group Portugal',
      seoDescription: 'Solutions de crédit professionnel. Financement d\'entreprise, crédit commercial, restructuration.',
    },
    es: {
      title: 'Soluciones de Crédito',
      subtitle: 'Financiación y crédito para empresas',
      seoTitle: 'Soluciones de Crédito - Hive Group Portugal',
      seoDescription: 'Soluciones de crédito profesional. Financiación empresarial, crédito comercial, reestructuración.',
    },
    it: {
      title: 'Soluzioni di Credito',
      subtitle: 'Finanziamento e credito per imprese',
      seoTitle: 'Soluzioni di Credito - Hive Group Portogallo',
      seoDescription: 'Soluzioni di credito professionale. Finanziamento aziendale, credito commerciale, ristrutturazione.',
    },
  },
  insurance: {
    fr: {
      title: 'Assurances Professionnelles',
      subtitle: 'Solutions d\'assurance pour entreprises',
      seoTitle: 'Assurances Professionnelles - Hive Group Portugal',
      seoDescription: 'Assurances pour entreprises. Responsabilité civile, assurance de groupe, protection complète.',
    },
    es: {
      title: 'Seguros Profesionales',
      subtitle: 'Soluciones de seguro para empresas',
      seoTitle: 'Seguros Profesionales - Hive Group Portugal',
      seoDescription: 'Seguros para empresas. Responsabilidad civil, seguro de grupo, protección completa.',
    },
    it: {
      title: 'Assicurazioni Professionali',
      subtitle: 'Soluzioni assicurative per imprese',
      seoTitle: 'Assicurazioni Professionali - Hive Group Portogallo',
      seoDescription: 'Assicurazioni per imprese. Responsabilità civile, assicurazione di gruppo, protezione completa.',
    },
  },
  'real-estate': {
    fr: {
      title: 'Immobilier d\'Entreprise',
      subtitle: 'Solutions immobilières pour professionnels',
      seoTitle: 'Immobilier d\'Entreprise - Hive Group Portugal',
      seoDescription: 'Services immobiliers professionnels. Achat, vente, location, gestion de patrimoine.',
    },
    es: {
      title: 'Inmobiliario Empresarial',
      subtitle: 'Soluciones inmobiliarias para profesionales',
      seoTitle: 'Inmobiliario Empresarial - Hive Group Portugal',
      seoDescription: 'Servicios inmobiliarios profesionales. Compra, venta, alquiler, gestión de patrimonio.',
    },
    it: {
      title: 'Immobiliare Aziendale',
      subtitle: 'Soluzioni immobiliari per professionisti',
      seoTitle: 'Immobiliare Aziendale - Hive Group Portogallo',
      seoDescription: 'Servizi immobiliari professionali. Acquisto, vendita, affitto, gestione patrimonio.',
    },
  },
  legal: {
    fr: {
      title: 'Services Juridiques',
      subtitle: 'Conseil juridique et support légal pour entreprises',
      seoTitle: 'Services Juridiques - Hive Group Portugal',
      seoDescription: 'Conseil juridique d\'entreprise. Droit commercial, contrats, conformité, contentieux.',
    },
    es: {
      title: 'Servicios Jurídicos',
      subtitle: 'Asesoramiento jurídico y soporte legal para empresas',
      seoTitle: 'Servicios Jurídicos - Hive Group Portugal',
      seoDescription: 'Asesoramiento jurídico empresarial. Derecho comercial, contratos, cumplimiento, litigios.',
    },
    it: {
      title: 'Servizi Legali',
      subtitle: 'Consulenza legale e supporto per imprese',
      seoTitle: 'Servizi Legali - Hive Group Portogallo',
      seoDescription: 'Consulenza legale aziendale. Diritto commerciale, contratti, conformità, contenziosi.',
    },
  },
  marketing: {
    fr: {
      title: 'Marketing Numérique',
      subtitle: 'Stratégie marketing et présence digitale',
      seoTitle: 'Marketing Numérique - Hive Group Portugal',
      seoDescription: 'Services de marketing digital. SEO, réseaux sociaux, contenu, publicité en ligne.',
    },
    es: {
      title: 'Marketing Digital',
      subtitle: 'Estrategia de marketing y presencia digital',
      seoTitle: 'Marketing Digital - Hive Group Portugal',
      seoDescription: 'Servicios de marketing digital. SEO, redes sociales, contenido, publicidad online.',
    },
    it: {
      title: 'Marketing Digitale',
      subtitle: 'Strategia marketing e presenza digitale',
      seoTitle: 'Marketing Digitale - Hive Group Portogallo',
      seoDescription: 'Servizi di marketing digitale. SEO, social media, contenuti, pubblicità online.',
    },
  },
  travel: {
    fr: {
      title: 'Voyages d\'Affaires',
      subtitle: 'Gestion de voyages professionnels',
      seoTitle: 'Voyages d\'Affaires - Hive Group Portugal',
      seoDescription: 'Services de voyage d\'entreprise. Réservations, gestion, optimisation des coûts.',
    },
    es: {
      title: 'Viajes de Negocios',
      subtitle: 'Gestión de viajes profesionales',
      seoTitle: 'Viajes de Negocios - Hive Group Portugal',
      seoDescription: 'Servicios de viajes empresariales. Reservas, gestión, optimización de costes.',
    },
    it: {
      title: 'Viaggi d\'Affari',
      subtitle: 'Gestione viaggi professionali',
      seoTitle: 'Viaggi d\'Affari - Hive Group Portogallo',
      seoDescription: 'Servizi di viaggio aziendale. Prenotazioni, gestione, ottimizzazione costi.',
    },
  },
  it: {
    fr: {
      title: 'Services IT',
      subtitle: 'Solutions technologiques pour entreprises',
      seoTitle: 'Services IT - Hive Group Portugal',
      seoDescription: 'Services informatiques professionnels. Infrastructure, sécurité, développement, support.',
    },
    es: {
      title: 'Servicios IT',
      subtitle: 'Soluciones tecnológicas para empresas',
      seoTitle: 'Servicios IT - Hive Group Portugal',
      seoDescription: 'Servicios informáticos profesionales. Infraestructura, seguridad, desarrollo, soporte.',
    },
    it: {
      title: 'Servizi IT',
      subtitle: 'Soluzioni tecnologiche per imprese',
      seoTitle: 'Servizi IT - Hive Group Portogallo',
      seoDescription: 'Servizi informatici professionali. Infrastruttura, sicurezza, sviluppo, supporto.',
    },
  },
  'business-development': {
    fr: {
      title: 'Développement Commercial',
      subtitle: 'Stratégie commerciale, expansion et partenariats',
      seoTitle: 'Développement Commercial - Hive Group Portugal',
      seoDescription: 'Développement d\'entreprise. Stratégie commerciale, expansion marchés, partenariats.',
    },
    es: {
      title: 'Desarrollo de Negocio',
      subtitle: 'Estrategia comercial, expansión y alianzas',
      seoTitle: 'Desarrollo de Negocio - Hive Group Portugal',
      seoDescription: 'Desarrollo empresarial. Estrategia comercial, expansión mercados, alianzas.',
    },
    it: {
      title: 'Sviluppo Business',
      subtitle: 'Strategia commerciale, espansione e partnership',
      seoTitle: 'Sviluppo Business - Hive Group Portogallo',
      seoDescription: 'Sviluppo aziendale. Strategia commerciale, espansione mercati, partnership.',
    },
  },
};

async function main() {
  console.log('🔄 Corrigindo traduções FR/ES/IT para páginas de serviço...\n');

  const slugs = Object.keys(translations);
  let fixed = 0;

  for (const slug of slugs) {
    const page = await prisma.page.findUnique({
      where: { slug },
      include: { translations: true }
    });

    if (!page) {
      console.log(`⚠️  Página "${slug}" não encontrada no DB`);
      continue;
    }

    console.log(`\n📄 ${slug}:`);

    for (const locale of ['fr', 'es', 'it']) {
      const existingTranslation = page.translations.find(t => t.locale === locale);
      const newData = translations[slug as keyof typeof translations][locale as 'fr' | 'es' | 'it'];

      if (existingTranslation) {
        // Atualizar tradução existente
        await prisma.pageTranslation.update({
          where: { id: existingTranslation.id },
          data: {
            title: newData.title,
            subtitle: newData.subtitle,
            seoTitle: newData.seoTitle,
            seoDescription: newData.seoDescription,
          }
        });
        console.log(`  ✅ ${locale}: "${newData.title}" (atualizado)`);
        fixed++;
      } else {
        console.log(`  ⚠️  ${locale}: tradução não existe no DB`);
      }
    }
  }

  console.log(`\n✨ Concluído! ${fixed} traduções corrigidas.`);
  console.log('\n📝 Próximo passo: verificar páginas no browser.');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
