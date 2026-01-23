import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔄 Atualizando "Desenvolvimento de Negócio" → "Crescimento" (apenas pt-PT)...\n');

  // Buscar página business-development
  const page = await prisma.page.findUnique({
    where: { slug: 'business-development' },
    include: { translations: true }
  });

  if (!page) {
    console.error('❌ Página "business-development" não encontrada');
    return;
  }

  // Encontrar tradução pt
  const ptTranslation = page.translations.find(t => t.locale === 'pt');

  if (!ptTranslation) {
    console.error('❌ Tradução pt não encontrada');
    return;
  }

  // Atualizar title e seoTitle
  await prisma.pageTranslation.update({
    where: { id: ptTranslation.id },
    data: {
      title: 'Crescimento',
      seoTitle: 'Crescimento - Hive Group Portugal'
    }
  });

  console.log('✅ PageTranslation atualizada:');
  console.log('   - title: "Desenvolvimento de Negócio" → "Crescimento"');
  console.log('   - seoTitle: "Desenvolvimento Negócio..." → "Crescimento..."');

  // Atualizar áreas na Home (se existir)
  const homePage = await prisma.page.findUnique({
    where: { slug: 'home' },
    include: { translations: true }
  });

  if (homePage) {
    const homeTranslations = homePage.translations.filter(t => t.locale === 'pt');
    
    for (const translation of homeTranslations) {
      const sections = JSON.parse(translation.sectionsJson);
      
      // Atualizar hero.areas
      if (sections.hero?.areas) {
        sections.hero.areas = sections.hero.areas.map((area: any) => {
          if (area.title === 'Desenvolvimento de Negócio') {
            return { ...area, title: 'Crescimento' };
          }
          return area;
        });
      }

      // Atualizar featured.services
      if (sections.featured?.services) {
        sections.featured.services = sections.featured.services.map((service: any) => {
          if (service.title === 'Desenvolvimento de Negócio') {
            return { ...service, title: 'Crescimento' };
          }
          return service;
        });
      }

      // Atualizar sectionsJson
      await prisma.pageTranslation.update({
        where: { id: translation.id },
        data: { sectionsJson: JSON.stringify(sections) }
      });

      console.log('✅ Home (pt) atualizada: áreas e serviços');
    }
  }

  console.log('\n✨ Atualização concluída com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
