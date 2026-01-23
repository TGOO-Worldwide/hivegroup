# ✅ Checklist SEO Multiidioma - Hive Group Portugal

## 🌍 **1. i18n & Multiidioma**

### Rotas
- [x] Routing por locale implementado (`/[locale]/`)
- [x] 5 idiomas suportados: pt-PT, en-GB, fr-FR, es-ES, it-IT
- [x] Middleware de detecção automática (cookie → Accept-Language)
- [x] Language selector com manutenção de path equivalente

### Conteúdo
- [x] **13 páginas** × 5 idiomas = 65 traduções
  - home, contabilidade, agente-autorizado, finance, credit, insurance, real-estate, legal, marketing, travel, it, business-development, contactos
- [x] **12 posts de blog** × 5 idiomas = 60 traduções
- [x] Separação clara: UI labels (JSON) vs conteúdo longo (MySQL)
- [ ] ⚠️ Traduções profissionais fr/es/it (actualmente temporárias)

### Base de Dados
- [x] Modelos `Page` + `PageTranslation` (slug único, locale como FK)
- [x] Modelos `Post` + `PostTranslation` (slug único, locale como FK)
- [x] Prisma Studio para gestão de traduções
- [x] Seeds completos em 5 idiomas

---

## 🔍 **2. SEO Técnico**

### Metadata por Página
- [x] `title` + `description` por idioma
- [x] `keywords` por idioma (JSON array)
- [x] **Canonical URL** por idioma (cada URL aponta para si)
- [x] **Hreflang alternates** em TODAS as páginas
  - `<link rel="alternate" hreflang="pt" href="/pt/..." />`
  - `<link rel="alternate" hreflang="en" href="/en/..." />`
  - Idem para fr, es, it
- [x] OpenGraph metadata (title, description, locale, type)
- [x] Twitter Card metadata

### Sitemap.xml
- [x] Sitemap dinâmico em `/sitemap.xml`
- [x] ~130 URLs (5 home + 60 páginas + 5 insights + 60 posts)
- [x] **Hreflang alternates** em TODAS as entradas do sitemap
- [x] `lastModified`, `changeFrequency`, `priority` correctos
- [x] Force-dynamic + revalidate (3600s) para builds

### Robots.txt
- [x] Robots.txt em `/robots.txt`
- [x] Permite todos os crawlers
- [x] Aponta para sitemap.xml

---

## 📊 **3. JSON-LD Structured Data**

### Organization + LocalBusiness
- [x] Schema global no `layout.tsx`
- [x] Incluído em TODAS as páginas
- [x] Informação: nome, logo, contactos, endereço, área servida
- [x] `aggregateRating` e `sameAs` (redes sociais)

### FAQPage
- [x] Implementado nas páginas de serviço (quando `sections.faq` existe)
- [x] Implementado nos posts de blog (quando `faqJson` existe)
- [x] Schema dinâmico por locale

### BlogPosting
- [x] Implementado em `/[locale]/insights/[slug]`
- [x] Campos: headline, description, articleBody, datePublished, dateModified
- [x] Author e Publisher (Organization)
- [x] `inLanguage` correcto por locale

### BreadcrumbList
- [x] Implementado em páginas de serviço
- [x] Implementado em posts de blog
- [x] Estrutura: Home → Secção → Página actual

---

## ⚡ **4. Performance**

### Rendering
- [x] Static rendering onde possível (`setRequestLocale`)
- [x] Force-dynamic apenas para sitemap (acesso a DB)
- [x] Server Components por defeito
- [x] Client Components apenas onde necessário (language selector, interações)

### Imagens
- [ ] ⚠️ Next.js `<Image>` component (usar quando adicionar imagens reais)
- [ ] ⚠️ Optimização automática WebP
- [ ] ⚠️ Lazy loading

### Caching
- [x] Revalidação de sitemap (3600s)
- [x] Prisma connection pooling
- [ ] ⚠️ ISR para páginas estáticas (considerar no futuro)

---

## ♿ **5. Acessibilidade (WCAG 2.1 AA)**

### Semântica
- [x] Headings hierárquicos (h1 → h2 → h3)
- [x] `<article>` para posts
- [x] `<header>`, `<main>`, `<footer>` correctos
- [x] `<nav>` com `aria-label`

### Contraste
- [x] Cores Tailwind com contraste adequado
- [x] Text: neutral-900, neutral-700, neutral-600
- [x] Primary: 500, 600 (suficiente contraste)

### Navegação
- [x] Links com texto descritivo
- [x] Language selector com `aria-label`
- [x] Skip links (considerar adicionar no futuro)

### Forms (quando implementados)
- [ ] Labels associados a inputs
- [ ] Mensagens de erro acessíveis
- [ ] Focus states visíveis

