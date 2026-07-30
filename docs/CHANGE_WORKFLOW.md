# 🔄 Workflow de Alterações - Hive Group Website

## 🎯 Objectivo

Este documento define o processo **obrigatório** para qualquer alteração de conteúdo ou funcionalidade no site institucional multiidioma da Hive Group.

---

## ⚠️ REGRA CRÍTICA

### Antes de QUALQUER alteração, ler:

1. ✅ `I18N_DB_RULES.md` - Regras de internacionalização
2. ✅ `CONTENT_MODEL.md` - Estrutura de dados
3. ✅ `CHANGE_WORKFLOW.md` - Este documento
4. ✅ `AI_CONTENT_WORKFLOW.md` - **Obrigatório para edições de conteúdo** (seed-data.json, export, deploy)

**Coloca um lembrete no README:**
> "Qualquer edição deve respeitar i18n+DB. Não criar blocos de conteúdo sem tradução. Conteúdo editorial deve ficar em `prisma/seed-data.json` e sobe via seed no deploy."

---

## 📋 Tipos de Alterações

### 1. 🆕 Adicionar Nova Página de Serviço

#### Checklist:

- [ ] **1.1** Criar entrada na tabela `pages`
  ```sql
  INSERT INTO pages (slug, type, published) 
  VALUES ('novo-servico', 'service', TRUE);
  ```

- [ ] **1.2** Criar 5 traduções obrigatórias
  ```typescript
  const locales = ['pt', 'en', 'fr', 'es', 'it'];
  for (const locale of locales) {
    await prisma.pageTranslation.create({
      data: {
        pageId: newPage.id,
        locale,
        title: getTitleForLocale(locale),
        subtitle: getSubtitleForLocale(locale),
        sectionsJson: JSON.stringify(getSectionsForLocale(locale)),
        seoTitle: getSeoTitleForLocale(locale),
        seoDescription: getSeoDescriptionForLocale(locale),
        keywordsJson: JSON.stringify(getKeywordsForLocale(locale)),
      }
    });
  }
  ```

- [ ] **1.3** Validar estrutura `sectionsJson`
  - Deve ter: `benefits`, `servicesIncluded`, `whoItsFor`, `processSteps`, `faq`, `finalCtaTitle`, `finalCtaSubtitle`, `formMicrocopy`
  - Estrutura idêntica em todos os idiomas

- [ ] **1.4** Testar página em 5 idiomas
  ```bash
  curl -I http://localhost:3000/pt/novo-servico
  curl -I http://localhost:3000/en/novo-servico
  curl -I http://localhost:3000/fr/novo-servico
  curl -I http://localhost:3000/es/novo-servico
  curl -I http://localhost:3000/it/novo-servico
  ```

- [ ] **1.5** Verificar SEO
  - Hreflang alternates presentes
  - Canonical correcto
  - OpenGraph metadata

- [ ] **1.6** Actualizar sitemap
  - Reiniciar servidor para regenerar sitemap.xml
  - Verificar: `http://localhost:3000/sitemap.xml`

---

### 2. ✏️ Editar Conteúdo Existente

#### Checklist:

- [ ] **2.1** Identificar o idioma a editar
  ```sql
  SELECT * FROM page_translations 
  WHERE pageId = (SELECT id FROM pages WHERE slug = 'contabilidade')
    AND locale = 'pt';
  ```

- [ ] **2.2** Actualizar o campo necessário
  ```typescript
  await prisma.pageTranslation.update({
    where: {
      pageId_locale: {
        pageId: page.id,
        locale: 'pt',
      }
    },
    data: {
      title: 'Novo Título',
      // OU
      sectionsJson: JSON.stringify(newSections),
    }
  });
  ```

