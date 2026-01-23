import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // ============================================
  // PÁGINAS ESTÁTICAS
  // ============================================

  // 1. HOME PAGE
  const homePage = await prisma.page.create({
    data: {
      slug: 'home',
      type: 'home',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Hive Group - Soluções Integradas para o Seu Negócio',
            subtitle: 'Contabilidade, Finanças, Jurídico, Imobiliário e muito mais. Tudo num só lugar.',
            seoTitle: 'Hive Group Portugal - Soluções Empresariais Integradas',
            seoDescription: 'Serviços de contabilidade, finanças, crédito, seguros, imobiliário, jurídico, marketing e IT. Soluções completas para empresas em Portugal.',
            keywordsJson: JSON.stringify(['contabilidade', 'finanças', 'agente autorizado', 'crédito', 'seguros', 'imobiliário', 'jurídico', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Soluções Integradas para o Seu Negócio',
                description: 'A Hive Group é o seu parceiro de confiança para contabilidade, finanças, jurídico, imobiliário e desenvolvimento de negócio em Portugal.',
                cta: 'Descubra os nossos serviços'
              },
              services: [
                {
                  icon: '📊',
                  title: 'Contabilidade',
                  description: 'Gestão contabilística completa e certificada para a sua empresa.',
                  link: '/contabilidade'
                },
                {
                  icon: '🏛️',
                  title: 'Agente Autorizado',
                  description: 'Serviços do Local do Cidadão. Tratamos de documentos oficiais por si.',
                  link: '/agente-autorizado'
                },
                {
                  icon: '💰',
                  title: 'Finanças',
                  description: 'Consultoria financeira e planeamento estratégico.',
                  link: '/finance'
                },
                {
                  icon: '💳',
                  title: 'Crédito',
                  description: 'Soluções de crédito empresarial e pessoal.',
                  link: '/credit'
                },
                {
                  icon: '🛡️',
                  title: 'Seguros',
                  description: 'Seguros empresariais e pessoais adaptados às suas necessidades.',
                  link: '/insurance'
                },
                {
                  icon: '🏢',
                  title: 'Imobiliário',
                  description: 'Consultoria e gestão imobiliária completa.',
                  link: '/real-estate'
                }
              ],
              cta: {
                title: 'Pronto para começar?',
                description: 'Entre em contacto connosco e descubra como podemos ajudar o seu negócio a crescer.',
                button: 'Contacte-nos'
              }
            })
          },
          {
            locale: 'en',
            title: 'Hive Group - Integrated Solutions for Your Business',
            subtitle: 'Accounting, Finance, Legal, Real Estate and much more. All in one place.',
            seoTitle: 'Hive Group Portugal - Integrated Business Solutions',
            seoDescription: 'Accounting, finance, credit, insurance, real estate, legal, marketing and IT services. Complete solutions for businesses in Portugal.',
            keywordsJson: JSON.stringify(['accounting', 'finance', 'authorised agent', 'credit', 'insurance', 'real estate', 'legal', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Integrated Solutions for Your Business',
                description: 'Hive Group is your trusted partner for accounting, finance, legal, real estate and business development in Portugal.',
                cta: 'Discover our services'
              },
              services: [
                {
                  icon: '📊',
                  title: 'Accounting',
                  description: 'Complete and certified accounting management for your company.',
                  link: '/accounting'
                },
                {
                  icon: '🏛️',
                  title: 'Authorised Agent',
                  description: "Citizen's Office services. We handle official documents for you.",
                  link: '/authorised-agent'
                },
                {
                  icon: '💰',
                  title: 'Finance',
                  description: 'Financial consultancy and strategic planning.',
                  link: '/finance'
                },
                {
                  icon: '💳',
                  title: 'Credit',
                  description: 'Business and personal credit solutions.',
                  link: '/credit'
                },
                {
                  icon: '🛡️',
                  title: 'Insurance',
                  description: 'Business and personal insurance tailored to your needs.',
                  link: '/insurance'
                },
                {
                  icon: '🏢',
                  title: 'Real Estate',
                  description: 'Complete real estate consultancy and management.',
                  link: '/real-estate'
                }
              ],
              cta: {
                title: 'Ready to start?',
                description: 'Contact us and discover how we can help your business grow.',
                button: 'Contact us'
              }
            })
          },
          {
            locale: 'fr',
            title: 'Hive Group - Solutions Intégrées pour Votre Entreprise',
            subtitle: 'Comptabilité, Finance, Juridique, Immobilier et bien plus. Tout en un seul endroit.',
            seoTitle: 'Hive Group Portugal - Solutions Professionnelles Intégrées',
            seoDescription: 'Services de comptabilité, finance, crédit, assurance, immobilier, juridique, marketing et IT. Solutions complètes pour entreprises au Portugal.',
            keywordsJson: JSON.stringify(['comptabilité', 'finance', 'agent autorisé', 'crédit', 'assurance', 'immobilier', 'juridique', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Solutions Intégrées pour Votre Entreprise',
                description: 'Hive Group est votre partenaire de confiance pour la comptabilité, la finance, le juridique, l\'immobilier et le développement commercial au Portugal.',
                cta: 'Découvrez nos services'
              },
              services: [
                {
                  icon: '📊',
                  title: 'Comptabilité',
                  description: 'Gestion comptable complète et certifiée pour votre entreprise.',
                  link: '/comptabilite'
                },
                {
                  icon: '🏛️',
                  title: 'Agent Autorisé',
                  description: 'Services du Bureau du Citoyen. Nous traitons vos documents officiels.',
                  link: '/agent-autorise'
                },
                {
                  icon: '💰',
                  title: 'Finance',
                  description: 'Conseil financier et planification stratégique.',
                  link: '/finance'
                },
                {
                  icon: '💳',
                  title: 'Crédit',
                  description: 'Solutions de crédit professionnel et personnel.',
                  link: '/credit'
                },
                {
                  icon: '🛡️',
                  title: 'Assurance',
                  description: 'Assurances professionnelles et personnelles adaptées à vos besoins.',
                  link: '/assurance'
                },
                {
                  icon: '🏢',
                  title: 'Immobilier',
                  description: 'Conseil et gestion immobilière complète.',
                  link: '/immobilier'
                }
              ],
              cta: {
                title: 'Prêt à commencer ?',
                description: 'Contactez-nous et découvrez comment nous pouvons aider votre entreprise à croître.',
                button: 'Contactez-nous'
              }
            })
          },
          {
            locale: 'es',
            title: 'Hive Group - Soluciones Integradas para Su Negocio',
            subtitle: 'Contabilidad, Finanzas, Jurídico, Inmobiliaria y mucho más. Todo en un solo lugar.',
            seoTitle: 'Hive Group Portugal - Soluciones Empresariales Integradas',
            seoDescription: 'Servicios de contabilidad, finanzas, crédito, seguros, inmobiliaria, jurídico, marketing e IT. Soluciones completas para empresas en Portugal.',
            keywordsJson: JSON.stringify(['contabilidad', 'finanzas', 'agente autorizado', 'crédito', 'seguros', 'inmobiliaria', 'jurídico', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Soluciones Integradas para Su Negocio',
                description: 'Hive Group es su socio de confianza para contabilidad, finanzas, jurídico, inmobiliaria y desarrollo de negocio en Portugal.',
                cta: 'Descubra nuestros servicios'
              },
              services: [
                {
                  icon: '📊',
                  title: 'Contabilidad',
                  description: 'Gestión contable completa y certificada para su empresa.',
                  link: '/contabilidad'
                },
                {
                  icon: '🏛️',
                  title: 'Agente Autorizado',
                  description: 'Servicios de la Oficina del Ciudadano. Tramitamos documentos oficiales por usted.',
                  link: '/agente-autorizado'
                },
                {
                  icon: '💰',
                  title: 'Finanzas',
                  description: 'Consultoría financiera y planificación estratégica.',
                  link: '/finanzas'
                },
                {
                  icon: '💳',
                  title: 'Crédito',
                  description: 'Soluciones de crédito empresarial y personal.',
                  link: '/credito'
                },
                {
                  icon: '🛡️',
                  title: 'Seguros',
                  description: 'Seguros empresariales y personales adaptados a sus necesidades.',
                  link: '/seguros'
                },
                {
                  icon: '🏢',
                  title: 'Inmobiliaria',
                  description: 'Consultoría y gestión inmobiliaria completa.',
                  link: '/inmobiliaria'
                }
              ],
              cta: {
                title: '¿Listo para empezar?',
                description: 'Contáctenos y descubra cómo podemos ayudar a su negocio a crecer.',
                button: 'Contáctenos'
              }
            })
          },
          {
            locale: 'it',
            title: 'Hive Group - Soluzioni Integrate per il Tuo Business',
            subtitle: 'Contabilità, Finanza, Legale, Immobiliare e molto altro. Tutto in un unico posto.',
            seoTitle: 'Hive Group Portogallo - Soluzioni Aziendali Integrate',
            seoDescription: 'Servizi di contabilità, finanza, credito, assicurazioni, immobiliare, legale, marketing e IT. Soluzioni complete per aziende in Portogallo.',
            keywordsJson: JSON.stringify(['contabilità', 'finanza', 'agente autorizzato', 'credito', 'assicurazioni', 'immobiliare', 'legale', 'portogallo']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Soluzioni Integrate per il Tuo Business',
                description: 'Hive Group è il tuo partner di fiducia per contabilità, finanza, legale, immobiliare e sviluppo business in Portogallo.',
                cta: 'Scopri i nostri servizi'
              },
              services: [
                {
                  icon: '📊',
                  title: 'Contabilità',
                  description: 'Gestione contabile completa e certificata per la tua azienda.',
                  link: '/contabilita'
                },
                {
                  icon: '🏛️',
                  title: 'Agente Autorizzato',
                  description: "Servizi dell'Ufficio del Cittadino. Gestiamo i documenti ufficiali per te.",
                  link: '/agente-autorizzato'
                },
                {
                  icon: '💰',
                  title: 'Finanza',
                  description: 'Consulenza finanziaria e pianificazione strategica.',
                  link: '/finanza'
                },
                {
                  icon: '💳',
                  title: 'Credito',
                  description: 'Soluzioni di credito aziendale e personale.',
                  link: '/credito'
                },
                {
                  icon: '🛡️',
                  title: 'Assicurazioni',
                  description: 'Assicurazioni aziendali e personali su misura per le tue esigenze.',
                  link: '/assicurazioni'
                },
                {
                  icon: '🏢',
                  title: 'Immobiliare',
                  description: 'Consulenza e gestione immobiliare completa.',
                  link: '/immobiliare'
                }
              ],
              cta: {
                title: 'Pronto per iniziare?',
                description: 'Contattaci e scopri come possiamo aiutare la tua azienda a crescere.',
                button: 'Contattaci'
              }
            })
          }
        ]
      }
    }
  });
  console.log('✅ Home page criada');

  // 2. CONTABILIDADE
  const accountingPage = await prisma.page.create({
    data: {
      slug: 'contabilidade',
      type: 'service',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Contabilidade Certificada',
            subtitle: 'Gestão contabilística completa e certificada para a sua empresa',
            seoTitle: 'Serviços de Contabilidade Certificada - Hive Group Portugal',
            seoDescription: 'Contabilidade certificada, gestão fiscal, IVA, IRS, IRC. Contabilistas certificados em Portugal.',
            keywordsJson: JSON.stringify(['contabilidade certificada', 'TOC', 'IVA', 'IRS', 'IRC', 'contabilista portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Contabilidade Certificada',
                description: 'A Hive Group oferece serviços de contabilidade certificada por técnicos oficiais de contas (TOC), garantindo conformidade total com a legislação portuguesa.'
              },
              features: [
                {
                  title: 'Gestão Contabilística Completa',
                  description: 'Processamento de toda a contabilidade da sua empresa, desde lançamentos diários até fecho de contas anual.'
                },
                {
                  title: 'Declarações Fiscais',
                  description: 'Entrega de IVA, IRS, IRC e demais obrigações fiscais dentro dos prazos legais.'
                },
                {
                  title: 'Consultoria Fiscal',
                  description: 'Aconselhamento fiscal personalizado para otimizar a carga tributária da sua empresa.'
                },
                {
                  title: 'Certificação TOC',
                  description: 'Todos os nossos serviços são prestados por Técnicos Oficiais de Contas certificados.'
                }
              ],
              process: {
                title: 'Como Funciona',
                steps: [
                  'Análise da situação contabilística atual',
                  'Implementação de sistema de gestão documental',
                  'Processamento mensal da contabilidade',
                  'Relatórios e acompanhamento contínuo'
                ]
              }
            })
          },
          {
            locale: 'en',
            title: 'Certified Accounting',
            subtitle: 'Complete certified accounting management for your company',
            seoTitle: 'Certified Accounting Services - Hive Group Portugal',
            seoDescription: 'Certified accounting, tax management, VAT, IRS, IRC. Certified accountants in Portugal.',
            keywordsJson: JSON.stringify(['certified accounting', 'chartered accountant', 'VAT', 'tax', 'accountant portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Certified Accounting',
                description: 'Hive Group offers certified accounting services by official chartered accountants (TOC), ensuring full compliance with Portuguese legislation.'
              },
              features: [
                {
                  title: 'Complete Accounting Management',
                  description: 'Processing of all your company accounting, from daily entries to annual closing.'
                },
                {
                  title: 'Tax Returns',
                  description: 'Filing of VAT, personal and corporate tax returns within legal deadlines.'
                },
                {
                  title: 'Tax Consultancy',
                  description: 'Personalised tax advice to optimise your company tax burden.'
                },
                {
                  title: 'Chartered Accountant Certification',
                  description: 'All our services are provided by certified chartered accountants.'
                }
              ],
              process: {
                title: 'How It Works',
                steps: [
                  'Analysis of current accounting situation',
                  'Implementation of document management system',
                  'Monthly accounting processing',
                  'Reports and continuous monitoring'
                ]
              }
            })
          },
          {
            locale: 'fr',
            title: 'Comptabilité Certifiée',
            subtitle: 'Gestion comptable complète et certifiée pour votre entreprise',
            seoTitle: 'Services de Comptabilité Certifiée - Hive Group Portugal',
            seoDescription: 'Comptabilité certifiée, gestion fiscale, TVA, IRS, IRC. Comptables certifiés au Portugal.',
            keywordsJson: JSON.stringify(['comptabilité certifiée', 'expert-comptable', 'TVA', 'impôts', 'comptable portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Comptabilité Certifiée',
                description: 'Hive Group offre des services de comptabilité certifiée par des experts-comptables officiels (TOC), garantissant une conformité totale avec la législation portugaise.'
              },
              features: [
                {
                  title: 'Gestion Comptable Complète',
                  description: 'Traitement de toute la comptabilité de votre entreprise, des écritures quotidiennes à la clôture annuelle.'
                },
                {
                  title: 'Déclarations Fiscales',
                  description: 'Dépôt de la TVA, impôts sur le revenu et sociétés dans les délais légaux.'
                },
                {
                  title: 'Conseil Fiscal',
                  description: 'Conseil fiscal personnalisé pour optimiser la charge fiscale de votre entreprise.'
                },
                {
                  title: 'Certification Expert-Comptable',
                  description: 'Tous nos services sont fournis par des experts-comptables certifiés.'
                }
              ],
              process: {
                title: 'Comment Ça Marche',
                steps: [
                  'Analyse de la situation comptable actuelle',
                  'Mise en place d\'un système de gestion documentaire',
                  'Traitement mensuel de la comptabilité',
                  'Rapports et suivi continu'
                ]
              }
            })
          },
          {
            locale: 'es',
            title: 'Contabilidad Certificada',
            subtitle: 'Gestión contable completa y certificada para su empresa',
            seoTitle: 'Servicios de Contabilidad Certificada - Hive Group Portugal',
            seoDescription: 'Contabilidad certificada, gestión fiscal, IVA, IRS, IRC. Contadores certificados en Portugal.',
            keywordsJson: JSON.stringify(['contabilidad certificada', 'contador', 'IVA', 'impuestos', 'contador portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Contabilidad Certificada',
                description: 'Hive Group ofrece servicios de contabilidad certificada por contadores oficiales (TOC), garantizando plena conformidad con la legislación portuguesa.'
              },
              features: [
                {
                  title: 'Gestión Contable Completa',
                  description: 'Procesamiento de toda la contabilidad de su empresa, desde asientos diarios hasta cierre anual.'
                },
                {
                  title: 'Declaraciones Fiscales',
                  description: 'Presentación de IVA, impuestos personales y corporativos dentro de los plazos legales.'
                },
                {
                  title: 'Consultoría Fiscal',
                  description: 'Asesoramiento fiscal personalizado para optimizar la carga tributaria de su empresa.'
                },
                {
                  title: 'Certificación de Contador',
                  description: 'Todos nuestros servicios son prestados por contadores certificados.'
                }
              ],
              process: {
                title: 'Cómo Funciona',
                steps: [
                  'Análisis de la situación contable actual',
                  'Implementación de sistema de gestión documental',
                  'Procesamiento mensual de la contabilidad',
                  'Informes y seguimiento continuo'
                ]
              }
            })
          },
          {
            locale: 'it',
            title: 'Contabilità Certificata',
            subtitle: 'Gestione contabile completa e certificata per la tua azienda',
            seoTitle: 'Servizi di Contabilità Certificata - Hive Group Portogallo',
            seoDescription: 'Contabilità certificata, gestione fiscale, IVA, IRS, IRC. Commercialisti certificati in Portogallo.',
            keywordsJson: JSON.stringify(['contabilità certificata', 'commercialista', 'IVA', 'tasse', 'commercialista portogallo']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Contabilità Certificata',
                description: 'Hive Group offre servizi di contabilità certificata da commercialisti ufficiali (TOC), garantendo piena conformità con la legislazione portoghese.'
              },
              features: [
                {
                  title: 'Gestione Contabile Completa',
                  description: 'Elaborazione di tutta la contabilità della tua azienda, dalle registrazioni giornaliere alla chiusura annuale.'
                },
                {
                  title: 'Dichiarazioni Fiscali',
                  description: 'Presentazione di IVA, tasse personali e societarie entro i termini legali.'
                },
                {
                  title: 'Consulenza Fiscale',
                  description: 'Consulenza fiscale personalizzata per ottimizzare il carico fiscale della tua azienda.'
                },
                {
                  title: 'Certificazione Commercialista',
                  description: 'Tutti i nostri servizi sono forniti da commercialisti certificati.'
                }
              ],
              process: {
                title: 'Come Funziona',
                steps: [
                  'Analisi della situazione contabile attuale',
                  'Implementazione del sistema di gestione documentale',
                  'Elaborazione mensile della contabilità',
                  'Rapporti e monitoraggio continuo'
                ]
              }
            })
          }
        ]
      }
    }
  });
  console.log('✅ Página Contabilidade criada');

  // 3. AGENTE AUTORIZADO
  const authorizedAgentPage = await prisma.page.create({
    data: {
      slug: 'agente-autorizado',
      type: 'service',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Agente Autorizado - Local do Cidadão',
            subtitle: 'Tratamos de todos os seus documentos oficiais',
            seoTitle: 'Agente Autorizado Local do Cidadão - Hive Group Portugal',
            seoDescription: 'Serviços do Local do Cidadão em Portugal. Tratamento de documentos oficiais, certidões, registos, licenças. Agente autorizado certificado.',
            keywordsJson: JSON.stringify(['agente autorizado', 'local do cidadão', 'certidões', 'registos', 'documentos oficiais', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Agente Autorizado - Local do Cidadão',
                description: 'Como agente autorizado, tratamos de todos os seus documentos oficiais sem necessidade de deslocações a serviços públicos. Poupamos o seu tempo.'
              },
              services: [
                {
                  title: 'Certidões',
                  description: 'Pedido e renovação de certidões de nascimento, casamento, óbito e permanência.',
                  icon: '📄'
                },
                {
                  title: 'Registos',
                  description: 'Registos prediais, comerciais, automóveis e outros registos oficiais.',
                  icon: '📋'
                },
                {
                  title: 'Licenças e Autorizações',
                  description: 'Tratamento de licenças comerciais, industriais e outras autorizações.',
                  icon: '✅'
                },
                {
                  title: 'Autenticações',
                  description: 'Autenticação de documentos e reconhecimento de assinaturas.',
                  icon: '🔏'
                },
                {
                  title: 'Cartão de Cidadão',
                  description: 'Apoio no pedido e renovação do Cartão de Cidadão.',
                  icon: '🪪'
                },
                {
                  title: 'Outros Serviços',
                  description: 'Consulte-nos para outros serviços do Local do Cidadão.',
                  icon: '🏛️'
                }
              ],
              benefits: {
                title: 'Vantagens',
                items: [
                  'Poupa tempo - não precisa de se deslocar',
                  'Tratamos de tudo por si',
                  'Acompanhamento personalizado',
                  'Rapidez e eficiência',
                  'Agente certificado e autorizado'
                ]
              }
            })
          },
          {
            locale: 'en',
            title: "Authorised Agent - Citizen's Office",
            subtitle: 'We handle all your official documents',
            seoTitle: "Authorised Agent Citizen's Office - Hive Group Portugal",
            seoDescription: "Citizen's Office services in Portugal. Handling official documents, certificates, registrations, licences. Certified authorised agent.",
            keywordsJson: JSON.stringify(['authorised agent', 'citizens office', 'certificates', 'registrations', 'official documents', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: "Authorised Agent - Citizen's Office",
                description: 'As an authorised agent, we handle all your official documents without the need to travel to public services. We save your time.'
              },
              services: [
                {
                  title: 'Certificates',
                  description: 'Request and renewal of birth, marriage, death and residence certificates.',
                  icon: '📄'
                },
                {
                  title: 'Registrations',
                  description: 'Land, commercial, vehicle and other official registrations.',
                  icon: '📋'
                },
                {
                  title: 'Licences and Authorisations',
                  description: 'Handling commercial, industrial and other licences.',
                  icon: '✅'
                },
                {
                  title: 'Authentications',
                  description: 'Document authentication and signature recognition.',
                  icon: '🔏'
                },
                {
                  title: "Citizen's Card",
                  description: "Support in applying for and renewing the Citizen's Card.",
                  icon: '🪪'
                },
                {
                  title: 'Other Services',
                  description: "Consult us for other Citizen's Office services.",
                  icon: '🏛️'
                }
              ],
              benefits: {
                title: 'Benefits',
                items: [
                  'Save time - no need to travel',
                  'We handle everything for you',
                  'Personalised follow-up',
                  'Speed and efficiency',
                  'Certified and authorised agent'
                ]
              }
            })
          },
          {
            locale: 'fr',
            title: 'Agent Autorisé - Bureau du Citoyen',
            subtitle: 'Nous traitons tous vos documents officiels',
            seoTitle: 'Agent Autorisé Bureau du Citoyen - Hive Group Portugal',
            seoDescription: 'Services du Bureau du Citoyen au Portugal. Traitement de documents officiels, certificats, enregistrements, licences. Agent autorisé certifié.',
            keywordsJson: JSON.stringify(['agent autorisé', 'bureau citoyen', 'certificats', 'enregistrements', 'documents officiels', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Agent Autorisé - Bureau du Citoyen',
                description: 'En tant qu\'agent autorisé, nous traitons tous vos documents officiels sans avoir besoin de vous déplacer aux services publics. Nous économisons votre temps.'
              },
              services: [
                {
                  title: 'Certificats',
                  description: 'Demande et renouvellement de certificats de naissance, mariage, décès et résidence.',
                  icon: '📄'
                },
                {
                  title: 'Enregistrements',
                  description: 'Enregistrements fonciers, commerciaux, véhicules et autres enregistrements officiels.',
                  icon: '📋'
                },
                {
                  title: 'Licences et Autorisations',
                  description: 'Traitement de licences commerciales, industrielles et autres autorisations.',
                  icon: '✅'
                },
                {
                  title: 'Authentifications',
                  description: 'Authentification de documents et reconnaissance de signatures.',
                  icon: '🔏'
                },
                {
                  title: 'Carte de Citoyen',
                  description: 'Assistance pour la demande et le renouvellement de la Carte de Citoyen.',
                  icon: '🪪'
                },
                {
                  title: 'Autres Services',
                  description: 'Consultez-nous pour d\'autres services du Bureau du Citoyen.',
                  icon: '🏛️'
                }
              ],
              benefits: {
                title: 'Avantages',
                items: [
                  'Économisez du temps - pas besoin de vous déplacer',
                  'Nous gérons tout pour vous',
                  'Suivi personnalisé',
                  'Rapidité et efficacité',
                  'Agent certifié et autorisé'
                ]
              }
            })
          },
          {
            locale: 'es',
            title: 'Agente Autorizado - Oficina del Ciudadano',
            subtitle: 'Tramitamos todos sus documentos oficiales',
            seoTitle: 'Agente Autorizado Oficina del Ciudadano - Hive Group Portugal',
            seoDescription: 'Servicios de la Oficina del Ciudadano en Portugal. Tramitación de documentos oficiales, certificados, registros, licencias. Agente autorizado certificado.',
            keywordsJson: JSON.stringify(['agente autorizado', 'oficina ciudadano', 'certificados', 'registros', 'documentos oficiales', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Agente Autorizado - Oficina del Ciudadano',
                description: 'Como agente autorizado, tramitamos todos sus documentos oficiales sin necesidad de desplazarse a servicios públicos. Ahorramos su tiempo.'
              },
              services: [
                {
                  title: 'Certificados',
                  description: 'Solicitud y renovación de certificados de nacimiento, matrimonio, defunción y residencia.',
                  icon: '📄'
                },
                {
                  title: 'Registros',
                  description: 'Registros de propiedad, comerciales, vehículos y otros registros oficiales.',
                  icon: '📋'
                },
                {
                  title: 'Licencias y Autorizaciones',
                  description: 'Tramitación de licencias comerciales, industriales y otras autorizaciones.',
                  icon: '✅'
                },
                {
                  title: 'Autenticaciones',
                  description: 'Autenticación de documentos y reconocimiento de firmas.',
                  icon: '🔏'
                },
                {
                  title: 'Tarjeta de Ciudadano',
                  description: 'Apoyo en la solicitud y renovación de la Tarjeta de Ciudadano.',
                  icon: '🪪'
                },
                {
                  title: 'Otros Servicios',
                  description: 'Consúltenos para otros servicios de la Oficina del Ciudadano.',
                  icon: '🏛️'
                }
              ],
              benefits: {
                title: 'Ventajas',
                items: [
                  'Ahorra tiempo - no necesita desplazarse',
                  'Gestionamos todo por usted',
                  'Seguimiento personalizado',
                  'Rapidez y eficiencia',
                  'Agente certificado y autorizado'
                ]
              }
            })
          },
          {
            locale: 'it',
            title: "Agente Autorizzato - Ufficio del Cittadino",
            subtitle: 'Gestiamo tutti i tuoi documenti ufficiali',
            seoTitle: "Agente Autorizzato Ufficio del Cittadino - Hive Group Portogallo",
            seoDescription: "Servizi dell'Ufficio del Cittadino in Portogallo. Gestione documenti ufficiali, certificati, registrazioni, licenze. Agente autorizzato certificato.",
            keywordsJson: JSON.stringify(['agente autorizzato', 'ufficio cittadino', 'certificati', 'registrazioni', 'documenti ufficiali', 'portogallo']),
            sectionsJson: JSON.stringify({
              hero: {
                title: "Agente Autorizzato - Ufficio del Cittadino",
                description: 'Come agente autorizzato, gestiamo tutti i tuoi documenti ufficiali senza bisogno di recarsi ai servizi pubblici. Risparmiamo il tuo tempo.'
              },
              services: [
                {
                  title: 'Certificati',
                  description: 'Richiesta e rinnovo di certificati di nascita, matrimonio, morte e residenza.',
                  icon: '📄'
                },
                {
                  title: 'Registrazioni',
                  description: 'Registrazioni immobiliari, commerciali, veicoli e altre registrazioni ufficiali.',
                  icon: '📋'
                },
                {
                  title: 'Licenze e Autorizzazioni',
                  description: 'Gestione di licenze commerciali, industriali e altre autorizzazioni.',
                  icon: '✅'
                },
                {
                  title: 'Autenticazioni',
                  description: 'Autenticazione di documenti e riconoscimento di firme.',
                  icon: '🔏'
                },
                {
                  title: 'Carta del Cittadino',
                  description: 'Supporto nella richiesta e rinnovo della Carta del Cittadino.',
                  icon: '🪪'
                },
                {
                  title: 'Altri Servizi',
                  description: "Consultateci per altri servizi dell'Ufficio del Cittadino.",
                  icon: '🏛️'
                }
              ],
              benefits: {
                title: 'Vantaggi',
                items: [
                  'Risparmia tempo - non devi spostarti',
                  'Gestiamo tutto per te',
                  'Monitoraggio personalizzato',
                  'Rapidità ed efficienza',
                  'Agente certificato e autorizzato'
                ]
              }
            })
          }
        ]
      }
    }
  });
  console.log('✅ Página Agente Autorizado criada');

  // Vou criar as restantes páginas de serviço de forma mais concisa
  const servicePages = [
    {
      slug: 'finance',
      titles: {
        pt: 'Consultoria Financeira',
        en: 'Financial Consultancy',
        fr: 'Conseil Financier',
        es: 'Consultoría Financiera',
        it: 'Consulenza Finanziaria'
      }
    },
    {
      slug: 'credit',
      titles: {
        pt: 'Soluções de Crédito',
        en: 'Credit Solutions',
        fr: 'Solutions de Crédit',
        es: 'Soluciones de Crédito',
        it: 'Soluzioni di Credito'
      }
    },
    {
      slug: 'insurance',
      titles: {
        pt: 'Seguros',
        en: 'Insurance',
        fr: 'Assurance',
        es: 'Seguros',
        it: 'Assicurazioni'
      }
    },
    {
      slug: 'real-estate',
      titles: {
        pt: 'Imobiliário',
        en: 'Real Estate',
        fr: 'Immobilier',
        es: 'Inmobiliaria',
        it: 'Immobiliare'
      }
    },
    {
      slug: 'legal',
      titles: {
        pt: 'Serviços Jurídicos',
        en: 'Legal Services',
        fr: 'Services Juridiques',
        es: 'Servicios Jurídicos',
        it: 'Servizi Legali'
      }
    },
    {
      slug: 'marketing',
      titles: {
        pt: 'Marketing Digital',
        en: 'Digital Marketing',
        fr: 'Marketing Digital',
        es: 'Marketing Digital',
        it: 'Marketing Digitale'
      }
    },
    {
      slug: 'travel',
      titles: {
        pt: 'Agência de Viagens',
        en: 'Travel Agency',
        fr: 'Agence de Voyages',
        es: 'Agencia de Viajes',
        it: 'Agenzia di Viaggi'
      }
    },
    {
      slug: 'it',
      titles: {
        pt: 'Serviços de IT',
        en: 'IT Services',
        fr: 'Services IT',
        es: 'Servicios IT',
        it: 'Servizi IT'
      }
    },
    {
      slug: 'business-development',
      titles: {
        pt: 'Crescimento',
        en: 'Business Development',
        fr: 'Développement Commercial',
        es: 'Desarrollo de Negocio',
        it: 'Sviluppo Business'
      }
    }
  ];

  for (const service of servicePages) {
    await prisma.page.create({
      data: {
        slug: service.slug,
        type: 'service',
        published: true,
        translations: {
          create: [
            {
              locale: 'pt',
              title: service.titles.pt,
              subtitle: `Soluções profissionais de ${service.titles.pt.toLowerCase()} para a sua empresa`,
              seoTitle: `${service.titles.pt} - Hive Group Portugal`,
              seoDescription: `Serviços de ${service.titles.pt.toLowerCase()} em Portugal. Soluções personalizadas para empresas.`,
              keywordsJson: JSON.stringify([service.titles.pt.toLowerCase(), 'portugal', 'serviços empresariais']),
              sectionsJson: JSON.stringify({
                hero: {
                  title: service.titles.pt,
                  description: `Oferecemos soluções completas de ${service.titles.pt.toLowerCase()} adaptadas às necessidades do seu negócio.`
                },
                features: [
                  {
                    title: 'Experiência Comprovada',
                    description: 'Anos de experiência no mercado português.'
                  },
                  {
                    title: 'Soluções Personalizadas',
                    description: 'Cada cliente é único e merece uma abordagem personalizada.'
                  },
                  {
                    title: 'Equipa Especializada',
                    description: 'Profissionais qualificados e certificados.'
                  }
                ]
              })
            },
            {
              locale: 'en',
              title: service.titles.en,
              subtitle: `Professional ${service.titles.en.toLowerCase()} solutions for your business`,
              seoTitle: `${service.titles.en} - Hive Group Portugal`,
              seoDescription: `${service.titles.en} services in Portugal. Customised solutions for businesses.`,
              keywordsJson: JSON.stringify([service.titles.en.toLowerCase(), 'portugal', 'business services']),
              sectionsJson: JSON.stringify({
                hero: {
                  title: service.titles.en,
                  description: `We offer complete ${service.titles.en.toLowerCase()} solutions tailored to your business needs.`
                },
                features: [
                  {
                    title: 'Proven Experience',
                    description: 'Years of experience in the Portuguese market.'
                  },
                  {
                    title: 'Customised Solutions',
                    description: 'Each client is unique and deserves a personalised approach.'
                  },
                  {
                    title: 'Specialised Team',
                    description: 'Qualified and certified professionals.'
                  }
                ]
              })
            },
            {
              locale: 'fr',
              title: service.titles.fr,
              subtitle: `Solutions professionnelles de ${service.titles.fr.toLowerCase()} pour votre entreprise`,
              seoTitle: `${service.titles.fr} - Hive Group Portugal`,
              seoDescription: `Services de ${service.titles.fr.toLowerCase()} au Portugal. Solutions personnalisées pour entreprises.`,
              keywordsJson: JSON.stringify([service.titles.fr.toLowerCase(), 'portugal', 'services professionnels']),
              sectionsJson: JSON.stringify({
                hero: {
                  title: service.titles.fr,
                  description: `Nous offrons des solutions complètes de ${service.titles.fr.toLowerCase()} adaptées aux besoins de votre entreprise.`
                },
                features: [
                  {
                    title: 'Expérience Prouvée',
                    description: 'Des années d\'expérience sur le marché portugais.'
                  },
                  {
                    title: 'Solutions Personnalisées',
                    description: 'Chaque client est unique et mérite une approche personnalisée.'
                  },
                  {
                    title: 'Équipe Spécialisée',
                    description: 'Professionnels qualifiés et certifiés.'
                  }
                ]
              })
            },
            {
              locale: 'es',
              title: service.titles.es,
              subtitle: `Soluciones profesionales de ${service.titles.es.toLowerCase()} para su empresa`,
              seoTitle: `${service.titles.es} - Hive Group Portugal`,
              seoDescription: `Servicios de ${service.titles.es.toLowerCase()} en Portugal. Soluciones personalizadas para empresas.`,
              keywordsJson: JSON.stringify([service.titles.es.toLowerCase(), 'portugal', 'servicios empresariales']),
              sectionsJson: JSON.stringify({
                hero: {
                  title: service.titles.es,
                  description: `Ofrecemos soluciones completas de ${service.titles.es.toLowerCase()} adaptadas a las necesidades de su negocio.`
                },
                features: [
                  {
                    title: 'Experiencia Probada',
                    description: 'Años de experiencia en el mercado portugués.'
                  },
                  {
                    title: 'Soluciones Personalizadas',
                    description: 'Cada cliente es único y merece un enfoque personalizado.'
                  },
                  {
                    title: 'Equipo Especializado',
                    description: 'Profesionales cualificados y certificados.'
                  }
                ]
              })
            },
            {
              locale: 'it',
              title: service.titles.it,
              subtitle: `Soluzioni professionali di ${service.titles.it.toLowerCase()} per la tua azienda`,
              seoTitle: `${service.titles.it} - Hive Group Portogallo`,
              seoDescription: `Servizi di ${service.titles.it.toLowerCase()} in Portogallo. Soluzioni personalizzate per aziende.`,
              keywordsJson: JSON.stringify([service.titles.it.toLowerCase(), 'portogallo', 'servizi aziendali']),
              sectionsJson: JSON.stringify({
                hero: {
                  title: service.titles.it,
                  description: `Offriamo soluzioni complete di ${service.titles.it.toLowerCase()} adattate alle esigenze del tuo business.`
                },
                features: [
                  {
                    title: 'Esperienza Comprovata',
                    description: 'Anni di esperienza nel mercato portoghese.'
                  },
                  {
                    title: 'Soluzioni Personalizzate',
                    description: 'Ogni cliente è unico e merita un approccio personalizzato.'
                  },
                  {
                    title: 'Team Specializzato',
                    description: 'Professionisti qualificati e certificati.'
                  }
                ]
              })
            }
          ]
        }
      }
    });
  }
  console.log('✅ Páginas de serviços criadas');

  // PÁGINA DE CONTACTOS
  const contactPage = await prisma.page.create({
    data: {
      slug: 'contactos',
      type: 'contact',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Contactos',
            subtitle: 'Entre em contacto connosco',
            seoTitle: 'Contactos - Hive Group Portugal',
            seoDescription: 'Entre em contacto com a Hive Group. Telefone: +351 212 433 909. Emails especializados para cada área de serviço.',
            keywordsJson: JSON.stringify(['contactos', 'telefone', 'email', 'hive group portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Entre em Contacto',
                description: 'Estamos aqui para ajudar. Contacte-nos através de qualquer um dos nossos canais especializados.'
              },
              contacts: {
                phone: '+351 212 433 909',
                phoneNote: 'Chamada para rede móvel nacional',
                emails: [
                  { area: 'Finanças', email: 'finance@hivegroup.pt' },
                  { area: 'Jurídico', email: 'legal@hivegroup.pt' },
                  { area: 'Imobiliário', email: 'realestate@hivegroup.pt' },
                  { area: 'Viagens', email: 'travel@hivegroup.pt' },
                  { area: 'Crescimento', email: 'business@hivegroup.pt' },
                  { area: 'Seguros', email: 'insurance@hivegroup.pt' },
                  { area: 'Crédito', email: 'credit@hivegroup.pt' },
                  { area: 'Marketing', email: 'marketing@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'en',
            title: 'Contacts',
            subtitle: 'Get in touch with us',
            seoTitle: 'Contacts - Hive Group Portugal',
            seoDescription: 'Contact Hive Group. Phone: +351 212 433 909. Specialised emails for each service area.',
            keywordsJson: JSON.stringify(['contacts', 'phone', 'email', 'hive group portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Get in Touch',
                description: 'We are here to help. Contact us through any of our specialised channels.'
              },
              contacts: {
                phone: '+351 212 433 909',
                phoneNote: 'Call to national mobile network',
                emails: [
                  { area: 'Finance', email: 'finance@hivegroup.pt' },
                  { area: 'Legal', email: 'legal@hivegroup.pt' },
                  { area: 'Real Estate', email: 'realestate@hivegroup.pt' },
                  { area: 'Travel', email: 'travel@hivegroup.pt' },
                  { area: 'Business Development', email: 'business@hivegroup.pt' },
                  { area: 'Insurance', email: 'insurance@hivegroup.pt' },
                  { area: 'Credit', email: 'credit@hivegroup.pt' },
                  { area: 'Marketing', email: 'marketing@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'fr',
            title: 'Contacts',
            subtitle: 'Contactez-nous',
            seoTitle: 'Contacts - Hive Group Portugal',
            seoDescription: 'Contactez Hive Group. Téléphone : +351 212 433 909. Emails spécialisés pour chaque domaine de service.',
            keywordsJson: JSON.stringify(['contacts', 'téléphone', 'email', 'hive group portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Contactez-nous',
                description: 'Nous sommes là pour vous aider. Contactez-nous via l\'un de nos canaux spécialisés.'
              },
              contacts: {
                phone: '+351 212 433 909',
                phoneNote: 'Appel vers réseau mobile national',
                emails: [
                  { area: 'Finance', email: 'finance@hivegroup.pt' },
                  { area: 'Juridique', email: 'legal@hivegroup.pt' },
                  { area: 'Immobilier', email: 'realestate@hivegroup.pt' },
                  { area: 'Voyages', email: 'travel@hivegroup.pt' },
                  { area: 'Développement Commercial', email: 'business@hivegroup.pt' },
                  { area: 'Assurance', email: 'insurance@hivegroup.pt' },
                  { area: 'Crédit', email: 'credit@hivegroup.pt' },
                  { area: 'Marketing', email: 'marketing@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'es',
            title: 'Contactos',
            subtitle: 'Póngase en contacto con nosotros',
            seoTitle: 'Contactos - Hive Group Portugal',
            seoDescription: 'Contacte con Hive Group. Teléfono: +351 212 433 909. Emails especializados para cada área de servicio.',
            keywordsJson: JSON.stringify(['contactos', 'teléfono', 'email', 'hive group portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Póngase en Contacto',
                description: 'Estamos aquí para ayudar. Contáctenos a través de cualquiera de nuestros canales especializados.'
              },
              contacts: {
                phone: '+351 212 433 909',
                phoneNote: 'Llamada a red móvil nacional',
                emails: [
                  { area: 'Finanzas', email: 'finance@hivegroup.pt' },
                  { area: 'Jurídico', email: 'legal@hivegroup.pt' },
                  { area: 'Inmobiliaria', email: 'realestate@hivegroup.pt' },
                  { area: 'Viajes', email: 'travel@hivegroup.pt' },
                  { area: 'Desarrollo de Negocio', email: 'business@hivegroup.pt' },
                  { area: 'Seguros', email: 'insurance@hivegroup.pt' },
                  { area: 'Crédito', email: 'credit@hivegroup.pt' },
                  { area: 'Marketing', email: 'marketing@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'it',
            title: 'Contatti',
            subtitle: 'Mettiti in contatto con noi',
            seoTitle: 'Contatti - Hive Group Portogallo',
            seoDescription: 'Contatta Hive Group. Telefono: +351 212 433 909. Email specializzate per ogni area di servizio.',
            keywordsJson: JSON.stringify(['contatti', 'telefono', 'email', 'hive group portogallo']),
            sectionsJson: JSON.stringify({
              hero: {
                title: 'Mettiti in Contatto',
                description: 'Siamo qui per aiutarti. Contattaci attraverso uno dei nostri canali specializzati.'
              },
              contacts: {
                phone: '+351 212 433 909',
                phoneNote: 'Chiamata a rete mobile nazionale',
                emails: [
                  { area: 'Finanza', email: 'finance@hivegroup.pt' },
                  { area: 'Legale', email: 'legal@hivegroup.pt' },
                  { area: 'Immobiliare', email: 'realestate@hivegroup.pt' },
                  { area: 'Viaggi', email: 'travel@hivegroup.pt' },
                  { area: 'Sviluppo Business', email: 'business@hivegroup.pt' },
                  { area: 'Assicurazioni', email: 'insurance@hivegroup.pt' },
                  { area: 'Credito', email: 'credit@hivegroup.pt' },
                  { area: 'Marketing', email: 'marketing@hivegroup.pt' }
                ]
              }
            })
          }
        ]
      }
    }
  });
  console.log('✅ Página Contactos criada');

  // ============================================
  // POSTS (BLOG)
  // ============================================

  const blogPosts = [
    {
      slug: 'reforma-fiscal-2024-portugal',
      category: 'tax',
      titles: {
        pt: 'Reforma Fiscal 2024: O que muda para as empresas em Portugal',
        en: 'Tax Reform 2024: What changes for businesses in Portugal',
        fr: 'Réforme Fiscale 2024 : Ce qui change pour les entreprises au Portugal',
        es: 'Reforma Fiscal 2024: Qué cambia para las empresas en Portugal',
        it: 'Riforma Fiscale 2024: Cosa cambia per le aziende in Portogallo'
      }
    },
    {
      slug: 'credito-habitacao-2024',
      category: 'finance',
      titles: {
        pt: 'Crédito Habitação em 2024: Guia Completo',
        en: 'Mortgage Credit in 2024: Complete Guide',
        fr: 'Crédit Immobilier en 2024 : Guide Complet',
        es: 'Crédito Hipotecario en 2024: Guía Completa',
        it: 'Mutuo Casa nel 2024: Guida Completa'
      }
    },
    {
      slug: 'golden-visa-portugal-mudancas',
      category: 'legal',
      titles: {
        pt: 'Golden Visa Portugal: Novas Regras e Alternativas',
        en: 'Golden Visa Portugal: New Rules and Alternatives',
        fr: 'Golden Visa Portugal : Nouvelles Règles et Alternatives',
        es: 'Golden Visa Portugal: Nuevas Normas y Alternativas',
        it: 'Golden Visa Portogallo: Nuove Regole e Alternative'
      }
    }
  ];

  for (const post of blogPosts) {
    await prisma.post.create({
      data: {
        slug: post.slug,
        category: post.category,
        published: true,
        translations: {
          create: [
            {
              locale: 'pt',
              title: post.titles.pt,
              excerpt: `Descubra tudo sobre ${post.titles.pt.toLowerCase()} neste artigo completo.`,
              contentHtml: `<h2>Introdução</h2><p>Este é um artigo completo sobre ${post.titles.pt.toLowerCase()}.</p><h2>Principais Pontos</h2><ul><li>Ponto 1</li><li>Ponto 2</li><li>Ponto 3</li></ul>`,
              seoTitle: post.titles.pt,
              seoDescription: `Guia completo sobre ${post.titles.pt.toLowerCase()}. Informação atualizada para 2024.`,
              faqJson: JSON.stringify([
                {
                  question: 'O que preciso saber?',
                  answer: 'Informação detalhada sobre o tema.'
                }
              ])
            },
            {
              locale: 'en',
              title: post.titles.en,
              excerpt: `Discover everything about ${post.titles.en.toLowerCase()} in this complete article.`,
              contentHtml: `<h2>Introduction</h2><p>This is a complete article about ${post.titles.en.toLowerCase()}.</p><h2>Key Points</h2><ul><li>Point 1</li><li>Point 2</li><li>Point 3</li></ul>`,
              seoTitle: post.titles.en,
              seoDescription: `Complete guide about ${post.titles.en.toLowerCase()}. Updated information for 2024.`,
              faqJson: JSON.stringify([
                {
                  question: 'What do I need to know?',
                  answer: 'Detailed information about the topic.'
                }
              ])
            },
            {
              locale: 'fr',
              title: post.titles.fr,
              excerpt: `Découvrez tout sur ${post.titles.fr.toLowerCase()} dans cet article complet.`,
              contentHtml: `<h2>Introduction</h2><p>Ceci est un article complet sur ${post.titles.fr.toLowerCase()}.</p><h2>Points Clés</h2><ul><li>Point 1</li><li>Point 2</li><li>Point 3</li></ul>`,
              seoTitle: post.titles.fr,
              seoDescription: `Guide complet sur ${post.titles.fr.toLowerCase()}. Informations à jour pour 2024.`,
              faqJson: JSON.stringify([
                {
                  question: 'Que dois-je savoir ?',
                  answer: 'Informations détaillées sur le sujet.'
                }
              ])
            },
            {
              locale: 'es',
              title: post.titles.es,
              excerpt: `Descubra todo sobre ${post.titles.es.toLowerCase()} en este artículo completo.`,
              contentHtml: `<h2>Introducción</h2><p>Este es un artículo completo sobre ${post.titles.es.toLowerCase()}.</p><h2>Puntos Clave</h2><ul><li>Punto 1</li><li>Punto 2</li><li>Punto 3</li></ul>`,
              seoTitle: post.titles.es,
              seoDescription: `Guía completa sobre ${post.titles.es.toLowerCase()}. Información actualizada para 2024.`,
              faqJson: JSON.stringify([
                {
                  question: '¿Qué necesito saber?',
                  answer: 'Información detallada sobre el tema.'
                }
              ])
            },
            {
              locale: 'it',
              title: post.titles.it,
              excerpt: `Scopri tutto su ${post.titles.it.toLowerCase()} in questo articolo completo.`,
              contentHtml: `<h2>Introduzione</h2><p>Questo è un articolo completo su ${post.titles.it.toLowerCase()}.</p><h2>Punti Chiave</h2><ul><li>Punto 1</li><li>Punto 2</li><li>Punto 3</li></ul>`,
              seoTitle: post.titles.it,
              seoDescription: `Guida completa su ${post.titles.it.toLowerCase()}. Informazioni aggiornate per il 2024.`,
              faqJson: JSON.stringify([
                {
                  question: 'Cosa devo sapere?',
                  answer: 'Informazioni dettagliate sull\'argomento.'
                }
              ])
            }
          ]
        }
      }
    });
  }
  console.log('✅ Posts de blog criados');

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
