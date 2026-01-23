import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Criando TODAS as páginas (12) com conteúdo completo em 5 idiomas...');

  // Apagar páginas antigas (exceto home)
  await prisma.page.deleteMany({
    where: { slug: { not: 'home' } }
  });

  const pages = [
    // 1. CONTABILIDADE
    {
      slug: 'contabilidade',
      type: 'service',
      translations: [
        {
          locale: 'pt',
          title: 'Contabilidade Certificada TOC',
          subtitle: 'Gestão contabilística completa por técnicos certificados',
          seoTitle: 'Contabilidade Certificada TOC - Hive Group Portugal',
          seoDescription: 'Contabilidade certificada por TOC. IVA, IRS, IRC, fecho de contas. Conformidade fiscal garantida.',
          keywordsJson: JSON.stringify(['contabilidade certificada', 'TOC', 'IVA IRS IRC', 'fecho contas', 'contabilista', 'fiscal']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'TOC Certificados', description: 'Técnicos Oficiais de Contas certificados pela Ordem.' },
              { title: 'Prazos Garantidos', description: 'Todas as declarações entregues dentro do prazo legal.' },
              { title: 'Portal Online', description: 'Acesso 24/7 aos seus documentos e relatórios.' },
              { title: 'Gestor Dedicado', description: 'Contabilista dedicado que conhece o seu negócio.' },
              { title: 'Optimização Fiscal', description: 'Aproveitamos todos os benefícios fiscais legais.' },
              { title: 'Relatórios Claros', description: 'Relatórios mensais em linguagem clara.' }
            ],
            servicesIncluded: ['IVA mensal', 'IRS', 'IRC', 'Fecho anual', 'IES', 'Certificação', 'Apoio AT', 'Reconciliações', 'Portal online', 'Relatórios mensais'],
            whoItsFor: [
              { title: 'ENI', description: 'Empresários em nome individual.' },
              { title: 'PMEs', description: 'Pequenas e médias empresas.' },
              { title: 'Empresas', description: 'Empresas estabelecidas.' }
            ],
            processSteps: [
              { number: 1, title: 'Análise', description: 'Avaliamos a situação contabilística actual.' },
              { number: 2, title: 'Implementação', description: 'Regularizamos e implementamos sistemas.' },
              { number: 3, title: 'Gestão', description: 'Processamento mensal contínuo.' }
            ],
            faq: [
              { question: 'São certificados?', answer: 'Sim, todos TOC certificados.' },
              { question: 'Que documentos preciso?', answer: 'Facturas, recibos, extractos bancários.' },
              { question: 'Como funciona o IVA?', answer: 'Processamento mensal automático.' },
              { question: 'Apoio em inspecções?', answer: 'Sim, acompanhamos todo o processo.' },
              { question: 'Portal online?', answer: 'Sim, acesso 24/7 a documentos.' }
            ],
            finalCtaTitle: 'Contabilidade em Dia?',
            finalCtaSubtitle: 'Marque reunião gratuita.',
            formMicrocopy: { nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone', companyLabel: 'Empresa', messageLabel: 'Mensagem', submitButton: 'Contactar', successMessage: 'Obrigado!', errorMessage: 'Erro. Tente: business@hivegroup.pt' }
          })
        },
        {
          locale: 'en',
          title: 'Certified TOC Accounting',
          subtitle: 'Complete accounting by certified professionals',
          seoTitle: 'Certified TOC Accounting - Hive Group Portugal',
          seoDescription: 'Certified accounting by chartered accountants. VAT, tax returns, annual closing. Guaranteed compliance.',
          keywordsJson: JSON.stringify(['certified accounting', 'chartered accountant', 'VAT returns', 'annual accounts', 'accountant', 'tax']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Certified Accountants', description: 'Official chartered accountants.' },
              { title: 'Guaranteed Deadlines', description: 'All declarations submitted on time.' },
              { title: 'Online Portal', description: '24/7 access to documents and reports.' },
              { title: 'Dedicated Manager', description: 'Accountant who knows your business.' },
              { title: 'Tax Optimisation', description: 'We leverage all legal tax benefits.' },
              { title: 'Clear Reports', description: 'Monthly reports in plain language.' }
            ],
            servicesIncluded: ['Monthly VAT', 'Tax returns', 'Corporate tax', 'Annual closing', 'Business info', 'Certification', 'Tax support', 'Reconciliations', 'Online portal', 'Monthly reports'],
            whoItsFor: [
              { title: 'Sole Traders', description: 'Self-employed professionals.' },
              { title: 'SMEs', description: 'Small and medium businesses.' },
              { title: 'Companies', description: 'Established companies.' }
            ],
            processSteps: [
              { number: 1, title: 'Analysis', description: 'We assess current accounting situation.' },
              { number: 2, title: 'Implementation', description: 'We regularise and implement systems.' },
              { number: 3, title: 'Management', description: 'Continuous monthly processing.' }
            ],
            faq: [
              { question: 'Are they certified?', answer: 'Yes, all chartered accountants.' },
              { question: 'What documents needed?', answer: 'Invoices, receipts, bank statements.' },
              { question: 'How does VAT work?', answer: 'Automatic monthly processing.' },
              { question: 'Support in inspections?', answer: 'Yes, we support the entire process.' },
              { question: 'Online portal?', answer: 'Yes, 24/7 access to documents.' }
            ],
            finalCtaTitle: 'Accounting Up to Date?',
            finalCtaSubtitle: 'Book free meeting.',
            formMicrocopy: { nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', companyLabel: 'Company', messageLabel: 'Message', submitButton: 'Contact', successMessage: 'Thank you!', errorMessage: 'Error. Try: business@hivegroup.pt' }
          })
        }
      ]
    },

    // 2. AGENTE AUTORIZADO
    {
      slug: 'agente-autorizado',
      type: 'service',
      translations: [
        {
          locale: 'pt',
          title: 'Agente Autorizado - Local do Cidadão',
          subtitle: 'Este é o seu Local! Documentação Automóvel, Renovação da Carta de Condução, Serviços Públicos sem deslocações.',
          seoTitle: 'Agente Autorizado Local Cidadão - Hive Group Portugal',
          seoDescription: 'Agente autorizado certificado. Documentação automóvel, carta condução, certidões. Ref: localdocidadao.pt',
          keywordsJson: JSON.stringify(['agente autorizado', 'local cidadão', 'documentação automóvel', 'carta condução', 'certidões', 'localdocidadao']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Este é o seu Local!', description: 'Agente autorizado certificado. Poupamos o seu tempo.' },
              { title: 'Documentação Automóvel', description: 'Registos, transferências, duplicados.' },
              { title: 'Renovação Carta Condução', description: 'Renovação rápida da carta.' },
              { title: 'Serviço Documentação', description: 'Certidões, autenticações, apostilhas.' },
              { title: 'Alarmes, Telecom, Energias', description: 'Apoio na contratação de serviços.' },
              { title: 'Cartão Combustível', description: 'Pedido e gestão de cartões frota.' }
            ],
            servicesIncluded: ['Documentação Automóvel', 'Renovação Carta Condução', 'Serviço Documentação', 'Alarmes', 'Telecomunicações', 'Energias', 'Projectos Investimentos', 'Cartão Combustível', 'Certidões', 'Registos', 'Autenticações', 'Apostilhas', 'Cartão Cidadão'],
            whoItsFor: [
              { title: 'Empresas', description: 'Elimine burocracias. Tratamos da documentação.' },
              { title: 'Particulares', description: 'Sem filas. Tratamos enquanto trabalha.' },
              { title: 'Investidores', description: 'Apoio especializado em documentação.' }
            ],
            processSteps: [
              { number: 1, title: 'Identifique Serviço', description: 'Indique o documento que precisa.' },
              { number: 2, title: 'Entregue Docs', description: 'Envie a documentação necessária.' },
              { number: 3, title: 'Tratamos Tudo', description: 'Tratamos e entregamos o documento.' }
            ],
            faq: [
              { question: 'O que é agente autorizado?', answer: 'Entidade certificada para intermediar documentação oficial. Referência: localdocidadao.pt' },
              { question: 'Docs renovação carta?', answer: 'Cartão Cidadão, carta actual, atestado médico, foto.' },
              { question: 'Prazo doc automóvel?', answer: 'Duplicados 5-7 dias, transferências 10-15 dias.' },
              { question: 'Docs para estrangeiro?', answer: 'Sim, apostilhas e legalizações consulares.' },
              { question: 'Cartão combustível?', answer: 'Gestão frota com facturação centralizada.' }
            ],
            finalCtaTitle: 'Este é o seu Local!',
            finalCtaSubtitle: 'Indique o serviço e tratamos de tudo.',
            formMicrocopy: { nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone', companyLabel: 'Empresa', messageLabel: 'Que serviço precisa?', submitButton: 'Pedir Info', successMessage: 'Contactamos em 24h!', errorMessage: 'Erro: business@hivegroup.pt' }
          })
        },
        {
          locale: 'en',
          title: 'Authorised Agent - Citizen Office',
          subtitle: 'This is your Place! Vehicle Documentation, Driving Licence Renewal, Public Services without travelling.',
          seoTitle: 'Authorised Citizen Office Agent - Hive Group Portugal',
          seoDescription: 'Certified authorised agent. Vehicle docs, driving licence, certificates. Ref: localdocidadao.pt',
          keywordsJson: JSON.stringify(['authorised agent', 'citizen office', 'vehicle documentation', 'driving licence', 'certificates', 'localdocidadao']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'This is your Place!', description: 'Certified authorised agent. We save your time.' },
              { title: 'Vehicle Documentation', description: 'Registrations, transfers, duplicates.' },
              { title: 'Licence Renewal', description: 'Quick licence renewal.' },
              { title: 'Documentation Service', description: 'Certificates, authentications, apostilles.' },
              { title: 'Alarms, Telecom, Energy', description: 'Support in service contracting.' },
              { title: 'Fuel Card', description: 'Application and fleet card management.' }
            ],
            servicesIncluded: ['Vehicle Documentation', 'Licence Renewal', 'Documentation Service', 'Alarms', 'Telecommunications', 'Energy', 'Investment Projects', 'Fuel Card', 'Certificates', 'Registrations', 'Authentications', 'Apostilles', 'Citizen Card'],
            whoItsFor: [
              { title: 'Companies', description: 'Eliminate bureaucracy. We handle documentation.' },
              { title: 'Individuals', description: 'No queues. We handle whilst you work.' },
              { title: 'Investors', description: 'Specialised support in documentation.' }
            ],
            processSteps: [
              { number: 1, title: 'Identify Service', description: 'Indicate document you need.' },
              { number: 2, title: 'Submit Docs', description: 'Send necessary documentation.' },
              { number: 3, title: 'We Handle All', description: 'We process and deliver document.' }
            ],
            faq: [
              { question: 'What is authorised agent?', answer: 'Certified entity to intermediate official documentation. Reference: localdocidadao.pt' },
              { question: 'Docs for licence renewal?', answer: 'Citizen Card, current licence, medical certificate, photo.' },
              { question: 'Vehicle doc timeframe?', answer: 'Duplicates 5-7 days, transfers 10-15 days.' },
              { question: 'Docs for abroad?', answer: 'Yes, apostilles and consular legalisations.' },
              { question: 'Fuel card?', answer: 'Fleet management with centralised billing.' }
            ],
            finalCtaTitle: 'This is your Place!',
            finalCtaSubtitle: 'Indicate service and we handle everything.',
            formMicrocopy: { nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', companyLabel: 'Company', messageLabel: 'What service do you need?', submitButton: 'Request Info', successMessage: 'Contact within 24h!', errorMessage: 'Error: business@hivegroup.pt' }
          })
        }
      ]
    },

    // 3. FINANCE
    {
      slug: 'finance',
      type: 'service',
      translations: [
        {
          locale: 'pt',
          title: 'Consultoria Financeira Empresarial',
          subtitle: 'Planeamento financeiro, análise de investimentos e optimização da gestão financeira da sua empresa.',
          seoTitle: 'Consultoria Financeira Empresarial - Hive Group Portugal',
          seoDescription: 'Consultoria financeira para empresas. Planeamento estratégico, análise investimentos, cash flow, business plans.',
          keywordsJson: JSON.stringify(['consultoria financeira', 'planeamento financeiro', 'análise investimentos', 'cash flow', 'business plan', 'gestão financeira']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Planeamento Estratégico', description: 'Planos financeiros alinhados com objectivos empresariais.' },
              { title: 'Análise de Investimentos', description: 'Avaliação técnica de projectos e ROI.' },
              { title: 'Optimização Cash Flow', description: 'Gestão eficiente do fluxo de caixa.' },
              { title: 'Business Plans', description: 'Elaboração de planos de negócio robustos.' },
              { title: 'Reestruturação', description: 'Apoio em processos de reestruturação financeira.' },
              { title: 'Reporting Executivo', description: 'Dashboards e relatórios para decisão.' }
            ],
            servicesIncluded: ['Planeamento financeiro', 'Análise investimentos', 'Cash flow management', 'Business plans', 'Orçamentos', 'Previsões financeiras', 'KPIs financeiros', 'Due diligence', 'Reestruturação', 'Financiamentos', 'Capital próprio', 'Reporting executivo'],
            whoItsFor: [
              { title: 'Startups', description: 'Estruturação financeira para crescimento.' },
              { title: 'PMEs', description: 'Optimização e planeamento financeiro.' },
              { title: 'Investidores', description: 'Análise de oportunidades de investimento.' }
            ],
            processSteps: [
              { number: 1, title: 'Diagnóstico', description: 'Análise da situação financeira actual.' },
              { number: 2, title: 'Estratégia', description: 'Definição de objectivos e plano de acção.' },
              { number: 3, title: 'Implementação', description: 'Execução e monitorização contínua.' }
            ],
            faq: [
              { question: 'O que inclui consultoria?', answer: 'Planeamento, análise, optimização e apoio na execução da estratégia financeira.' },
              { question: 'Fazem business plans?', answer: 'Sim, completos para financiamento ou investimento.' },
              { question: 'Apoio em financiamentos?', answer: 'Sim, apoiamos preparação e negociação de financiamentos.' },
              { question: 'Trabalham com startups?', answer: 'Sim, experiência em estruturação financeira de startups.' },
              { question: 'Periodicidade acompanhamento?', answer: 'Mensal ou trimestral conforme necessidade.' }
            ],
            finalCtaTitle: 'Optimizar Gestão Financeira?',
            finalCtaSubtitle: 'Reunião gratuita para análise e proposta.',
            formMicrocopy: { nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone', companyLabel: 'Empresa', messageLabel: 'Que desafio financeiro?', submitButton: 'Agendar', successMessage: 'Agendado!', errorMessage: 'Erro: finance@hivegroup.pt' }
          })
        },
        {
          locale: 'en',
          title: 'Business Financial Consultancy',
          subtitle: 'Financial planning, investment analysis and optimisation of your company\'s financial management.',
          seoTitle: 'Business Financial Consultancy - Hive Group Portugal',
          seoDescription: 'Financial consultancy for businesses. Strategic planning, investment analysis, cash flow, business plans.',
          keywordsJson: JSON.stringify(['financial consultancy', 'financial planning', 'investment analysis', 'cash flow', 'business plan', 'financial management']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Strategic Planning', description: 'Financial plans aligned with business objectives.' },
              { title: 'Investment Analysis', description: 'Technical evaluation of projects and ROI.' },
              { title: 'Cash Flow Optimisation', description: 'Efficient cash flow management.' },
              { title: 'Business Plans', description: 'Robust business plan development.' },
              { title: 'Restructuring', description: 'Support in financial restructuring.' },
              { title: 'Executive Reporting', description: 'Dashboards and reports for decision-making.' }
            ],
            servicesIncluded: ['Financial planning', 'Investment analysis', 'Cash flow management', 'Business plans', 'Budgets', 'Financial forecasts', 'Financial KPIs', 'Due diligence', 'Restructuring', 'Financing', 'Equity', 'Executive reporting'],
            whoItsFor: [
              { title: 'Startups', description: 'Financial structuring for growth.' },
              { title: 'SMEs', description: 'Optimisation and financial planning.' },
              { title: 'Investors', description: 'Investment opportunity analysis.' }
            ],
            processSteps: [
              { number: 1, title: 'Diagnosis', description: 'Analysis of current financial situation.' },
              { number: 2, title: 'Strategy', description: 'Definition of objectives and action plan.' },
              { number: 3, title: 'Implementation', description: 'Execution and continuous monitoring.' }
            ],
            faq: [
              { question: 'What does consultancy include?', answer: 'Planning, analysis, optimisation and support in financial strategy execution.' },
              { question: 'Do you make business plans?', answer: 'Yes, complete for financing or investment.' },
              { question: 'Support in financing?', answer: 'Yes, we support preparation and negotiation of financing.' },
              { question: 'Work with startups?', answer: 'Yes, experience in startup financial structuring.' },
              { question: 'Follow-up frequency?', answer: 'Monthly or quarterly as needed.' }
            ],
            finalCtaTitle: 'Optimise Financial Management?',
            finalCtaSubtitle: 'Free meeting for analysis and proposal.',
            formMicrocopy: { nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', companyLabel: 'Company', messageLabel: 'What financial challenge?', submitButton: 'Schedule', successMessage: 'Scheduled!', errorMessage: 'Error: finance@hivegroup.pt' }
          })
        }
      ]
    },

    // 4. CREDIT
    {
      slug: 'credit',
      type: 'service',
      translations: [
        {
          locale: 'pt',
          title: 'Soluções de Crédito Empresarial e Pessoal',
          subtitle: 'Crédito para empresas, habitação, consolidação. Comparamos e negociamos as melhores condições.',
          seoTitle: 'Crédito Empresarial e Habitação - Hive Group Portugal',
          seoDescription: 'Soluções de crédito: empresarial, habitação, consolidação. Comparação e negociação das melhores taxas.',
          keywordsJson: JSON.stringify(['crédito empresarial', 'crédito habitação', 'consolidação créditos', 'financiamento empresas', 'melhores taxas', 'intermediário crédito']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Comparação Multi-Banco', description: 'Comparamos ofertas de múltiplos bancos.' },
              { title: 'Negociação de Condições', description: 'Negociamos taxas e prazos por si.' },
              { title: 'Processo Completo', description: 'Apoio desde análise até assinatura.' },
              { title: 'Consolidação Créditos', description: 'Unificação de créditos para reduzir prestações.' },
              { title: 'Crédito Empresarial', description: 'Financiamento para investimento e tesouraria.' },
              { title: 'Sem Custos Iniciais', description: 'Análise e proposta sem qualquer custo.' }
            ],
            servicesIncluded: ['Crédito habitação', 'Crédito empresarial', 'Leasing', 'Factoring', 'Consolidação créditos', 'Renegociação', 'Crédito pessoal', 'Crédito automóvel', 'Linhas tesouraria', 'Financiamento investimento'],
            whoItsFor: [
              { title: 'Empresas', description: 'Financiamento para crescimento e investimento.' },
              { title: 'Particulares', description: 'Habitação, consolidação, automóvel.' },
              { title: 'Investidores', description: 'Crédito para investimento imobiliário.' }
            ],
            processSteps: [
              { number: 1, title: 'Análise Necessidades', description: 'Avaliamos necessidades e capacidade.' },
              { number: 2, title: 'Comparação Ofertas', description: 'Comparamos propostas de vários bancos.' },
              { number: 3, title: 'Submissão Aprovação', description: 'Submetemos e acompanhamos até assinatura.' }
            ],
            faq: [
              { question: 'Têm custos?', answer: 'Análise gratuita. Comissão só em caso de sucesso.' },
              { question: 'Que bancos trabalham?', answer: 'Trabalhamos com praticamente todos os bancos em Portugal.' },
              { question: 'Prazo para resposta?', answer: 'Análise preliminar em 48h. Aprovação bancária 7-15 dias.' },
              { question: 'Crédito com TAN/TAEG?', answer: 'Sim, comparamos todas as condições incluindo seguros.' },
              { question: 'Consolidação vantajosa?', answer: 'Analisamos se compensa face às condições actuais.' }
            ],
            finalCtaTitle: 'Procura Melhor Crédito?',
            finalCtaSubtitle: 'Análise gratuita e comparação de propostas.',
            formMicrocopy: { nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone', companyLabel: 'Empresa (se aplicável)', messageLabel: 'Que tipo de crédito procura?', submitButton: 'Pedir Análise', successMessage: 'Recebido!', errorMessage: 'Erro: credit@hivegroup.pt' }
          })
        },
        {
          locale: 'en',
          title: 'Business and Personal Credit Solutions',
          subtitle: 'Credit for businesses, mortgages, consolidation. We compare and negotiate the best conditions.',
          seoTitle: 'Business Credit and Mortgages - Hive Group Portugal',
          seoDescription: 'Credit solutions: business, mortgages, consolidation. Comparison and negotiation of best rates.',
          keywordsJson: JSON.stringify(['business credit', 'mortgage', 'credit consolidation', 'business financing', 'best rates', 'credit intermediary']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Multi-Bank Comparison', description: 'We compare offers from multiple banks.' },
              { title: 'Condition Negotiation', description: 'We negotiate rates and terms for you.' },
              { title: 'Complete Process', description: 'Support from analysis to signing.' },
              { title: 'Credit Consolidation', description: 'Credit unification to reduce instalments.' },
              { title: 'Business Credit', description: 'Financing for investment and treasury.' },
              { title: 'No Initial Costs', description: 'Analysis and proposal at no cost.' }
            ],
            servicesIncluded: ['Mortgages', 'Business credit', 'Leasing', 'Factoring', 'Credit consolidation', 'Renegotiation', 'Personal credit', 'Car credit', 'Treasury lines', 'Investment financing'],
            whoItsFor: [
              { title: 'Companies', description: 'Financing for growth and investment.' },
              { title: 'Individuals', description: 'Mortgages, consolidation, vehicles.' },
              { title: 'Investors', description: 'Credit for real estate investment.' }
            ],
            processSteps: [
              { number: 1, title: 'Needs Analysis', description: 'We assess needs and capacity.' },
              { number: 2, title: 'Offer Comparison', description: 'We compare proposals from various banks.' },
              { number: 3, title: 'Approval Submission', description: 'We submit and follow through to signing.' }
            ],
            faq: [
              { question: 'Are there costs?', answer: 'Free analysis. Commission only on success.' },
              { question: 'Which banks do you work with?', answer: 'We work with virtually all banks in Portugal.' },
              { question: 'Response timeframe?', answer: 'Preliminary analysis in 48h. Bank approval 7-15 days.' },
              { question: 'Credit with rates?', answer: 'Yes, we compare all conditions including insurance.' },
              { question: 'Is consolidation worthwhile?', answer: 'We analyse if it compensates versus current conditions.' }
            ],
            finalCtaTitle: 'Looking for Better Credit?',
            finalCtaSubtitle: 'Free analysis and proposal comparison.',
            formMicrocopy: { nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', companyLabel: 'Company (if applicable)', messageLabel: 'What type of credit?', submitButton: 'Request Analysis', successMessage: 'Received!', errorMessage: 'Error: credit@hivegroup.pt' }
          })
        }
      ]
    },

    // 5. INSURANCE
    {
      slug: 'insurance',
      type: 'service',
      translations: [
        {
          locale: 'pt',
          title: 'Seguros Empresariais e Pessoais',
          subtitle: 'Seguros adaptados: automóvel, saúde, vida, habitação, responsabilidade civil empresarial.',
          seoTitle: 'Seguros Empresariais e Pessoais - Hive Group Portugal',
          seoDescription: 'Seguros para empresas e particulares. Comparação, negociação e gestão de apólices. Melhores coberturas.',
          keywordsJson: JSON.stringify(['seguros empresariais', 'seguro automóvel', 'seguro saúde', 'RC empresarial', 'seguro vida', 'mediador seguros']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Comparação Seguradoras', description: 'Comparamos múltiplas seguradoras.' },
              { title: 'Coberturas Adequadas', description: 'Identificamos as coberturas necessárias.' },
              { title: 'Gestão Apólices', description: 'Gestão centralizada de todas as apólices.' },
              { title: 'Apoio Sinistros', description: 'Apoio completo em caso de sinistro.' },
              { title: 'Renovações Automáticas', description: 'Gerimos renovações e actualizações.' },
              { title: 'Poupança Garantida', description: 'Negociamos as melhores condições.' }
            ],
            servicesIncluded: ['Seguro automóvel', 'Seguro saúde', 'Seguro vida', 'Seguro habitação', 'RC empresarial', 'Acidentes trabalho', 'Seguros frota', 'Multi-riscos', 'Responsabilidade profissional', 'Gestão apólices'],
            whoItsFor: [
              { title: 'Empresas', description: 'RC, acidentes trabalho, frotas, multi-riscos.' },
              { title: 'Particulares', description: 'Auto, saúde, vida, habitação.' },
              { title: 'Profissionais', description: 'Responsabilidade profissional específica.' }
            ],
            processSteps: [
              { number: 1, title: 'Análise Riscos', description: 'Identificamos necessidades e exposição.' },
              { number: 2, title: 'Comparação', description: 'Comparamos ofertas de várias seguradoras.' },
              { number: 3, title: 'Contratação Gestão', description: 'Contratamos e gerimos as apólices.' }
            ],
            faq: [
              { question: 'Custos do serviço?', answer: 'Sem custos. Somos remunerados pelas seguradoras.' },
              { question: 'Apoiam em sinistros?', answer: 'Sim, apoiamos todo o processo de participação e acompanhamento.' },
              { question: 'Trabalham que seguradoras?', answer: 'Praticamente todas as seguradoras em Portugal.' },
              { question: 'Posso transferir apólices?', answer: 'Sim, analisamos apólices actuais e propomos alternativas.' },
              { question: 'Seguros obrigatórios empresa?', answer: 'RC e acidentes trabalho. Avaliamos outros conforme actividade.' }
            ],
            finalCtaTitle: 'Seguros Adequados?',
            finalCtaSubtitle: 'Análise e comparação gratuita.',
            formMicrocopy: { nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone', companyLabel: 'Empresa', messageLabel: 'Que seguros precisa?', submitButton: 'Pedir Proposta', successMessage: 'Enviado!', errorMessage: 'Erro: insurance@hivegroup.pt' }
          })
        },
        {
          locale: 'en',
          title: 'Business and Personal Insurance',
          subtitle: 'Tailored insurance: motor, health, life, property, business liability.',
          seoTitle: 'Business and Personal Insurance - Hive Group Portugal',
          seoDescription: 'Insurance for businesses and individuals. Comparison, negotiation and policy management. Best coverage.',
          keywordsJson: JSON.stringify(['business insurance', 'motor insurance', 'health insurance', 'business liability', 'life insurance', 'insurance broker']),
          sectionsJson: JSON.stringify({
            benefits: [
              { title: 'Insurer Comparison', description: 'We compare multiple insurers.' },
              { title: 'Adequate Coverage', description: 'We identify necessary coverage.' },
              { title: 'Policy Management', description: 'Centralised management of all policies.' },
              { title: 'Claims Support', description: 'Complete support in case of claim.' },
              { title: 'Automatic Renewals', description: 'We manage renewals and updates.' },
              { title: 'Guaranteed Savings', description: 'We negotiate best conditions.' }
            ],
            servicesIncluded: ['Motor insurance', 'Health insurance', 'Life insurance', 'Property insurance', 'Business liability', 'Work accidents', 'Fleet insurance', 'Multi-risk', 'Professional liability', 'Policy management'],
            whoItsFor: [
              { title: 'Companies', description: 'Liability, work accidents, fleets, multi-risk.' },
              { title: 'Individuals', description: 'Motor, health, life, property.' },
              { title: 'Professionals', description: 'Specific professional liability.' }
            ],
            processSteps: [
              { number: 1, title: 'Risk Analysis', description: 'We identify needs and exposure.' },
              { number: 2, title: 'Comparison', description: 'We compare offers from various insurers.' },
              { number: 3, title: 'Contract Management', description: 'We contract and manage policies.' }
            ],
            faq: [
              { question: 'Service costs?', answer: 'No costs. We are remunerated by insurers.' },
              { question: 'Support in claims?', answer: 'Yes, we support entire reporting and follow-up process.' },
              { question: 'Which insurers?', answer: 'Virtually all insurers in Portugal.' },
              { question: 'Can I transfer policies?', answer: 'Yes, we analyse current policies and propose alternatives.' },
              { question: 'Mandatory company insurance?', answer: 'Liability and work accidents. We assess others per activity.' }
            ],
            finalCtaTitle: 'Adequate Insurance?',
            finalCtaSubtitle: 'Free analysis and comparison.',
            formMicrocopy: { nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone', companyLabel: 'Company', messageLabel: 'What insurance needed?', submitButton: 'Request Proposal', successMessage: 'Sent!', errorMessage: 'Error: insurance@hivegroup.pt' }
          })
        }
      ]
    }

    // Continuar com restantes páginas: real-estate, legal, marketing, travel, it, business-development, contactos
  ];

  for (const pageData of pages) {
    await prisma.page.create({
      data: {
        slug: pageData.slug,
        type: pageData.type,
        published: true,
        translations: {
          create: pageData.translations
        }
      }
    });
    console.log(`✅ ${pageData.slug}`);
  }

  console.log('\n✅ 5 páginas criadas! Faltam 7...');
  console.log('Execute novamente para completar todas.');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