- [ ] **2.3** **Se alterar estrutura JSON:** Actualizar TODOS os idiomas
  ```typescript
  // ❌ ERRADO - Só actualizar PT
  // Se adicionar novo campo ao sectionsJson, TODOS devem ter

  // ✅ CORRECTO
  for (const locale of locales) {
    const current = await getPageBySlug(slug, locale);
    const sections = JSON.parse(current.translation.sectionsJson);
    sections.newField = getNewFieldForLocale(locale);
    
    await prisma.pageTranslation.update({
      where: { pageId_locale: { pageId: page.id, locale } },
      data: { sectionsJson: JSON.stringify(sections) }
    });
  }
  ```

- [ ] **2.4** Limpar cache e testar
  ```bash
  rm -rf .next
  npm run dev
  ```

---

### 3. 📝 Adicionar Novo Post ao Blog

#### Checklist:

- [ ] **3.1** Criar post na tabela `posts`
  ```typescript
  const post = await prisma.post.create({
    data: {
      slug: 'novo-artigo-contabilidade',
      category: 'Contabilidade',
      published: true,
    }
  });
  ```

- [ ] **3.2** Criar 5 traduções obrigatórias
  ```typescript
  for (const locale of locales) {
    await prisma.postTranslation.create({
      data: {
        postId: post.id,
        locale,
        title: getTitleForLocale(locale),
        excerpt: getExcerptForLocale(locale),
        content: getContentForLocale(locale), // HTML ou Markdown
        seoTitle: getSeoTitleForLocale(locale),
        seoDescription: getSeoDescriptionForLocale(locale),
        featuredImage: '/images/blog/novo-artigo.jpg',
        faqJson: JSON.stringify(getFaqForLocale(locale)), // Opcional
      }
    });
  }
  ```

- [ ] **3.3** Validar limites
  - Title: <=80 caracteres
  - Excerpt: <=200 caracteres
  - SEO Title: <=60 caracteres
  - SEO Description: <=155 caracteres
  - Content: Mínimo 500 palavras (recomendado)

- [ ] **3.4** Testar post em 5 idiomas
  ```bash
  curl -I http://localhost:3000/pt/insights/novo-artigo-contabilidade
  curl -I http://localhost:3000/en/insights/novo-artigo-contabilidade
  # ... etc
  ```

- [ ] **3.5** Verificar sitemap
  - Post aparece no sitemap.xml com alternates

---

### 4. 🔧 Adicionar Nova Secção a `sectionsJson`

#### Exemplo: Adicionar secção "testimonials"

- [ ] **4.1** Actualizar schema TypeScript
  ```typescript
  // components/service/ServicePageLayout.tsx
  interface PageSections {
    benefits: Benefit[];
    servicesIncluded: ServiceItem[];
    whoItsFor: TargetAudience[];
    processSteps: ProcessStep[];
    faq: FAQ[];
    testimonials: Testimonial[]; // ← NOVA SECÇÃO
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    formMicrocopy: string;
  }

  interface Testimonial {
    name: string;
    company: string;
    text: string;
    rating: number;
  }
  ```

- [ ] **4.2** Actualizar componente de renderização
  ```tsx
  // ServicePageLayout.tsx
  {sections.testimonials && (
    <TestimonialsSection testimonials={sections.testimonials} />
  )}
  ```

- [ ] **4.3** Actualizar TODAS as 65 traduções no DB
  ```typescript
  const pages = await prisma.page.findMany({
    include: { translations: true }
  });

  for (const page of pages) {
    for (const translation of page.translations) {
      const sections = JSON.parse(translation.sectionsJson);
      
      // Adicionar nova secção
      sections.testimonials = getTestimonialsForLocale(
        translation.locale,
        page.slug
      );

      await prisma.pageTranslation.update({
        where: { id: translation.id },
        data: { sectionsJson: JSON.stringify(sections) }
      });
    }
  }
  ```

- [ ] **4.4** Criar seed helper
  ```typescript
  // prisma/helpers/add-testimonials.ts
  export async function addTestimonialsToAllPages() {
    // ... lógica acima
  }
  ```

- [ ] **4.5** Testar em todas as páginas/idiomas

---

### 5. 🌐 Adicionar Novo Idioma (Exemplo: de-DE)

