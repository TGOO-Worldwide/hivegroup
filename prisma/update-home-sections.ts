import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Atualizando sectionsJson da página home...\n');

  // Buscar a página home
  const homePage = await prisma.page.findUnique({
    where: { slug: 'home' },
    include: { translations: true }
  });

  if (!homePage) {
    console.error('❌ Página home não encontrada!');
    return;
  }

  console.log(`✅ Página home encontrada (${homePage.translations.length} traduções)\n`);

  // Atualizar cada tradução com as novas seções
  for (const translation of homePage.translations) {
    console.log(`📝 Atualizando tradução: ${translation.locale}`);
    
    const currentSections = JSON.parse(translation.sectionsJson);
    
    // Adicionar as seções faltantes
    const updatedSections = {
      ...currentSections,
      coreService: {
        title: translation.locale === 'pt' ? 'Contabilidade em Destaque' :
               translation.locale === 'en' ? 'Featured Accounting' :
               translation.locale === 'fr' ? 'Comptabilité en vedette' :
               translation.locale === 'es' ? 'Contabilidad destacada' :
               'Contabilità in evidenza',
        subtitle: translation.locale === 'pt' ? 'O nosso serviço principal' :
                 translation.locale === 'en' ? 'Our main service' :
                 translation.locale === 'fr' ? 'Notre service principal' :
                 translation.locale === 'es' ? 'Nuestro servicio principal' :
                 'Il nostro servizio principale',
        description: translation.locale === 'pt' 
          ? 'Gestão contabilística completa com técnicos oficiais de contas (TOC) certificados. Garantimos 100% de conformidade legal e suporte dedicado ao seu negócio.'
          : translation.locale === 'en'
          ? 'Complete accounting management with certified official accountants (TOC). We guarantee 100% legal compliance and dedicated support for your business.'
          : translation.locale === 'fr'
          ? 'Gestion comptable complète avec des comptables officiels certifiés (TOC). Nous garantissons une conformité légale à 100% et un support dédié à votre entreprise.'
          : translation.locale === 'es'
          ? 'Gestión contable completa con contadores oficiales certificados (TOC). Garantizamos un 100% de cumplimiento legal y soporte dedicado para su negocio.'
          : 'Gestione contabile completa con ragionieri ufficiali certificati (TOC). Garantiamo la conformità legale al 100% e un supporto dedicato alla tua azienda.',
        benefits: translation.locale === 'pt' ? [
          'Contabilistas certificados (TOC) ao seu serviço',
          'Cumprimento de todas as obrigações fiscais (IVA, IRS, IRC)',
          'Relatórios financeiros mensais detalhados',
          'Consultoria fiscal estratégica',
          'Suporte dedicado 24/7'
        ] : translation.locale === 'en' ? [
          'Certified accountants (TOC) at your service',
          'Compliance with all tax obligations (VAT, Personal Income Tax, Corporate Tax)',
          'Detailed monthly financial reports',
          'Strategic tax consulting',
          'Dedicated 24/7 support'
        ] : translation.locale === 'fr' ? [
          'Comptables certifiés (TOC) à votre service',
          'Respect de toutes les obligations fiscales (TVA, Impôt sur le revenu, Impôt sur les sociétés)',
          'Rapports financiers mensuels détaillés',
          'Conseil fiscal stratégique',
          'Support dédié 24/7'
        ] : translation.locale === 'es' ? [
          'Contadores certificados (TOC) a su servicio',
          'Cumplimiento de todas las obligaciones fiscales (IVA, IRPF, Impuesto de Sociedades)',
          'Informes financieros mensuales detallados',
          'Consultoría fiscal estratégica',
          'Soporte dedicado 24/7'
        ] : [
          'Ragionieri certificati (TOC) al tuo servizio',
          'Conformità con tutti gli obblighi fiscali (IVA, IRPEF, IRES)',
          'Relazioni finanziarie mensili dettagliate',
          'Consulenza fiscale strategica',
          'Supporto dedicato 24/7'
        ],
        ctaLabel: translation.locale === 'pt' ? 'Saber Mais' :
                 translation.locale === 'en' ? 'Learn More' :
                 translation.locale === 'fr' ? 'En savoir plus' :
                 translation.locale === 'es' ? 'Saber más' :
                 'Saperne di più'
      },
      authorizedAgent: {
        title: translation.locale === 'pt' ? 'Agente Autorizado Local do Cidadão' :
               translation.locale === 'en' ? 'Authorized Citizen Service Agent' :
               translation.locale === 'fr' ? 'Agent autorisé du service citoyen' :
               translation.locale === 'es' ? 'Agente autorizado del servicio ciudadano' :
               'Agente autorizzato del servizio cittadino',
        subtitle: translation.locale === 'pt' ? 'Certificação Oficial do Governo Português' :
                 translation.locale === 'en' ? 'Official Certification from Portuguese Government' :
                 translation.locale === 'fr' ? 'Certification officielle du gouvernement portugais' :
                 translation.locale === 'es' ? 'Certificación oficial del gobierno portugués' :
                 'Certificazione ufficiale del governo portoghese',
        description: translation.locale === 'pt'
          ? 'Somos agentes autorizados pelo Governo Português para tratar de documentos oficiais. Poupamos-lhe tempo e deslocações aos serviços públicos.'
          : translation.locale === 'en'
          ? 'We are agents authorized by the Portuguese Government to handle official documents. We save you time and trips to public services.'
          : translation.locale === 'fr'
          ? 'Nous sommes des agents autorisés par le gouvernement portugais pour traiter les documents officiels. Nous vous faisons gagner du temps et des déplacements vers les services publics.'
          : translation.locale === 'es'
          ? 'Somos agentes autorizados por el Gobierno Portugués para tramitar documentos oficiales. Le ahorramos tiempo y desplazamientos a los servicios públicos.'
          : 'Siamo agenti autorizzati dal governo portoghese per gestire documenti ufficiali. Ti facciamo risparmiare tempo e viaggi verso i servizi pubblici.',
        features: translation.locale === 'pt' ? [
          'Certidões de nascimento, casamento e óbito',
          'Registos criminais e certidões permanentes',
          'Renovação e emissão de Cartão de Cidadão',
          'Licenças e autorizações diversas',
          'Tratamento de documentos sem filas de espera'
        ] : translation.locale === 'en' ? [
          'Birth, marriage and death certificates',
          'Criminal records and permanent certificates',
          'Citizen Card renewal and issuance',
          'Various licenses and authorizations',
          'Document processing without waiting in line'
        ] : translation.locale === 'fr' ? [
          'Certificats de naissance, mariage et décès',
          'Casiers judiciaires et certificats permanents',
          "Renouvellement et délivrance de la carte d'identité",
          'Licences et autorisations diverses',
          "Traitement de documents sans faire la queue"
        ] : translation.locale === 'es' ? [
          'Certificados de nacimiento, matrimonio y defunción',
          'Antecedentes penales y certificados permanentes',
          'Renovación y emisión de Tarjeta de Ciudadano',
          'Licencias y autorizaciones diversas',
          'Tramitación de documentos sin colas'
        ] : [
          'Certificati di nascita, matrimonio e morte',
          'Casellari giudiziali e certificati permanenti',
          "Rinnovo ed emissione della Carta d'Identità",
          'Licenze e autorizzazioni varie',
          'Elaborazione documenti senza fare la fila'
        ],
        tagline: translation.locale === 'pt' ? 'Poupe tempo. Tratamos de tudo por si.' :
                translation.locale === 'en' ? 'Save time. We take care of everything for you.' :
                translation.locale === 'fr' ? 'Gagnez du temps. Nous nous occupons de tout pour vous.' :
                translation.locale === 'es' ? 'Ahorre tiempo. Nos encargamos de todo por usted.' :
                'Risparmia tempo. Ci occupiamo di tutto per te.',
        ctaLabel: translation.locale === 'pt' ? 'Ver Serviços' :
                 translation.locale === 'en' ? 'View Services' :
                 translation.locale === 'fr' ? 'Voir les services' :
                 translation.locale === 'es' ? 'Ver servicios' :
                 'Visualizza servizi'
      }
    };

    await prisma.pageTranslation.update({
      where: { id: translation.id },
      data: {
        sectionsJson: JSON.stringify(updatedSections)
      }
    });

    console.log(`   ✅ ${translation.locale} atualizado`);
  }

  console.log('\n✅ Atualização concluída com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