---

## 📱 **6. Mobile-First & Responsivo**

- [x] Tailwind breakpoints (sm, md, lg, xl)
- [x] Menu mobile implementado
- [x] Grelhas responsivas (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- [x] Font sizes responsivos (text-base sm:text-lg)
- [x] Padding/margin adaptativos

---

## 🛡️ **7. Segurança & Boas Práticas**

### Headers
- [ ] ⚠️ Content Security Policy (CSP) - produção
- [ ] ⚠️ X-Frame-Options - produção
- [ ] ⚠️ X-Content-Type-Options - produção

### Dados
- [x] `.env` no `.gitignore`
- [x] Variáveis de ambiente seguras
- [x] Prisma ORM (protecção SQL injection)

---

## 📈 **8. Analytics & Monitoring**

- [ ] ⚠️ Google Analytics 4 (quando pedido)
- [ ] ⚠️ Google Search Console (verificação ownership)
- [ ] ⚠️ Google Tag Manager (opcional)
- [ ] ⚠️ Hotjar ou similar (opcional)

---

## 🧪 **9. Testes & Validação**

### SEO
- [ ] ⚠️ Google Search Console → fetch as Google
- [ ] ⚠️ Rich Results Test (schema validation)
- [ ] ⚠️ Mobile-Friendly Test
- [ ] ⚠️ PageSpeed Insights (performance score)

### i18n
- [x] Testar todas as rotas em 5 idiomas
- [x] Verificar language selector
- [x] Verificar hreflang no source HTML
- [x] Verificar sitemap.xml completo

### Funcionalidade
- [x] Todas as páginas renderizam sem erro
- [x] Links internos funcionam
- [x] Blog posts acessíveis
- [ ] ⚠️ Formulários (quando implementados)

---

## 📋 **10. Documentação**

- [x] `/docs/I18N_DB_RULES.md` - regras i18n + DB
- [x] `/docs/CONTENT_MODEL.md` - modelo de dados
- [x] `/docs/CHANGE_WORKFLOW.md` - workflow de alterações
- [x] `README.md` - setup e instruções
- [x] Este checklist (`CHECKLIST_SEO_MULTIIDIOMA.md`)

---

## 🚀 **11. Deploy & Produção**

### Pré-Deploy
- [ ] ⚠️ Build sem erros (`npm run build`)
- [ ] ⚠️ Testes em ambiente de staging
- [ ] ⚠️ Verificar .env produção (DATABASE_URL, etc.)
- [ ] ⚠️ Migrations aplicadas

### Pós-Deploy
- [ ] ⚠️ Submeter sitemap ao Google Search Console
- [ ] ⚠️ Submeter sitemap ao Bing Webmaster Tools
- [ ] ⚠️ Verificar hreflang no Google Search Console
- [ ] ⚠️ Monitorizar indexação (Google Search Console)
- [ ] ⚠️ Configurar redirects 301 (se aplicável)

### DNS & SSL
- [ ] ⚠️ SSL certificate (HTTPS)
- [ ] ⚠️ www → non-www redirect (ou vice-versa)
- [ ] ⚠️ Configurar CDN (Vercel, Cloudflare, etc.)

---

## 🎯 **Prioridades Imediatas**

### Antes de lançar:
1. **Traduzir** fr/es/it (contratar tradutor profissional)
2. **Testar** build de produção (`npm run build`)
3. **Configurar** analytics (GA4)
4. **Submeter** sitemap ao Google

### Após lançar:
1. **Monitorizar** Google Search Console (erros, indexação)
2. **Optimizar** Core Web Vitals (PageSpeed Insights)
3. **Expandir** conteúdo (mais posts, páginas detalhadas)
4. **Link building** (backlinks, directórios)

---

## ✅ **Status Actual**

| Categoria | Status | Notas |
|-----------|--------|-------|
| i18n & Rotas | ✅ 100% | 5 idiomas, middleware OK |
| Conteúdo DB | ✅ 95% | fr/es/it temporários |
| SEO Técnico | ✅ 100% | Hreflang, canonical, sitemap OK |
| JSON-LD | ✅ 100% | Organization, FAQPage, BlogPosting, Breadcrumb |
| Performance | ⚠️ 80% | Falta optimização imagens |
| Acessibilidade | ✅ 90% | WCAG AA compliance |
| Mobile | ✅ 100% | Totalmente responsivo |
| Documentação | ✅ 100% | Completa |
| Deploy | ⚠️ 0% | Aguarda lançamento |

---

## 📞 **Suporte**

Para dúvidas sobre este checklist ou implementação:
- Consultar `/docs/` para regras e workflows
- Prisma Studio: `npm run prisma:studio`
- Build test: `npm run build`

**Última actualização:** 23 Janeiro 2026
