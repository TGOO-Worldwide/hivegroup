import { PrismaClient } from '@prisma/client';
import { insightsPosts } from './seeds/insights-posts.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Insights/Posts...');

  for (const postData of insightsPosts) {
    // Verificar se já existe
    const existingPost = await prisma.post.findUnique({
      where: { slug: postData.slug }
    });

    if (existingPost) {
      console.log(`⚠️  Post "${postData.slug}" já existe. Apagando e recriando...`);
      await prisma.post.delete({
        where: { slug: postData.slug }
      });
    }

    // Criar post
    const post = await prisma.post.create({
      data: {
        slug: postData.slug,
        category: postData.category,
        published: true,
        translations: {
          create: postData.translations.map((t) => ({
            locale: t.locale,
            title: t.title,
            excerpt: t.excerpt,
            contentHtml: t.contentHtml,
            featuredImage: t.featuredImage || null,
            seoTitle: t.seoTitle,
            seoDescription: t.seoDescription,
            faqJson: t.faqJson || null,
          })),
        },
      },
      include: {
        translations: true,
      },
    });

    console.log(`✅ Post "${postData.slug}" criado com ${post.translations.length} traduções`);
  }

  console.log('\n✅ Seed de Insights completo!');
}

main()
  .catch((e) => {
    console.error('❌ Erro ao fazer seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
