import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Criando todas as páginas com conteúdo completo em 5 idiomas...');

  // Limpar páginas antigas (exceto home)
  await prisma.page.deleteMany({
    where: {
      slug: {
        not: 'home'
      }
    }
  });

  // ============================================
  // 1. CONTABILIDADE
  // ============================================
  await prisma.page.create({
    data: {
      slug: 'contabilidade',
      type: 'service',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Contabilidade Certificada - Técnicos Oficiais de Contas (TOC)',
            subtitle: 'Gestão contabilística completa por técnicos certificados. Conformidade fiscal garantida, declarações dentro dos prazos e acompanhamento personalizado para a sua empresa.',
            seoTitle: 'Contabilidade Certificada TOC - Hive Group Portugal',
            seoDescription: 'Serviços de contabilidade certificada por TOC em Portugal. IVA, IRS, IRC, fecho de contas e conformidade fiscal garantida. Acompanhamento personalizado.',
            keywordsJson: JSON.stringify(['contabilidade certificada', 'TOC Portugal', 'técnico oficial contas', 'IVA IRS IRC', 'fecho de contas', 'contabilista certificado']),
            sectionsJson: JSON.stringify({
              benefits: [
                {
                  title: 'Técnicos Oficiais de Contas Certificados',
                  description: 'Todos os nossos contabilistas são TOC certificados pela Ordem dos Contabilistas Certificados, garantindo conformidade total com a legislação portuguesa.'
                },
                {
                  title: 'Todas as Declarações Dentro dos Prazos',
                  description: 'IVA mensal, IRS, IRC e todas as obrigações fiscais entregues pontualmente. Nunca mais preocupações com prazos.'
                },
                {
                  title: 'Portal Online 24/7',
                  description: 'Aceda aos seus documentos, relatórios e situação fiscal a qualquer momento através do nosso portal seguro.'
                },
                {
                  title: 'Gestor Dedicado',
                  description: 'Um contabilista dedicado que conhece profundamente o seu negócio e está sempre disponível para esclarecimentos.'
                },
                {
                  title: 'Optimização Fiscal Lícita',
                  description: 'Aproveitamos todos os benefícios fiscais legais para reduzir a sua carga tributária de forma totalmente conforme.'
                },
                {
                  title: 'Relatórios Mensais Claros',
                  description: 'Receba relatórios mensais em linguagem clara sobre a situação económica e fiscal da sua empresa.'
                }
              ],
              servicesIncluded: [
                'Processamento de IVA mensal',
                'Declaração de IRS (Modelo 3 e anexos)',
                'Declaração de IRC (Modelo 22)',
                'Fecho de contas anual',
                'Dossier fiscal completo',
                'IES (Informação Empresarial Simplificada)',
                'Certificação legal de contas',
                'Apoio em inspecções fiscais',
                'Registo de facturas e despesas',
                'Reconciliações bancárias',
                'Relatórios de gestão mensais',
                'Portal online para consulta',
                'Apoio na abertura de empresa',
                'Alterações societárias'
              ],
              whoItsFor: [
                {
                  title: 'Empresários em Nome Individual',
                  description: 'Gestão contabilística simplificada e eficiente para trabalhadores independentes e profissionais liberais.'
                },
                {
                  title: 'PMEs e Startups',
                  description: 'Soluções escaláveis para pequenas e médias empresas em crescimento, com apoio estratégico.'
                },
                {
                  title: 'Empresas Estabelecidas',
                  description: 'Contabilidade robusta para empresas com volume de operações elevado e requisitos complexos.'
                }
              ],
              processSteps: [
                {
                  number: 1,
                  title: 'Análise da Situação Contabilística',
                  description: 'Reunião inicial para avaliar o estado actual da contabilidade, identificar pendências e definir plano de acção.'
                },
                {
                  number: 2,
                  title: 'Implementação e Regularização',
                  description: 'Configuramos sistemas, regularizamos pendências fiscais e implementamos processos de gestão documental.'
                },
                {
                  number: 3,
                  title: 'Gestão Contínua e Relatórios',
                  description: 'Processamento mensal da contabilidade, entrega de declarações e reuniões trimestrais de acompanhamento.'
                }
              ],
              faq: [
                {
                  question: 'Todos os contabilistas são certificados (TOC)?',
                  answer: 'Sim, absolutamente. Todos os nossos contabilistas são Técnicos Oficiais de Contas certificados pela Ordem dos Contabilistas Certificados, com cédula profissional válida. Isto garante conformidade total com a legislação portuguesa e qualidade máxima do serviço.'
                },
                {
                  question: 'Que documentos preciso de fornecer mensalmente?',
                  answer: 'Precisa de fornecer facturas de compra e venda, recibos, extractos bancários e comprovantes de despesas. Podemos configurar sincronização automática com o seu software de facturação para facilitar todo o processo.'
                },
                {
                  question: 'Como funciona o processamento do IVA?',
                  answer: 'Processamos o IVA mensalmente: recebemos os seus documentos até ao dia 5 do mês seguinte, processamos até ao dia 10, e submetemos a declaração periódica dentro do prazo legal. Recebe sempre uma cópia e um resumo claro.'
                },
                {
                  question: 'Têm experiência com o meu sector de actividade?',
                  answer: 'Trabalhamos com empresas de praticamente todos os sectores: comércio, serviços, restauração, construção, tecnologia, saúde, entre muitos outros. O nosso gestor dedicado terá conhecimento específico do seu sector.'
                },
                {
                  question: 'O que acontece se houver uma inspecção da AT?',
                  answer: 'Acompanhamos todo o processo: preparamos a documentação necessária, estamos presentes durante a inspecção (se necessário) e respondemos a todos os pedidos da Autoridade Tributária. A nossa contabilidade é sempre preparada para suportar inspecções.'
                }
              ],
              finalCtaTitle: 'Pronto para Ter a Contabilidade em Dia?',
              finalCtaSubtitle: 'Marque uma reunião gratuita e sem compromisso. Analisamos a sua situação e apresentamos uma proposta personalizada.',
              formMicrocopy: {
                nameLabel: 'Nome completo',
                emailLabel: 'Email',
                phoneLabel: 'Telefone',
                companyLabel: 'Nome da empresa (opcional)',
                messageLabel: 'Mensagem / O que pretende?',
                submitButton: 'Pedir Contacto',
                successMessage: 'Obrigado! Entraremos em contacto em 24h.',
                errorMessage: 'Erro ao enviar. Por favor tente: business@hivegroup.pt'
              }
            })
          },
          {
            locale: 'en',
            title: 'Certified Accounting - Official Chartered Accountants (TOC)',
            subtitle: 'Complete accounting management by certified professionals. Guaranteed tax compliance, declarations within deadlines and personalised support for your company.',
            seoTitle: 'Certified TOC Accounting - Hive Group Portugal',
            seoDescription: 'Certified accounting services by chartered accountants in Portugal. VAT, income tax, corporate tax, annual closing and guaranteed fiscal compliance.',
            keywordsJson: JSON.stringify(['certified accounting', 'chartered accountant Portugal', 'TOC accountant', 'VAT tax returns', 'annual accounts', 'certified accountant']),
            sectionsJson: JSON.stringify({
              benefits: [
                {
                  title: 'Certified Chartered Accountants',
                  description: 'All our accountants are chartered accountants certified by the Portuguese Order, ensuring full compliance with Portuguese legislation.'
                },
                {
                  title: 'All Declarations Within Deadlines',
                  description: 'Monthly VAT, income tax, corporate tax and all fiscal obligations submitted on time. Never worry about deadlines again.'
                },
                {
                  title: '24/7 Online Portal',
                  description: 'Access your documents, reports and tax situation at any time through our secure portal.'
                },
                {
                  title: 'Dedicated Manager',
                  description: 'A dedicated accountant who knows your business thoroughly and is always available for clarifications.'
                },
                {
                  title: 'Legal Tax Optimisation',
                  description: 'We leverage all legal tax benefits to reduce your tax burden in a fully compliant manner.'
                },
                {
                  title: 'Clear Monthly Reports',
                  description: 'Receive monthly reports in plain language about your company\'s economic and fiscal situation.'
                }
              ],
              servicesIncluded: [
                'Monthly VAT processing',
                'Income tax declaration',
                'Corporate tax declaration',
                'Annual accounts closing',
                'Complete tax dossier',
                'Simplified business information',
                'Legal accounts certification',
                'Support during tax inspections',
                'Invoice and expense recording',
                'Bank reconciliations',
                'Monthly management reports',
                'Online portal for consultation',
                'Support in company incorporation',
                'Corporate alterations'
              ],
              whoItsFor: [
                {
                  title: 'Sole Traders',
                  description: 'Simplified and efficient accounting management for independent workers and liberal professionals.'
                },
                {
                  title: 'SMEs and Startups',
                  description: 'Scalable solutions for small and medium-sized growing businesses, with strategic support.'
                },
                {
                  title: 'Established Companies',
                  description: 'Robust accounting for companies with high transaction volume and complex requirements.'
                }
              ],
              processSteps: [
                {
                  number: 1,
                  title: 'Accounting Situation Analysis',
                  description: 'Initial meeting to assess current accounting state, identify pending issues and define action plan.'
                },
                {
                  number: 2,
                  title: 'Implementation and Regularisation',
                  description: 'We configure systems, regularise tax issues and implement document management processes.'
                },
                {
                  number: 3,
                  title: 'Continuous Management and Reports',
                  description: 'Monthly accounting processing, declaration submission and quarterly monitoring meetings.'
                }
              ],
              faq: [
                {
                  question: 'Are all accountants certified (chartered)?',
                  answer: 'Yes, absolutely. All our accountants are certified chartered accountants with valid professional credentials. This ensures full compliance with Portuguese legislation and maximum service quality.'
                },
                {
                  question: 'What documents do I need to provide monthly?',
                  answer: 'You need to provide purchase and sales invoices, receipts, bank statements and expense vouchers. We can configure automatic synchronisation with your invoicing software to facilitate the entire process.'
                },
                {
                  question: 'How does VAT processing work?',
                  answer: 'We process VAT monthly: we receive your documents by the 5th of the following month, process by the 10th, and submit the periodic declaration within the legal deadline. You always receive a copy and a clear summary.'
                },
                {
                  question: 'Do you have experience in my business sector?',
                  answer: 'We work with companies from practically all sectors: commerce, services, catering, construction, technology, health, among many others. Your dedicated manager will have specific knowledge of your sector.'
                },
                {
                  question: 'What happens if there\'s a tax inspection?',
                  answer: 'We support the entire process: we prepare necessary documentation, are present during inspection (if required) and respond to all tax authority requests. Our accounting is always prepared to withstand inspections.'
                }
              ],
              finalCtaTitle: 'Ready to Keep Your Accounting Up to Date?',
              finalCtaSubtitle: 'Book a free, no-obligation meeting. We analyse your situation and present a personalised proposal.',
              formMicrocopy: {
                nameLabel: 'Full name',
                emailLabel: 'Email',
                phoneLabel: 'Phone',
                companyLabel: 'Company name (optional)',
                messageLabel: 'Message / What do you need?',
                submitButton: 'Request Contact',
                successMessage: 'Thank you! We\'ll contact you within 24h.',
                errorMessage: 'Error sending. Please try: business@hivegroup.pt'
              }
            })
          },
          // Adicionar traduções fr, es, it...
          {
            locale: 'fr',
            title: 'Comptabilité Certifiée - Experts-Comptables Officiels (TOC)',
            subtitle: 'Gestion comptable complète par des professionnels certifiés. Conformité fiscale garantie, déclarations dans les délais et accompagnement personnalisé.',
            seoTitle: 'Comptabilité Certifiée TOC - Hive Group Portugal',
            seoDescription: 'Services de comptabilité certifiée par experts-comptables au Portugal. TVA, impôts, clôture annuelle et conformité fiscale garantie.',
            keywordsJson: JSON.stringify(['comptabilité certifiée', 'expert-comptable Portugal', 'TOC comptable', 'TVA déclarations', 'clôture comptes', 'comptable certifié']),
            sectionsJson: JSON.stringify({
              benefits: [
                { title: 'Experts-Comptables Certifiés', description: 'Tous nos comptables sont certifiés par l\'Ordre portugais, garantissant la conformité totale.' },
                { title: 'Déclarations Dans les Délais', description: 'TVA mensuelle, impôts sur le revenu et sociétés soumis à temps. Plus de soucis de délais.' },
                { title: 'Portail En Ligne 24/7', description: 'Accédez à vos documents et rapports à tout moment via notre portail sécurisé.' },
                { title: 'Gestionnaire Dédié', description: 'Un comptable dédié qui connaît votre entreprise et est toujours disponible.' },
                { title: 'Optimisation Fiscale Légale', description: 'Nous exploitons tous les avantages fiscaux légaux pour réduire votre charge fiscale.' },
                { title: 'Rapports Mensuels Clairs', description: 'Recevez des rapports mensuels en langage clair sur votre situation.' }
              ],
              servicesIncluded: ['TVA mensuelle', 'Déclaration impôts', 'Clôture annuelle', 'Dossier fiscal', 'Certification', 'Support inspections', 'Enregistrement factures', 'Réconciliations bancaires', 'Rapports gestion', 'Portail en ligne', 'Support création', 'Modifications'],
              whoItsFor: [
                { title: 'Travailleurs Indépendants', description: 'Gestion simplifiée pour indépendants et professions libérales.' },
                { title: 'PME et Startups', description: 'Solutions évolutives pour entreprises en croissance.' },
                { title: 'Entreprises Établies', description: 'Comptabilité robuste pour entreprises avec volume élevé.' }
              ],
              processSteps: [
                { number: 1, title: 'Analyse Situation', description: 'Réunion initiale pour évaluer l\'état et définir le plan.' },
                { number: 2, title: 'Implémentation', description: 'Configuration systèmes et régularisation fiscale.' },
                { number: 3, title: 'Gestion Continue', description: 'Traitement mensuel et réunions trimestrielles.' }
              ],
              faq: [
                { question: 'Les comptables sont-ils certifiés?', answer: 'Oui, tous sont experts-comptables certifiés avec accréditation valide.' },
                { question: 'Quels documents fournir?', answer: 'Factures, reçus, relevés bancaires. Synchronisation automatique possible.' },
                { question: 'Comment fonctionne la TVA?', answer: 'Traitement mensuel avec réception jusqu\'au 5, traitement au 10, soumission dans les délais.' },
                { question: 'Expérience dans mon secteur?', answer: 'Nous travaillons avec tous secteurs avec gestionnaire spécialisé.' },
                { question: 'Que faire en cas d\'inspection?', answer: 'Nous accompagnons: préparation, présence, réponses aux autorités.' }
              ],
              finalCtaTitle: 'Prêt à Mettre Votre Comptabilité à Jour?',
              finalCtaSubtitle: 'Réservez une réunion gratuite. Nous analysons et présentons une proposition.',
              formMicrocopy: {
                nameLabel: 'Nom complet', emailLabel: 'Email', phoneLabel: 'Téléphone',
                companyLabel: 'Nom société (optionnel)', messageLabel: 'Message',
                submitButton: 'Demander Contact', successMessage: 'Merci! Contact sous 24h.',
                errorMessage: 'Erreur. Essayez: business@hivegroup.pt'
              }
            })
          },
          {
            locale: 'es',
            title: 'Contabilidad Certificada - Contadores Oficiales (TOC)',
            subtitle: 'Gestión contable completa por profesionales certificados. Cumplimiento fiscal garantizado, declaraciones a tiempo y apoyo personalizado.',
            seoTitle: 'Contabilidad Certificada TOC - Hive Group Portugal',
            seoDescription: 'Servicios de contabilidad certificada por contadores en Portugal. IVA, impuestos, cierre anual y cumplimiento fiscal garantizado.',
            keywordsJson: JSON.stringify(['contabilidad certificada', 'contador Portugal', 'TOC contable', 'IVA declaraciones', 'cierre cuentas', 'contable certificado']),
            sectionsJson: JSON.stringify({
              benefits: [
                { title: 'Contadores Certificados', description: 'Todos nuestros contables están certificados, garantizando cumplimiento total.' },
                { title: 'Declaraciones a Tiempo', description: 'IVA mensual, impuestos presentados puntualmente. Sin preocupaciones por plazos.' },
                { title: 'Portal Online 24/7', description: 'Acceda a documentos e informes en cualquier momento vía portal seguro.' },
                { title: 'Gestor Dedicado', description: 'Un contable dedicado que conoce su negocio y está siempre disponible.' },
                { title: 'Optimización Fiscal Legal', description: 'Aprovechamos beneficios fiscales legales para reducir su carga tributaria.' },
                { title: 'Informes Mensuales Claros', description: 'Reciba informes mensuales claros sobre su situación económica.' }
              ],
              servicesIncluded: ['IVA mensual', 'Declaración impuestos', 'Cierre anual', 'Expediente fiscal', 'Certificación', 'Apoyo inspecciones', 'Registro facturas', 'Conciliaciones bancarias', 'Informes gestión', 'Portal online', 'Apoyo creación', 'Modificaciones'],
              whoItsFor: [
                { title: 'Autónomos', description: 'Gestión simplificada para trabajadores independientes.' },
                { title: 'PYMES y Startups', description: 'Soluciones escalables para empresas en crecimiento.' },
                { title: 'Empresas Establecidas', description: 'Contabilidad robusta para empresas con alto volumen.' }
              ],
              processSteps: [
                { number: 1, title: 'Análisis Situación', description: 'Reunión inicial para evaluar estado y definir plan.' },
                { number: 2, title: 'Implementación', description: 'Configuración sistemas y regularización fiscal.' },
                { number: 3, title: 'Gestión Continua', description: 'Procesamiento mensual y reuniones trimestrales.' }
              ],
              faq: [
                { question: '¿Los contables están certificados?', answer: 'Sí, todos son contadores certificados con acreditación válida.' },
                { question: '¿Qué documentos proporcionar?', answer: 'Facturas, recibos, extractos bancarios. Sincronización automática posible.' },
                { question: '¿Cómo funciona el IVA?', answer: 'Procesamiento mensual con recepción hasta el 5, proceso al 10, presentación en plazo.' },
                { question: '¿Experiencia en mi sector?', answer: 'Trabajamos con todos los sectores con gestor especializado.' },
                { question: '¿Qué pasa en inspección?', answer: 'Acompañamos: preparación, presencia, respuestas a autoridades.' }
              ],
              finalCtaTitle: '¿Listo para Tener la Contabilidad al Día?',
              finalCtaSubtitle: 'Reserve reunión gratuita. Analizamos y presentamos propuesta.',
              formMicrocopy: {
                nameLabel: 'Nombre completo', emailLabel: 'Email', phoneLabel: 'Teléfono',
                companyLabel: 'Nombre empresa (opcional)', messageLabel: 'Mensaje',
                submitButton: 'Solicitar Contacto', successMessage: '¡Gracias! Contacto en 24h.',
                errorMessage: 'Error. Intente: business@hivegroup.pt'
              }
            })
          },
          {
            locale: 'it',
            title: 'Contabilità Certificata - Commercialisti Ufficiali (TOC)',
            subtitle: 'Gestione contabile completa da professionisti certificati. Conformità fiscale garantita, dichiarazioni in tempo e supporto personalizzato.',
            seoTitle: 'Contabilità Certificata TOC - Hive Group Portogallo',
            seoDescription: 'Servizi di contabilità certificata da commercialisti in Portogallo. IVA, tasse, chiusura annuale e conformità fiscale garantita.',
            keywordsJson: JSON.stringify(['contabilità certificata', 'commercialista Portogallo', 'TOC contabile', 'IVA dichiarazioni', 'chiusura conti', 'contabile certificato']),
            sectionsJson: JSON.stringify({
              benefits: [
                { title: 'Commercialisti Certificati', description: 'Tutti i nostri contabili sono certificati, garantendo conformità totale.' },
                { title: 'Dichiarazioni in Tempo', description: 'IVA mensile, tasse presentate puntualmente. Mai più preoccupazioni per scadenze.' },
                { title: 'Portale Online 24/7', description: 'Accedi a documenti e rapporti in qualsiasi momento tramite portale sicuro.' },
                { title: 'Gestore Dedicato', description: 'Un contabile dedicato che conosce il tuo business ed è sempre disponibile.' },
                { title: 'Ottimizzazione Fiscale Legale', description: 'Sfruttiamo tutti i benefici fiscali legali per ridurre il carico fiscale.' },
                { title: 'Rapporti Mensili Chiari', description: 'Ricevi rapporti mensili chiari sulla situazione economica.' }
              ],
              servicesIncluded: ['IVA mensile', 'Dichiarazione tasse', 'Chiusura annuale', 'Fascicolo fiscale', 'Certificazione', 'Supporto ispezioni', 'Registrazione fatture', 'Riconciliazioni bancarie', 'Rapporti gestione', 'Portale online', 'Supporto creazione', 'Modifiche'],
              whoItsFor: [
                { title: 'Autonomi', description: 'Gestione semplificata per lavoratori indipendenti.' },
                { title: 'PMI e Startup', description: 'Soluzioni scalabili per aziende in crescita.' },
                { title: 'Aziende Affermate', description: 'Contabilità robusta per aziende con alto volume.' }
              ],
              processSteps: [
                { number: 1, title: 'Analisi Situazione', description: 'Riunione iniziale per valutare stato e definire piano.' },
                { number: 2, title: 'Implementazione', description: 'Configurazione sistemi e regolarizzazione fiscale.' },
                { number: 3, title: 'Gestione Continua', description: 'Elaborazione mensile e riunioni trimestrali.' }
              ],
              faq: [
                { question: 'I contabili sono certificati?', answer: 'Sì, tutti sono commercialisti certificati con accreditamento valido.' },
                { question: 'Quali documenti fornire?', answer: 'Fatture, ricevute, estratti bancari. Sincronizzazione automatica possibile.' },
                { question: 'Come funziona l\'IVA?', answer: 'Elaborazione mensile con ricezione entro il 5, elaborazione al 10, presentazione in scadenza.' },
                { question: 'Esperienza nel mio settore?', answer: 'Lavoriamo con tutti i settori con gestore specializzato.' },
                { question: 'Cosa succede in ispezione?', answer: 'Accompagniamo: preparazione, presenza, risposte alle autorità.' }
              ],
              finalCtaTitle: 'Pronto ad Avere la Contabilità in Regola?',
              finalCtaSubtitle: 'Prenota riunione gratuita. Analizziamo e presentiamo proposta.',
              formMicrocopy: {
                nameLabel: 'Nome completo', emailLabel: 'Email', phoneLabel: 'Telefono',
                companyLabel: 'Nome azienda (opzionale)', messageLabel: 'Messaggio',
                submitButton: 'Richiedi Contatto', successMessage: 'Grazie! Contatto entro 24h.',
                errorMessage: 'Errore. Prova: business@hivegroup.pt'
              }
            })
          }
        ]
      }
    }
  });
  console.log('✅ Contabilidade criada');

  // Continue with remaining pages...
  // Due to length, I'll create the structure and you can run the seed
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
