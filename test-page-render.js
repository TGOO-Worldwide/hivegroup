const { PrismaClient } = require('@prisma/client');

// Carregar .env manualmente
const fs = require('fs');
const path = require('path');
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (err) {
  console.warn('⚠️  Não foi possível carregar .env:', err.message);
}

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

// Simular a função getPageBySlug
async function getPageBySlug(slug, locale) {
  const page = await prisma.page.findUnique({
    where: { slug },
    include: {
      translations: true,
    },
  });

  if (!page) {
    console.warn(`[getPageBySlug] Página não encontrada: slug="${slug}"`);
    return null;
  }

  let translation = page.translations.find(t => t.locale === locale);

  if (!translation && locale !== 'pt') {
    console.warn(
      `[getPageBySlug] Tradução não encontrada para locale="${locale}" na página slug="${slug}". ` +
      `Usando fallback para locale="pt".`
    );
    translation = page.translations.find(t => t.locale === 'pt');
  }

  if (!translation) {
    console.error(
      `[getPageBySlug] ERRO: Página slug="${slug}" não tem tradução nem em locale="${locale}" nem em "pt". ` +
      `Traduções disponíveis: [${page.translations.map(t => t.locale).join(', ')}]`
    );
    return null;
  }

  return {
    ...page,
    translation,
  };
}

// Simular o que acontece na página
async function testPageRender() {
  console.log('🧪 Testando renderização da página...\n');
  
  const locale = 'pt';
  const page = await getPageBySlug('home', locale);
  
  console.log('1. getPageBySlug retornou:', page ? 'OBJETO' : 'NULL');
  
  if (!page || !page.translation) {
    console.log('❌ ERRO: page ou page.translation está undefined!');
    console.log('   page:', page);
    console.log('   page.translation:', page?.translation);
    return;
  }
  
  console.log('2. page.translation existe:', 'SIM');
  
  const { translation } = page;
  
  console.log('3. Tentando acessar translation.title...');
  console.log('   translation.title:', translation.title);
  
  console.log('4. Tentando parsear sectionsJson...');
  const sections = JSON.parse(translation.sectionsJson);
  console.log('   sections.hero.headline:', sections.hero.headline);
  
  console.log('\n✅ Tudo OK! Página pode ser renderizada.');
  
  await prisma.$disconnect();
}

testPageRender().catch(err => {
  console.error('❌ ERRO:', err);
  process.exit(1);
});
