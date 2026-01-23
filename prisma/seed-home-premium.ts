import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateHomePage() {
  console.log('🌱 Atualizando Home Page Premium...');

  // Apagar home antiga se existir
  await prisma.page.deleteMany({
    where: { slug: 'home' }
  });

  // Criar nova home premium
  const homePage = await prisma.page.create({
    data: {
      slug: 'home',
      type: 'home',
      published: true,
      translations: {
        create: [
          {
            locale: 'pt',
            title: 'Hive Group Portugal - Contabilidade Certificada & Soluções Empresariais',
            subtitle: 'Contabilidade certificada, agente autorizado e soluções integradas para o seu negócio em Portugal.',
            seoTitle: 'Hive Group Portugal - Contabilidade Certificada & Local do Cidadão',
            seoDescription: 'Contabilidade certificada TOC, Local do Cidadão (agente autorizado), finanças, crédito, seguros e mais. Soluções completas para empresas em Portugal.',
            keywordsJson: JSON.stringify(['contabilidade certificada', 'TOC', 'local do cidadão', 'agente autorizado', 'finanças', 'portugal', 'contabilista']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Contabilidade Certificada & Soluções Integradas',
                subheadline: 'Simplifique a gestão da sua empresa com os nossos serviços de contabilidade certificada, Local do Cidadão e consultoria empresarial em Portugal.',
                authorizedAgentBadge: {
                  title: 'Local do Cidadão',
                  subtitle: 'Agente Autorizado Certificado',
                  description: 'Tratamos de documentos oficiais por si'
                }
              },
              coreService: {
                title: 'Contabilidade Certificada TOC',
                subtitle: 'O Alicerce do Seu Negócio',
                description: 'Gestão contabilística completa por Técnicos Oficiais de Contas certificados. IVA, IRS, IRC, fecho de contas anual e todas as obrigações fiscais com rigor e pontualidade.',
                benefits: [
                  'Técnicos Oficiais de Contas certificados',
                  'Declarações fiscais dentro dos prazos',
                  'Relatórios mensais personalizados',
                  'Portal do cliente online',
                  'Apoio permanente'
                ],
                ctaLabel: 'Conhecer Contabilidade'
              },
              authorizedAgent: {
                title: 'Local do Cidadão',
                subtitle: 'Agente Autorizado Certificado',
                description: 'Tratamos de toda a documentação oficial sem necessidade de deslocações. Certidões, registos, autenticações, documentação automóvel e muito mais. Poupe tempo e elimine burocracias.',
                features: [
                  'Documentação automóvel completa',
                  'Renovação da carta de condução',
                  'Certidões e registos oficiais',
                  'Autenticações de documentos',
                  'Cartão de cidadão e serviços públicos'
                ],
                tagline: 'Este é o seu Local. Tratamos de tudo por si.',
                ctaLabel: 'Conhecer Serviços'
              },
              groupHive: {
                title: 'O Grupo Hive',
                subtitle: 'Soluções integradas em 9 áreas estratégicas',
                areas: [
                  {
                    title: 'Contabilidade',
                    description: 'TOC certificados',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finance',
                    description: 'Consultoria financeira',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Credit',
                    description: 'Soluções de crédito',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Insurance',
                    description: 'Seguros empresariais',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Real Estate',
                    description: 'Gestão imobiliária',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Legal',
                    description: 'Serviços jurídicos',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Marketing digital',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Travel',
                    description: 'Agência de viagens',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'Business Dev',
                    description: 'Desenvolvimento negócio',
                    icon: '🚀',
                    link: '/business-development'
                  }
                ]
              },
              whyChoose: {
                title: 'Porque Escolher a Hive Group',
                subtitle: 'A sua parceria de confiança para o sucesso empresarial',
                reasons: [
                  {
                    title: 'Contabilistas Certificados (TOC)',
                    description: 'Equipa de Técnicos Oficiais de Contas certificados pela Ordem dos Contabilistas Certificados.'
                  },
                  {
                    title: 'Local do Cidadão Certificado',
                    description: 'Tratamos de documentos oficiais sem necessidade de deslocações (agente autorizado).'
                  },
                  {
                    title: 'Soluções Integradas',
                    description: 'Tudo num só lugar: contabilidade, finanças, jurídico, imobiliário e mais.'
                  },
                  {
                    title: 'Conformidade Total',
                    description: 'Garantimos cumprimento rigoroso de todas as obrigações fiscais e legais em Portugal.'
                  },
                  {
                    title: 'Tecnologia de Ponta',
                    description: 'Plataformas digitais modernas para gestão em tempo real da sua contabilidade.'
                  },
                  {
                    title: 'Acompanhamento Personalizado',
                    description: 'Cada cliente tem um gestor dedicado que conhece profundamente o seu negócio.'
                  },
                  {
                    title: 'Resposta Rápida',
                    description: 'Equipa disponível para esclarecimentos e apoio quando precisa.'
                  },
                  {
                    title: 'Experiência Comprovada',
                    description: 'Anos de experiência a apoiar empresas de todos os sectores em Portugal.'
                  }
                ]
              },
              howItWorks: {
                title: 'Como Funciona',
                subtitle: 'Processo simples em 3 passos',
                steps: [
                  {
                    number: 1,
                    title: 'Reunião Inicial Gratuita',
                    description: 'Analisamos a situação da sua empresa e identificamos necessidades específicas de contabilidade e gestão.'
                  },
                  {
                    number: 2,
                    title: 'Proposta Personalizada',
                    description: 'Apresentamos uma proposta adaptada ao seu negócio com serviços, prazos e investimento claro.'
                  },
                  {
                    number: 3,
                    title: 'Implementação & Acompanhamento',
                    description: 'Iniciamos os serviços e garantimos acompanhamento contínuo com relatórios mensais e suporte dedicado.'
                  }
                ]
              },
              featuredServices: {
                title: 'Serviços em Destaque',
                subtitle: 'As nossas especialidades core',
                services: [
                  {
                    title: 'Contabilidade Certificada',
                    description: 'Gestão contabilística completa por TOC certificados. Processamento de IVA, IRS, IRC, fecho de contas anual e todas as obrigações fiscais.',
                    features: [
                      'Técnicos Oficiais de Contas (TOC)',
                      'Declarações fiscais (IVA, IRS, IRC)',
                      'Fecho de contas anual',
                      'Relatórios mensais',
                      'Portal do cliente online'
                    ],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Local do Cidadão',
                    description: 'Serviços oficiais sem deslocações. Certidões, registos, autenticações e muito mais.',
                    features: [
                      'Certidões (nascimento, casamento, óbito)',
                      'Registos (predial, comercial, automóvel)',
                      'Autenticações de documentos',
                      'Cartão de Cidadão',
                      'Licenças e autorizações'
                    ],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consultoria Financeira',
                    description: 'Planeamento estratégico, análise de investimentos e optimização fiscal.',
                    features: [
                      'Planeamento financeiro',
                      'Análise de investimentos',
                      'Optimização fiscal',
                      'Cash flow management',
                      'Business plans'
                    ],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Perguntas Frequentes',
                questions: [
                  {
                    question: 'A Hive Group tem contabilistas certificados?',
                    answer: 'Sim, todos os nossos serviços de contabilidade são prestados por Técnicos Oficiais de Contas (TOC) certificados pela Ordem dos Contabilistas Certificados, garantindo conformidade total com a legislação portuguesa.'
                  },
                  {
                    question: 'O que é o Local do Cidadão?',
                    answer: 'É uma entidade certificada (agente autorizado) que pode tratar de documentos oficiais (certidões, registos, autenticações) sem que tenha de se deslocar a serviços públicos. Poupamos o seu tempo tratando de tudo por si.'
                  },
                  {
                    question: 'Que tipo de empresas trabalham convosco?',
                    answer: 'Trabalhamos com empresas de todos os sectores e dimensões: desde empresários em nome individual, PMEs, startups até empresas de maior dimensão. Cada cliente tem uma solução adaptada às suas necessidades.'
                  },
                  {
                    question: 'Qual o prazo para entregar declarações fiscais?',
                    answer: 'Garantimos a entrega de todas as declarações fiscais (IVA, IRS, IRC) dentro dos prazos legais. Processamos o IVA mensalmente e mantemo-lo sempre informado sobre próximas obrigações.'
                  },
                  {
                    question: 'Como funciona o acompanhamento mensal?',
                    answer: 'Cada cliente tem um gestor dedicado, recebe relatórios mensais da situação contabilística e fiscal, e tem acesso a portal online para consultar documentos a qualquer momento. Estamos sempre disponíveis para esclarecimentos.'
                  }
                ]
              },
              quickContact: {
                title: 'Contactos Rápidos',
                phone: '+351 212 433 909',
                phoneNote: 'Chamada para rede móvel nacional',
                emails: [
                  {
                    department: 'Contabilidade & Geral',
                    email: 'business@hivegroup.pt'
                  },
                  {
                    department: 'Finanças',
                    email: 'finance@hivegroup.pt'
                  },
                  {
                    department: 'Jurídico',
                    email: 'legal@hivegroup.pt'
                  },
                  {
                    department: 'Imobiliário',
                    email: 'realestate@hivegroup.pt'
                  }
                ]
              }
            })
          },
          {
            locale: 'en',
            title: 'Hive Group Portugal - Certified Accounting & Business Solutions',
            subtitle: 'Certified accounting, authorised agent and integrated solutions for your business in Portugal.',
            seoTitle: 'Hive Group Portugal - Certified Accounting & Authorised Agent',
            seoDescription: 'Certified TOC accounting, Authorised Citizen Office Agent, finance, credit, insurance and more. Complete solutions for businesses in Portugal.',
            keywordsJson: JSON.stringify(['certified accounting', 'chartered accountant', 'authorised agent', 'citizens office', 'finance', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Certified Accounting & Integrated Solutions',
                subheadline: 'Simplify your company management with our certified accounting, authorised agent and business consultancy services in Portugal.',
                authorizedAgentBadge: {
                  title: 'Authorised Agent',
                  subtitle: "Citizen's Office",
                  description: 'We handle official documents for you'
                }
              },
              coreService: {
                title: 'Certified TOC Accounting',
                subtitle: 'The Foundation of Your Business',
                description: 'Complete accounting management by certified Official Chartered Accountants. VAT, personal and corporate tax, annual closing and all tax obligations with rigour and punctuality.',
                benefits: [
                  'Certified Official Chartered Accountants',
                  'Tax returns within deadlines',
                  'Personalised monthly reports',
                  'Online client portal',
                  'Permanent support'
                ],
                ctaLabel: 'Discover Accounting'
              },
              authorizedAgent: {
                title: "Citizen's Office",
                subtitle: 'Certified Authorised Agent',
                description: 'We handle all official documentation without you needing to travel. Certificates, registrations, authentications, vehicle documentation and much more. Save time and eliminate bureaucracy.',
                features: [
                  'Complete vehicle documentation',
                  'Driving licence renewal',
                  'Official certificates and registrations',
                  'Document authentications',
                  'Citizen card and public services'
                ],
                tagline: 'This is your Place. We handle everything for you.',
                ctaLabel: 'Discover Services'
              },
              groupHive: {
                title: 'The Hive Group',
                subtitle: 'Integrated solutions across 9 strategic areas',
                areas: [
                  {
                    title: 'Accounting',
                    description: 'Certified accountants',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finance',
                    description: 'Financial consultancy',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Credit',
                    description: 'Credit solutions',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Insurance',
                    description: 'Business insurance',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Real Estate',
                    description: 'Property management',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Legal',
                    description: 'Legal services',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Digital marketing',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Travel',
                    description: 'Travel agency',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'Business Dev',
                    description: 'Business development',
                    icon: '🚀',
                    link: '/business-development'
                  }
                ]
              },
              whyChoose: {
                title: 'Why Choose Hive Group',
                subtitle: 'Your trusted partnership for business success',
                reasons: [
                  {
                    title: 'Certified Chartered Accountants (TOC)',
                    description: 'Team of Official Chartered Accountants certified by the Portuguese Order of Chartered Accountants.'
                  },
                  {
                    title: 'Certified Authorised Agent',
                    description: "We handle official Citizen's Office documents without you needing to travel."
                  },
                  {
                    title: 'Integrated Solutions',
                    description: 'Everything in one place: accounting, finance, legal, real estate and more.'
                  },
                  {
                    title: 'Full Compliance',
                    description: 'We guarantee strict compliance with all tax and legal obligations in Portugal.'
                  },
                  {
                    title: 'Cutting-Edge Technology',
                    description: 'Modern digital platforms for real-time management of your accounting.'
                  },
                  {
                    title: 'Personalised Support',
                    description: 'Each client has a dedicated manager who knows your business thoroughly.'
                  },
                  {
                    title: 'Quick Response',
                    description: 'Team available for clarifications and support when you need it.'
                  },
                  {
                    title: 'Proven Experience',
                    description: 'Years of experience supporting businesses across all sectors in Portugal.'
                  }
                ]
              },
              howItWorks: {
                title: 'How It Works',
                subtitle: 'Simple 3-step process',
                steps: [
                  {
                    number: 1,
                    title: 'Free Initial Meeting',
                    description: 'We analyse your company situation and identify specific accounting and management needs.'
                  },
                  {
                    number: 2,
                    title: 'Personalised Proposal',
                    description: 'We present a proposal tailored to your business with services, timelines and clear investment.'
                  },
                  {
                    number: 3,
                    title: 'Implementation & Follow-up',
                    description: 'We start the services and ensure continuous monitoring with monthly reports and dedicated support.'
                  }
                ]
              },
              featuredServices: {
                title: 'Featured Services',
                subtitle: 'Our core specialities',
                services: [
                  {
                    title: 'Certified Accounting',
                    description: 'Complete accounting management by certified accountants. VAT, personal and corporate tax processing, annual closing and all tax obligations.',
                    features: [
                      'Official Chartered Accountants (TOC)',
                      'Tax returns (VAT, income tax, corporate tax)',
                      'Annual accounts closing',
                      'Monthly reports',
                      'Online client portal'
                    ],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: "Authorised Agent - Citizen's Office",
                    description: 'Official services without travelling. Certificates, registrations, authentications and much more.',
                    features: [
                      'Certificates (birth, marriage, death)',
                      'Registrations (property, commercial, vehicle)',
                      'Document authentications',
                      "Citizen's Card",
                      'Licences and authorisations'
                    ],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Financial Consultancy',
                    description: 'Strategic planning, investment analysis and tax optimisation.',
                    features: [
                      'Financial planning',
                      'Investment analysis',
                      'Tax optimisation',
                      'Cash flow management',
                      'Business plans'
                    ],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Frequently Asked Questions',
                questions: [
                  {
                    question: 'Does Hive Group have certified accountants?',
                    answer: 'Yes, all our accounting services are provided by Official Chartered Accountants (TOC) certified by the Portuguese Order of Chartered Accountants, ensuring full compliance with Portuguese legislation.'
                  },
                  {
                    question: "What is an Authorised Citizen's Office Agent?",
                    answer: 'It is a certified entity that can handle official documents (certificates, registrations, authentications) without you having to travel to public services. We save your time by handling everything for you.'
                  },
                  {
                    question: 'What type of companies work with you?',
                    answer: 'We work with companies across all sectors and sizes: from sole traders, SMEs, startups to larger companies. Each client has a solution tailored to their needs.'
                  },
                  {
                    question: 'What is the deadline for submitting tax returns?',
                    answer: 'We guarantee submission of all tax returns (VAT, income tax, corporate tax) within legal deadlines. We process VAT monthly and keep you always informed about upcoming obligations.'
                  },
                  {
                    question: 'How does monthly monitoring work?',
                    answer: 'Each client has a dedicated manager, receives monthly reports of accounting and tax situation, and has access to an online portal to consult documents at any time. We are always available for clarifications.'
                  }
                ]
              },
              quickContact: {
                title: 'Quick Contacts',
                phone: '+351 212 433 909',
                phoneNote: 'Call to national mobile network',
                emails: [
                  {
                    department: 'Accounting & General',
                    email: 'business@hivegroup.pt'
                  },
                  {
                    department: 'Finance',
                    email: 'finance@hivegroup.pt'
                  },
                  {
                    department: 'Legal',
                    email: 'legal@hivegroup.pt'
                  },
                  {
                    department: 'Real Estate',
                    email: 'realestate@hivegroup.pt'
                  }
                ]
              }
            })
          },
          // Adicionar traduções fr, es, it de forma similar...
          {
            locale: 'fr',
            title: 'Hive Group Portugal - Comptabilité Certifiée & Solutions Professionnelles',
            subtitle: 'Comptabilité certifiée, agent autorisé et solutions intégrées pour votre entreprise au Portugal.',
            seoTitle: 'Hive Group Portugal - Comptabilité Certifiée & Agent Autorisé',
            seoDescription: 'Comptabilité certifiée TOC, Agent Autorisé Bureau du Citoyen, finance, crédit, assurance. Solutions complètes pour entreprises au Portugal.',
            keywordsJson: JSON.stringify(['comptabilité certifiée', 'expert-comptable', 'agent autorisé', 'bureau citoyen', 'finance', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Comptabilité Certifiée & Solutions Intégrées',
                subheadline: 'Simplifiez la gestion de votre entreprise avec nos services de comptabilité certifiée, agent autorisé et conseil professionnel au Portugal.',
                authorizedAgentBadge: {
                  title: 'Agent Autorisé',
                  subtitle: 'Bureau du Citoyen',
                  description: 'Nous traitons les documents officiels pour vous'
                }
              },
              coreService: {
                title: 'Comptabilité Certifiée TOC',
                subtitle: 'La Base de Votre Entreprise',
                description: 'Gestion comptable complète par des experts-comptables certifiés. TVA, impôts, clôture annuelle et toutes obligations fiscales avec rigueur et ponctualité.',
                benefits: [
                  'Experts-comptables certifiés',
                  'Déclarations fiscales dans les délais',
                  'Rapports mensuels personnalisés',
                  'Portail client en ligne',
                  'Support permanent'
                ],
                ctaLabel: 'Découvrir Comptabilité'
              },
              authorizedAgent: {
                title: 'Bureau du Citoyen',
                subtitle: 'Agent Autorisé Certifié',
                description: 'Nous traitons toute la documentation officielle sans déplacement. Certificats, enregistrements, authentifications, documents véhicule et bien plus. Gagnez du temps et éliminez la bureaucratie.',
                features: [
                  'Documentation véhicule complète',
                  'Renouvellement permis de conduire',
                  'Certificats et enregistrements officiels',
                  'Authentifications de documents',
                  'Carte de citoyen et services publics'
                ],
                tagline: 'C\'est votre Bureau. Nous gérons tout pour vous.',
                ctaLabel: 'Découvrir Services'
              },
              groupHive: {
                title: 'Le Groupe Hive',
                subtitle: 'Solutions intégrées dans 9 domaines stratégiques',
                areas: [
                  { title: 'Comptabilité', description: 'Experts certifiés', icon: '📊', link: '/contabilidade' },
                  { title: 'Finance', description: 'Conseil financier', icon: '💰', link: '/finance' },
                  { title: 'Crédit', description: 'Solutions crédit', icon: '💳', link: '/credit' },
                  { title: 'Assurance', description: 'Assurances professionnelles', icon: '🛡️', link: '/insurance' },
                  { title: 'Immobilier', description: 'Gestion immobilière', icon: '🏢', link: '/real-estate' },
                  { title: 'Juridique', description: 'Services juridiques', icon: '⚖️', link: '/legal' },
                  { title: 'Marketing', description: 'Marketing digital', icon: '📱', link: '/marketing' },
                  { title: 'Voyages', description: 'Agence de voyages', icon: '✈️', link: '/travel' },
                  { title: 'Développement', description: 'Développement commercial', icon: '🚀', link: '/business-development' }
                ]
              },
              whyChoose: {
                title: 'Pourquoi Choisir Hive Group',
                subtitle: 'Votre partenaire de confiance pour la réussite professionnelle',
                reasons: [
                  { title: 'Experts-Comptables Certifiés', description: 'Équipe certifiée par l\'Ordre des Experts-Comptables Portugais.' },
                  { title: 'Agent Autorisé Certifié', description: 'Nous traitons les documents officiels sans déplacement.' },
                  { title: 'Solutions Intégrées', description: 'Tout au même endroit: comptabilité, finance, juridique, immobilier.' },
                  { title: 'Conformité Totale', description: 'Respect strict des obligations fiscales et légales au Portugal.' },
                  { title: 'Technologie de Pointe', description: 'Plateformes numériques modernes pour gestion en temps réel.' },
                  { title: 'Accompagnement Personnalisé', description: 'Chaque client a un gestionnaire dédié.' },
                  { title: 'Réponse Rapide', description: 'Équipe disponible pour support quand vous en avez besoin.' },
                  { title: 'Expérience Prouvée', description: 'Années d\'expérience avec entreprises de tous secteurs.' }
                ]
              },
              howItWorks: {
                title: 'Comment Ça Marche',
                subtitle: 'Processus simple en 3 étapes',
                steps: [
                  { number: 1, title: 'Réunion Initiale Gratuite', description: 'Analyse de votre situation et identification des besoins.' },
                  { number: 2, title: 'Proposition Personnalisée', description: 'Présentation adaptée avec services, délais et investissement.' },
                  { number: 3, title: 'Mise en Œuvre & Suivi', description: 'Démarrage des services avec rapports mensuels et support dédié.' }
                ]
              },
              featuredServices: {
                title: 'Services en Vedette',
                subtitle: 'Nos spécialités principales',
                services: [
                  {
                    title: 'Comptabilité Certifiée',
                    description: 'Gestion comptable complète par experts certifiés. TVA, impôts, clôture annuelle.',
                    features: ['Experts-comptables certifiés', 'Déclarations fiscales', 'Clôture annuelle', 'Rapports mensuels', 'Portail client'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agent Autorisé',
                    description: 'Services officiels sans déplacement. Certificats, enregistrements, authentifications.',
                    features: ['Certificats', 'Enregistrements', 'Authentifications', 'Carte de Citoyen', 'Licences'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Conseil Financier',
                    description: 'Planification stratégique et optimisation fiscale.',
                    features: ['Planification', 'Analyse investissements', 'Optimisation fiscale', 'Cash flow', 'Business plans'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Questions Fréquentes',
                questions: [
                  { question: 'Avez-vous des experts-comptables certifiés?', answer: 'Oui, tous nos services sont fournis par des experts-comptables certifiés, garantissant la conformité totale.' },
                  { question: 'Qu\'est-ce qu\'un Agent Autorisé?', answer: 'Une entité certifiée qui traite les documents officiels sans que vous ayez à vous déplacer.' },
                  { question: 'Quel type d\'entreprises travaillent avec vous?', answer: 'Toutes tailles et secteurs: indépendants, PME, startups, grandes entreprises.' },
                  { question: 'Quel délai pour les déclarations fiscales?', answer: 'Nous garantissons le dépôt dans les délais légaux et vous tenons informé.' },
                  { question: 'Comment fonctionne le suivi mensuel?', answer: 'Gestionnaire dédié, rapports mensuels, portail en ligne et disponibilité permanente.' }
                ]
              },
              quickContact: {
                title: 'Contacts Rapides',
                phone: '+351 212 433 909',
                phoneNote: 'Appel vers réseau mobile national',
                emails: [
                  { department: 'Comptabilité & Général', email: 'business@hivegroup.pt' },
                  { department: 'Finance', email: 'finance@hivegroup.pt' },
                  { department: 'Juridique', email: 'legal@hivegroup.pt' },
                  { department: 'Immobilier', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'es',
            title: 'Hive Group Portugal - Contabilidad Certificada & Soluciones Empresariales',
            subtitle: 'Contabilidad certificada, agente autorizado y soluciones integradas para su empresa en Portugal.',
            seoTitle: 'Hive Group Portugal - Contabilidad Certificada & Agente Autorizado',
            seoDescription: 'Contabilidad certificada, Agente Autorizado Oficina del Ciudadano, finanzas, crédito, seguros. Soluciones completas para empresas en Portugal.',
            keywordsJson: JSON.stringify(['contabilidad certificada', 'contador', 'agente autorizado', 'oficina ciudadano', 'finanzas', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Contabilidad Certificada & Soluciones Integradas',
                subheadline: 'Simplifique la gestión de su empresa con nuestros servicios de contabilidad certificada, agente autorizado y consultoría empresarial en Portugal.',
                authorizedAgentBadge: {
                  title: 'Agente Autorizado',
                  subtitle: 'Oficina del Ciudadano',
                  description: 'Tramitamos documentos oficiales por usted'
                }
              },
              coreService: {
                title: 'Contabilidad Certificada TOC',
                subtitle: 'La Base de Su Negocio',
                description: 'Gestión contable completa por Contadores Oficiales certificados. IVA, impuestos, cierre anual y todas las obligaciones fiscales con rigor y puntualidad.',
                benefits: [
                  'Contadores Oficiales certificados',
                  'Declaraciones fiscales en plazo',
                  'Informes mensuales personalizados',
                  'Portal del cliente online',
                  'Soporte permanente'
                ],
                ctaLabel: 'Conocer Contabilidad'
              },
              authorizedAgent: {
                title: 'Oficina del Ciudadano',
                subtitle: 'Agente Autorizado Certificado',
                description: 'Tramitamos toda la documentación oficial sin necesidad de desplazamientos. Certificados, registros, autenticaciones, documentación vehículo y mucho más. Ahorre tiempo y elimine burocracia.',
                features: [
                  'Documentación vehículo completa',
                  'Renovación permiso de conducción',
                  'Certificados y registros oficiales',
                  'Autenticaciones de documentos',
                  'Tarjeta de ciudadano y servicios públicos'
                ],
                tagline: 'Esta es su Oficina. Nos encargamos de todo.',
                ctaLabel: 'Conocer Servicios'
              },
              groupHive: {
                title: 'El Grupo Hive',
                subtitle: 'Soluciones integradas en 9 áreas estratégicas',
                areas: [
                  { title: 'Contabilidad', description: 'Contadores certificados', icon: '📊', link: '/contabilidade' },
                  { title: 'Finanzas', description: 'Consultoría financiera', icon: '💰', link: '/finance' },
                  { title: 'Crédito', description: 'Soluciones crédito', icon: '💳', link: '/credit' },
                  { title: 'Seguros', description: 'Seguros empresariales', icon: '🛡️', link: '/insurance' },
                  { title: 'Inmobiliaria', description: 'Gestión inmobiliaria', icon: '🏢', link: '/real-estate' },
                  { title: 'Jurídico', description: 'Servicios jurídicos', icon: '⚖️', link: '/legal' },
                  { title: 'Marketing', description: 'Marketing digital', icon: '📱', link: '/marketing' },
                  { title: 'Viajes', description: 'Agencia viajes', icon: '✈️', link: '/travel' },
                  { title: 'Desarrollo', description: 'Desarrollo negocio', icon: '🚀', link: '/business-development' }
                ]
              },
              whyChoose: {
                title: 'Por Qué Elegir Hive Group',
                subtitle: 'Su socio de confianza para el éxito empresarial',
                reasons: [
                  { title: 'Contadores Certificados', description: 'Equipo certificado por la Orden de Contadores Portugueses.' },
                  { title: 'Agente Autorizado Certificado', description: 'Tramitamos documentos oficiales sin desplazamientos.' },
                  { title: 'Soluciones Integradas', description: 'Todo en un solo lugar: contabilidad, finanzas, jurídico, inmobiliaria.' },
                  { title: 'Cumplimiento Total', description: 'Garantizamos cumplimiento estricto de obligaciones fiscales y legales.' },
                  { title: 'Tecnología Avanzada', description: 'Plataformas digitales modernas para gestión en tiempo real.' },
                  { title: 'Seguimiento Personalizado', description: 'Cada cliente tiene un gestor dedicado.' },
                  { title: 'Respuesta Rápida', description: 'Equipo disponible para soporte cuando lo necesita.' },
                  { title: 'Experiencia Comprobada', description: 'Años de experiencia con empresas de todos los sectores.' }
                ]
              },
              howItWorks: {
                title: 'Cómo Funciona',
                subtitle: 'Proceso simple en 3 pasos',
                steps: [
                  { number: 1, title: 'Reunión Inicial Gratuita', description: 'Analizamos su situación e identificamos necesidades.' },
                  { number: 2, title: 'Propuesta Personalizada', description: 'Presentamos propuesta adaptada con servicios, plazos e inversión.' },
                  { number: 3, title: 'Implementación & Seguimiento', description: 'Iniciamos servicios con informes mensuales y soporte dedicado.' }
                ]
              },
              featuredServices: {
                title: 'Servicios Destacados',
                subtitle: 'Nuestras especialidades principales',
                services: [
                  {
                    title: 'Contabilidad Certificada',
                    description: 'Gestión contable completa por contadores certificados. IVA, impuestos, cierre anual.',
                    features: ['Contadores certificados', 'Declaraciones fiscales', 'Cierre anual', 'Informes mensuales', 'Portal cliente'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agente Autorizado',
                    description: 'Servicios oficiales sin desplazamientos. Certificados, registros, autenticaciones.',
                    features: ['Certificados', 'Registros', 'Autenticaciones', 'Tarjeta Ciudadano', 'Licencias'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consultoría Financiera',
                    description: 'Planificación estratégica y optimización fiscal.',
                    features: ['Planificación', 'Análisis inversiones', 'Optimización fiscal', 'Cash flow', 'Business plans'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Preguntas Frecuentes',
                questions: [
                  { question: '¿Tienen contadores certificados?', answer: 'Sí, todos nuestros servicios son prestados por contadores certificados, garantizando cumplimiento total.' },
                  { question: '¿Qué es un Agente Autorizado?', answer: 'Una entidad certificada que tramita documentos oficiales sin que tenga que desplazarse.' },
                  { question: '¿Qué tipo de empresas trabajan con ustedes?', answer: 'Todos los tamaños y sectores: autónomos, PYMES, startups, grandes empresas.' },
                  { question: '¿Cuál es el plazo para declaraciones fiscales?', answer: 'Garantizamos presentación dentro de plazos legales y le mantenemos informado.' },
                  { question: '¿Cómo funciona el seguimiento mensual?', answer: 'Gestor dedicado, informes mensuales, portal online y disponibilidad permanente.' }
                ]
              },
              quickContact: {
                title: 'Contactos Rápidos',
                phone: '+351 212 433 909',
                phoneNote: 'Llamada a red móvil nacional',
                emails: [
                  { department: 'Contabilidad & General', email: 'business@hivegroup.pt' },
                  { department: 'Finanzas', email: 'finance@hivegroup.pt' },
                  { department: 'Jurídico', email: 'legal@hivegroup.pt' },
                  { department: 'Inmobiliaria', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          {
            locale: 'it',
            title: 'Hive Group Portogallo - Contabilità Certificata & Soluzioni Aziendali',
            subtitle: 'Contabilità certificata, agente autorizzato e soluzioni integrate per la tua azienda in Portogallo.',
            seoTitle: 'Hive Group Portogallo - Contabilità Certificata & Agente Autorizzato',
            seoDescription: 'Contabilità certificata, Agente Autorizzato Ufficio del Cittadino, finanza, credito, assicurazioni. Soluzioni complete per aziende in Portogallo.',
            keywordsJson: JSON.stringify(['contabilità certificata', 'commercialista', 'agente autorizzato', 'ufficio cittadino', 'finanza', 'portogallo']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Contabilità Certificata & Soluzioni Integrate',
                subheadline: 'Semplifica la gestione della tua azienda con i nostri servizi di contabilità certificata, agente autorizzato e consulenza aziendale in Portogallo.',
                authorizedAgentBadge: {
                  title: 'Agente Autorizzato',
                  subtitle: 'Ufficio del Cittadino',
                  description: 'Gestiamo documenti ufficiali per te'
                }
              },
              coreService: {
                title: 'Contabilità Certificata TOC',
                subtitle: 'La Base del Tuo Business',
                description: 'Gestione contabile completa da Commercialisti Certificati. IVA, imposte, chiusura annuale e tutti gli obblighi fiscali con rigore e puntualità.',
                benefits: [
                  'Commercialisti Certificati',
                  'Dichiarazioni fiscali nei tempi',
                  'Report mensili personalizzati',
                  'Portale cliente online',
                  'Supporto permanente'
                ],
                ctaLabel: 'Scopri Contabilità'
              },
              authorizedAgent: {
                title: 'Ufficio del Cittadino',
                subtitle: 'Agente Autorizzato Certificato',
                description: 'Gestiamo tutta la documentazione ufficiale senza necessità di spostamenti. Certificati, registrazioni, autenticazioni, documenti veicolo e molto altro. Risparmia tempo ed elimina la burocrazia.',
                features: [
                  'Documentazione veicolo completa',
                  'Rinnovo patente di guida',
                  'Certificati e registrazioni ufficiali',
                  'Autenticazioni documenti',
                  'Carta di identità e servizi pubblici'
                ],
                tagline: 'Questo è il tuo Ufficio. Ci occupiamo di tutto.',
                ctaLabel: 'Scopri Servizi'
              },
              groupHive: {
                title: 'Il Gruppo Hive',
                subtitle: 'Soluzioni integrate in 9 aree strategiche',
                areas: [
                  { title: 'Contabilità', description: 'Commercialisti certificati', icon: '📊', link: '/contabilidade' },
                  { title: 'Finanza', description: 'Consulenza finanziaria', icon: '💰', link: '/finance' },
                  { title: 'Credito', description: 'Soluzioni credito', icon: '💳', link: '/credit' },
                  { title: 'Assicurazioni', description: 'Assicurazioni aziendali', icon: '🛡️', link: '/insurance' },
                  { title: 'Immobiliare', description: 'Gestione immobiliare', icon: '🏢', link: '/real-estate' },
                  { title: 'Legale', description: 'Servizi legali', icon: '⚖️', link: '/legal' },
                  { title: 'Marketing', description: 'Marketing digitale', icon: '📱', link: '/marketing' },
                  { title: 'Viaggi', description: 'Agenzia viaggi', icon: '✈️', link: '/travel' },
                  { title: 'Sviluppo', description: 'Sviluppo business', icon: '🚀', link: '/business-development' }
                ]
              },
              whyChoose: {
                title: 'Perché Scegliere Hive Group',
                subtitle: 'Il tuo partner di fiducia per il successo aziendale',
                reasons: [
                  { title: 'Commercialisti Certificati', description: 'Team certificato dall\'Ordine dei Commercialisti Portoghesi.' },
                  { title: 'Agente Autorizzato Certificato', description: 'Gestiamo documenti ufficiali senza spostamenti.' },
                  { title: 'Soluzioni Integrate', description: 'Tutto in un unico posto: contabilità, finanza, legale, immobiliare.' },
                  { title: 'Conformità Totale', description: 'Garantiamo rispetto rigoroso degli obblighi fiscali e legali.' },
                  { title: 'Tecnologia Avanzata', description: 'Piattaforme digitali moderne per gestione in tempo reale.' },
                  { title: 'Monitoraggio Personalizzato', description: 'Ogni cliente ha un gestore dedicato.' },
                  { title: 'Risposta Rapida', description: 'Team disponibile per supporto quando necessario.' },
                  { title: 'Esperienza Comprovata', description: 'Anni di esperienza con aziende di tutti i settori.' }
                ]
              },
              howItWorks: {
                title: 'Come Funziona',
                subtitle: 'Processo semplice in 3 passi',
                steps: [
                  { number: 1, title: 'Riunione Iniziale Gratuita', description: 'Analizziamo la tua situazione e identifichiamo le esigenze.' },
                  { number: 2, title: 'Proposta Personalizzata', description: 'Presentiamo proposta adattata con servizi, tempi e investimento.' },
                  { number: 3, title: 'Implementazione & Monitoraggio', description: 'Avviamo i servizi con rapporti mensili e supporto dedicato.' }
                ]
              },
              featuredServices: {
                title: 'Servizi in Evidenza',
                subtitle: 'Le nostre specialità principali',
                services: [
                  {
                    title: 'Contabilità Certificata',
                    description: 'Gestione contabile completa da commercialisti certificati. IVA, tasse, chiusura annuale.',
                    features: ['Commercialisti certificati', 'Dichiarazioni fiscali', 'Chiusura annuale', 'Rapporti mensili', 'Portale cliente'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agente Autorizzato',
                    description: 'Servizi ufficiali senza spostamenti. Certificati, registrazioni, autenticazioni.',
                    features: ['Certificati', 'Registrazioni', 'Autenticazioni', 'Carta Cittadino', 'Licenze'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consulenza Finanziaria',
                    description: 'Pianificazione strategica e ottimizzazione fiscale.',
                    features: ['Pianificazione', 'Analisi investimenti', 'Ottimizzazione fiscale', 'Cash flow', 'Business plans'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Domande Frequenti',
                questions: [
                  { question: 'Avete commercialisti certificati?', answer: 'Sì, tutti i nostri servizi sono forniti da commercialisti certificati, garantendo conformità totale.' },
                  { question: 'Cos\'è un Agente Autorizzato?', answer: 'Un\'entità certificata che gestisce documenti ufficiali senza che tu debba spostarti.' },
                  { question: 'Che tipo di aziende lavorano con voi?', answer: 'Tutte le dimensioni e settori: autonomi, PMI, startup, grandi aziende.' },
                  { question: 'Qual è il termine per le dichiarazioni fiscali?', answer: 'Garantiamo la presentazione entro i termini legali e ti teniamo informato.' },
                  { question: 'Come funziona il monitoraggio mensile?', answer: 'Gestore dedicato, rapporti mensili, portale online e disponibilità permanente.' }
                ]
              },
              quickContact: {
                title: 'Contatti Rapidi',
                phone: '+351 212 433 909',
                phoneNote: 'Chiamata a rete mobile nazionale',
                emails: [
                  { department: 'Contabilità & Generale', email: 'business@hivegroup.pt' },
                  { department: 'Finanza', email: 'finance@hivegroup.pt' },
                  { department: 'Legale', email: 'legal@hivegroup.pt' },
                  { department: 'Immobiliare', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          }
        ]
      }
    }
  });

  console.log('✅ Home Page Premium atualizada com sucesso!');
}

updateHomePage()
  .catch((e) => {
    console.error('❌ Erro ao atualizar home:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
