# 📊 Modelo de Conteúdo - Hive Group Website

## 🎯 Visão Geral

Este documento descreve a estrutura completa de conteúdo para o site institucional multiidioma da Hive Group.

---

## 🗄️ Estrutura de Dados

### 1. **Pages** (Páginas de Serviços)

#### Tabela: `pages`
```sql
CREATE TABLE `pages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(191) UNIQUE NOT NULL,
  `type` VARCHAR(50) DEFAULT 'service',
  `published` BOOLEAN DEFAULT TRUE,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Tabela: `page_translations`
```sql
CREATE TABLE `page_translations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `pageId` INT NOT NULL,
  `locale` VARCHAR(5) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` TEXT,
  `sectionsJson` LONGTEXT NOT NULL,
  `seoTitle` VARCHAR(60) NOT NULL,
  `seoDescription` TEXT NOT NULL,
  `keywordsJson` TEXT NOT NULL,
  UNIQUE KEY `page_locale_unique` (`pageId`, `locale`),
  FOREIGN KEY (`pageId`) REFERENCES `pages`(`id`) ON DELETE CASCADE
);
```

---

### 2. **Posts** (Blog)

#### Tabela: `posts`
```sql
CREATE TABLE `posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(191) UNIQUE NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `published` BOOLEAN DEFAULT TRUE,
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Tabela: `post_translations`
```sql
CREATE TABLE `post_translations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `postId` INT NOT NULL,
  `locale` VARCHAR(5) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `excerpt` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `seoTitle` VARCHAR(60) NOT NULL,
  `seoDescription` TEXT NOT NULL,
  `featuredImage` VARCHAR(500),
  `faqJson` TEXT,
  UNIQUE KEY `post_locale_unique` (`postId`, `locale`),
  FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE CASCADE
);
```

---

## 📐 Estrutura JSON do `sectionsJson`

### Schema Obrigatório (Páginas de Serviço)

```typescript
interface PageSections {
  benefits: Benefit[];
  servicesIncluded: ServiceItem[];
  whoItsFor: TargetAudience[];
  processSteps: ProcessStep[];
  faq: FAQ[];
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  formMicrocopy: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface ServiceItem {
  name: string;
  description?: string;
}

interface TargetAudience {
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface FAQ {
  q: string; // question
  a: string; // answer
}
```

### Exemplo Real (PT):

```json
{
  "benefits": [
    {
      "title": "Certificação TOC",
      "description": "Contabilistas certificados pela Ordem dos TOC."
    },
    {
      "title": "Conformidade Fiscal",
      "description": "IVA, IRS, IRC processados correctamente."
    },
    {
      "title": "Relatórios Mensais",
      "description": "Balancetes e demonstrações financeiras ao dia."
    },
    {
      "title": "Portal Cliente 24/7",
      "description": "Acesso a documentos e estado fiscal a qualquer hora."
    },
    {
      "title": "Suporte Directo",
      "description": "Email e telefone dedicados à contabilidade."
    },
    {
      "title": "Preços Transparentes",
      "description": "Sem custos escondidos. Tudo incluído."
    }
  ],
  "servicesIncluded": [
    { "name": "Processamento de Faturação" },
    { "name": "Declarações IVA (trimestrais e mensais)" },
    { "name": "IRS e IRC anual" },
    { "name": "Balancetes mensais" },
    { "name": "Demonstrações financeiras" },
    { "name": "Apoio em auditorias" },
    { "name": "Consultoria fiscal" }
  ],
  "whoItsFor": [
    {
      "title": "Empresas Novas",
      "description": "Startups e negócios em fase inicial que precisam de estrutura contabilística desde o dia zero."
    },
    {
      "title": "PMEs Estabelecidas",
      "description": "Empresas que querem optimizar processos e ter conformidade fiscal garantida."
    },
    {
      "title": "Freelancers e Trabalhadores Independentes",
      "description": "Profissionais que precisam de apoio TOC para recibos verdes e IRS."
    }
  ],
  "processSteps": [
    {
      "step": 1,
      "title": "Reunião Inicial",
      "description": "Analisamos a situação actual da sua empresa e definimos as necessidades."
    },
    {
      "step": 2,
      "title": "Configuração",
      "description": "Criamos acessos ao portal, configuramos plano de contas e iniciamos processamento."
    },
    {
      "step": 3,
      "title": "Gestão Contínua",
      "description": "Processamento mensal de documentos, declarações e relatórios automáticos."
    }
  ],
  "faq": [
    {
      "q": "Quanto custa o serviço de contabilidade?",
      "a": "Os nossos pacotes começam nos 150€/mês para empresas de pequeno volume. Contacte-nos para proposta personalizada."
    },
    {
      "q": "Quem são os contabilistas?",
      "a": "Todos os nossos contabilistas são certificados pela Ordem dos TOC e têm experiência mínima de 5 anos."
    },
    {
      "q": "Preciso de ir ao escritório?",
      "a": "Não. Tudo pode ser feito remotamente. Reuniões presenciais apenas se desejar."
    },
    {
      "q": "E se eu mudar de contabilista para vocês?",
      "a": "Tratamos de toda a transição. Pedimos os documentos ao antigo contabilista e fazemos a migração sem custos adicionais."
    },
    {
      "q": "Estão disponíveis para auditorias?",
      "a": "Sim. Preparamos toda a documentação e acompanhamos auditorias da AT ou revisores oficiais de contas."
    }
  ],
  "finalCtaTitle": "Pronto para ter contabilidade sem preocupações?",
  "finalCtaSubtitle": "Fale connosco e receba proposta em 24h.",
  "formMicrocopy": "Resposta garantida em 24h úteis."
}
```

---

## 🏠 Estrutura da Home Page

### Schema Especial (slug="home")

```typescript
interface HomeSections {
  hero: HeroSection;
  groupHive: GroupHiveSection;
  whyChoose: WhyChooseSection;
  howItWorks: HowItWorksSection;
  featuredServices: FeaturedServicesSection;
  faq: FAQSection;
  quickContact: QuickContactSection;
}

interface HeroSection {
  headline: string;
  subheadline: string;
  authorizedAgentBadge: {
    title: string;
    subtitle: string;
  };
}

interface GroupHiveSection {
  title: string;
  subtitle: string;
  areas: Area[];
}

interface Area {
  icon: string;
  name: string;
  description: string;
  link: string;
}

interface WhyChooseSection {
  title: string;
  subtitle: string;
  reasons: Reason[];
}

interface Reason {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksSection {
  title: string;
  subtitle: string;
  steps: Step[];
}

interface Step {
  number: number;
  title: string;
  description: string;
}

interface FeaturedServicesSection {
  title: string;
  subtitle: string;
  services: FeaturedService[];
}

interface FeaturedService {
  title: string;
  description: string;
  link: string;
  badge?: string;
}

interface FAQSection {
  title: string;
  questions: FAQ[];
}

interface QuickContactSection {
  title: string;
  phone: string;
  phoneNote: string;
  emails: ContactEmail[];
}

interface ContactEmail {
  area: string;
  email: string;
}
```

---

## 📝 Estrutura de Posts (Blog)

### Campos Obrigatórios

```typescript
interface PostTranslation {
  title: string;           // <=80 caracteres
  excerpt: string;         // <=200 caracteres
  content: string;         // HTML ou Markdown
  seoTitle: string;        // <=60 caracteres
  seoDescription: string;  // <=155 caracteres
  featuredImage?: string;  // URL da imagem destacada
  faqJson?: string;        // FAQ opcional no fim do artigo
}
```

### Exemplo de `faqJson`:

```json
[
  {
    "q": "Como funciona o cartão combustível?",
    "a": "O cartão é aceite em todas as estações Galp e BP em Portugal..."
  },
  {
    "q": "Qual o limite de crédito?",
    "a": "Definido consoante o volume de consumo estimado..."
  }
]
```

---

## 🔍 SEO por Idioma

### Limites e Boas Práticas

| Campo | Limite | Descrição |
|-------|--------|-----------|
| `seoTitle` | <=60 caracteres | Título na SERP do Google |
| `seoDescription` | <=155 caracteres | Descrição na SERP |
| `keywordsJson` | 6 keywords | Array JSON: `["keyword1", "keyword2", ...]` |

### Exemplo de `keywordsJson`:

```json
["contabilidade", "TOC", "IVA", "IRS", "IRC", "fiscal"]
```

---

## 🌍 Páginas Existentes

### 1. **Home** (`slug="home"`)
- Estrutura especial (ver schema acima)
- 7 secções: Hero, Grupo Hive, Porquê, Como Funciona, Serviços, FAQ, Contactos

### 2. **Serviços** (12 páginas)
| Slug | Título PT |
|------|-----------|
| `contabilidade` | Contabilidade Certificada TOC |
| `agente-autorizado` | Agente Autorizado Local do Cidadão |
| `finance` | Consultoria Financeira |
| `credit` | Crédito Empresarial |
| `insurance` | Seguros Empresariais |
| `real-estate` | Imobiliário Comercial |
| `legal` | Apoio Jurídico |
| `marketing` | Marketing Digital |
| `travel` | Viagens Corporativas |
| `it` | Soluções IT |
| `business-development` | Desenvolvimento de Negócio |
| `contactos` | Contactos |

### 3. **Blog** (12 posts iniciais)
- Categorias: Contabilidade, Finanças, Imobiliário, Negócios, Tecnologia
- Cada post tem 5 traduções

---

## 📊 Estatísticas de Conteúdo

```
Total de Páginas: 13
Total de Traduções de Páginas: 65 (13 × 5)

Total de Posts: 12
Total de Traduções de Posts: 60 (12 × 5)

Total de URLs: 125 (65 páginas + 60 posts)
Total de URLs com locale: 130 (incluindo /insights index)
```

---

## 🛠️ Ferramentas de Gestão

### Seed Scripts

```bash
# Seed completo (tudo)
npx ts-node prisma/seed.ts

# Seed apenas páginas
npx ts-node prisma/seed-all-12-pages.ts

# Seed apenas blog
npx ts-node prisma/seed-blog-posts.ts

# Adicionar traduções em falta
npx ts-node prisma/add-missing-translations.ts
```

### Queries Úteis

```typescript
// Buscar página com tradução
const page = await getPageBySlug('contabilidade', 'pt');

// Buscar todos os posts
const posts = await getAllPosts('en');

// Buscar post específico
const post = await getPostBySlug('cartao-combustivel-frotas-empresariais', 'fr');
```

---

## ✅ Validação de Conteúdo

### Checklist por Página

- [ ] 5 traduções completas (pt, en, fr, es, it)
- [ ] `sectionsJson` válido e consistente entre idiomas
- [ ] SEO completo (title, description, keywords)
- [ ] Limites respeitados (60 chars title, 155 desc)
- [ ] Keywords relevantes (6 por idioma)

### Checklist por Post

- [ ] 5 traduções completas
- [ ] Título <=80 caracteres
- [ ] Excerpt <=200 caracteres
- [ ] Conteúdo com mínimo 500 palavras (recomendado)
- [ ] SEO completo
- [ ] Imagem destacada (recomendado)

---

## 📚 Documentos Relacionados

- **Regras i18n:** `I18N_DB_RULES.md`
- **Workflow:** `CHANGE_WORKFLOW.md`
- **Schema Prisma:** `prisma/schema.prisma`
- **Utilities:** `lib/pages.ts`

---

_Última actualização: Janeiro 2025_
