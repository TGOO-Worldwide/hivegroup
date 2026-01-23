import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addHomeHighlights() {
  console.log('🌱 Adicionando highlights à Home...');

  // Buscar página home
  const homePage = await prisma.page.findUnique({
    where: { slug: 'home' },
    include: { translations: true }
  });

  if (!homePage) {
    console.error('❌ Home page não encontrada');
    return;
  }

  // Atualizar cada tradução
  for (const translation of homePage.translations) {
    const currentSections = JSON.parse(translation.sectionsJson);

    // Adicionar novas secções
    const updatedSections = {
      ...currentSections,
      coreService: translation.locale === 'pt' ? {
        title: 'Contabilidade Certificada',
        subtitle: 'O Coração da Hive Group',
        description: 'Serviços de contabilidade TOC certificados, com equipa especializada e tecnologia de ponta para garantir compliance total e otimização fiscal da sua empresa.',
        benefits: [
          'TOC Certificados com experiência comprovada',
          'Plataforma digital 24/7 para acesso à documentação',
          'Compliance fiscal garantida e otimização de impostos',
          'Relatórios financeiros mensais detalhados',
          'Suporte dedicado para dúvidas contabilísticas'
        ],
        ctaLabel: 'Saber Mais Sobre Contabilidade'
      } : translation.locale === 'en' ? {
        title: 'Certified Accounting',
        subtitle: 'The Heart of Hive Group',
        description: 'Certified TOC accounting services with specialized team and cutting-edge technology to ensure total compliance and tax optimization for your business.',
        benefits: [
          'Certified TOC with proven experience',
          '24/7 digital platform for document access',
          'Guaranteed tax compliance and optimization',
          'Detailed monthly financial reports',
          'Dedicated support for accounting queries'
        ],
        ctaLabel: 'Learn More About Accounting'
      } : translation.locale === 'fr' ? {
        title: 'Comptabilité Certifiée',
        subtitle: 'Le Cœur du Groupe Hive',
        description: 'Services de comptabilité TOC certifiés avec une équipe spécialisée et une technologie de pointe pour garantir la conformité totale et l\'optimisation fiscale de votre entreprise.',
        benefits: [
          'TOC certifiés avec expérience prouvée',
          'Plateforme numérique 24/7 pour accès aux documents',
          'Conformité fiscale garantie et optimisation',
          'Rapports financiers mensuels détaillés',
          'Support dédié pour questions comptables'
        ],
        ctaLabel: 'En Savoir Plus Sur La Comptabilité'
      } : translation.locale === 'es' ? {
        title: 'Contabilidad Certificada',
        subtitle: 'El Corazón del Grupo Hive',
        description: 'Servicios de contabilidad TOC certificados con equipo especializado y tecnología de vanguardia para garantizar el cumplimiento total y la optimización fiscal de su empresa.',
        benefits: [
          'TOC certificados con experiencia comprobada',
          'Plataforma digital 24/7 para acceso a documentación',
          'Cumplimiento fiscal garantizado y optimización',
          'Informes financieros mensuales detallados',
          'Soporte dedicado para consultas contables'
        ],
        ctaLabel: 'Saber Más Sobre Contabilidad'
      } : {
        title: 'Contabilità Certificata',
        subtitle: 'Il Cuore del Gruppo Hive',
        description: 'Servizi di contabilità TOC certificati con team specializzato e tecnologia all\'avanguardia per garantire la conformità totale e l\'ottimizzazione fiscale della vostra azienda.',
        benefits: [
          'TOC certificati con esperienza comprovata',
          'Piattaforma digitale 24/7 per accesso ai documenti',
          'Conformità fiscale garantita e ottimizzazione',
          'Report finanziari mensili dettagliati',
          'Supporto dedicato per domande contabili'
        ],
        ctaLabel: 'Scopri Di Più Sulla Contabilità'
      },
      authorizedAgent: translation.locale === 'pt' ? {
        title: 'Agente Autorizado Local do Cidadão',
        subtitle: 'Tratamos de Documentos Oficiais Por Si',
        description: 'Serviço certificado e autorizado para tratamento de documentação automóvel, renovação de carta de condução, alarmes, telecomunicações, energias e muito mais.',
        features: [
          'Documentação Automóvel completa sem filas',
          'Renovação da Carta de Condução simplificada',
          'Serviços de Documentação geral e certificação',
          'Alarmes, Telecomunicações e Energias',
          'Projetos de Investimentos e Cartão Combustível',
          'Atendimento personalizado e sem burocracia'
        ],
        tagline: 'Este é o seu Local!',
        ctaLabel: 'Conhecer Serviços de Agente Autorizado'
      } : translation.locale === 'en' ? {
        title: 'Authorised Citizen Service Agent',
        subtitle: 'We Handle Official Documents For You',
        description: 'Certified and authorised service for vehicle documentation, driving licence renewal, alarms, telecommunications, energy and much more.',
        features: [
          'Complete vehicle documentation without queues',
          'Simplified driving licence renewal',
          'General documentation and certification services',
          'Alarms, Telecommunications and Energy',
          'Investment Projects and Fuel Card',
          'Personalized service without bureaucracy'
        ],
        tagline: 'This is your local service!',
        ctaLabel: 'Discover Authorised Agent Services'
      } : translation.locale === 'fr' ? {
        title: 'Agent Autorisé Service Citoyen',
        subtitle: 'Nous Gérons les Documents Officiels Pour Vous',
        description: 'Service certifié et autorisé pour la documentation des véhicules, le renouvellement du permis de conduire, les alarmes, les télécommunications, l\'énergie et bien plus encore.',
        features: [
          'Documentation véhicule complète sans files d\'attente',
          'Renouvellement du permis de conduire simplifié',
          'Services de documentation générale et certification',
          'Alarmes, Télécommunications et Énergie',
          'Projets d\'investissement et Carte Carburant',
          'Service personnalisé sans bureaucratie'
        ],
        tagline: 'C\'est votre service local!',
        ctaLabel: 'Découvrir les Services d\'Agent Autorisé'
      } : translation.locale === 'es' ? {
        title: 'Agente Autorizado Servicio Ciudadano',
        subtitle: 'Gestionamos Documentos Oficiales Por Usted',
        description: 'Servicio certificado y autorizado para documentación de vehículos, renovación del permiso de conducir, alarmas, telecomunicaciones, energía y mucho más.',
        features: [
          'Documentación vehicular completa sin colas',
          'Renovación del permiso de conducir simplificada',
          'Servicios de documentación general y certificación',
          'Alarmas, Telecomunicaciones y Energía',
          'Proyectos de Inversión y Tarjeta Combustible',
          'Servicio personalizado sin burocracia'
        ],
        tagline: '¡Este es su servicio local!',
        ctaLabel: 'Conocer Servicios de Agente Autorizado'
      } : {
        title: 'Agente Autorizzato Servizio Cittadino',
        subtitle: 'Gestiamo Documenti Ufficiali Per Voi',
        description: 'Servizio certificato e autorizzato per documentazione veicoli, rinnovo patente di guida, allarmi, telecomunicazioni, energia e molto altro.',
        features: [
          'Documentazione veicolare completa senza code',
          'Rinnovo della patente di guida semplificato',
          'Servizi di documentazione generale e certificazione',
          'Allarmi, Telecomunicazioni ed Energia',
          'Progetti di Investimento e Carta Carburante',
          'Servizio personalizzato senza burocrazia'
        ],
        tagline: 'Questo è il vostro servizio locale!',
        ctaLabel: 'Scoprire i Servizi di Agente Autorizzato'
      }
    };

    // Atualizar tradução
    await prisma.pageTranslation.update({
      where: { id: translation.id },
      data: {
        sectionsJson: JSON.stringify(updatedSections)
      }
    });

    console.log(`✅ ${translation.locale} atualizado`);
  }

  console.log('✨ Highlights adicionados com sucesso!');
}

addHomeHighlights()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
