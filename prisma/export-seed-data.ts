/**
 * Reexporta o conteúdo actual da BD para prisma/seed-data.json.
 * Usar depois de editar conteúdo no Prisma Studio / produção:
 *
 *   npx tsx prisma/export-seed-data.ts
 *   # depois commit seed-data.json e correr seed noutros ambientes
 */
import { PrismaClient } from '@prisma/client';
import { writeFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

async function main() {
  const pages = await prisma.page.findMany({
    include: { translations: { orderBy: { locale: 'asc' } } },
    orderBy: { slug: 'asc' },
  });

  const posts = await prisma.post.findMany({
    include: { translations: { orderBy: { locale: 'asc' } } },
    orderBy: { slug: 'asc' },
  });

  const payload = {
    pages: pages.map((p) => ({
      slug: p.slug,
      type: p.type,
      published: p.published,
      translations: p.translations.map((t) => ({
        locale: t.locale,
        title: t.title,
        subtitle: t.subtitle,
        sectionsJson: t.sectionsJson,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        keywordsJson: t.keywordsJson,
      })),
    })),
    posts: posts.map((p) => ({
      slug: p.slug,
      category: p.category,
      published: p.published,
      translations: p.translations.map((t) => ({
        locale: t.locale,
        title: t.title,
        excerpt: t.excerpt,
        contentHtml: t.contentHtml,
        featuredImage: t.featuredImage,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        faqJson: t.faqJson,
      })),
    })),
  };

  const outPath = join(__dirname, 'seed-data.json');
  writeFileSync(outPath, JSON.stringify(payload, null, 2) + '\n', 'utf-8');

  console.log(`✅ Exportado para ${outPath}`);
  console.log(`   ${payload.pages.length} páginas, ${payload.posts.length} posts`);

  for (const p of payload.pages) {
    if (p.translations.length < 5) {
      console.warn(
        `⚠️  Página "${p.slug}" só tem ${p.translations.length} traduções: ${p.translations.map((t) => t.locale).join(', ')}`
      );
    }
  }
  for (const p of payload.posts) {
    if (p.translations.length < 5) {
      console.warn(
        `⚠️  Post "${p.slug}" só tem ${p.translations.length} traduções: ${p.translations.map((t) => t.locale).join(', ')}`
      );
    }
  }
}

main()
  .catch((e) => {
    console.error('❌ Erro no export:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
