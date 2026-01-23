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
                headline: 'Soluções Empresariais Integradas',
                subheadline: 'Contabilidade, Finanças, Jurídico, Imobiliário e muito mais. Tudo num só lugar.',
                authorizedAgentBadge: {
                  title: 'Agente Autorizado',
                  subtitle: 'Local do Cidadão',
                  description: 'Tratamos de documentos oficiais por si'
                }
              },
              groupHive: {
                title: 'O Grupo Hive',
                subtitle: 'Soluções integradas em 9 áreas de negócio',
                areas: [
                  {
                    title: 'Contabilidade',
                    description: 'Contabilistas certificados (TOC) ao seu serviço',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finanças',
                    description: 'Consultoria financeira e planeamento estratégico',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Crédito',
                    description: 'Soluções de crédito empresarial e pessoal',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Seguros',
                    description: 'Seguros adaptados às suas necessidades',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Imobiliário',
                    description: 'Consultoria e gestão imobiliária completa',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Jurídico',
                    description: 'Serviços jurídicos especializados',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Marketing digital para o seu negócio',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Viagens',
                    description: 'Agência de viagens corporativa',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'IT & Inovação',
                    description: 'Soluções tecnológicas para empresas',
                    icon: '💻',
                    link: '/it'
                  }
                ]
              },
              whyChoose: {
                title: 'Porque Escolher a Hive Group',
                subtitle: 'Somos o parceiro de confiança para o seu negócio',
                reasons: [
                  {
                    title: 'Contabilistas Certificados (TOC)',
                    description: 'Todos os nossos serviços de contabilidade são prestados por técnicos oficiais certificados.'
                  },
                  {
                    title: 'Agente Autorizado',
                    description: 'Tratamos de documentos oficiais sem necessidade de deslocações.'
                  },
                  {
                    title: 'Soluções Integradas',
                    description: 'Todos os serviços que precisa num só lugar.'
                  },
                  {
                    title: 'Experiência Comprovada',
                    description: 'Anos de experiência no mercado português.'
                  },
                  {
                    title: 'Atendimento Personalizado',
                    description: 'Cada cliente é único e recebe atenção dedicada.'
                  },
                  {
                    title: 'Conformidade Legal',
                    description: 'Garantimos 100% de conformidade com a legislação.'
                  },
                  {
                    title: 'Tecnologia Avançada',
                    description: 'Plataformas digitais para gestão eficiente.'
                  },
                  {
                    title: 'Preços Competitivos',
                    description: 'Qualidade premium a preços justos.'
                  }
                ]
              },
              howItWorks: {
                title: 'Como Funciona',
                subtitle: 'Processo simples e transparente',
                steps: [
                  {
                    number: 1,
                    title: 'Reunião Inicial Gratuita',
                    description: 'Conhecemos o seu negócio e identificamos as suas necessidades.'
                  },
                  {
                    number: 2,
                    title: 'Proposta Personalizada',
                    description: 'Apresentamos uma solução à medida com preços transparentes.'
                  },
                  {
                    number: 3,
                    title: 'Implementação & Suporte',
                    description: 'Começamos a trabalhar e acompanhamos continuamente.'
                  }
                ]
              },
              featuredServices: {
                title: 'Serviços em Destaque',
                subtitle: 'Os nossos serviços mais procurados',
                services: [
                  {
                    title: 'Contabilidade Certificada',
                    description: 'Gestão contabilística completa com TOC certificados',
                    features: ['TOC certificados', 'IVA, IRS, IRC', 'Consultoria fiscal', 'Relatórios mensais'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agente Autorizado',
                    description: 'Serviços do Local do Cidadão',
                    features: ['Certidões', 'Registos', 'Licenças', 'Cartão de Cidadão'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consultoria Financeira',
                    description: 'Planeamento financeiro estratégico',
                    features: ['Análise financeira', 'Gestão de tesouraria', 'Investimentos', 'Reestruturação'],
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
                    question: 'Que serviços oferece a Hive Group?',
                    answer: 'Oferecemos soluções integradas em 9 áreas: contabilidade, finanças, crédito, seguros, imobiliário, jurídico, marketing, viagens e IT.'
                  },
                  {
                    question: 'Os vossos contabilistas são certificados?',
                    answer: 'Sim, todos os nossos contabilistas são Técnicos Oficiais de Contas (TOC) certificados pela Ordem dos Contabilistas.'
                  },
                  {
                    question: 'O que é o serviço de Agente Autorizado?',
                    answer: 'Como agentes autorizados, podemos tratar de documentos oficiais (certidões, registos, licenças) sem necessidade de se deslocar aos serviços públicos.'
                  },
                  {
                    question: 'Como funciona a primeira reunião?',
                    answer: 'A primeira reunião é gratuita e sem compromisso. Conhecemos o seu negócio e apresentamos soluções personalizadas.'
                  },
                  {
                    question: 'Trabalham com empresas de que dimensão?',
                    answer: 'Trabalhamos com empresas de todas as dimensões, desde freelancers a PMEs e grandes empresas.'
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
            title: 'Hive Group - Integrated Solutions for Your Business',
            subtitle: 'Accounting, Finance, Legal, Real Estate and much more. All in one place.',
            seoTitle: 'Hive Group Portugal - Integrated Business Solutions',
            seoDescription: 'Accounting, finance, credit, insurance, real estate, legal, marketing and IT services. Complete solutions for businesses in Portugal.',
            keywordsJson: JSON.stringify(['accounting', 'finance', 'authorised agent', 'credit', 'insurance', 'real estate', 'legal', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Integrated Business Solutions',
                subheadline: 'Accounting, Finance, Legal, Real Estate and much more. All in one place.',
                authorizedAgentBadge: {
                  title: 'Authorised Agent',
                  subtitle: "Citizen's Office",
                  description: 'We handle official documents for you'
                }
              },
              groupHive: {
                title: 'The Hive Group',
                subtitle: 'Integrated solutions across 9 business areas',
                areas: [
                  {
                    title: 'Accounting',
                    description: 'Certified accountants (chartered) at your service',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finance',
                    description: 'Financial consultancy and strategic planning',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Credit',
                    description: 'Business and personal credit solutions',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Insurance',
                    description: 'Insurance tailored to your needs',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Real Estate',
                    description: 'Complete real estate consultancy and management',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Legal',
                    description: 'Specialised legal services',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Digital marketing for your business',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Travel',
                    description: 'Corporate travel agency',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'IT & Innovation',
                    description: 'Technology solutions for companies',
                    icon: '💻',
                    link: '/it'
                  }
                ]
              },
              whyChoose: {
                title: 'Why Choose Hive Group',
                subtitle: 'We are your trusted partner for business',
                reasons: [
                  {
                    title: 'Certified Accountants',
                    description: 'All our accounting services are provided by certified chartered accountants.'
                  },
                  {
                    title: 'Authorised Agent',
                    description: 'We handle official documents without the need for travel.'
                  },
                  {
                    title: 'Integrated Solutions',
                    description: 'All the services you need in one place.'
                  },
                  {
                    title: 'Proven Experience',
                    description: 'Years of experience in the Portuguese market.'
                  },
                  {
                    title: 'Personalised Service',
                    description: 'Each client is unique and receives dedicated attention.'
                  },
                  {
                    title: 'Legal Compliance',
                    description: 'We guarantee 100% compliance with legislation.'
                  },
                  {
                    title: 'Advanced Technology',
                    description: 'Digital platforms for efficient management.'
                  },
                  {
                    title: 'Competitive Prices',
                    description: 'Premium quality at fair prices.'
                  }
                ]
              },
              howItWorks: {
                title: 'How It Works',
                subtitle: 'Simple and transparent process',
                steps: [
                  {
                    number: 1,
                    title: 'Free Initial Meeting',
                    description: 'We get to know your business and identify your needs.'
                  },
                  {
                    number: 2,
                    title: 'Personalised Proposal',
                    description: 'We present a tailored solution with transparent pricing.'
                  },
                  {
                    number: 3,
                    title: 'Implementation & Support',
                    description: 'We start working and provide continuous support.'
                  }
                ]
              },
              featuredServices: {
                title: 'Featured Services',
                subtitle: 'Our most requested services',
                services: [
                  {
                    title: 'Certified Accounting',
                    description: 'Complete accounting management with certified accountants',
                    features: ['Certified accountants', 'VAT, tax returns', 'Tax consultancy', 'Monthly reports'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Authorised Agent',
                    description: "Citizen's Office services",
                    features: ['Certificates', 'Registrations', 'Licences', "Citizen's Card"],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Financial Consultancy',
                    description: 'Strategic financial planning',
                    features: ['Financial analysis', 'Treasury management', 'Investments', 'Restructuring'],
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
                    question: 'What services does Hive Group offer?',
                    answer: 'We offer integrated solutions across 9 areas: accounting, finance, credit, insurance, real estate, legal, marketing, travel and IT.'
                  },
                  {
                    question: 'Are your accountants certified?',
                    answer: 'Yes, all our accountants are certified chartered accountants.'
                  },
                  {
                    question: 'What is the Authorised Agent service?',
                    answer: 'As authorised agents, we can handle official documents (certificates, registrations, licences) without you needing to travel to public services.'
                  },
                  {
                    question: 'How does the first meeting work?',
                    answer: 'The first meeting is free and without obligation. We get to know your business and present personalised solutions.'
                  },
                  {
                    question: 'What size companies do you work with?',
                    answer: 'We work with companies of all sizes, from freelancers to SMEs and large companies.'
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
          {
            locale: 'fr',
            title: 'Hive Group - Solutions Intégrées pour Votre Entreprise',
            subtitle: 'Comptabilité, Finance, Juridique, Immobilier et bien plus. Tout en un seul endroit.',
            seoTitle: 'Hive Group Portugal - Solutions Professionnelles Intégrées',
            seoDescription: 'Services de comptabilité, finance, crédit, assurance, immobilier, juridique, marketing et IT. Solutions complètes pour entreprises au Portugal.',
            keywordsJson: JSON.stringify(['comptabilité', 'finance', 'agent autorisé', 'crédit', 'assurance', 'immobilier', 'juridique', 'portugal']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Solutions Professionnelles Intégrées',
                subheadline: 'Comptabilité, Finance, Juridique, Immobilier et bien plus. Tout en un seul endroit.',
                authorizedAgentBadge: {
                  title: 'Agent Autorisé',
                  subtitle: 'Bureau du Citoyen',
                  description: 'Nous traitons vos documents officiels'
                }
              },
              groupHive: {
                title: 'Le Groupe Hive',
                subtitle: 'Solutions intégrées dans 9 domaines d\'activité',
                areas: [
                  {
                    title: 'Comptabilité',
                    description: 'Experts-comptables certifiés à votre service',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finance',
                    description: 'Conseil financier et planification stratégique',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Crédit',
                    description: 'Solutions de crédit professionnel et personnel',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Assurance',
                    description: 'Assurances adaptées à vos besoins',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Immobilier',
                    description: 'Conseil et gestion immobilière complète',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Juridique',
                    description: 'Services juridiques spécialisés',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Marketing digital pour votre entreprise',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Voyages',
                    description: 'Agence de voyages d\'affaires',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'IT & Innovation',
                    description: 'Solutions technologiques pour entreprises',
                    icon: '💻',
                    link: '/it'
                  }
                ]
              },
              whyChoose: {
                title: 'Pourquoi Choisir Hive Group',
                subtitle: 'Nous sommes votre partenaire de confiance',
                reasons: [
                  {
                    title: 'Experts-Comptables Certifiés',
                    description: 'Tous nos services comptables sont fournis par des experts-comptables certifiés.'
                  },
                  {
                    title: 'Agent Autorisé',
                    description: 'Nous traitons les documents officiels sans besoin de déplacement.'
                  },
                  {
                    title: 'Solutions Intégrées',
                    description: 'Tous les services dont vous avez besoin en un seul endroit.'
                  },
                  {
                    title: 'Expérience Prouvée',
                    description: 'Des années d\'expérience sur le marché portugais.'
                  },
                  {
                    title: 'Service Personnalisé',
                    description: 'Chaque client est unique et reçoit une attention dédiée.'
                  },
                  {
                    title: 'Conformité Légale',
                    description: 'Nous garantissons une conformité à 100% avec la législation.'
                  },
                  {
                    title: 'Technologie Avancée',
                    description: 'Plateformes digitales pour une gestion efficace.'
                  },
                  {
                    title: 'Prix Compétitifs',
                    description: 'Qualité premium à des prix justes.'
                  }
                ]
              },
              howItWorks: {
                title: 'Comment Ça Marche',
                subtitle: 'Processus simple et transparent',
                steps: [
                  {
                    number: 1,
                    title: 'Réunion Initiale Gratuite',
                    description: 'Nous découvrons votre entreprise et identifions vos besoins.'
                  },
                  {
                    number: 2,
                    title: 'Proposition Personnalisée',
                    description: 'Nous présentons une solution sur mesure avec des prix transparents.'
                  },
                  {
                    number: 3,
                    title: 'Mise en Œuvre & Support',
                    description: 'Nous commençons à travailler et fournissons un support continu.'
                  }
                ]
              },
              featuredServices: {
                title: 'Services Vedettes',
                subtitle: 'Nos services les plus demandés',
                services: [
                  {
                    title: 'Comptabilité Certifiée',
                    description: 'Gestion comptable complète avec experts certifiés',
                    features: ['Experts certifiés', 'TVA, déclarations', 'Conseil fiscal', 'Rapports mensuels'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agent Autorisé',
                    description: 'Services du Bureau du Citoyen',
                    features: ['Certificats', 'Enregistrements', 'Licences', 'Carte de Citoyen'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Conseil Financier',
                    description: 'Planification financière stratégique',
                    features: ['Analyse financière', 'Gestion de trésorerie', 'Investissements', 'Restructuration'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Questions Fréquentes',
                questions: [
                  {
                    question: 'Quels services offre Hive Group ?',
                    answer: 'Nous offrons des solutions intégrées dans 9 domaines : comptabilité, finance, crédit, assurance, immobilier, juridique, marketing, voyages et IT.'
                  },
                  {
                    question: 'Vos comptables sont-ils certifiés ?',
                    answer: 'Oui, tous nos comptables sont des experts-comptables certifiés.'
                  },
                  {
                    question: 'Qu\'est-ce que le service d\'Agent Autorisé ?',
                    answer: 'En tant qu\'agents autorisés, nous pouvons traiter les documents officiels (certificats, enregistrements, licences) sans que vous ayez besoin de vous déplacer aux services publics.'
                  },
                  {
                    question: 'Comment fonctionne la première réunion ?',
                    answer: 'La première réunion est gratuite et sans engagement. Nous découvrons votre entreprise et présentons des solutions personnalisées.'
                  },
                  {
                    question: 'Avec quelles tailles d\'entreprises travaillez-vous ?',
                    answer: 'Nous travaillons avec des entreprises de toutes tailles, des freelances aux PME et grandes entreprises.'
                  }
                ]
              },
              quickContact: {
                title: 'Contacts Rapides',
                phone: '+351 212 433 909',
                phoneNote: 'Appel vers réseau mobile national',
                emails: [
                  {
                    department: 'Comptabilité & Général',
                    email: 'business@hivegroup.pt'
                  },
                  {
                    department: 'Finance',
                    email: 'finance@hivegroup.pt'
                  },
                  {
                    department: 'Juridique',
                    email: 'legal@hivegroup.pt'
                  },
                  {
                    department: 'Immobilier',
                    email: 'realestate@hivegroup.pt'
                  }
                ]
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
                headline: 'Soluciones Empresariales Integradas',
                subheadline: 'Contabilidad, Finanzas, Jurídico, Inmobiliaria y mucho más. Todo en un solo lugar.',
                authorizedAgentBadge: {
                  title: 'Agente Autorizado',
                  subtitle: 'Oficina del Ciudadano',
                  description: 'Tramitamos documentos oficiales por usted'
                }
              },
              groupHive: {
                title: 'El Grupo Hive',
                subtitle: 'Soluciones integradas en 9 áreas de negocio',
                areas: [
                  {
                    title: 'Contabilidad',
                    description: 'Contadores certificados a su servicio',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finanzas',
                    description: 'Consultoría financiera y planificación estratégica',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Crédito',
                    description: 'Soluciones de crédito empresarial y personal',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Seguros',
                    description: 'Seguros adaptados a sus necesidades',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Inmobiliaria',
                    description: 'Consultoría y gestión inmobiliaria completa',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Jurídico',
                    description: 'Servicios jurídicos especializados',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Marketing digital para su negocio',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Viajes',
                    description: 'Agencia de viajes corporativa',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'IT & Innovación',
                    description: 'Soluciones tecnológicas para empresas',
                    icon: '💻',
                    link: '/it'
                  }
                ]
              },
              whyChoose: {
                title: 'Por Qué Elegir Hive Group',
                subtitle: 'Somos su socio de confianza para negocios',
                reasons: [
                  {
                    title: 'Contadores Certificados',
                    description: 'Todos nuestros servicios contables son prestados por contadores certificados.'
                  },
                  {
                    title: 'Agente Autorizado',
                    description: 'Tramitamos documentos oficiales sin necesidad de desplazamiento.'
                  },
                  {
                    title: 'Soluciones Integradas',
                    description: 'Todos los servicios que necesita en un solo lugar.'
                  },
                  {
                    title: 'Experiencia Probada',
                    description: 'Años de experiencia en el mercado portugués.'
                  },
                  {
                    title: 'Servicio Personalizado',
                    description: 'Cada cliente es único y recibe atención dedicada.'
                  },
                  {
                    title: 'Conformidad Legal',
                    description: 'Garantizamos 100% de conformidad con la legislación.'
                  },
                  {
                    title: 'Tecnología Avanzada',
                    description: 'Plataformas digitales para gestión eficiente.'
                  },
                  {
                    title: 'Precios Competitivos',
                    description: 'Calidad premium a precios justos.'
                  }
                ]
              },
              howItWorks: {
                title: 'Cómo Funciona',
                subtitle: 'Proceso simple y transparente',
                steps: [
                  {
                    number: 1,
                    title: 'Reunión Inicial Gratuita',
                    description: 'Conocemos su negocio e identificamos sus necesidades.'
                  },
                  {
                    number: 2,
                    title: 'Propuesta Personalizada',
                    description: 'Presentamos una solución a medida con precios transparentes.'
                  },
                  {
                    number: 3,
                    title: 'Implementación y Soporte',
                    description: 'Comenzamos a trabajar y brindamos soporte continuo.'
                  }
                ]
              },
              featuredServices: {
                title: 'Servicios Destacados',
                subtitle: 'Nuestros servicios más solicitados',
                services: [
                  {
                    title: 'Contabilidad Certificada',
                    description: 'Gestión contable completa con contadores certificados',
                    features: ['Contadores certificados', 'IVA, declaraciones', 'Consultoría fiscal', 'Informes mensuales'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agente Autorizado',
                    description: 'Servicios de la Oficina del Ciudadano',
                    features: ['Certificados', 'Registros', 'Licencias', 'Tarjeta de Ciudadano'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consultoría Financiera',
                    description: 'Planificación financiera estratégica',
                    features: ['Análisis financiero', 'Gestión de tesorería', 'Inversiones', 'Reestructuración'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Preguntas Frecuentes',
                questions: [
                  {
                    question: '¿Qué servicios ofrece Hive Group?',
                    answer: 'Ofrecemos soluciones integradas en 9 áreas: contabilidad, finanzas, crédito, seguros, inmobiliaria, jurídico, marketing, viajes e IT.'
                  },
                  {
                    question: '¿Sus contadores están certificados?',
                    answer: 'Sí, todos nuestros contadores son profesionales certificados.'
                  },
                  {
                    question: '¿Qué es el servicio de Agente Autorizado?',
                    answer: 'Como agentes autorizados, podemos tramitar documentos oficiales (certificados, registros, licencias) sin que necesite desplazarse a servicios públicos.'
                  },
                  {
                    question: '¿Cómo funciona la primera reunión?',
                    answer: 'La primera reunión es gratuita y sin compromiso. Conocemos su negocio y presentamos soluciones personalizadas.'
                  },
                  {
                    question: '¿Con qué tamaño de empresas trabajan?',
                    answer: 'Trabajamos con empresas de todos los tamaños, desde freelancers hasta PYMEs y grandes empresas.'
                  }
                ]
              },
              quickContact: {
                title: 'Contactos Rápidos',
                phone: '+351 212 433 909',
                phoneNote: 'Llamada a red móvil nacional',
                emails: [
                  {
                    department: 'Contabilidad y General',
                    email: 'business@hivegroup.pt'
                  },
                  {
                    department: 'Finanzas',
                    email: 'finance@hivegroup.pt'
                  },
                  {
                    department: 'Jurídico',
                    email: 'legal@hivegroup.pt'
                  },
                  {
                    department: 'Inmobiliaria',
                    email: 'realestate@hivegroup.pt'
                  }
                ]
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
                headline: 'Soluzioni Aziendali Integrate',
                subheadline: 'Contabilità, Finanza, Legale, Immobiliare e molto altro. Tutto in un unico posto.',
                authorizedAgentBadge: {
                  title: 'Agente Autorizzato',
                  subtitle: 'Ufficio del Cittadino',
                  description: 'Gestiamo i documenti ufficiali per te'
                }
              },
              groupHive: {
                title: 'Il Gruppo Hive',
                subtitle: 'Soluzioni integrate in 9 aree di business',
                areas: [
                  {
                    title: 'Contabilità',
                    description: 'Commercialisti certificati al tuo servizio',
                    icon: '📊',
                    link: '/contabilidade'
                  },
                  {
                    title: 'Finanza',
                    description: 'Consulenza finanziaria e pianificazione strategica',
                    icon: '💰',
                    link: '/finance'
                  },
                  {
                    title: 'Credito',
                    description: 'Soluzioni di credito aziendale e personale',
                    icon: '💳',
                    link: '/credit'
                  },
                  {
                    title: 'Assicurazioni',
                    description: 'Assicurazioni su misura per le tue esigenze',
                    icon: '🛡️',
                    link: '/insurance'
                  },
                  {
                    title: 'Immobiliare',
                    description: 'Consulenza e gestione immobiliare completa',
                    icon: '🏢',
                    link: '/real-estate'
                  },
                  {
                    title: 'Legale',
                    description: 'Servizi legali specializzati',
                    icon: '⚖️',
                    link: '/legal'
                  },
                  {
                    title: 'Marketing',
                    description: 'Marketing digitale per il tuo business',
                    icon: '📱',
                    link: '/marketing'
                  },
                  {
                    title: 'Viaggi',
                    description: 'Agenzia di viaggi aziendale',
                    icon: '✈️',
                    link: '/travel'
                  },
                  {
                    title: 'IT & Innovazione',
                    description: 'Soluzioni tecnologiche per aziende',
                    icon: '💻',
                    link: '/it'
                  }
                ]
              },
              whyChoose: {
                title: 'Perché Scegliere Hive Group',
                subtitle: 'Siamo il tuo partner di fiducia per il business',
                reasons: [
                  {
                    title: 'Commercialisti Certificati',
                    description: 'Tutti i nostri servizi contabili sono forniti da commercialisti certificati.'
                  },
                  {
                    title: 'Agente Autorizzato',
                    description: 'Gestiamo documenti ufficiali senza necessità di spostamento.'
                  },
                  {
                    title: 'Soluzioni Integrate',
                    description: 'Tutti i servizi di cui hai bisogno in un unico posto.'
                  },
                  {
                    title: 'Esperienza Comprovata',
                    description: 'Anni di esperienza nel mercato portoghese.'
                  },
                  {
                    title: 'Servizio Personalizzato',
                    description: 'Ogni cliente è unico e riceve attenzione dedicata.'
                  },
                  {
                    title: 'Conformità Legale',
                    description: 'Garantiamo il 100% di conformità con la legislazione.'
                  },
                  {
                    title: 'Tecnologia Avanzata',
                    description: 'Piattaforme digitali per una gestione efficiente.'
                  },
                  {
                    title: 'Prezzi Competitivi',
                    description: 'Qualità premium a prezzi giusti.'
                  }
                ]
              },
              howItWorks: {
                title: 'Come Funziona',
                subtitle: 'Processo semplice e trasparente',
                steps: [
                  {
                    number: 1,
                    title: 'Riunione Iniziale Gratuita',
                    description: 'Conosciamo il tuo business e identifichiamo le tue esigenze.'
                  },
                  {
                    number: 2,
                    title: 'Proposta Personalizzata',
                    description: 'Presentiamo una soluzione su misura con prezzi trasparenti.'
                  },
                  {
                    number: 3,
                    title: 'Implementazione e Supporto',
                    description: 'Iniziamo a lavorare e forniamo supporto continuo.'
                  }
                ]
              },
              featuredServices: {
                title: 'Servizi in Evidenza',
                subtitle: 'I nostri servizi più richiesti',
                services: [
                  {
                    title: 'Contabilità Certificata',
                    description: 'Gestione contabile completa con commercialisti certificati',
                    features: ['Commercialisti certificati', 'IVA, dichiarazioni', 'Consulenza fiscale', 'Report mensili'],
                    icon: '📊',
                    link: '/contabilidade',
                    highlight: true
                  },
                  {
                    title: 'Agente Autorizzato',
                    description: 'Servizi dell\'Ufficio del Cittadino',
                    features: ['Certificati', 'Registrazioni', 'Licenze', 'Carta del Cittadino'],
                    icon: '🏛️',
                    link: '/agente-autorizado',
                    highlight: false
                  },
                  {
                    title: 'Consulenza Finanziaria',
                    description: 'Pianificazione finanziaria strategica',
                    features: ['Analisi finanziaria', 'Gestione tesoreria', 'Investimenti', 'Ristrutturazione'],
                    icon: '💰',
                    link: '/finance',
                    highlight: false
                  }
                ]
              },
              faq: {
                title: 'Domande Frequenti',
                questions: [
                  {
                    question: 'Quali servizi offre Hive Group?',
                    answer: 'Offriamo soluzioni integrate in 9 aree: contabilità, finanza, credito, assicurazioni, immobiliare, legale, marketing, viaggi e IT.'
                  },
                  {
                    question: 'I vostri commercialisti sono certificati?',
                    answer: 'Sì, tutti i nostri commercialisti sono professionisti certificati.'
                  },
                  {
                    question: 'Cos\'è il servizio di Agente Autorizzato?',
                    answer: 'Come agenti autorizzati, possiamo gestire documenti ufficiali (certificati, registrazioni, licenze) senza che tu debba recarti ai servizi pubblici.'
                  },
                  {
                    question: 'Come funziona la prima riunione?',
                    answer: 'La prima riunione è gratuita e senza impegno. Conosciamo il tuo business e presentiamo soluzioni personalizzate.'
                  },
                  {
                    question: 'Con quali dimensioni di aziende lavorate?',
                    answer: 'Lavoriamo con aziende di tutte le dimensioni, dai freelancer alle PMI e grandi aziende.'
                  }
                ]
              },
              quickContact: {
                title: 'Contatti Rapidi',
                phone: '+351 212 433 909',
                phoneNote: 'Chiamata a rete mobile nazionale',
                emails: [
                  {
                    department: 'Contabilità e Generale',
                    email: 'business@hivegroup.pt'
                  },
                  {
                    department: 'Finanza',
                    email: 'finance@hivegroup.pt'
                  },
                  {
                    department: 'Legale',
                    email: 'legal@hivegroup.pt'
                  },
                  {
                    department: 'Immobiliare',
                    email: 'realestate@hivegroup.pt'
                  }
                ]
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
        pt: 'Desenvolvimento de Negócio',
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
                  { area: 'Desenvolvimento de Negócio', email: 'business@hivegroup.pt' },
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