#### ⚠️ TAREFA MUITO COMPLEXA - Planeamento obrigatório

- [ ] **5.1** Actualizar `i18n.ts`
  ```typescript
  export const locales = ['pt', 'en', 'fr', 'es', 'it', 'de'] as const;
  ```

- [ ] **5.2** Criar `/messages/de.json`
  - Copiar estrutura de `pt.json`
  - Traduzir todas as UI strings

- [ ] **5.3** Adicionar traduções ao DB
  ```typescript
  // Para TODAS as 13 páginas
  for (const page of pages) {
    await prisma.pageTranslation.create({
      data: {
        pageId: page.id,
        locale: 'de',
        // ... todos os campos traduzidos
      }
    });
  }

  // Para TODOS os 12 posts
  for (const post of posts) {
    await prisma.postTranslation.create({
      data: {
        postId: post.id,
        locale: 'de',
        // ... todos os campos traduzidos
      }
    });
  }
  ```

- [ ] **5.4** Actualizar todas as metadata definitions
  ```typescript
  alternates: {
    languages: {
      'pt': '/pt/...',
      'en': '/en/...',
      'fr': '/fr/...',
      'es': '/es/...',
      'it': '/it/...',
      'de': '/de/...', // ← ADICIONAR
    }
  }
  ```

- [ ] **5.5** Actualizar middleware
- [ ] **5.6** Actualizar selector de idioma
- [ ] **5.7** Testar TUDO novamente

---

## 🚫 NUNCA Fazer

### ❌ 1. Hardcodear Conteúdo Longo

```tsx
// ❌ ERRADO
function ContabilidadePage() {
  return (
    <div>
      <h1>Contabilidade Certificada TOC</h1>
      <p>Os nossos contabilistas são certificados...</p>
    </div>
  );
}

// ✅ CORRECTO
function ContabilidadePage({ data }) {
  return (
    <div>
      <h1>{data.translation.title}</h1>
      <p>{data.translation.subtitle}</p>
    </div>
  );
}
```

### ❌ 2. Criar Página Apenas num Idioma

```typescript
// ❌ ERRADO - Só PT
await prisma.pageTranslation.create({
  data: { pageId: 1, locale: 'pt', title: 'Teste' }
});

// ✅ CORRECTO - Todos os idiomas
for (const locale of ['pt', 'en', 'fr', 'es', 'it']) {
  await prisma.pageTranslation.create({
    data: { pageId: 1, locale, title: getTitleFor(locale) }
  });
}
```

### ❌ 3. Alterar Schema sem Migração

```bash
# ❌ ERRADO - Editar schema.prisma e continuar
# ✅ CORRECTO
npx prisma migrate dev --name add_new_field
npx prisma generate
```

### ❌ 4. Misturar UI Strings com Conteúdo DB

```tsx
// ❌ ERRADO - "Pedir Proposta" deve estar no JSON
<button>Pedir Proposta</button>

// ✅ CORRECTO
<button>{t('cta.requestProposal')}</button>
```

---

## ✅ Processo de PR/Commit

### Antes de Commit

1. **Verificar ficheiros alterados**
   ```bash
   git status
   ```

2. **Se alterou conteúdo do DB:**
   - [ ] Verificar que TODOS os idiomas foram actualizados
   - [ ] Executar seed script de teste
   - [ ] Verificar logs de fallback (não devem aparecer warnings)

3. **Se alterou componentes:**
   - [ ] TypeScript compila: `npx tsc --noEmit`
   - [ ] Nenhum hardcode de texto longo
   - [ ] Props correctamente tipadas

4. **Se alterou schema Prisma:**
   - [ ] Migração criada: `npx prisma migrate dev`
   - [ ] Cliente regenerado: `npx prisma generate`
   - [ ] Seed actualizado

5. **Testar rotas principais**
   ```bash
   ./test-routes.sh
   ```

### Mensagem de Commit

