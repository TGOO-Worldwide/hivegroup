# Workflow de Conteúdo (para agentes IA)

Documento operacional para qualquer IA (ou humano) que **edite conteúdo** deste site. Segue estes passos exactamente — o conteúdo de produção só muda se estiver versionado em `prisma/seed-data.json` e for aplicado pelo seed no deploy.

Ler também (regras de estrutura/i18n):

1. [`I18N_DB_RULES.md`](./I18N_DB_RULES.md)
2. [`CONTENT_MODEL.md`](./CONTENT_MODEL.md)
3. [`CHANGE_WORKFLOW.md`](./CHANGE_WORKFLOW.md)

---

## 1. Onde vive o quê

| Tipo de texto | Onde editar | Vai no git? | Chega a produção como? |
|---|---|---|---|
| Páginas, serviços, blog (títulos, secções, SEO, HTML dos posts) | MySQL → depois export para `prisma/seed-data.json` | Sim (`seed-data.json`) | `npm run prisma:seed` no deploy |
| Labels UI (menus, botões, microcopy curto) | `/messages/{locale}.json` | Sim | Deploy do código |
| Código React / layout | Ficheiros em `app/`, `components/` | Sim | Deploy do código |

**Nunca** assumir que editar só a BD local (Prisma Studio) actualiza produção. Sem `export-seed` + commit + push, o conteúdo **não sobe**.

Idiomas obrigatórios: `pt`, `en`, `fr`, `es`, `it`.

---

## 2. Fonte de verdade do conteúdo editorial

- Ficheiro: **`prisma/seed-data.json`**
- Aplicação: **`npm run prisma:seed`** (upsert idempotente via `prisma/seed-lib.ts`)
- Deploy (`main`): após `prisma generate` corre automaticamente `npm run prisma:seed` (ver `.github/workflows/deploy.yml`)

O seed **actualiza** páginas/posts existentes e **cria** os que faltam. Não apaga registos que existam na BD e não estejam no JSON.

---

## 3. Procedimento padrão: editar conteúdo existente

### Opção A — Preferida para agentes (editar o JSON versionado)

1. Abrir `prisma/seed-data.json`.
2. Localizar a página pelo `slug` (ex.: `home`, `contabilidade`) ou o post pelo `slug`.
3. Editar a tradução do `locale` correcto (`title`, `subtitle`, `sectionsJson`, SEO, etc.).
4. Se a alteração mudar a **estrutura** de `sectionsJson` / conteúdo do post, aplicar a **mesma estrutura** em **todos** os locales (`pt`, `en`, `fr`, `es`, `it`).
5. Aplicar na BD local:
   ```bash
   npm run prisma:seed
   ```
6. Validar no browser (`http://localhost:3000/pt/...` e pelo menos mais um locale).
7. Commit de `prisma/seed-data.json` (e de `/messages/*.json` se também alteraste UI).
8. Push para `main` → o deploy corre o seed em produção.

### Opção B — Editar na BD e reexportar

1. Editar na BD local (Prisma Studio ou script Prisma com `upsert`).
2. **Obrigatório** reexportar:
   ```bash
   npm run prisma:export-seed
   ```
3. Confirmar que `prisma/seed-data.json` mudou.
4. Commit + push para `main`.

Se fores a Opção B e **esqueceres** o `export-seed`, a próxima deploy **sobrescreve** a BD de produção com o JSON antigo.

---

## 4. Procedimento: criar página ou post novo

1. Adicionar o objecto completo em `prisma/seed-data.json` (página em `pages[]` ou post em `posts[]`).
2. Incluir traduções para os **5 locales** (salvo restrição explícita do utilizador).
3. Garantir campos mínimos:

**Página**

```json
{
  "slug": "novo-servico",
  "type": "service",
  "published": true,
  "translations": [
    {
      "locale": "pt",
      "title": "...",
      "subtitle": "...",
      "sectionsJson": "{...}",
      "seoTitle": "...",
      "seoDescription": "...",
      "keywordsJson": "[\"...\"]"
    }
  ]
}
```

`sectionsJson` e `keywordsJson` são **strings JSON** (não objectos soltos no ficheiro).

**Post**

```json
{
  "slug": "meu-artigo",
  "category": "tax",
  "published": true,
  "translations": [
    {
      "locale": "pt",
      "title": "...",
      "excerpt": "...",
      "contentHtml": "<p>...</p>",
      "featuredImage": null,
      "seoTitle": "...",
      "seoDescription": "...",
      "faqJson": null
    }
  ]
}
```

4. `npm run prisma:seed`
5. Se a rota depender de componentes novos, também actualizar código — conteúdo sozinho não cria layouts especiais.
6. Commit + push.

---

## 5. UI strings (`messages`)

- Ficheiros: `messages/pt.json`, `en.json`, `fr.json`, `es.json`, `it.json`
- Alterar a **mesma chave** em todos os locales
- Não colocar textos longos de página aqui — isso vai para a BD / `seed-data.json`

---

## 6. Comandos úteis

```bash
# Aplicar seed-data.json → BD local (upsert)
npm run prisma:seed

# BD actual → seed-data.json (depois de editar no Studio)
npm run prisma:export-seed

# UI visual da BD
npm run prisma:studio

# Seed parcial (ainda lê seed-data.json)
npx tsx prisma/seed-home-premium.ts
npx tsx prisma/seed-sobre.ts
npx tsx prisma/seed-agente-autorizado.ts
npx tsx prisma/seed-insights.ts
```

---

## 7. Checklist antes de considerar a tarefa concluída

- [ ] Conteúdo editorial reflectido em `prisma/seed-data.json` (editado directamente ou via `prisma:export-seed`)
- [ ] Estrutura JSON alinhada em todos os locales afectados
- [ ] `npm run prisma:seed` correu sem erro na BD usada para validar
- [ ] UI strings, se tocadas, actualizadas nos 5 ficheiros `messages/`
- [ ] Alterações prontas para commit (pelo menos `seed-data.json`)
- [ ] Utilizador informado: produção actualiza no push para `main` (workflow de deploy)

---

## 8. Proibições

- Não editar só produção/local na BD e dar a tarefa por fechada sem actualizar `seed-data.json`
- Não usar `prisma.page.create` / `deleteMany` + recreate em scripts novos — usar **upsert** (`prisma/seed-lib.ts`)
- Não hardcodar textos longos em componentes React
- Não inventar locales fora de `pt|en|fr|es|it`
- Não correr `prisma migrate reset` em produção
- Não commitar `.env` nem credenciais

---

## 9. Lacunas conhecidas (não “corrigir” sem pedido)

O export actual pode ter traduções incompletas (ex.: `agente-autorizado` só `pt`/`en`; alguns posts só `pt`).  
Ao editar esses itens, **não apagues** traduções existentes. Se completares idiomas em falta, faz para os 5 locales de uma vez e documenta no resumo da alteração.

---

## 10. Resumo em uma frase

**Edita conteúdo → garante `prisma/seed-data.json` actualizado → `npm run prisma:seed` localmente → commit → push `main` (deploy aplica o seed em produção).**
