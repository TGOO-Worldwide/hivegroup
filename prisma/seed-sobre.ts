import { PrismaClient } from '@prisma/client';
import { sobreData } from './seeds/sobre';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding página "Sobre"...');

  // Verificar se já existe
  const existingPage = await prisma.page.findUnique({
    where: { slug: 'sobre' }
  });

  if (existingPage) {
    console.log('⚠️  Página "sobre" já existe. Apagando e recriando...');
    await prisma.page.delete({
      where: { slug: 'sobre' }
    });
  }

  // Criar página "Sobre"
  const page = await prisma.page.create({
    data: {
      slug: sobreData.slug,
      type: sobreData.type,
      published: true,
      translations: {
        create: sobreData.translations.map((t) => ({
          locale: t.locale,
          title: t.title,
          subtitle: t.subtitle,
          seoTitle: t.seoTitle,
          seoDescription: t.seoDescription,
          keywordsJson: t.keywordsJson,
          sectionsJson: t.sectionsJson,
        })),
      },
    },
    include: {
      translations: true,
    },
  });

  console.log(`✅ Página "Sobre" criada com ${page.translations.length} traduções:`);
  page.translations.forEach((t) => {
    console.log(`   - ${t.locale}: ${t.title}`);
  });
}

main()
  .catch((e) => {
    console.error('❌ Erro ao fazer seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
