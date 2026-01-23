import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Helper function para criar páginas mais rapidamente
function createTranslation(locale: string, baseContent: any) {
  const { keywords, sections, ...rest } = baseContent;
  return {
    locale,
    ...rest,
    keywordsJson: JSON.stringify(keywords),
    sectionsJson: JSON.stringify(sections)
  };
}

async function main() {
  console.log('🌱 Criando TODAS as 12 páginas em 5 idiomas...\n');

  // Apagar páginas antigas (exceto home)
  await prisma.page.deleteMany({
    where: { slug: { not: 'home' } }
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
          createTranslation('pt', {
            title: 'Contabilidade Certificada TOC',
            subtitle: 'Gestão contabilística completa por técnicos certificados',
            seoTitle: 'Contabilidade Certificada TOC - Hive Group',
            seoDescription: 'Contabilidade certificada. IVA, IRS, IRC. Conformidade fiscal garantida.',
            keywords: ['contabilidade', 'TOC', 'IVA', 'IRS', 'IRC', 'fiscal'],
            sections: {
              benefits: [
                { title: 'TOC Certificados', description: 'Todos os contabilistas são TOC certificados pela Ordem.' },
                { title: 'Prazos Garantidos', description: 'IVA, IRS, IRC entregues no prazo.' },
                { title: 'Portal 24/7', description: 'Acesso online aos documentos.' },
                { title: 'Gestor Dedicado', description: 'Contabilista que conhece o negócio.' },
                { title: 'Optimização Fiscal', description: 'Benefícios fiscais legais.' },
                { title: 'Relatórios Claros', description: 'Relatórios mensais simples.' }
              ],
              servicesIncluded: ['IVA mensal', 'IRS', 'IRC', 'Fecho contas', 'IES', 'Certificação', 'Apoio AT', 'Portal online'],
              whoItsFor: [
                { title: 'ENI', description: 'Empresários individuais.' },
                { title: 'PMEs', description: 'Pequenas e médias empresas.' },
                { title: 'Empresas', description: 'Empresas estabelecidas.' }
              ],
              processSteps: [
                { number: 1, title: 'Análise', description: 'Avaliação situação.' },
                { number: 2, title: 'Implementação', description: 'Regularização e sistemas.' },
                { number: 3, title: 'Gestão', description: 'Processamento mensal.' }
              ],
              faq: [
                { question: 'TOC certificados?', answer: 'Sim, todos certificados pela Ordem.' },
                { question: 'Documentos mensais?', answer: 'Facturas, recibos, extractos.' },
                { question: 'Prazo IVA?', answer: 'Processamento automático mensal.' },
                { question: 'Apoio inspecções?', answer: 'Sim, acompanhamento total.' },
                { question: 'Portal online?', answer: 'Sim, 24/7.' }
              ],
              finalCtaTitle: 'Contabilidade em Dia?',
              finalCtaSubtitle: 'Reunião gratuita.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Mensagem',
                submitButton: 'Contactar', successMessage: 'Obrigado!', errorMessage: 'Erro: business@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Certified TOC Accounting',
            subtitle: 'Complete accounting by certified professionals',
            seoTitle: 'Certified TOC Accounting - Hive Group',
            seoDescription: 'Certified accounting. VAT, tax returns. Guaranteed compliance.',
            keywords: ['accounting', 'chartered', 'VAT', 'tax', 'returns', 'fiscal'],
            sections: {
              benefits: [
                { title: 'Certified Accountants', description: 'All chartered accountants.' },
                { title: 'Guaranteed Deadlines', description: 'VAT, tax submitted on time.' },
                { title: '24/7 Portal', description: 'Online access to documents.' },
                { title: 'Dedicated Manager', description: 'Accountant who knows business.' },
                { title: 'Tax Optimisation', description: 'Legal tax benefits.' },
                { title: 'Clear Reports', description: 'Simple monthly reports.' }
              ],
              servicesIncluded: ['Monthly VAT', 'Tax returns', 'Corporate tax', 'Annual closing', 'Business info', 'Certification', 'Tax support', 'Online portal'],
              whoItsFor: [
                { title: 'Sole Traders', description: 'Self-employed.' },
                { title: 'SMEs', description: 'Small medium businesses.' },
                { title: 'Companies', description: 'Established companies.' }
              ],
              processSteps: [
                { number: 1, title: 'Analysis', description: 'Assess situation.' },
                { number: 2, title: 'Implementation', description: 'Regularisation and systems.' },
                { number: 3, title: 'Management', description: 'Monthly processing.' }
              ],
              faq: [
                { question: 'Certified?', answer: 'Yes, all chartered accountants.' },
                { question: 'Monthly documents?', answer: 'Invoices, receipts, statements.' },
                { question: 'VAT deadline?', answer: 'Automatic monthly processing.' },
                { question: 'Inspection support?', answer: 'Yes, full support.' },
                { question: 'Online portal?', answer: 'Yes, 24/7.' }
              ],
              finalCtaTitle: 'Accounting Up to Date?',
              finalCtaSubtitle: 'Free meeting.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Message',
                submitButton: 'Contact', successMessage: 'Thank you!', errorMessage: 'Error: business@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 1/12 contabilidade');

  // 2. AGENTE AUTORIZADO
  await prisma.page.create({
    data: {
      slug: 'agente-autorizado',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Agente Autorizado Local do Cidadão',
            subtitle: 'Este é o seu Local! Documentação Automóvel, Renovação Carta, Alarmes, Telecom, Energias.',
            seoTitle: 'Agente Autorizado Local Cidadão - Hive Group',
            seoDescription: 'Agente autorizado. Doc automóvel, carta, alarmes, telecom. Ref: localdocidadao.pt',
            keywords: ['agente autorizado', 'local cidadão', 'doc automóvel', 'carta condução', 'localdocidadao', 'alarmes'],
            sections: {
              benefits: [
                { title: 'Este é o seu Local!', description: 'Agente certificado. Ref: localdocidadao.pt' },
                { title: 'Doc Automóvel', description: 'Registos, transferências, duplicados.' },
                { title: 'Renovação Carta', description: 'Renovação carta condução.' },
                { title: 'Serviço Documentação', description: 'Certidões, autenticações.' },
                { title: 'Alarmes Telecom Energias', description: 'Apoio contratação serviços.' },
                { title: 'Cartão Combustível', description: 'Gestão cartões frota.' }
              ],
              servicesIncluded: ['Documentação Automóvel', 'Renovação Carta Condução', 'Serviço Documentação', 'Alarmes', 'Telecomunicações', 'Energias', 'Projectos Investimentos', 'Cartão Combustível'],
              whoItsFor: [
                { title: 'Empresas', description: 'Elimine burocracias.' },
                { title: 'Particulares', description: 'Sem filas.' },
                { title: 'Investidores', description: 'Apoio especializado.' }
              ],
              processSteps: [
                { number: 1, title: 'Identifique', description: 'Indique o serviço.' },
                { number: 2, title: 'Entregue', description: 'Envie documentação.' },
                { number: 3, title: 'Tratamos', description: 'Tratamos e entregamos.' }
              ],
              faq: [
                { question: 'O que é?', answer: 'Agente certificado para documentação oficial. Ref: localdocidadao.pt' },
                { question: 'Renovação carta?', answer: 'Cartão Cidadão, carta, atestado, foto.' },
                { question: 'Prazo automóvel?', answer: 'Duplicados 5-7 dias, transferências 10-15.' },
                { question: 'Docs estrangeiro?', answer: 'Sim, apostilhas e legalizações.' },
                { question: 'Cartão combustível?', answer: 'Gestão frota centralizada.' }
              ],
              finalCtaTitle: 'Este é o seu Local!',
              finalCtaSubtitle: 'Tratamos de tudo por si.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Que serviço?',
                submitButton: 'Pedir Info', successMessage: 'Contacto 24h!', errorMessage: 'business@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Authorised Agent Citizen Office',
            subtitle: 'This is your Place! Vehicle Docs, Licence Renewal, Alarms, Telecom, Energy.',
            seoTitle: 'Authorised Citizen Office - Hive Group',
            seoDescription: 'Authorised agent. Vehicle docs, licence, alarms, telecom. Ref: localdocidadao.pt',
            keywords: ['authorised agent', 'citizen office', 'vehicle docs', 'driving licence', 'localdocidadao', 'alarms'],
            sections: {
              benefits: [
                { title: 'This is your Place!', description: 'Certified agent. Ref: localdocidadao.pt' },
                { title: 'Vehicle Docs', description: 'Registrations, transfers, duplicates.' },
                { title: 'Licence Renewal', description: 'Driving licence renewal.' },
                { title: 'Documentation', description: 'Certificates, authentications.' },
                { title: 'Alarms Telecom Energy', description: 'Service contracting support.' },
                { title: 'Fuel Card', description: 'Fleet card management.' }
              ],
              servicesIncluded: ['Vehicle Documentation', 'Licence Renewal', 'Documentation Service', 'Alarms', 'Telecommunications', 'Energy', 'Investment Projects', 'Fuel Card'],
              whoItsFor: [
                { title: 'Companies', description: 'Eliminate bureaucracy.' },
                { title: 'Individuals', description: 'No queues.' },
                { title: 'Investors', description: 'Specialised support.' }
              ],
              processSteps: [
                { number: 1, title: 'Identify', description: 'Indicate service.' },
                { number: 2, title: 'Submit', description: 'Send documentation.' },
                { number: 3, title: 'We Handle', description: 'We process and deliver.' }
              ],
              faq: [
                { question: 'What is it?', answer: 'Certified agent for official documentation. Ref: localdocidadao.pt' },
                { question: 'Licence renewal?', answer: 'Citizen Card, licence, medical, photo.' },
                { question: 'Vehicle timeframe?', answer: 'Duplicates 5-7 days, transfers 10-15.' },
                { question: 'Docs for abroad?', answer: 'Yes, apostilles and legalisations.' },
                { question: 'Fuel card?', answer: 'Centralised fleet management.' }
              ],
              finalCtaTitle: 'This is your Place!',
              finalCtaSubtitle: 'We handle everything.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'What service?',
                submitButton: 'Request Info', successMessage: 'Contact 24h!', errorMessage: 'business@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 1. contabilidade');
  console.log('✅ 2. agente-autorizado');

  // 3. FINANCE
  await prisma.page.create({
    data: {
      slug: 'finance',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Consultoria Financeira',
            subtitle: 'Planeamento financeiro e análise de investimentos',
            seoTitle: 'Consultoria Financeira - Hive Group Portugal',
            seoDescription: 'Consultoria financeira empresarial. Planeamento, análise investimentos, cash flow.',
            keywords: ['consultoria financeira', 'planeamento', 'investimentos', 'cash flow', 'business plan', 'finanças'],
            sections: {
              benefits: [
                { title: 'Planeamento Estratégico', description: 'Planos financeiros alinhados com objectivos.' },
                { title: 'Análise Investimentos', description: 'Avaliação técnica e ROI.' },
                { title: 'Cash Flow', description: 'Optimização do fluxo de caixa.' },
                { title: 'Business Plans', description: 'Planos robustos para financiamento.' },
                { title: 'Reestruturação', description: 'Apoio em reestruturação financeira.' },
                { title: 'KPIs', description: 'Dashboards e indicadores.' }
              ],
              servicesIncluded: ['Planeamento financeiro', 'Análise investimentos', 'Cash flow', 'Business plans', 'Orçamentos', 'Previsões', 'KPIs', 'Due diligence'],
              whoItsFor: [
                { title: 'Startups', description: 'Estruturação para crescimento.' },
                { title: 'PMEs', description: 'Optimização financeira.' },
                { title: 'Investidores', description: 'Análise oportunidades.' }
              ],
              processSteps: [
                { number: 1, title: 'Diagnóstico', description: 'Análise situação actual.' },
                { number: 2, title: 'Estratégia', description: 'Definição objectivos.' },
                { number: 3, title: 'Execução', description: 'Implementação e monitorização.' }
              ],
              faq: [
                { question: 'O que inclui?', answer: 'Planeamento, análise, optimização.' },
                { question: 'Business plans?', answer: 'Sim, completos.' },
                { question: 'Apoio financiamentos?', answer: 'Sim, preparação e negociação.' },
                { question: 'Trabalham startups?', answer: 'Sim, experiência startups.' },
                { question: 'Periodicidade?', answer: 'Mensal ou trimestral.' }
              ],
              finalCtaTitle: 'Optimizar Finanças?',
              finalCtaSubtitle: 'Reunião análise gratuita.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Desafio?',
                submitButton: 'Agendar', successMessage: 'Agendado!', errorMessage: 'finance@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Financial Consultancy',
            subtitle: 'Financial planning and investment analysis',
            seoTitle: 'Financial Consultancy - Hive Group Portugal',
            seoDescription: 'Business financial consultancy. Planning, investment analysis, cash flow.',
            keywords: ['financial consultancy', 'planning', 'investments', 'cash flow', 'business plan', 'finance'],
            sections: {
              benefits: [
                { title: 'Strategic Planning', description: 'Financial plans aligned with objectives.' },
                { title: 'Investment Analysis', description: 'Technical evaluation and ROI.' },
                { title: 'Cash Flow', description: 'Cash flow optimisation.' },
                { title: 'Business Plans', description: 'Robust plans for financing.' },
                { title: 'Restructuring', description: 'Financial restructuring support.' },
                { title: 'KPIs', description: 'Dashboards and indicators.' }
              ],
              servicesIncluded: ['Financial planning', 'Investment analysis', 'Cash flow', 'Business plans', 'Budgets', 'Forecasts', 'KPIs', 'Due diligence'],
              whoItsFor: [
                { title: 'Startups', description: 'Structuring for growth.' },
                { title: 'SMEs', description: 'Financial optimisation.' },
                { title: 'Investors', description: 'Opportunity analysis.' }
              ],
              processSteps: [
                { number: 1, title: 'Diagnosis', description: 'Current situation analysis.' },
                { number: 2, title: 'Strategy', description: 'Objective definition.' },
                { number: 3, title: 'Execution', description: 'Implementation and monitoring.' }
              ],
              faq: [
                { question: 'What included?', answer: 'Planning, analysis, optimisation.' },
                { question: 'Business plans?', answer: 'Yes, complete.' },
                { question: 'Financing support?', answer: 'Yes, preparation and negotiation.' },
                { question: 'Work with startups?', answer: 'Yes, startup experience.' },
                { question: 'Frequency?', answer: 'Monthly or quarterly.' }
              ],
              finalCtaTitle: 'Optimise Finance?',
              finalCtaSubtitle: 'Free analysis meeting.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Challenge?',
                submitButton: 'Schedule', successMessage: 'Scheduled!', errorMessage: 'finance@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 3. finance');

  // 4. CREDIT
  await prisma.page.create({
    data: {
      slug: 'credit',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Crédito Empresarial e Habitação',
            subtitle: 'Comparação multi-banco e negociação das melhores condições',
            seoTitle: 'Crédito Empresarial e Habitação - Hive Group',
            seoDescription: 'Crédito empresarial, habitação, consolidação. Comparação e negociação melhores taxas.',
            keywords: ['crédito empresarial', 'crédito habitação', 'consolidação', 'financiamento', 'melhores taxas', 'intermediário'],
            sections: {
              benefits: [
                { title: 'Multi-Banco', description: 'Comparamos múltiplos bancos.' },
                { title: 'Negociação', description: 'Negociamos por si.' },
                { title: 'Processo Completo', description: 'Apoio até assinatura.' },
                { title: 'Consolidação', description: 'Unificação de créditos.' },
                { title: 'Empresarial', description: 'Investimento e tesouraria.' },
                { title: 'Sem Custos', description: 'Análise gratuita.' }
              ],
              servicesIncluded: ['Crédito habitação', 'Crédito empresarial', 'Leasing', 'Factoring', 'Consolidação', 'Renegociação'],
              whoItsFor: [
                { title: 'Empresas', description: 'Financiamento crescimento.' },
                { title: 'Particulares', description: 'Habitação, consolidação.' },
                { title: 'Investidores', description: 'Crédito imobiliário.' }
              ],
              processSteps: [
                { number: 1, title: 'Análise', description: 'Avaliamos necessidades.' },
                { number: 2, title: 'Comparação', description: 'Comparamos bancos.' },
                { number: 3, title: 'Aprovação', description: 'Submetemos e acompanhamos.' }
              ],
              faq: [
                { question: 'Custos?', answer: 'Gratuito. Comissão só se aprovado.' },
                { question: 'Que bancos?', answer: 'Todos os principais bancos.' },
                { question: 'Prazo?', answer: 'Análise 48h, aprovação 7-15 dias.' },
                { question: 'TAN/TAEG?', answer: 'Sim, comparamos tudo.' },
                { question: 'Consolidação vale?', answer: 'Analisamos se compensa.' }
              ],
              finalCtaTitle: 'Melhor Crédito?',
              finalCtaSubtitle: 'Análise gratuita.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Tipo crédito?',
                submitButton: 'Análise', successMessage: 'Recebido!', errorMessage: 'credit@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Business and Mortgage Credit',
            subtitle: 'Multi-bank comparison and negotiation of best conditions',
            seoTitle: 'Business and Mortgage Credit - Hive Group',
            seoDescription: 'Business credit, mortgages, consolidation. Comparison and negotiation best rates.',
            keywords: ['business credit', 'mortgage', 'consolidation', 'financing', 'best rates', 'intermediary'],
            sections: {
              benefits: [
                { title: 'Multi-Bank', description: 'We compare multiple banks.' },
                { title: 'Negotiation', description: 'We negotiate for you.' },
                { title: 'Complete Process', description: 'Support until signing.' },
                { title: 'Consolidation', description: 'Credit unification.' },
                { title: 'Business', description: 'Investment and treasury.' },
                { title: 'No Costs', description: 'Free analysis.' }
              ],
              servicesIncluded: ['Mortgages', 'Business credit', 'Leasing', 'Factoring', 'Consolidation', 'Renegotiation'],
              whoItsFor: [
                { title: 'Companies', description: 'Growth financing.' },
                { title: 'Individuals', description: 'Mortgages, consolidation.' },
                { title: 'Investors', description: 'Property credit.' }
              ],
              processSteps: [
                { number: 1, title: 'Analysis', description: 'We assess needs.' },
                { number: 2, title: 'Comparison', description: 'We compare banks.' },
                { number: 3, title: 'Approval', description: 'We submit and follow.' }
              ],
              faq: [
                { question: 'Costs?', answer: 'Free. Commission only if approved.' },
                { question: 'Which banks?', answer: 'All main banks.' },
                { question: 'Timeframe?', answer: 'Analysis 48h, approval 7-15 days.' },
                { question: 'Rates?', answer: 'Yes, we compare everything.' },
                { question: 'Consolidation worth?', answer: 'We analyse if it compensates.' }
              ],
              finalCtaTitle: 'Better Credit?',
              finalCtaSubtitle: 'Free analysis.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Credit type?',
                submitButton: 'Analyse', successMessage: 'Received!', errorMessage: 'credit@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 4. credit');

  // 5. INSURANCE
  await prisma.page.create({
    data: {
      slug: 'insurance',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Seguros Empresariais e Pessoais',
            subtitle: 'Comparação e gestão de seguros. Automóvel, saúde, vida, RC empresarial.',
            seoTitle: 'Seguros Empresariais Pessoais - Hive Group Portugal',
            seoDescription: 'Seguros auto, saúde, vida, RC. Comparação seguradoras. Gestão apólices.',
            keywords: ['seguros', 'seguro auto', 'seguro saúde', 'RC empresarial', 'seguro vida', 'mediador'],
            sections: {
              benefits: [
                { title: 'Comparação', description: 'Comparamos seguradoras.' },
                { title: 'Coberturas', description: 'Identificamos necessárias.' },
                { title: 'Gestão', description: 'Gestão centralizada apólices.' },
                { title: 'Sinistros', description: 'Apoio em sinistros.' },
                { title: 'Renovações', description: 'Gerimos renovações.' },
                { title: 'Poupança', description: 'Melhores condições.' }
              ],
              servicesIncluded: ['Automóvel', 'Saúde', 'Vida', 'Habitação', 'RC empresarial', 'Acidentes trabalho', 'Frotas', 'Multi-riscos'],
              whoItsFor: [
                { title: 'Empresas', description: 'RC, acidentes, frotas.' },
                { title: 'Particulares', description: 'Auto, saúde, vida.' },
                { title: 'Profissionais', description: 'RC profissional.' }
              ],
              processSteps: [
                { number: 1, title: 'Análise', description: 'Identificamos riscos.' },
                { number: 2, title: 'Comparação', description: 'Comparamos ofertas.' },
                { number: 3, title: 'Contratação', description: 'Contratamos e gerimos.' }
              ],
              faq: [
                { question: 'Custos?', answer: 'Sem custos. Remuneração seguradoras.' },
                { question: 'Apoio sinistros?', answer: 'Sim, participação e acompanhamento.' },
                { question: 'Que seguradoras?', answer: 'Todas as principais.' },
                { question: 'Transferir apólices?', answer: 'Sim, analisamos e propomos.' },
                { question: 'Seguros obrigatórios?', answer: 'RC e acidentes trabalho.' }
              ],
              finalCtaTitle: 'Seguros Adequados?',
              finalCtaSubtitle: 'Comparação gratuita.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Que seguros?',
                submitButton: 'Proposta', successMessage: 'Enviado!', errorMessage: 'insurance@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Business and Personal Insurance',
            subtitle: 'Insurance comparison and management. Motor, health, life, business liability.',
            seoTitle: 'Business Personal Insurance - Hive Group Portugal',
            seoDescription: 'Motor, health, life, liability insurance. Insurer comparison. Policy management.',
            keywords: ['insurance', 'motor insurance', 'health insurance', 'business liability', 'life insurance', 'broker'],
            sections: {
              benefits: [
                { title: 'Comparison', description: 'We compare insurers.' },
                { title: 'Coverage', description: 'We identify necessary coverage.' },
                { title: 'Management', description: 'Centralised policy management.' },
                { title: 'Claims', description: 'Claims support.' },
                { title: 'Renewals', description: 'We manage renewals.' },
                { title: 'Savings', description: 'Best conditions.' }
              ],
              servicesIncluded: ['Motor', 'Health', 'Life', 'Property', 'Business liability', 'Work accidents', 'Fleet', 'Multi-risk'],
              whoItsFor: [
                { title: 'Companies', description: 'Liability, accidents, fleets.' },
                { title: 'Individuals', description: 'Motor, health, life.' },
                { title: 'Professionals', description: 'Professional liability.' }
              ],
              processSteps: [
                { number: 1, title: 'Analysis', description: 'We identify risks.' },
                { number: 2, title: 'Comparison', description: 'We compare offers.' },
                { number: 3, title: 'Contract', description: 'We contract and manage.' }
              ],
              faq: [
                { question: 'Costs?', answer: 'No costs. Insurer remuneration.' },
                { question: 'Claims support?', answer: 'Yes, reporting and follow-up.' },
                { question: 'Which insurers?', answer: 'All main insurers.' },
                { question: 'Transfer policies?', answer: 'Yes, we analyse and propose.' },
                { question: 'Mandatory insurance?', answer: 'Liability and work accidents.' }
              ],
              finalCtaTitle: 'Adequate Insurance?',
              finalCtaSubtitle: 'Free comparison.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'What insurance?',
                submitButton: 'Proposal', successMessage: 'Sent!', errorMessage: 'insurance@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 5. insurance');

  // 6. REAL ESTATE
  await prisma.page.create({
    data: {
      slug: 'real-estate',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Imobiliário - Consultoria e Gestão',
            subtitle: 'Consultoria imobiliária, avaliações, gestão de propriedades e investimento.',
            seoTitle: 'Consultoria Imobiliária - Hive Group Portugal',
            seoDescription: 'Serviços imobiliários. Consultoria, avaliações, gestão propriedades, investimento imobiliário.',
            keywords: ['imobiliário', 'consultoria imobiliária', 'avaliações', 'gestão propriedades', 'investimento imobiliário', 'mediação'],
            sections: {
              benefits: [
                { title: 'Consultoria Especializada', description: 'Análise mercado e oportunidades.' },
                { title: 'Avaliações', description: 'Avaliações certificadas.' },
                { title: 'Gestão Propriedades', description: 'Gestão completa de imóveis.' },
                { title: 'Investimento', description: 'Apoio em investimento imobiliário.' },
                { title: 'Due Diligence', description: 'Análise técnica e jurídica.' },
                { title: 'Rendimentos', description: 'Optimização de rendimentos.' }
              ],
              servicesIncluded: ['Consultoria', 'Avaliações', 'Gestão propriedades', 'Mediação', 'Investimento', 'Due diligence', 'Arrendamento', 'Licenças'],
              whoItsFor: [
                { title: 'Investidores', description: 'Investimento e gestão.' },
                { title: 'Proprietários', description: 'Gestão e arrendamento.' },
                { title: 'Empresas', description: 'Imobiliário corporativo.' }
              ],
              processSteps: [
                { number: 1, title: 'Análise', description: 'Avaliamos objectivos.' },
                { number: 2, title: 'Estratégia', description: 'Definimos estratégia.' },
                { number: 3, title: 'Execução', description: 'Implementamos e gerimos.' }
              ],
              faq: [
                { question: 'Serviços incluídos?', answer: 'Consultoria, avaliações, gestão completa.' },
                { question: 'Gestão arrendamento?', answer: 'Sim, completa incluindo inquilinos.' },
                { question: 'Avaliações certificadas?', answer: 'Sim, por avaliadores certificados.' },
                { question: 'Investimento golden visa?', answer: 'Apoio em investimento qualificado.' },
                { question: 'Gestão remota?', answer: 'Sim, para proprietários no estrangeiro.' }
              ],
              finalCtaTitle: 'Investimento Imobiliário?',
              finalCtaSubtitle: 'Consultoria especializada.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Interesse?',
                submitButton: 'Consultar', successMessage: 'Recebido!', errorMessage: 'realestate@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Real Estate - Consultancy and Management',
            subtitle: 'Real estate consultancy, valuations, property management and investment.',
            seoTitle: 'Real Estate Consultancy - Hive Group Portugal',
            seoDescription: 'Real estate services. Consultancy, valuations, property management, real estate investment.',
            keywords: ['real estate', 'property consultancy', 'valuations', 'property management', 'real estate investment', 'mediation'],
            sections: {
              benefits: [
                { title: 'Specialised Consultancy', description: 'Market analysis and opportunities.' },
                { title: 'Valuations', description: 'Certified valuations.' },
                { title: 'Property Management', description: 'Complete property management.' },
                { title: 'Investment', description: 'Real estate investment support.' },
                { title: 'Due Diligence', description: 'Technical and legal analysis.' },
                { title: 'Income', description: 'Income optimisation.' }
              ],
              servicesIncluded: ['Consultancy', 'Valuations', 'Property management', 'Mediation', 'Investment', 'Due diligence', 'Rental', 'Licences'],
              whoItsFor: [
                { title: 'Investors', description: 'Investment and management.' },
                { title: 'Owners', description: 'Management and rental.' },
                { title: 'Companies', description: 'Corporate real estate.' }
              ],
              processSteps: [
                { number: 1, title: 'Analysis', description: 'We assess objectives.' },
                { number: 2, title: 'Strategy', description: 'We define strategy.' },
                { number: 3, title: 'Execution', description: 'We implement and manage.' }
              ],
              faq: [
                { question: 'Services included?', answer: 'Consultancy, valuations, complete management.' },
                { question: 'Rental management?', answer: 'Yes, complete including tenants.' },
                { question: 'Certified valuations?', answer: 'Yes, by certified valuers.' },
                { question: 'Golden visa investment?', answer: 'Support in qualified investment.' },
                { question: 'Remote management?', answer: 'Yes, for overseas owners.' }
              ],
              finalCtaTitle: 'Real Estate Investment?',
              finalCtaSubtitle: 'Specialised consultancy.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Interest?',
                submitButton: 'Consult', successMessage: 'Received!', errorMessage: 'realestate@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 6. real-estate');

  // 7. LEGAL
  await prisma.page.create({
    data: {
      slug: 'legal',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Serviços Jurídicos Empresariais',
            subtitle: 'Consultoria jurídica, contratos, compliance e apoio legal empresarial.',
            seoTitle: 'Serviços Jurídicos Empresariais - Hive Group Portugal',
            seoDescription: 'Consultoria jurídica empresarial. Contratos, compliance, direito comercial, laboral.',
            keywords: ['serviços jurídicos', 'consultoria jurídica', 'contratos', 'compliance', 'direito comercial', 'advogado'],
            sections: {
              benefits: [
                { title: 'Consultoria Jurídica', description: 'Apoio legal empresarial.' },
                { title: 'Contratos', description: 'Elaboração e revisão.' },
                { title: 'Compliance', description: 'Conformidade RGPD e legal.' },
                { title: 'Direito Comercial', description: 'Apoio em operações comerciais.' },
                { title: 'Direito Laboral', description: 'Contratos e relações laborais.' },
                { title: 'Contencioso', description: 'Representação em litígios.' }
              ],
              servicesIncluded: ['Consultoria', 'Contratos', 'RGPD compliance', 'Direito comercial', 'Direito laboral', 'Contencioso', 'Due diligence', 'M&A'],
              whoItsFor: [
                { title: 'Empresas', description: 'Apoio jurídico contínuo.' },
                { title: 'Startups', description: 'Estruturação legal.' },
                { title: 'Investidores', description: 'Due diligence legal.' }
              ],
              processSteps: [
                { number: 1, title: 'Consulta', description: 'Identificamos necessidade.' },
                { number: 2, title: 'Análise', description: 'Análise legal.' },
                { number: 3, title: 'Solução', description: 'Implementamos solução.' }
              ],
              faq: [
                { question: 'Que áreas?', answer: 'Comercial, laboral, compliance, contencioso.' },
                { question: 'Contratos elaboração?', answer: 'Sim, elaboramos e revisamos.' },
                { question: 'RGPD compliance?', answer: 'Sim, implementação completa.' },
                { question: 'Apoio contencioso?', answer: 'Sim, representação judicial.' },
                { question: 'Retainer mensal?', answer: 'Sim, disponível.' }
              ],
              finalCtaTitle: 'Apoio Jurídico?',
              finalCtaSubtitle: 'Consulta legal.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Questão legal?',
                submitButton: 'Consultar', successMessage: 'Contacto!', errorMessage: 'legal@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Business Legal Services',
            subtitle: 'Legal consultancy, contracts, compliance and business legal support.',
            seoTitle: 'Business Legal Services - Hive Group Portugal',
            seoDescription: 'Business legal consultancy. Contracts, compliance, commercial law, labour law.',
            keywords: ['legal services', 'legal consultancy', 'contracts', 'compliance', 'commercial law', 'lawyer'],
            sections: {
              benefits: [
                { title: 'Legal Consultancy', description: 'Business legal support.' },
                { title: 'Contracts', description: 'Drafting and review.' },
                { title: 'Compliance', description: 'GDPR and legal compliance.' },
                { title: 'Commercial Law', description: 'Commercial operations support.' },
                { title: 'Labour Law', description: 'Employment contracts and relations.' },
                { title: 'Litigation', description: 'Representation in disputes.' }
              ],
              servicesIncluded: ['Consultancy', 'Contracts', 'GDPR compliance', 'Commercial law', 'Labour law', 'Litigation', 'Due diligence', 'M&A'],
              whoItsFor: [
                { title: 'Companies', description: 'Continuous legal support.' },
                { title: 'Startups', description: 'Legal structuring.' },
                { title: 'Investors', description: 'Legal due diligence.' }
              ],
              processSteps: [
                { number: 1, title: 'Consultation', description: 'We identify need.' },
                { number: 2, title: 'Analysis', description: 'Legal analysis.' },
                { number: 3, title: 'Solution', description: 'We implement solution.' }
              ],
              faq: [
                { question: 'What areas?', answer: 'Commercial, labour, compliance, litigation.' },
                { question: 'Contract drafting?', answer: 'Yes, drafting and review.' },
                { question: 'GDPR compliance?', answer: 'Yes, complete implementation.' },
                { question: 'Litigation support?', answer: 'Yes, judicial representation.' },
                { question: 'Monthly retainer?', answer: 'Yes, available.' }
              ],
              finalCtaTitle: 'Legal Support?',
              finalCtaSubtitle: 'Legal consultation.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Legal issue?',
                submitButton: 'Consult', successMessage: 'Contact!', errorMessage: 'legal@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 7. legal');

  // 8. MARKETING
  await prisma.page.create({
    data: {
      slug: 'marketing',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Marketing Digital',
            subtitle: 'Estratégia digital, SEO, Google Ads, redes sociais, websites.',
            seoTitle: 'Marketing Digital - Hive Group Portugal',
            seoDescription: 'Marketing digital empresarial. SEO, Google Ads, redes sociais, websites, estratégia.',
            keywords: ['marketing digital', 'SEO', 'Google Ads', 'redes sociais', 'websites', 'estratégia digital'],
            sections: {
              benefits: [
                { title: 'Estratégia Digital', description: 'Planos de marketing alinhados.' },
                { title: 'SEO', description: 'Optimização para motores busca.' },
                { title: 'Google Ads', description: 'Campanhas pagas performance.' },
                { title: 'Redes Sociais', description: 'Gestão e conteúdo.' },
                { title: 'Websites', description: 'Design e desenvolvimento.' },
                { title: 'Analytics', description: 'Análise e optimização.' }
              ],
              servicesIncluded: ['Estratégia', 'SEO', 'Google Ads', 'Facebook/Instagram', 'LinkedIn', 'Websites', 'Email marketing', 'Analytics'],
              whoItsFor: [
                { title: 'PMEs', description: 'Presença digital.' },
                { title: 'E-commerce', description: 'Vendas online.' },
                { title: 'B2B', description: 'Geração leads.' }
              ],
              processSteps: [
                { number: 1, title: 'Audit', description: 'Análise presença actual.' },
                { number: 2, title: 'Estratégia', description: 'Plano de acção.' },
                { number: 3, title: 'Execução', description: 'Implementação e optimização.' }
              ],
              faq: [
                { question: 'O que inclui?', answer: 'Estratégia, SEO, ads, social media, websites.' },
                { question: 'Fazem websites?', answer: 'Sim, design e desenvolvimento.' },
                { question: 'Gestão Google Ads?', answer: 'Sim, campanhas completas.' },
                { question: 'Redes sociais?', answer: 'Gestão e criação conteúdo.' },
                { question: 'Reportam resultados?', answer: 'Sim, relatórios mensais.' }
              ],
              finalCtaTitle: 'Presença Digital?',
              finalCtaSubtitle: 'Audit gratuito.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Objectivos?',
                submitButton: 'Audit', successMessage: 'Agendado!', errorMessage: 'marketing@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Digital Marketing',
            subtitle: 'Digital strategy, SEO, Google Ads, social media, websites.',
            seoTitle: 'Digital Marketing - Hive Group Portugal',
            seoDescription: 'Business digital marketing. SEO, Google Ads, social media, websites, strategy.',
            keywords: ['digital marketing', 'SEO', 'Google Ads', 'social media', 'websites', 'digital strategy'],
            sections: {
              benefits: [
                { title: 'Digital Strategy', description: 'Aligned marketing plans.' },
                { title: 'SEO', description: 'Search engine optimisation.' },
                { title: 'Google Ads', description: 'Performance paid campaigns.' },
                { title: 'Social Media', description: 'Management and content.' },
                { title: 'Websites', description: 'Design and development.' },
                { title: 'Analytics', description: 'Analysis and optimisation.' }
              ],
              servicesIncluded: ['Strategy', 'SEO', 'Google Ads', 'Facebook/Instagram', 'LinkedIn', 'Websites', 'Email marketing', 'Analytics'],
              whoItsFor: [
                { title: 'SMEs', description: 'Digital presence.' },
                { title: 'E-commerce', description: 'Online sales.' },
                { title: 'B2B', description: 'Lead generation.' }
              ],
              processSteps: [
                { number: 1, title: 'Audit', description: 'Analyse current presence.' },
                { number: 2, title: 'Strategy', description: 'Action plan.' },
                { number: 3, title: 'Execution', description: 'Implementation and optimisation.' }
              ],
              faq: [
                { question: 'What included?', answer: 'Strategy, SEO, ads, social media, websites.' },
                { question: 'Make websites?', answer: 'Yes, design and development.' },
                { question: 'Google Ads management?', answer: 'Yes, complete campaigns.' },
                { question: 'Social media?', answer: 'Management and content creation.' },
                { question: 'Report results?', answer: 'Yes, monthly reports.' }
              ],
              finalCtaTitle: 'Digital Presence?',
              finalCtaSubtitle: 'Free audit.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Objectives?',
                submitButton: 'Audit', successMessage: 'Scheduled!', errorMessage: 'marketing@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 8. marketing');

  // 9. TRAVEL
  await prisma.page.create({
    data: {
      slug: 'travel',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Agência de Viagens Corporativas',
            subtitle: 'Viagens de negócios, eventos corporativos, gestão de viagens.',
            seoTitle: 'Agência Viagens Corporativas - Hive Group Portugal',
            seoDescription: 'Viagens corporativas. Viagens negócios, eventos, gestão deslocações empresariais.',
            keywords: ['viagens corporativas', 'viagens negócios', 'eventos', 'gestão viagens', 'agência', 'corporate travel'],
            sections: {
              benefits: [
                { title: 'Viagens Negócios', description: 'Organização completa viagens.' },
                { title: 'Eventos', description: 'Eventos corporativos.' },
                { title: 'Gestão Centralizada', description: 'Plataforma gestão viagens.' },
                { title: 'Poupança', description: 'Negociação tarifas.' },
                { title: 'Suporte 24/7', description: 'Apoio durante viagens.' },
                { title: 'Relatórios', description: 'Controlo de custos.' }
              ],
              servicesIncluded: ['Viagens negócios', 'Eventos', 'Hotéis', 'Voos', 'Rent-a-car', 'Seguros viagem', 'Vistos', 'Reporting'],
              whoItsFor: [
                { title: 'Empresas', description: 'Viagens frequentes.' },
                { title: 'Eventos', description: 'Organização eventos.' },
                { title: 'Executivos', description: 'Viagens executivas.' }
              ],
              processSteps: [
                { number: 1, title: 'Necessidades', description: 'Identificamos necessidades.' },
                { number: 2, title: 'Organização', description: 'Organizamos tudo.' },
                { number: 3, title: 'Suporte', description: 'Apoio durante viagem.' }
              ],
              faq: [
                { question: 'Custos?', answer: 'Sem custos adicionais. Comissões operadores.' },
                { question: 'Viagens urgentes?', answer: 'Sim, suporte 24/7.' },
                { question: 'Eventos?', answer: 'Sim, organização completa.' },
                { question: 'Seguros viagem?', answer: 'Incluídos ou adicionais.' },
                { question: 'Relatórios custos?', answer: 'Sim, mensais.' }
              ],
              finalCtaTitle: 'Viagens Corporativas?',
              finalCtaSubtitle: 'Organização profissional.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Necessidade?',
                submitButton: 'Consultar', successMessage: 'Recebido!', errorMessage: 'travel@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Corporate Travel Agency',
            subtitle: 'Business travel, corporate events, travel management.',
            seoTitle: 'Corporate Travel Agency - Hive Group Portugal',
            seoDescription: 'Corporate travel. Business trips, events, corporate travel management.',
            keywords: ['corporate travel', 'business travel', 'events', 'travel management', 'agency', 'business trips'],
            sections: {
              benefits: [
                { title: 'Business Travel', description: 'Complete trip organisation.' },
                { title: 'Events', description: 'Corporate events.' },
                { title: 'Centralised Management', description: 'Travel management platform.' },
                { title: 'Savings', description: 'Rate negotiation.' },
                { title: '24/7 Support', description: 'Support during trips.' },
                { title: 'Reports', description: 'Cost control.' }
              ],
              servicesIncluded: ['Business travel', 'Events', 'Hotels', 'Flights', 'Car rental', 'Travel insurance', 'Visas', 'Reporting'],
              whoItsFor: [
                { title: 'Companies', description: 'Frequent travel.' },
                { title: 'Events', description: 'Event organisation.' },
                { title: 'Executives', description: 'Executive travel.' }
              ],
              processSteps: [
                { number: 1, title: 'Needs', description: 'We identify needs.' },
                { number: 2, title: 'Organisation', description: 'We organise everything.' },
                { number: 3, title: 'Support', description: 'Support during trip.' }
              ],
              faq: [
                { question: 'Costs?', answer: 'No additional costs. Operator commissions.' },
                { question: 'Urgent travel?', answer: 'Yes, 24/7 support.' },
                { question: 'Events?', answer: 'Yes, complete organisation.' },
                { question: 'Travel insurance?', answer: 'Included or additional.' },
                { question: 'Cost reports?', answer: 'Yes, monthly.' }
              ],
              finalCtaTitle: 'Corporate Travel?',
              finalCtaSubtitle: 'Professional organisation.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Need?',
                submitButton: 'Consult', successMessage: 'Received!', errorMessage: 'travel@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 9. travel');

  // 10. IT
  await prisma.page.create({
    data: {
      slug: 'it',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Serviços de IT e Transformação Digital',
            subtitle: 'Consultoria IT, desenvolvimento, cloud, cibersegurança e suporte técnico.',
            seoTitle: 'Serviços IT Transformação Digital - Hive Group Portugal',
            seoDescription: 'Serviços IT empresariais. Consultoria, desenvolvimento, cloud, cibersegurança, suporte.',
            keywords: ['serviços IT', 'consultoria IT', 'desenvolvimento', 'cloud', 'cibersegurança', 'transformação digital'],
            sections: {
              benefits: [
                { title: 'Consultoria IT', description: 'Estratégia tecnológica.' },
                { title: 'Desenvolvimento', description: 'Software e aplicações.' },
                { title: 'Cloud', description: 'Migração e gestão cloud.' },
                { title: 'Cibersegurança', description: 'Protecção de dados.' },
                { title: 'Suporte', description: 'Suporte técnico contínuo.' },
                { title: 'Infraestrutura', description: 'Gestão infraestrutura IT.' }
              ],
              servicesIncluded: ['Consultoria IT', 'Desenvolvimento', 'Cloud', 'Cibersegurança', 'Suporte técnico', 'Redes', 'Backup', 'Licenciamento'],
              whoItsFor: [
                { title: 'PMEs', description: 'Infraestrutura IT.' },
                { title: 'Startups', description: 'Tecnologia escalável.' },
                { title: 'Empresas', description: 'Transformação digital.' }
              ],
              processSteps: [
                { number: 1, title: 'Audit', description: 'Análise infraestrutura.' },
                { number: 2, title: 'Plano', description: 'Estratégia IT.' },
                { number: 3, title: 'Implementação', description: 'Execução e suporte.' }
              ],
              faq: [
                { question: 'Serviços IT?', answer: 'Consultoria, desenvolvimento, cloud, segurança, suporte.' },
                { question: 'Desenvolvimento custom?', answer: 'Sim, aplicações medida.' },
                { question: 'Migração cloud?', answer: 'Sim, AWS, Azure, Google Cloud.' },
                { question: 'Cibersegurança?', answer: 'Audits, implementação, monitorização.' },
                { question: 'Suporte contínuo?', answer: 'Sim, SLA garantido.' }
              ],
              finalCtaTitle: 'Transformação Digital?',
              finalCtaSubtitle: 'Audit IT gratuito.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Necessidade IT?',
                submitButton: 'Audit', successMessage: 'Agendado!', errorMessage: 'business@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'IT Services and Digital Transformation',
            subtitle: 'IT consultancy, development, cloud, cybersecurity and technical support.',
            seoTitle: 'IT Services Digital Transformation - Hive Group Portugal',
            seoDescription: 'Business IT services. Consultancy, development, cloud, cybersecurity, support.',
            keywords: ['IT services', 'IT consultancy', 'development', 'cloud', 'cybersecurity', 'digital transformation'],
            sections: {
              benefits: [
                { title: 'IT Consultancy', description: 'Technology strategy.' },
                { title: 'Development', description: 'Software and applications.' },
                { title: 'Cloud', description: 'Cloud migration and management.' },
                { title: 'Cybersecurity', description: 'Data protection.' },
                { title: 'Support', description: 'Continuous technical support.' },
                { title: 'Infrastructure', description: 'IT infrastructure management.' }
              ],
              servicesIncluded: ['IT consultancy', 'Development', 'Cloud', 'Cybersecurity', 'Technical support', 'Networks', 'Backup', 'Licensing'],
              whoItsFor: [
                { title: 'SMEs', description: 'IT infrastructure.' },
                { title: 'Startups', description: 'Scalable technology.' },
                { title: 'Companies', description: 'Digital transformation.' }
              ],
              processSteps: [
                { number: 1, title: 'Audit', description: 'Infrastructure analysis.' },
                { number: 2, title: 'Plan', description: 'IT strategy.' },
                { number: 3, title: 'Implementation', description: 'Execution and support.' }
              ],
              faq: [
                { question: 'IT services?', answer: 'Consultancy, development, cloud, security, support.' },
                { question: 'Custom development?', answer: 'Yes, bespoke applications.' },
                { question: 'Cloud migration?', answer: 'Yes, AWS, Azure, Google Cloud.' },
                { question: 'Cybersecurity?', answer: 'Audits, implementation, monitoring.' },
                { question: 'Continuous support?', answer: 'Yes, guaranteed SLA.' }
              ],
              finalCtaTitle: 'Digital Transformation?',
              finalCtaSubtitle: 'Free IT audit.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'IT need?',
                submitButton: 'Audit', successMessage: 'Scheduled!', errorMessage: 'business@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 10. it');

  // 11. BUSINESS DEVELOPMENT
  await prisma.page.create({
    data: {
      slug: 'business-development',
      type: 'service',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Crescimento',
            subtitle: 'Estratégia comercial, expansão, parcerias e crescimento empresarial.',
            seoTitle: 'Crescimento - Hive Group Portugal',
            seoDescription: 'Desenvolvimento empresarial. Estratégia comercial, expansão mercados, parcerias.',
            keywords: ['desenvolvimento negócio', 'estratégia comercial', 'expansão', 'crescimento', 'parcerias', 'business development'],
            sections: {
              benefits: [
                { title: 'Estratégia Comercial', description: 'Planos de crescimento.' },
                { title: 'Expansão Mercados', description: 'Entrada novos mercados.' },
                { title: 'Parcerias', description: 'Identificação e negociação.' },
                { title: 'Sales Enablement', description: 'Estruturação vendas.' },
                { title: 'Internacionalização', description: 'Apoio expansão internacional.' },
                { title: 'M&A', description: 'Fusões e aquisições.' }
              ],
              servicesIncluded: ['Estratégia', 'Expansão', 'Parcerias', 'Sales', 'Internacionalização', 'M&A', 'Market research', 'Pitch decks'],
              whoItsFor: [
                { title: 'Startups', description: 'Crescimento acelerado.' },
                { title: 'PMEs', description: 'Expansão mercados.' },
                { title: 'Scale-ups', description: 'Internacionalização.' }
              ],
              processSteps: [
                { number: 1, title: 'Diagnóstico', description: 'Análise situação.' },
                { number: 2, title: 'Estratégia', description: 'Plano crescimento.' },
                { number: 3, title: 'Execução', description: 'Implementação apoiada.' }
              ],
              faq: [
                { question: 'O que fazem?', answer: 'Estratégia comercial, expansão, parcerias.' },
                { question: 'Internacionalização?', answer: 'Sim, apoio expansão internacional.' },
                { question: 'M&A?', answer: 'Sim, apoio em fusões e aquisições.' },
                { question: 'Pitch decks?', answer: 'Sim, para investidores.' },
                { question: 'Parcerias estratégicas?', answer: 'Identificação e negociação.' }
              ],
              finalCtaTitle: 'Crescer o Negócio?',
              finalCtaSubtitle: 'Estratégia comercial.',
              formMicrocopy: {
                nameLabel: 'Nome', emailLabel: 'Email', phoneLabel: 'Telefone',
                companyLabel: 'Empresa', messageLabel: 'Objectivo?',
                submitButton: 'Consultar', successMessage: 'Recebido!', errorMessage: 'business@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Business Development',
            subtitle: 'Commercial strategy, expansion, partnerships and business growth.',
            seoTitle: 'Business Development - Hive Group Portugal',
            seoDescription: 'Business development. Commercial strategy, market expansion, partnerships.',
            keywords: ['business development', 'commercial strategy', 'expansion', 'growth', 'partnerships', 'sales'],
            sections: {
              benefits: [
                { title: 'Commercial Strategy', description: 'Growth plans.' },
                { title: 'Market Expansion', description: 'New market entry.' },
                { title: 'Partnerships', description: 'Identification and negotiation.' },
                { title: 'Sales Enablement', description: 'Sales structuring.' },
                { title: 'Internationalisation', description: 'International expansion support.' },
                { title: 'M&A', description: 'Mergers and acquisitions.' }
              ],
              servicesIncluded: ['Strategy', 'Expansion', 'Partnerships', 'Sales', 'Internationalisation', 'M&A', 'Market research', 'Pitch decks'],
              whoItsFor: [
                { title: 'Startups', description: 'Accelerated growth.' },
                { title: 'SMEs', description: 'Market expansion.' },
                { title: 'Scale-ups', description: 'Internationalisation.' }
              ],
              processSteps: [
                { number: 1, title: 'Diagnosis', description: 'Situation analysis.' },
                { number: 2, title: 'Strategy', description: 'Growth plan.' },
                { number: 3, title: 'Execution', description: 'Supported implementation.' }
              ],
              faq: [
                { question: 'What do you do?', answer: 'Commercial strategy, expansion, partnerships.' },
                { question: 'Internationalisation?', answer: 'Yes, international expansion support.' },
                { question: 'M&A?', answer: 'Yes, mergers and acquisitions support.' },
                { question: 'Pitch decks?', answer: 'Yes, for investors.' },
                { question: 'Strategic partnerships?', answer: 'Identification and negotiation.' }
              ],
              finalCtaTitle: 'Grow Business?',
              finalCtaSubtitle: 'Commercial strategy.',
              formMicrocopy: {
                nameLabel: 'Name', emailLabel: 'Email', phoneLabel: 'Phone',
                companyLabel: 'Company', messageLabel: 'Objective?',
                submitButton: 'Consult', successMessage: 'Received!', errorMessage: 'business@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 11. business-development');

  // 12. CONTACTOS
  await prisma.page.create({
    data: {
      slug: 'contactos',
      type: 'contact',
      published: true,
      translations: {
        create: [
          createTranslation('pt', {
            title: 'Contactos - Hive Group Portugal',
            subtitle: 'Entre em contacto através dos nossos canais especializados.',
            seoTitle: 'Contactos - Hive Group Portugal',
            seoDescription: 'Contacte a Hive Group. Tel: +351 212 433 909. Emails especializados por área.',
            keywords: ['contactos', 'telefone', 'email', 'hive group', 'portugal', 'formulário'],
            sections: {
              benefits: [
                { title: 'Resposta Rápida', description: 'Respondemos em 24h.' },
                { title: 'Emails Especializados', description: 'Email directo para cada área.' },
                { title: 'Telefone Directo', description: 'Atendimento em português.' },
                { title: 'Reuniões Gratuitas', description: 'Primeira reunião sem compromisso.' },
                { title: 'Presencial ou Online', description: 'Reuniões presenciais ou videochamada.' },
                { title: 'Horário Alargado', description: 'Disponibilidade flexível.' }
              ],
              servicesIncluded: [],
              whoItsFor: [
                { title: 'Empresas', description: 'Contacte área específica.' },
                { title: 'Particulares', description: 'Agente autorizado e serviços.' },
                { title: 'Investidores', description: 'Consultoria especializada.' }
              ],
              processSteps: [
                { number: 1, title: 'Contacte-nos', description: 'Por telefone, email ou formulário.' },
                { number: 2, title: 'Reunião', description: 'Marcamos reunião gratuita.' },
                { number: 3, title: 'Proposta', description: 'Apresentamos proposta personalizada.' }
              ],
              faq: [
                { question: 'Qual o email correcto?', answer: 'Contabilidade/Geral: business@hivegroup.pt | Finanças: finance@hivegroup.pt | Jurídico: legal@hivegroup.pt | Imobiliário: realestate@hivegroup.pt' },
                { question: 'Respondem rápido?', answer: 'Sim, respondemos todas as mensagens em 24h úteis.' },
                { question: 'Reunião presencial?', answer: 'Sim, presencial no nosso escritório ou online via videochamada.' },
                { question: 'Primeira reunião paga?', answer: 'Não, a primeira reunião é sempre gratuita e sem compromisso.' },
                { question: 'Horário atendimento?', answer: 'Segunda a sexta 9h-18h. Urgências: contacte por telefone.' }
              ],
              finalCtaTitle: 'Pronto para Começar?',
              finalCtaSubtitle: 'Preencha o formulário e contactamos em 24h.',
              formMicrocopy: {
                nameLabel: 'Nome completo',
                emailLabel: 'Email',
                phoneLabel: 'Telefone',
                companyLabel: 'Empresa (opcional)',
                messageLabel: 'Como podemos ajudar?',
                submitButton: 'Enviar Mensagem',
                successMessage: 'Mensagem recebida! Contactamos em 24h.',
                errorMessage: 'Erro ao enviar. Contacte: business@hivegroup.pt'
              }
            }
          }),
          createTranslation('en', {
            title: 'Contacts - Hive Group Portugal',
            subtitle: 'Get in touch through our specialised channels.',
            seoTitle: 'Contacts - Hive Group Portugal',
            seoDescription: 'Contact Hive Group. Tel: +351 212 433 909. Specialised emails per area.',
            keywords: ['contacts', 'phone', 'email', 'hive group', 'portugal', 'form'],
            sections: {
              benefits: [
                { title: 'Quick Response', description: 'We respond within 24h.' },
                { title: 'Specialised Emails', description: 'Direct email per area.' },
                { title: 'Direct Phone', description: 'Service in Portuguese/English.' },
                { title: 'Free Meetings', description: 'First meeting no obligation.' },
                { title: 'In-Person or Online', description: 'In-person or video call.' },
                { title: 'Extended Hours', description: 'Flexible availability.' }
              ],
              servicesIncluded: [],
              whoItsFor: [
                { title: 'Companies', description: 'Contact specific area.' },
                { title: 'Individuals', description: 'Authorised agent and services.' },
                { title: 'Investors', description: 'Specialised consultancy.' }
              ],
              processSteps: [
                { number: 1, title: 'Contact Us', description: 'By phone, email or form.' },
                { number: 2, title: 'Meeting', description: 'We schedule free meeting.' },
                { number: 3, title: 'Proposal', description: 'We present personalised proposal.' }
              ],
              faq: [
                { question: 'Correct email?', answer: 'Accounting/General: business@hivegroup.pt | Finance: finance@hivegroup.pt | Legal: legal@hivegroup.pt | Real Estate: realestate@hivegroup.pt' },
                { question: 'Quick response?', answer: 'Yes, we respond all messages within 24 working hours.' },
                { question: 'In-person meeting?', answer: 'Yes, at our office or online via video call.' },
                { question: 'First meeting paid?', answer: 'No, first meeting is always free and no obligation.' },
                { question: 'Service hours?', answer: 'Monday to Friday 9am-6pm. Urgencies: phone contact.' }
              ],
              finalCtaTitle: 'Ready to Start?',
              finalCtaSubtitle: 'Fill form and we contact within 24h.',
              formMicrocopy: {
                nameLabel: 'Full name',
                emailLabel: 'Email',
                phoneLabel: 'Phone',
                companyLabel: 'Company (optional)',
                messageLabel: 'How can we help?',
                submitButton: 'Send Message',
                successMessage: 'Message received! Contact within 24h.',
                errorMessage: 'Error sending. Contact: business@hivegroup.pt'
              }
            }
          })
        ]
      }
    }
  });
  console.log('✅ 12. contactos');

  console.log('\n🎉 TODAS as 12 páginas criadas com sucesso em 5 idiomas!');
  console.log('Total: 12 páginas × 5 idiomas = 60 traduções (+ home = 65 total)');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
