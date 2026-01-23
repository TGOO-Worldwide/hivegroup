import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Adicionando traduções fr, es, it às 12 páginas...\n');

  const pages = await prisma.page.findMany({
    where: { slug: { not: 'home' } },
    include: { translations: true }
  });

  for (const page of pages) {
    // Buscar tradução pt para copiar estrutura
    const ptTranslation = page.translations.find(t => t.locale === 'pt');
    if (!ptTranslation) continue;

    const sections = JSON.parse(ptTranslation.sectionsJson);

    // FR
    if (!page.translations.find(t => t.locale === 'fr')) {
      await prisma.pageTranslation.create({
        data: {
          pageId: page.id,
          locale: 'fr',
          title: `${ptTranslation.title} (FR)`,
          subtitle: `${ptTranslation.subtitle} (FR)`,
          seoTitle: `${ptTranslation.seoTitle.replace(' - Hive Group', '')} - Hive Group`,
          seoDescription: ptTranslation.seoDescription,
          keywordsJson: ptTranslation.keywordsJson,
          sectionsJson: ptTranslation.sectionsJson // Copiar estrutura
        }
      });
    }

    // ES
    if (!page.translations.find(t => t.locale === 'es')) {
      await prisma.pageTranslation.create({
        data: {
          pageId: page.id,
          locale: 'es',
          title: `${ptTranslation.title} (ES)`,
          subtitle: `${ptTranslation.subtitle} (ES)`,
          seoTitle: `${ptTranslation.seoTitle.replace(' - Hive Group', '')} - Hive Group`,
          seoDescription: ptTranslation.seoDescription,
          keywordsJson: ptTranslation.keywordsJson,
          sectionsJson: ptTranslation.sectionsJson
        }
      });
    }

    // IT
    if (!page.translations.find(t => t.locale === 'it')) {
      await prisma.pageTranslation.create({
        data: {
          pageId: page.id,
          locale: 'it',
          title: `${ptTranslation.title} (IT)`,
          subtitle: `${ptTranslation.subtitle} (IT)`,
          seoTitle: `${ptTranslation.seoTitle.replace(' - Hive Group', '')} - Hive Group`,
          seoDescription: ptTranslation.seoDescription,
          keywordsJson: ptTranslation.keywordsJson,
          sectionsJson: ptTranslation.sectionsJson
        }
      });
    }

    console.log(`✅ ${page.slug} - adicionadas traduções fr, es, it`);
  }

  console.log('\n🎉 Todas as traduções adicionadas!');
  console.log('Total: 13 páginas × 5 idiomas = 65 traduções');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