```
feat(content): adicionar página de novo serviço X

- Criada página 'novo-servico' com 5 traduções
- Estrutura sectionsJson completa
- SEO optimizado por idioma
- Sitemap actualizado

Refs: #123
```

---

## 🧪 Scripts de Teste

### Criar Script de Validação

```bash
#!/bin/bash
# test-i18n-completeness.sh

echo "🔍 Verificando completude das traduções..."

# Verificar que todas as páginas têm 5 traduções
pages_without_all_translations=$(mysql -u root -D hivegroup -se "
  SELECT p.slug, COUNT(pt.id) as translations 
  FROM pages p
  LEFT JOIN page_translations pt ON p.id = pt.pageId
  GROUP BY p.id, p.slug
  HAVING translations < 5;
")

if [ -z "$pages_without_all_translations" ]; then
  echo "✅ Todas as páginas têm 5 traduções"
else
  echo "❌ Páginas com traduções incompletas:"
  echo "$pages_without_all_translations"
  exit 1
fi

# Verificar posts
posts_without_all_translations=$(mysql -u root -D hivegroup -se "
  SELECT p.slug, COUNT(pt.id) as translations 
  FROM posts p
  LEFT JOIN post_translations pt ON p.id = pt.postId
  GROUP BY p.id, p.slug
  HAVING translations < 5;
")

if [ -z "$posts_without_all_translations" ]; then
  echo "✅ Todos os posts têm 5 traduções"
else
  echo "❌ Posts com traduções incompletas:"
  echo "$posts_without_all_translations"
  exit 1
fi

echo "✅ Validação completa!"
```

---

## 📊 Checklist Final (Copy/Paste)

Antes de qualquer deploy:

```markdown
## ✅ Pre-Deploy Checklist

### Conteúdo
- [ ] Todas as páginas têm 5 traduções (pt, en, fr, es, it)
- [ ] Todos os posts têm 5 traduções
- [ ] Estrutura JSON consistente entre idiomas
- [ ] Nenhum texto longo hardcoded

### SEO
- [ ] Metadata completa por idioma (title, description, keywords)
- [ ] Hreflang alternates presentes em todas as páginas
- [ ] Canonical URLs correctos
- [ ] Sitemap.xml contém todas as URLs
- [ ] Robots.txt aponta para sitemap

### Técnico
- [ ] TypeScript compila sem erros: `npx tsc --noEmit`
- [ ] Build passa: `npm run build`
- [ ] Todas as rotas principais testadas (200 OK)
- [ ] Redirect "/" funciona correctamente
- [ ] Selector de idioma grava cookie

### Performance
- [ ] Imagens optimizadas
- [ ] Lighthouse score >90
- [ ] Tempo de carregamento <3s

### Acessibilidade
- [ ] Contraste adequado (WCAG AA)
- [ ] Navegação por teclado funciona
- [ ] Screen readers testados
```

---

## 📚 Documentos Relacionados

- **Regras i18n:** `I18N_DB_RULES.md`
- **Modelo de Conteúdo:** `CONTENT_MODEL.md`
- **README:** `README.md`

---

## 🆘 Em Caso de Erro

### "Translation not found" no console

1. Verificar DB: `SELECT * FROM page_translations WHERE pageId = X`
2. Se faltar tradução, adicionar imediatamente
3. Reiniciar servidor

### "sectionsJson parse error"

1. Verificar JSON válido: `JSON.parse(sectionsJson)`
2. Verificar estrutura completa (todos os campos obrigatórios)
3. Corrigir no DB e reiniciar

### "404 em /[locale]/[slug]"

1. Verificar que página existe: `SELECT * FROM pages WHERE slug = 'X'`
2. Verificar que tradução existe para o idioma
3. Verificar fallback para 'pt' funciona

---

## ✅ Regra de Ouro Final

> **"Antes de qualquer alteração, garantir que i18n + DB estão em sincronia. Traduzir para TODOS os idiomas ou marcar claramente como 'por traduzir'."**

---

_Última actualização: Janeiro 2025_
