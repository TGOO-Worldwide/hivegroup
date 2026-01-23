import { PrismaClient } from '@prisma/client';
import { agenteAutorizadoData } from './seeds/agente-autorizado';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Atualizando página "agente-autorizado"...');

  // Verificar se já existe
  const existingPage = await prisma.page.findUnique({
    where: { slug: 'agente-autorizado' },
    include: { translations: true }
  });

  if (existingPage) {
    console.log('⚠️  Página "agente-autorizado" já existe. Apagando traduções e recriando...');
    
    // Apagar traduções antigas
    await prisma.pageTranslation.deleteMany({
      where: { pageId: existingPage.id }
    });

    // Criar novas traduções
    await prisma.pageTranslation.createMany({
      data: agenteAutorizadoData.translations.map((t) => ({
        pageId: existingPage.id,
        locale: t.locale,
        title: t.title,
        subtitle: t.subtitle,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        keywordsJson: t.keywordsJson,
        sectionsJson: t.sectionsJson,
      }))
    });

    console.log(`✅ Página "agente-autorizado" atualizada com ${agenteAutorizadoData.translations.length} traduções:`);
    agenteAutorizadoData.translations.forEach((t) => {
      console.log(`   - ${t.locale}: ${t.title}`);
    });
  } else {
    // Criar página nova se não existir
    const page = await prisma.page.create({
      data: {
        slug: agenteAutorizadoData.slug,
        type: agenteAutorizadoData.type,
        published: true,
        translations: {
          create: agenteAutorizadoData.translations.map((t) => ({
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

    console.log(`✅ Página "agente-autorizado" criada com ${page.translations.length} traduções`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Erro ao fazer seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
