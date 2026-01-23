# 🌍 Regras de Internacionalização (i18n) e Base de Dados

## 📋 Princípios Fundamentais

### ⚠️ REGRA CRÍTICA: Separação de Conteúdo

**SEMPRE SEGUIR:**

1. **Texto Longo → MySQL**
   - Títulos de página
   - Subtítulos
   - Descrições
   - Conteúdo de secções (benefits, services, steps, FAQ, etc.)
   - Conteúdo de artigos do blog
   - Metadados SEO (seoTitle, seoDescription, keywords)

2. **Texto Curto UI → JSON (`/messages/{locale}.json`)**
   - Labels de botões ("Marcar Reunião", "Pedir Proposta")
   - Itens de menu ("Home", "Serviços", "Contactos")
   - Mensagens de validação
   - Tooltips e placeholders de formulários

---

## 🗄️ Arquitectura de Base de Dados

### Modelos Multiidioma

#### **Page** (Tabela Principal)
```prisma
model Page {
  id           Int               @id @default(autoincrement())
  slug         String            @unique
  type         String            @default("service")
  published    Boolean           @default(true)
  translations PageTranslation[]
  createdAt    DateTime          @default(now())
  updatedAt    DateTime          @updatedAt
}
```

#### **PageTranslation** (Traduções)
```prisma
model PageTranslation {
  id             Int      @id @default(autoincrement())
  pageId         Int
  locale         String   // 'pt', 'en', 'fr', 'es', 'it'
  title          String
  subtitle       String?  @db.Text
  sectionsJson   String   @db.LongText
  seoTitle       String
  seoDescription String   @db.Text
  keywordsJson   String   @db.Text
  page           Page     @relation(fields: [pageId], references: [id], onDelete: Cascade)
  
  @@unique([pageId, locale])
}
```

#### **Post** (Blog)
```prisma
model Post {
  id           Int               @id @default(autoincrement())
  slug         String            @unique
  category     String
  published    Boolean           @default(true)
  translations PostTranslation[]
  createdAt    DateTime          @default(now())
  updatedAt    DateTime          @updatedAt
}
```

#### **PostTranslation** (Blog Traduções)
```prisma
model PostTranslation {
  id             Int      @id @default(autoincrement())
  postId         Int
  locale         String
  title          String
  excerpt        String   @db.Text
  content        String   @db.LongText
  seoTitle       String
  seoDescription String   @db.Text
  featuredImage  String?
  faqJson        String?  @db.Text
  post           Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  @@unique([postId, locale])
}
```

---

## 🌐 Idiomas Suportados

### Locales Obrigatórios

| Código | Idioma | Variante | Observações |
|--------|--------|----------|-------------|
| `pt` | Português | Portugal (pt-PT) | **SEM** expressões brasileiras |
| `en` | Inglês | Reino Unido (en-GB) | **SEM** expressões americanas |
| `fr` | Francês | França (fr-FR) | Profissional e nativo |
| `es` | Espanhol | Espanha (es-ES) | Profissional e nativo |
| `it` | Italiano | Itália (it-IT) | Profissional e nativo |

---

## 🔄 Workflow de Alterações

### ✅ Quando Criar Novo Conteúdo

**OBRIGATÓRIO:**

1. **Criar tradução para TODOS os 5 idiomas**
   ```typescript
   // ❌ ERRADO - Apenas 1 idioma
   await prisma.pageTranslation.create({
     data: {
       pageId: page.id,
       locale: 'pt',
       title: 'Novo Serviço',
       // ...
     }
   });

   // ✅ CORRECTO - Todos os 5 idiomas
   const translations = ['pt', 'en', 'fr', 'es', 'it'];
   for (const locale of translations) {
     await prisma.pageTranslation.create({
       data: {
         pageId: page.id,
         locale,
         title: getTitleForLocale(locale),
         // ...
       }
     });
   }
   ```

