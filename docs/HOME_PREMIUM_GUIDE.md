# 🏠 Home Premium - Guia de Edição

## 📋 Visão Geral

A Home page foi implementada com visual premium (hexágonos dourados) e foco em conversão, mantendo a **Contabilidade como core**.

---

## 🗄️ Onde Editar Conteúdo (MySQL)

### Regra Obrigatória:
**TODO o conteúdo longo da Home vem do MySQL através de `PageTranslation`.**

### Como Editar via Prisma Studio:

```bash
npm run prisma:studio
```

1. Abrir [http://localhost:5555](http://localhost:5555)
2. Navegar para tabela `page_translations`
3. Filtrar por:
   - `pageId` = 1 (Home page)
   - `locale` = 'pt' (ou outro idioma)
4. Editar campo `sectionsJson`

### Estrutura do sectionsJson:

```json
{
  "hero": {
    "headline": "Título principal",
    "subheadline": "Subtítulo explicativo",
    "authorizedAgentBadge": {
      "title": "Agente Autorizado",
      "subtitle": "Local do Cidadão",
      "description": "Tratamos de documentos oficiais por si"
    }
  },
  "groupHive": {
    "title": "O Grupo Hive",
    "subtitle": "Soluções integradas em 9 áreas",
    "areas": [
      {
        "title": "Contabilidade",
        "description": "TOC certificados",
        "icon": "📊",
        "link": "/contabilidade"
      }
      // ... 8 áreas adicionais
    ]
  },
  "whyChoose": {
    "title": "Porque Escolher a Hive Group",
    "subtitle": "...",
    "reasons": [
      {
        "title": "Contabilistas Certificados (TOC)",
        "description": "..."
      }
      // ... 7 razões adicionais
    ]
  },
  "howItWorks": {
    "title": "Como Funciona",
    "subtitle": "...",
    "steps": [
      {
        "number": 1,
        "title": "Reunião Inicial Gratuita",
        "description": "..."
      }
      // ... 2 passos adicionais
    ]
  },
  "featuredServices": {
    "title": "Serviços em Destaque",
    "subtitle": "...",
    "services": [
      {
        "title": "Contabilidade Certificada",
        "description": "...",
        "features": ["TOC certificados", "IVA, IRS, IRC", "..."],
        "icon": "📊",
        "link": "/contabilidade",
        "highlight": true  // Primeiro serviço = destaque dourado
      }
      // ... 2 serviços adicionais
    ]
  },
  "faq": {
    "title": "Perguntas Frequentes",
    "questions": [
      {
        "question": "...",
        "answer": "..."
      }
      // ... 4 perguntas adicionais
    ]
  },
  "quickContact": {
    "title": "Contactos Rápidos",
    "phone": "+351 212 433 909",
    "phoneNote": "Chamada para rede móvel nacional",
    "emails": [
      {
        "department": "Contabilidade & Geral",
        "email": "business@hivegroup.pt"
      }
      // ... emails adicionais
    ]
  }
}
```

---

## 🎨 Onde Editar Labels UI (JSON)

### Regra Obrigatória:
**Apenas labels curtas (botões, menus) vêm dos ficheiros `/messages/{locale}.json`.**

### Ficheiros a editar:
- `/messages/pt.json`
- `/messages/en.json`
- `/messages/fr.json`
- `/messages/es.json`
- `/messages/it.json`

### Labels UI da Home:

```json
{
  "home": {
    "cta": {
      "meeting": "Marcar Reunião",     // Botão CTA primário
      "proposal": "Pedir Proposta"      // Botão CTA secundário
    },
    "exploreServices": "Explorar Serviços"
  }
}
```

**Nota:** Estas labels são iguais para todos os idiomas nas rotas (ex: `/pt/contactos`, `/en/contactos`).

---

## 🎯 Secções da Home Premium

### 1. **Hero Section** (Acima da dobra)
- **Componente:** `HeroPremium`
- **Conteúdo:** MySQL (`hero`)
- **CTAs:** 2 botões (labels do JSON)
- **Destaque:** Badge dourado "Agente Autorizado Local do Cidadão"

### 2. **O Grupo Hive** (Hexágonos)
- **Componente:** `HexagonGrid`
- **Conteúdo:** MySQL (`groupHive.areas`)
- **Visual:** 9 cards hexagonais com hover dourado
- **Áreas:** Finance, Credit, Insurance, Real Estate, Legal, Marketing, Travel, Business Dev, IT

### 3. **Porque Escolher**
- **Componente:** `WhyChooseSection`
- **Conteúdo:** MySQL (`whyChoose.reasons`)
- **Items:** 8 razões com badges numerados dourados

### 4. **Como Funciona**
- **Componente:** `HowItWorksSteps`
- **Conteúdo:** MySQL (`howItWorks.steps`)
- **Items:** 3 passos com números dourados e linha conectora

### 5. **Serviços em Destaque**
- **Componente:** `FeaturedServicesHome`
- **Conteúdo:** MySQL (`featuredServices.services`)
- **Destaque:** Contabilidade (primeiro, com ring dourado)
- **Items:** 3 serviços principais

### 6. **FAQ**
- **Componente:** `FAQAccordion`
- **Conteúdo:** MySQL (`faq.questions`)
- **Items:** 5 perguntas em acordeão

### 7. **Contactos Rápidos**
- **Componente:** `QuickContactsHome`
- **Conteúdo:** MySQL (`quickContact`)
- **Cards:** Telefone (dourado) + Emails especializados

---

## 🔄 Workflow de Atualização

### Para Atualizar Conteúdo Longo:

1. **Via Prisma Studio (Recomendado):**
   ```bash
   npm run prisma:studio
   ```
   - Navegar para `page_translations`
   - Filtrar `pageId=1`, `locale='pt'`
   - Editar `sectionsJson`
   - Salvar

2. **Via Script:**
   ```bash
   # Editar prisma/seed-home-premium.ts
   npx tsx prisma/seed-home-premium.ts
   ```

### Para Atualizar Labels UI:

1. Editar ficheiro `/messages/{locale}.json`
2. Reiniciar servidor dev:
   ```bash
   npm run dev
   ```

---

## 🌍 Multiidioma

### Importante:
- Cada idioma tem o seu próprio `sectionsJson` na base de dados
- Links internos preservam o locale automaticamente: `/${locale}/contabilidade`
- SEO: `hreflang` e `canonical` são gerados automaticamente

### Idiomas implementados:
- ✅ Português (pt-PT)
- ✅ Inglês UK (en-GB)
- ✅ Francês (fr-FR)
- ✅ Espanhol (es-ES)
- ✅ Italiano (it-IT)

---

## 📊 Estrutura de Dados

### Tabela: `pages`
| Campo | Valor Home |
|-------|------------|
| id | 1 |
| slug | home |
| type | home |
| published | true |

### Tabela: `page_translations`
| Campo | Descrição |
|-------|-----------|
| pageId | 1 (FK para pages) |
| locale | pt, en, fr, es, it |
| title | Título da página (SEO) |
| subtitle | Subtítulo (SEO) |
| **sectionsJson** | **TODO o conteúdo da home** |
| seoTitle | Meta title |
| seoDescription | Meta description |
| keywordsJson | Keywords SEO |

---

## 🎨 Visual Premium

### Elementos Dourados:
- ✅ Hero: Background gradient escuro + Badge dourado
- ✅ Hexágonos: Borders dourados no hover
- ✅ Números: Badges dourados (1, 2, 3...)
- ✅ Destaque Contabilidade: Ring dourado
- ✅ Contactos: Card telefone dourado

### Palette de Cores:
```css
/* Primário (Dourado) */
primary-400: #f5b214
primary-500: #e59c07
primary-600: #c67604

/* Neutro (Backgrounds) */
neutral-50: #f9fafb
neutral-900: #111827
```

---

## ✅ Checklist de Edição

Antes de editar a Home:

- [ ] Li `docs/I18N_DB_RULES.md`?
- [ ] Vou editar MySQL (conteúdo longo) ou JSON (labels UI)?
- [ ] Tenho conteúdo em **todos os 5 idiomas**?
- [ ] Testei em localhost após edição?
- [ ] Verifiquei que links preservam o locale?

---

## 📞 Suporte

Dúvidas sobre edição da Home:
- Consultar: `docs/I18N_DB_RULES.md`
- Consultar: `docs/CONTENT_MODEL.md`
- Email: business@hivegroup.pt

---

**Desenvolvido com foco em conversão e visual premium.**  
*Hive Group Portugal - Janeiro 2026*
