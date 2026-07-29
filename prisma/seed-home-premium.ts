import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateHomePage() {
  console.log('🌱 Atualizando Home Page Premium com nova estrutura...');

  // Apagar home antiga se existir
  await prisma.page.deleteMany({
    where: { slug: 'home' }
  });

  // Criar nova home premium com estrutura actualizada
  const homePage = await prisma.page.create({
    data: {
      slug: 'home',
      type: 'home',
      published: true,
      translations: {
        create: [
          // ============================================
          // PORTUGUÊS (PT)
          // ============================================
          {
            locale: 'pt',
            title: 'Hive Group Portugal - Contabilidade Certificada & Soluções Empresariais',
            subtitle: 'Hive Finance: contabilidade certificada com acompanhamento trimestral e plataforma integrada de soluções.',
            seoTitle: 'Hive Group Portugal - Hive Finance & Soluções Integradas',
            seoDescription: 'Hive Finance: contabilidade certificada TOC com acompanhamento trimestral. Plataforma integrada de soluções: crédito, seguros, jurídico, marketing, IT e mais.',
            keywordsJson: JSON.stringify(['contabilidade certificada', 'TOC', 'hive finance', 'hive group', 'contabilista', 'portugal', 'finanças empresariais']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Mais do que contabilidade. Uma solução completa para o seu negócio.',
                subheadline: 'Através da Hive Finance, atuamos como contabilista certificado, ajudando empresas a cumprir, organizar e crescer — com acesso a uma plataforma integrada de especialistas em várias áreas.',
                bulletPoints: [
                  'Contabilidade organizada e acompanhamento trimestral',
                  'Apoio financeiro e decisão estratégica',
                  'Acesso a crédito, seguros, jurídico, marketing e IT',
                  'Equipa com mais de 10 profissionais altamente qualificados'
                ]
              },
              hiveFinance: {
                title: 'Hive Finance',
                subtitle: 'O núcleo da nossa atuação',
                description: 'A Hive Finance é o serviço de contabilidade da HIVE Group, baseado num acompanhamento financeiro e de gestão próximo, que garante o cumprimento das obrigações fiscais e legais e uma estrutura organizada para apoiar a tomada de decisão. Mais do que cumprir, trabalhamos ao lado do cliente com acompanhamento contínuo e reuniões trimestrais, alinhando a empresa com objetivos de curto, médio e longo prazo.',
                benefits: [
                  'Contabilidade organizada',
                  'Cumprimento fiscal e legal',
                  'Acompanhamento financeiro',
                  'Reuniões trimestrais'
                ],
                ctaLabel: 'Mudar de contabilista'
              },
              groupHive: {
                title: 'HIVE GROUP',
                subtitle: 'Plataforma de soluções integradas',
                description: 'A HIVE GROUP complementa o serviço de contabilidade com uma plataforma integrada de soluções, através de uma rede de parceiros especializados que permite dar resposta às várias necessidades de empresas e empresários.',
                areas: [
                  { title: 'Hive Credit', description: 'Soluções de crédito', icon: '💳', link: '/credit' },
                  { title: 'Hive Insurance', description: 'Seguros empresariais', icon: '🛡️', link: '/insurance' },
                  { title: 'Hive Legal', description: 'Serviços jurídicos', icon: '⚖️', link: '/legal' },
                  { title: 'Hive IT', description: 'Soluções tecnológicas', icon: '💻', link: '/it' },
                  { title: 'Hive Marketing', description: 'Marketing digital', icon: '📱', link: '/marketing' },
                  { title: 'Hive Real Estate', description: 'Gestão imobiliária', icon: '🏢', link: '/real-estate' },
                  { title: 'Hive Business Dev', description: 'Desenvolvimento negócio', icon: '🚀', link: '/business-development' },
                  { title: 'Hive Care', description: 'Apoio pessoal', icon: '❤️', link: '/care' },
                  { title: 'Hive Travel', description: 'Agência de viagens', icon: '✈️', link: '/travel' },
                  { title: 'Local do Cidadão', description: 'Agente autorizado', icon: '📋', link: '/agente-autorizado' }
                ]
              },
              needBasedNavigation: {
                title: 'Como podemos ajudar o seu negócio?',
                subtitle: 'Selecione a sua necessidade e descubra a solução ideal',
                needs: [
                  { title: 'Criar empresa', description: 'Apoio completo na constituição da sua empresa', services: ['Legal', 'Finance', 'Credit'], href: '/legal', icon: 'buildings' },
                  { title: 'Organizar contabilidade', description: 'Contabilidade certificada com acompanhamento', services: ['Finance'], href: '/contabilidade', icon: 'calculator' },
                  { title: 'Obter financiamento', description: 'Soluções de crédito ajustadas ao seu negócio', services: ['Credit'], href: '/credit', icon: 'currency' },
                  { title: 'Proteger empresa', description: 'Seguros empresariais e pessoais', services: ['Insurance'], href: '/insurance', icon: 'shield' },
                  { title: 'Crescer e atrair clientes', description: 'Marketing digital e desenvolvimento', services: ['Marketing', 'Business Dev'], href: '/marketing', icon: 'trendUp' },
                  { title: 'Investir imobiliário', description: 'Gestão e consultoria imobiliária', services: ['Real Estate'], href: '/real-estate', icon: 'house' }
                ]
              },
              howItWorks: {
                title: 'Um modelo próximo, estruturado e orientado a resultados',
                subtitle: 'Processo simples em 4 passos',
                steps: [
                  { number: 1, title: 'Diagnóstico', description: 'Percebemos o cliente e objetivos' },
                  { number: 2, title: 'Organização', description: 'Implementamos estrutura' },
                  { number: 3, title: 'Acompanhamento', description: 'Apoiamos ao longo do tempo' },
                  { number: 4, title: 'Evolução', description: 'Ajustamos com base em resultados' }
                ],
                highlight: 'Reuniões trimestrais com o cliente'
              },
              whyChoose: {
                title: 'Porque escolher a Hive',
                subtitle: 'As razões que fazem a diferença',
                reasons: [
                  { title: 'Contabilista certificado com acompanhamento real', description: 'TOC certificados com reuniões trimestrais e acompanhamento personalizado.' },
                  { title: 'Equipa experiente e multidisciplinar', description: 'Mais de 10 profissionais especializados em diferentes áreas.' },
                  { title: 'Plataforma de soluções integrada', description: 'Acesso a crédito, seguros, jurídico, marketing, IT e mais num só lugar.' },
                  { title: 'Atendimento personalizado', description: 'Cada cliente tem um gestor dedicado que conhece o seu negócio.' },
                  { title: 'Visão de crescimento do cliente', description: 'Trabalhamos ao seu lado para alcançar objetivos a curto, médio e longo prazo.' }
                ]
              },
              faq: {
                title: 'Perguntas Frequentes',
                questions: [
                  { question: 'A Hive Finance tem contabilistas certificados?', answer: 'Sim, todos os nossos serviços de contabilidade são prestados por Técnicos Oficiais de Contas (TOC) certificados pela Ordem dos Contabilistas Certificados, garantindo conformidade total com a legislação portuguesa.' },
                  { question: 'O que diferencia a Hive Finance de outros contabilistas?', answer: 'Além da contabilidade certificada, oferecemos acompanhamento trimestral com reuniões presenciais ou online, e acesso a uma plataforma integrada de soluções (crédito, seguros, jurídico, marketing, IT) para resolver todas as necessidades do seu negócio.' },
                  { question: 'O que é o Local do Cidadão?', answer: 'É uma entidade certificada (agente autorizado) que pode tratar de documentos oficiais (certidões, registos, autenticações) sem que tenha de se deslocar a serviços públicos. Poupamos o seu tempo tratando de tudo por si.' },
                  { question: 'Que tipo de empresas trabalham convosco?', answer: 'Trabalhamos com empresas de todos os sectores e dimensões: desde empresários em nome individual, PMEs, startups até empresas de maior dimensão. Cada cliente tem uma solução adaptada às suas necessidades.' },
                  { question: 'Como funcionam as reuniões trimestrais?', answer: 'A cada 3 meses reunimos consigo para analisar resultados, ajustar estratégias e alinhar objetivos. É um acompanhamento real, não apenas contabilidade passiva.' }
                ]
              },
              quickContact: {
                title: 'Vamos organizar e fazer crescer o seu negócio',
                description: 'Fale connosco e descubra como podemos ajudar a estruturar a sua empresa e a tomar melhores decisões.',
                phone: '+351 212 433 909',
                phoneNote: 'Chamada para rede móvel nacional',
                whatsapp: '+351212433909',
                emails: [
                  { department: 'Geral', email: 'geral@hivegroup.pt' },
                  { department: 'Finance', email: 'finance@hivegroup.pt' },
                  { department: 'Jurídico', email: 'legal@hivegroup.pt' },
                  { department: 'Imobiliário', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          // ============================================
          // ENGLISH (EN)
          // ============================================
          {
            locale: 'en',
            title: 'Hive Group Portugal - Certified Accounting & Business Solutions',
            subtitle: 'Hive Finance: certified accounting with quarterly follow-up and integrated solutions platform.',
            seoTitle: 'Hive Group Portugal - Hive Finance & Integrated Solutions',
            seoDescription: 'Hive Finance: certified TOC accounting with quarterly follow-up. Integrated solutions platform: credit, insurance, legal, marketing, IT and more.',
            keywordsJson: JSON.stringify(['certified accounting', 'chartered accountant', 'hive finance', 'hive group', 'portugal', 'business finance']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'More than accounting. A complete solution for your business.',
                subheadline: 'Through Hive Finance, we act as certified accountants, helping companies comply, organise and grow — with access to an integrated platform of specialists in various areas.',
                bulletPoints: [
                  'Organised accounting and quarterly follow-up',
                  'Financial support and strategic decision-making',
                  'Access to credit, insurance, legal, marketing and IT',
                  'Team of over 10 highly qualified professionals'
                ]
              },
              hiveFinance: {
                title: 'Hive Finance',
                subtitle: 'The core of our operation',
                description: 'Hive Finance is the accounting service of HIVE Group, based on close financial and management monitoring, ensuring compliance with tax and legal obligations and an organised structure to support decision-making. More than just compliance, we work alongside the client with continuous monitoring and quarterly meetings, aligning the company with short, medium and long-term objectives.',
                benefits: [
                  'Organised accounting',
                  'Tax and legal compliance',
                  'Financial monitoring',
                  'Quarterly meetings'
                ],
                ctaLabel: 'Switch accountant'
              },
              groupHive: {
                title: 'HIVE GROUP',
                subtitle: 'Integrated solutions platform',
                description: 'HIVE GROUP complements the accounting service with an integrated solutions platform, through a network of specialised partners that responds to the various needs of companies and entrepreneurs.',
                areas: [
                  { title: 'Hive Credit', description: 'Credit solutions', icon: '💳', link: '/credit' },
                  { title: 'Hive Insurance', description: 'Business insurance', icon: '🛡️', link: '/insurance' },
                  { title: 'Hive Legal', description: 'Legal services', icon: '⚖️', link: '/legal' },
                  { title: 'Hive IT', description: 'Technology solutions', icon: '💻', link: '/it' },
                  { title: 'Hive Marketing', description: 'Digital marketing', icon: '📱', link: '/marketing' },
                  { title: 'Hive Real Estate', description: 'Property management', icon: '🏢', link: '/real-estate' },
                  { title: 'Hive Business Dev', description: 'Business development', icon: '🚀', link: '/business-development' },
                  { title: 'Hive Care', description: 'Personal support', icon: '❤️', link: '/care' },
                  { title: 'Hive Travel', description: 'Travel agency', icon: '✈️', link: '/travel' },
                  { title: "Citizen's Office", description: 'Authorised agent', icon: '📋', link: '/agente-autorizado' }
                ]
              },
              needBasedNavigation: {
                title: 'How can we help your business?',
                subtitle: 'Select your need and discover the ideal solution',
                needs: [
                  { title: 'Start a company', description: 'Complete support in setting up your company', services: ['Legal', 'Finance', 'Credit'], href: '/legal', icon: 'buildings' },
                  { title: 'Organise accounting', description: 'Certified accounting with monitoring', services: ['Finance'], href: '/contabilidade', icon: 'calculator' },
                  { title: 'Get financing', description: 'Credit solutions tailored to your business', services: ['Credit'], href: '/credit', icon: 'currency' },
                  { title: 'Protect company', description: 'Business and personal insurance', services: ['Insurance'], href: '/insurance', icon: 'shield' },
                  { title: 'Grow and attract clients', description: 'Digital marketing and development', services: ['Marketing', 'Business Dev'], href: '/marketing', icon: 'trendUp' },
                  { title: 'Real estate investment', description: 'Property management and consultancy', services: ['Real Estate'], href: '/real-estate', icon: 'house' }
                ]
              },
              howItWorks: {
                title: 'A close, structured and results-oriented model',
                subtitle: 'Simple 4-step process',
                steps: [
                  { number: 1, title: 'Diagnosis', description: 'We understand the client and objectives' },
                  { number: 2, title: 'Organisation', description: 'We implement structure' },
                  { number: 3, title: 'Monitoring', description: 'We support over time' },
                  { number: 4, title: 'Evolution', description: 'We adjust based on results' }
                ],
                highlight: 'Quarterly meetings with the client'
              },
              whyChoose: {
                title: 'Why choose Hive',
                subtitle: 'The reasons that make the difference',
                reasons: [
                  { title: 'Certified accountant with real monitoring', description: 'Certified TOCs with quarterly meetings and personalised follow-up.' },
                  { title: 'Experienced and multidisciplinary team', description: 'Over 10 professionals specialised in different areas.' },
                  { title: 'Integrated solutions platform', description: 'Access to credit, insurance, legal, marketing, IT and more in one place.' },
                  { title: 'Personalised service', description: 'Each client has a dedicated manager who knows their business.' },
                  { title: 'Client growth vision', description: 'We work alongside you to achieve short, medium and long-term goals.' }
                ]
              },
              faq: {
                title: 'Frequently Asked Questions',
                questions: [
                  { question: 'Does Hive Finance have certified accountants?', answer: 'Yes, all our accounting services are provided by Official Chartered Accountants (TOC) certified by the Portuguese Order of Chartered Accountants, ensuring full compliance with Portuguese legislation.' },
                  { question: 'What sets Hive Finance apart from other accountants?', answer: 'Beyond certified accounting, we offer quarterly follow-up with in-person or online meetings, and access to an integrated solutions platform (credit, insurance, legal, marketing, IT) to address all your business needs.' },
                  { question: "What is the Citizen's Office?", answer: 'It is a certified entity (authorised agent) that can handle official documents (certificates, registrations, authentications) without you having to travel to public services. We save your time by handling everything for you.' },
                  { question: 'What type of companies work with you?', answer: 'We work with companies across all sectors and sizes: from sole traders, SMEs, startups to larger companies. Each client has a solution tailored to their needs.' },
                  { question: 'How do quarterly meetings work?', answer: 'Every 3 months we meet with you to analyse results, adjust strategies and align objectives. It is real monitoring, not just passive accounting.' }
                ]
              },
              quickContact: {
                title: "Let's organise and grow your business",
                description: 'Talk to us and discover how we can help structure your company and make better decisions.',
                phone: '+351 212 433 909',
                phoneNote: 'Call to national mobile network',
                whatsapp: '+351212433909',
                emails: [
                  { department: 'General', email: 'geral@hivegroup.pt' },
                  { department: 'Finance', email: 'finance@hivegroup.pt' },
                  { department: 'Legal', email: 'legal@hivegroup.pt' },
                  { department: 'Real Estate', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          // ============================================
          // FRANÇAIS (FR)
          // ============================================
          {
            locale: 'fr',
            title: 'Hive Group Portugal - Comptabilité Certifiée & Solutions Professionnelles',
            subtitle: 'Hive Finance: comptabilité certifiée avec suivi trimestriel et plateforme de solutions intégrées.',
            seoTitle: 'Hive Group Portugal - Hive Finance & Solutions Intégrées',
            seoDescription: 'Hive Finance: comptabilité certifiée TOC avec suivi trimestriel. Plateforme de solutions intégrées: crédit, assurance, juridique, marketing, IT et plus.',
            keywordsJson: JSON.stringify(['comptabilité certifiée', 'expert-comptable', 'hive finance', 'hive group', 'portugal', 'finance entreprise']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: "Plus que de la comptabilité. Une solution complète pour votre entreprise.",
                subheadline: "Grâce à Hive Finance, nous agissons en tant que comptable certifié, aidant les entreprises à se conformer, s'organiser et croître — avec accès à une plateforme intégrée de spécialistes dans divers domaines.",
                bulletPoints: [
                  'Comptabilité organisée et suivi trimestriel',
                  'Support financier et prise de décision stratégique',
                  'Accès au crédit, assurance, juridique, marketing et IT',
                  'Équipe de plus de 10 professionnels hautement qualifiés'
                ]
              },
              hiveFinance: {
                title: 'Hive Finance',
                subtitle: 'Le cœur de notre activité',
                description: "Hive Finance est le service comptable de HIVE Group, basé sur un suivi financier et de gestion proche, garantissant le respect des obligations fiscales et légales et une structure organisée pour soutenir la prise de décision. Plus que la simple conformité, nous travaillons aux côtés du client avec un suivi continu et des réunions trimestrielles.",
                benefits: [
                  'Comptabilité organisée',
                  'Conformité fiscale et légale',
                  'Suivi financier',
                  'Réunions trimestrielles'
                ],
                ctaLabel: 'Changer de comptable'
              },
              groupHive: {
                title: 'HIVE GROUP',
                subtitle: 'Plateforme de solutions intégrées',
                description: "HIVE GROUP complète le service comptable avec une plateforme de solutions intégrées, à travers un réseau de partenaires spécialisés répondant aux besoins des entreprises et entrepreneurs.",
                areas: [
                  { title: 'Hive Credit', description: 'Solutions de crédit', icon: '💳', link: '/credit' },
                  { title: 'Hive Insurance', description: 'Assurances professionnelles', icon: '🛡️', link: '/insurance' },
                  { title: 'Hive Legal', description: 'Services juridiques', icon: '⚖️', link: '/legal' },
                  { title: 'Hive IT', description: 'Solutions technologiques', icon: '💻', link: '/it' },
                  { title: 'Hive Marketing', description: 'Marketing digital', icon: '📱', link: '/marketing' },
                  { title: 'Hive Real Estate', description: 'Gestion immobilière', icon: '🏢', link: '/real-estate' },
                  { title: 'Hive Business Dev', description: 'Développement commercial', icon: '🚀', link: '/business-development' },
                  { title: 'Hive Care', description: 'Support personnel', icon: '❤️', link: '/care' },
                  { title: 'Hive Travel', description: 'Agence de voyages', icon: '✈️', link: '/travel' },
                  { title: 'Bureau du Citoyen', description: 'Agent autorisé', icon: '📋', link: '/agente-autorizado' }
                ]
              },
              needBasedNavigation: {
                title: 'Comment pouvons-nous aider votre entreprise?',
                subtitle: 'Sélectionnez votre besoin et découvrez la solution idéale',
                needs: [
                  { title: 'Créer une entreprise', description: 'Accompagnement complet dans la création', services: ['Legal', 'Finance', 'Credit'], href: '/legal', icon: 'buildings' },
                  { title: 'Organiser la comptabilité', description: 'Comptabilité certifiée avec suivi', services: ['Finance'], href: '/contabilidade', icon: 'calculator' },
                  { title: 'Obtenir un financement', description: 'Solutions de crédit adaptées', services: ['Credit'], href: '/credit', icon: 'currency' },
                  { title: "Protéger l'entreprise", description: 'Assurances professionnelles et personnelles', services: ['Insurance'], href: '/insurance', icon: 'shield' },
                  { title: 'Croître et attirer des clients', description: 'Marketing digital et développement', services: ['Marketing', 'Business Dev'], href: '/marketing', icon: 'trendUp' },
                  { title: 'Investir dans l\'immobilier', description: 'Gestion et conseil immobilier', services: ['Real Estate'], href: '/real-estate', icon: 'house' }
                ]
              },
              howItWorks: {
                title: 'Un modèle proche, structuré et orienté résultats',
                subtitle: 'Processus simple en 4 étapes',
                steps: [
                  { number: 1, title: 'Diagnostic', description: 'Nous comprenons le client et les objectifs' },
                  { number: 2, title: 'Organisation', description: 'Nous implémentons la structure' },
                  { number: 3, title: 'Suivi', description: 'Nous accompagnons dans le temps' },
                  { number: 4, title: 'Évolution', description: 'Nous ajustons selon les résultats' }
                ],
                highlight: 'Réunions trimestrielles avec le client'
              },
              whyChoose: {
                title: 'Pourquoi choisir Hive',
                subtitle: 'Les raisons qui font la différence',
                reasons: [
                  { title: 'Comptable certifié avec suivi réel', description: 'Experts-comptables certifiés avec réunions trimestrielles et suivi personnalisé.' },
                  { title: 'Équipe expérimentée et multidisciplinaire', description: 'Plus de 10 professionnels spécialisés dans différents domaines.' },
                  { title: 'Plateforme de solutions intégrée', description: 'Accès au crédit, assurance, juridique, marketing, IT et plus en un seul endroit.' },
                  { title: 'Service personnalisé', description: 'Chaque client a un gestionnaire dédié qui connaît son entreprise.' },
                  { title: 'Vision de croissance du client', description: 'Nous travaillons à vos côtés pour atteindre vos objectifs.' }
                ]
              },
              faq: {
                title: 'Questions Fréquentes',
                questions: [
                  { question: 'Hive Finance a-t-elle des comptables certifiés?', answer: "Oui, tous nos services sont fournis par des experts-comptables certifiés, garantissant la conformité totale avec la législation portugaise." },
                  { question: "Qu'est-ce qui différencie Hive Finance des autres comptables?", answer: "Au-delà de la comptabilité certifiée, nous offrons un suivi trimestriel avec réunions et accès à une plateforme de solutions intégrées." },
                  { question: "Qu'est-ce que le Bureau du Citoyen?", answer: "C'est une entité certifiée qui traite les documents officiels sans que vous ayez à vous déplacer." },
                  { question: "Quel type d'entreprises travaillent avec vous?", answer: "Toutes tailles et secteurs: indépendants, PME, startups, grandes entreprises." },
                  { question: 'Comment fonctionnent les réunions trimestrielles?', answer: 'Tous les 3 mois nous nous réunissons pour analyser les résultats et ajuster les stratégies.' }
                ]
              },
              quickContact: {
                title: 'Organisons et faisons croître votre entreprise',
                description: 'Parlez-nous et découvrez comment nous pouvons aider à structurer votre entreprise.',
                phone: '+351 212 433 909',
                phoneNote: 'Appel vers réseau mobile national',
                whatsapp: '+351212433909',
                emails: [
                  { department: 'Général', email: 'geral@hivegroup.pt' },
                  { department: 'Finance', email: 'finance@hivegroup.pt' },
                  { department: 'Juridique', email: 'legal@hivegroup.pt' },
                  { department: 'Immobilier', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          // ============================================
          // ESPAÑOL (ES)
          // ============================================
          {
            locale: 'es',
            title: 'Hive Group Portugal - Contabilidad Certificada & Soluciones Empresariales',
            subtitle: 'Hive Finance: contabilidad certificada con seguimiento trimestral y plataforma de soluciones integradas.',
            seoTitle: 'Hive Group Portugal - Hive Finance & Soluciones Integradas',
            seoDescription: 'Hive Finance: contabilidad certificada TOC con seguimiento trimestral. Plataforma de soluciones integradas: crédito, seguros, jurídico, marketing, IT y más.',
            keywordsJson: JSON.stringify(['contabilidad certificada', 'contador', 'hive finance', 'hive group', 'portugal', 'finanzas empresariales']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Más que contabilidad. Una solución completa para su negocio.',
                subheadline: 'A través de Hive Finance, actuamos como contador certificado, ayudando a empresas a cumplir, organizar y crecer — con acceso a una plataforma integrada de especialistas en diversas áreas.',
                bulletPoints: [
                  'Contabilidad organizada y seguimiento trimestral',
                  'Apoyo financiero y toma de decisiones estratégica',
                  'Acceso a crédito, seguros, jurídico, marketing e IT',
                  'Equipo de más de 10 profesionales altamente cualificados'
                ]
              },
              hiveFinance: {
                title: 'Hive Finance',
                subtitle: 'El núcleo de nuestra actuación',
                description: 'Hive Finance es el servicio de contabilidad de HIVE Group, basado en un seguimiento financiero y de gestión cercano, garantizando el cumplimiento de obligaciones fiscales y legales y una estructura organizada para apoyar la toma de decisiones. Más que cumplir, trabajamos junto al cliente con seguimiento continuo y reuniones trimestrales.',
                benefits: [
                  'Contabilidad organizada',
                  'Cumplimiento fiscal y legal',
                  'Seguimiento financiero',
                  'Reuniones trimestrales'
                ],
                ctaLabel: 'Cambiar de contador'
              },
              groupHive: {
                title: 'HIVE GROUP',
                subtitle: 'Plataforma de soluciones integradas',
                description: 'HIVE GROUP complementa el servicio de contabilidad con una plataforma de soluciones integradas, a través de una red de socios especializados que responde a las necesidades de empresas y empresarios.',
                areas: [
                  { title: 'Hive Credit', description: 'Soluciones de crédito', icon: '💳', link: '/credit' },
                  { title: 'Hive Insurance', description: 'Seguros empresariales', icon: '🛡️', link: '/insurance' },
                  { title: 'Hive Legal', description: 'Servicios jurídicos', icon: '⚖️', link: '/legal' },
                  { title: 'Hive IT', description: 'Soluciones tecnológicas', icon: '💻', link: '/it' },
                  { title: 'Hive Marketing', description: 'Marketing digital', icon: '📱', link: '/marketing' },
                  { title: 'Hive Real Estate', description: 'Gestión inmobiliaria', icon: '🏢', link: '/real-estate' },
                  { title: 'Hive Business Dev', description: 'Desarrollo de negocio', icon: '🚀', link: '/business-development' },
                  { title: 'Hive Care', description: 'Apoyo personal', icon: '❤️', link: '/care' },
                  { title: 'Hive Travel', description: 'Agencia de viajes', icon: '✈️', link: '/travel' },
                  { title: 'Oficina del Ciudadano', description: 'Agente autorizado', icon: '📋', link: '/agente-autorizado' }
                ]
              },
              needBasedNavigation: {
                title: '¿Cómo podemos ayudar a su negocio?',
                subtitle: 'Seleccione su necesidad y descubra la solución ideal',
                needs: [
                  { title: 'Crear empresa', description: 'Apoyo completo en la constitución', services: ['Legal', 'Finance', 'Credit'], href: '/legal', icon: 'buildings' },
                  { title: 'Organizar contabilidad', description: 'Contabilidad certificada con seguimiento', services: ['Finance'], href: '/contabilidade', icon: 'calculator' },
                  { title: 'Obtener financiamiento', description: 'Soluciones de crédito ajustadas', services: ['Credit'], href: '/credit', icon: 'currency' },
                  { title: 'Proteger empresa', description: 'Seguros empresariales y personales', services: ['Insurance'], href: '/insurance', icon: 'shield' },
                  { title: 'Crecer y atraer clientes', description: 'Marketing digital y desarrollo', services: ['Marketing', 'Business Dev'], href: '/marketing', icon: 'trendUp' },
                  { title: 'Invertir inmobiliario', description: 'Gestión y consultoría inmobiliaria', services: ['Real Estate'], href: '/real-estate', icon: 'house' }
                ]
              },
              howItWorks: {
                title: 'Un modelo cercano, estructurado y orientado a resultados',
                subtitle: 'Proceso simple en 4 pasos',
                steps: [
                  { number: 1, title: 'Diagnóstico', description: 'Entendemos al cliente y objetivos' },
                  { number: 2, title: 'Organización', description: 'Implementamos estructura' },
                  { number: 3, title: 'Seguimiento', description: 'Apoyamos a lo largo del tiempo' },
                  { number: 4, title: 'Evolución', description: 'Ajustamos según resultados' }
                ],
                highlight: 'Reuniones trimestrales con el cliente'
              },
              whyChoose: {
                title: 'Por qué elegir Hive',
                subtitle: 'Las razones que hacen la diferencia',
                reasons: [
                  { title: 'Contador certificado con seguimiento real', description: 'Contadores certificados con reuniones trimestrales y seguimiento personalizado.' },
                  { title: 'Equipo experimentado y multidisciplinar', description: 'Más de 10 profesionales especializados en diferentes áreas.' },
                  { title: 'Plataforma de soluciones integrada', description: 'Acceso a crédito, seguros, jurídico, marketing, IT y más en un solo lugar.' },
                  { title: 'Atención personalizada', description: 'Cada cliente tiene un gestor dedicado que conoce su negocio.' },
                  { title: 'Visión de crecimiento del cliente', description: 'Trabajamos a su lado para alcanzar objetivos.' }
                ]
              },
              faq: {
                title: 'Preguntas Frecuentes',
                questions: [
                  { question: '¿Hive Finance tiene contadores certificados?', answer: 'Sí, todos nuestros servicios son prestados por contadores certificados, garantizando conformidad total con la legislación portuguesa.' },
                  { question: '¿Qué diferencia a Hive Finance de otros contadores?', answer: 'Además de contabilidad certificada, ofrecemos seguimiento trimestral con reuniones y acceso a una plataforma de soluciones integradas.' },
                  { question: '¿Qué es la Oficina del Ciudadano?', answer: 'Es una entidad certificada que tramita documentos oficiales sin que tenga que desplazarse.' },
                  { question: '¿Qué tipo de empresas trabajan con ustedes?', answer: 'Todos los tamaños y sectores: autónomos, PYMES, startups, grandes empresas.' },
                  { question: '¿Cómo funcionan las reuniones trimestrales?', answer: 'Cada 3 meses nos reunimos para analizar resultados y ajustar estrategias.' }
                ]
              },
              quickContact: {
                title: 'Organicemos y hagamos crecer su negocio',
                description: 'Hable con nosotros y descubra cómo podemos ayudar a estructurar su empresa.',
                phone: '+351 212 433 909',
                phoneNote: 'Llamada a red móvil nacional',
                whatsapp: '+351212433909',
                emails: [
                  { department: 'General', email: 'geral@hivegroup.pt' },
                  { department: 'Finanzas', email: 'finance@hivegroup.pt' },
                  { department: 'Jurídico', email: 'legal@hivegroup.pt' },
                  { department: 'Inmobiliaria', email: 'realestate@hivegroup.pt' }
                ]
              }
            })
          },
          // ============================================
          // ITALIANO (IT)
          // ============================================
          {
            locale: 'it',
            title: 'Hive Group Portogallo - Contabilità Certificata & Soluzioni Aziendali',
            subtitle: 'Hive Finance: contabilità certificata con monitoraggio trimestrale e piattaforma di soluzioni integrate.',
            seoTitle: 'Hive Group Portogallo - Hive Finance & Soluzioni Integrate',
            seoDescription: 'Hive Finance: contabilità certificata TOC con monitoraggio trimestrale. Piattaforma di soluzioni integrate: credito, assicurazione, legale, marketing, IT e altro.',
            keywordsJson: JSON.stringify(['contabilità certificata', 'commercialista', 'hive finance', 'hive group', 'portogallo', 'finanza aziendale']),
            sectionsJson: JSON.stringify({
              hero: {
                headline: 'Più che contabilità. Una soluzione completa per la tua azienda.',
                subheadline: 'Attraverso Hive Finance, agiamo come commercialisti certificati, aiutando le aziende a conformarsi, organizzarsi e crescere — con accesso a una piattaforma integrata di specialisti in varie aree.',
                bulletPoints: [
                  'Contabilità organizzata e monitoraggio trimestrale',
                  'Supporto finanziario e decisioni strategiche',
                  'Accesso a credito, assicurazione, legale, marketing e IT',
                  'Team di oltre 10 professionisti altamente qualificati'
                ]
              },
              hiveFinance: {
                title: 'Hive Finance',
                subtitle: 'Il cuore della nostra attività',
                description: "Hive Finance è il servizio di contabilità di HIVE Group, basato su un monitoraggio finanziario e gestionale ravvicinato, garantendo il rispetto degli obblighi fiscali e legali e una struttura organizzata per supportare le decisioni. Più che conformità, lavoriamo al fianco del cliente con monitoraggio continuo e riunioni trimestrali.",
                benefits: [
                  'Contabilità organizzata',
                  'Conformità fiscale e legale',
                  'Monitoraggio finanziario',
                  'Riunioni trimestrali'
                ],
                ctaLabel: 'Cambiare commercialista'
              },
              groupHive: {
                title: 'HIVE GROUP',
                subtitle: 'Piattaforma di soluzioni integrate',
                description: 'HIVE GROUP completa il servizio di contabilità con una piattaforma di soluzioni integrate, attraverso una rete di partner specializzati che risponde alle esigenze di aziende e imprenditori.',
                areas: [
                  { title: 'Hive Credit', description: 'Soluzioni di credito', icon: '💳', link: '/credit' },
                  { title: 'Hive Insurance', description: 'Assicurazioni aziendali', icon: '🛡️', link: '/insurance' },
                  { title: 'Hive Legal', description: 'Servizi legali', icon: '⚖️', link: '/legal' },
                  { title: 'Hive IT', description: 'Soluzioni tecnologiche', icon: '💻', link: '/it' },
                  { title: 'Hive Marketing', description: 'Marketing digitale', icon: '📱', link: '/marketing' },
                  { title: 'Hive Real Estate', description: 'Gestione immobiliare', icon: '🏢', link: '/real-estate' },
                  { title: 'Hive Business Dev', description: 'Sviluppo business', icon: '🚀', link: '/business-development' },
                  { title: 'Hive Care', description: 'Supporto personale', icon: '❤️', link: '/care' },
                  { title: 'Hive Travel', description: 'Agenzia viaggi', icon: '✈️', link: '/travel' },
                  { title: 'Ufficio del Cittadino', description: 'Agente autorizzato', icon: '📋', link: '/agente-autorizado' }
                ]
              },
              needBasedNavigation: {
                title: 'Come possiamo aiutare la tua azienda?',
                subtitle: 'Seleziona la tua esigenza e scopri la soluzione ideale',
                needs: [
                  { title: 'Creare azienda', description: 'Supporto completo nella costituzione', services: ['Legal', 'Finance', 'Credit'], href: '/legal', icon: 'buildings' },
                  { title: 'Organizzare contabilità', description: 'Contabilità certificata con monitoraggio', services: ['Finance'], href: '/contabilidade', icon: 'calculator' },
                  { title: 'Ottenere finanziamento', description: 'Soluzioni di credito su misura', services: ['Credit'], href: '/credit', icon: 'currency' },
                  { title: 'Proteggere azienda', description: 'Assicurazioni aziendali e personali', services: ['Insurance'], href: '/insurance', icon: 'shield' },
                  { title: 'Crescere e attrarre clienti', description: 'Marketing digitale e sviluppo', services: ['Marketing', 'Business Dev'], href: '/marketing', icon: 'trendUp' },
                  { title: 'Investire immobiliare', description: 'Gestione e consulenza immobiliare', services: ['Real Estate'], href: '/real-estate', icon: 'house' }
                ]
              },
              howItWorks: {
                title: 'Un modello vicino, strutturato e orientato ai risultati',
                subtitle: 'Processo semplice in 4 passi',
                steps: [
                  { number: 1, title: 'Diagnosi', description: 'Comprendiamo il cliente e gli obiettivi' },
                  { number: 2, title: 'Organizzazione', description: 'Implementiamo la struttura' },
                  { number: 3, title: 'Monitoraggio', description: 'Supportiamo nel tempo' },
                  { number: 4, title: 'Evoluzione', description: 'Adattiamo in base ai risultati' }
                ],
                highlight: 'Riunioni trimestrali con il cliente'
              },
              whyChoose: {
                title: 'Perché scegliere Hive',
                subtitle: 'Le ragioni che fanno la differenza',
                reasons: [
                  { title: 'Commercialista certificato con monitoraggio reale', description: 'Commercialisti certificati con riunioni trimestrali e monitoraggio personalizzato.' },
                  { title: 'Team esperto e multidisciplinare', description: 'Oltre 10 professionisti specializzati in diverse aree.' },
                  { title: 'Piattaforma di soluzioni integrata', description: 'Accesso a credito, assicurazione, legale, marketing, IT e altro in un unico posto.' },
                  { title: 'Servizio personalizzato', description: 'Ogni cliente ha un gestore dedicato che conosce la sua azienda.' },
                  { title: 'Visione di crescita del cliente', description: 'Lavoriamo al tuo fianco per raggiungere gli obiettivi.' }
                ]
              },
              faq: {
                title: 'Domande Frequenti',
                questions: [
                  { question: 'Hive Finance ha commercialisti certificati?', answer: 'Sì, tutti i nostri servizi sono forniti da commercialisti certificati, garantendo conformità totale con la legislazione portoghese.' },
                  { question: 'Cosa differenzia Hive Finance dagli altri commercialisti?', answer: 'Oltre alla contabilità certificata, offriamo monitoraggio trimestrale con riunioni e accesso a una piattaforma di soluzioni integrate.' },
                  { question: "Cos'è l'Ufficio del Cittadino?", answer: "È un'entità certificata che gestisce documenti ufficiali senza che tu debba spostarti." },
                  { question: 'Che tipo di aziende lavorano con voi?', answer: 'Tutte le dimensioni e settori: autonomi, PMI, startup, grandi aziende.' },
                  { question: 'Come funzionano le riunioni trimestrali?', answer: 'Ogni 3 mesi ci incontriamo per analizzare i risultati e adattare le strategie.' }
                ]
              },
              quickContact: {
                title: 'Organizziamo e facciamo crescere la tua azienda',
                description: 'Parlaci e scopri come possiamo aiutare a strutturare la tua azienda.',
                phone: '+351 212 433 909',
                phoneNote: 'Chiamata a rete mobile nazionale',
                whatsapp: '+351212433909',
                emails: [
                  { department: 'Generale', email: 'geral@hivegroup.pt' },
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

  console.log('✅ Home Page Premium atualizada com nova estrutura em 5 idiomas!');
  console.log('   - PT: Português');
  console.log('   - EN: English');
  console.log('   - FR: Français');
  console.log('   - ES: Español');
  console.log('   - IT: Italiano');
}

updateHomePage()
  .catch((e) => {
    console.error('❌ Erro ao atualizar home:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