2. **Validar `sectionsJson` consistente**
   - Todas as traduções devem ter a mesma estrutura JSON
   - Exemplo:
   ```json
   {
     "benefits": [...],      // Obrigatório
     "servicesIncluded": [...], // Obrigatório
     "whoItsFor": [...],     // Obrigatório
     "processSteps": [...],  // Obrigatório
     "faq": [...],           // Obrigatório
     "finalCtaTitle": "...", // Obrigatório
     "finalCtaSubtitle": "...", // Obrigatório
     "formMicrocopy": "..."  // Obrigatório
   }
   ```

### ❌ NUNCA Fazer

1. **Hardcodear texto longo em componentes**
   ```tsx
   // ❌ ERRADO
   <h1>Contabilidade Certificada TOC</h1>
   
   // ✅ CORRECTO
   <h1>{translation.title}</h1>
   ```

2. **Criar página sem todas as traduções**
   - Se criar 1 página, criar para os 5 idiomas
   - Placeholder temporário é aceitável (com flag "por traduzir")

3. **Misturar UI strings com conteúdo longo**
   - Botões → JSON
   - Títulos de página → DB

---

## 🔍 Fallback e Tratamento de Erros

### Sistema de Fallback Implementado

```typescript
// lib/pages.ts
export async function getPageBySlug(slug: string, locale: string) {
  const page = await prisma.page.findUnique({
    where: { slug },
    include: { translations: true },
  });

  if (!page) {
    console.warn(`[getPageBySlug] Página não encontrada: slug="${slug}"`);
    return null;
  }

  // 1. Tentar idioma solicitado
  let translation = page.translations.find(t => t.locale === locale);

  // 2. Fallback para PT se não encontrar
  if (!translation && locale !== 'pt') {
    console.warn(
      `[getPageBySlug] Tradução não encontrada para locale="${locale}" ` +
      `na página slug="${slug}". Usando fallback para locale="pt".`
    );
    translation = page.translations.find(t => t.locale === 'pt');
  }

  // 3. Se nem PT existir, erro crítico
  if (!translation) {
    console.error(
      `[getPageBySlug] ERRO CRÍTICO: Nenhuma tradução encontrada ` +
      `(nem fallback PT) para slug="${slug}"`
    );
    return null;
  }

  return { ...page, translation };
}
```

### Logs e Alertas

- **⚠️ Warning amarelo:** Tradução não encontrada, usando fallback
- **❌ Error vermelho:** Nem tradução nem fallback encontrados

---

## 📝 Checklist de Validação

Antes de qualquer commit/deploy, verificar:

- [ ] Todas as páginas têm 5 traduções (pt, en, fr, es, it)
- [ ] Todos os posts do blog têm 5 traduções
- [ ] Estrutura `sectionsJson` consistente entre idiomas
- [ ] SEO completo por idioma (title, description, keywords)
- [ ] Nenhum texto longo hardcoded em componentes
- [ ] UI strings em `/messages/{locale}.json`
- [ ] Sitemap inclui todas as URLs em 5 idiomas
- [ ] Hreflang alternates presentes em todas as páginas

---

## 🚨 Alertas Críticos

### Se aparecer este warning no console:

```
[getPageBySlug] Tradução não encontrada para locale="fr" na página slug="finance"
```

**ACÇÃO IMEDIATA:**
1. Verificar `page_translations` no MySQL
2. Adicionar tradução em falta
3. Re-seed se necessário

### Se aparecer este erro:

```
[getPageBySlug] ERRO CRÍTICO: Nenhuma tradução encontrada
```

**ACÇÃO CRÍTICA:**
1. Página sem nenhuma tradução (nem PT)
2. Verificar seed script
3. Corrigir imediatamente

---

## 📚 Ficheiros Relacionados

- **Schema:** `prisma/schema.prisma`
- **Seeds:** `prisma/seed-*.ts`
- **Utilities:** `lib/pages.ts`
- **i18n Config:** `i18n.ts`
- **Messages:** `messages/*.json`

---

## ✅ Regra de Ouro

> **"Antes de adicionar qualquer novo conteúdo, garantir que existe em TODOS os 5 idiomas. Se não existir, criar ou marcar claramente como 'por traduzir'."**

---

_Última actualização: Janeiro 2025_
