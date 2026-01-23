const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

async function test() {
  try {
    console.log('🔍 Testando conexão com o banco de dados...\n');
    console.log('DATABASE_URL:', process.env.DATABASE_URL?.replace(/:[^:@]+@/, ':***@'));
    
    // Testar conexão básica
    await prisma.$connect();
    console.log('✅ Conexão estabelecida com sucesso!\n');
    
    // Buscar páginas
    const pages = await prisma.page.findMany({
      where: { slug: 'home' },
      include: { translations: true }
    });
    
    console.log('📊 Resultados:');
    console.log(`   Páginas 'home' encontradas: ${pages.length}`);
    
    if (pages.length > 0) {
      console.log(`   Traduções disponíveis: ${pages[0].translations.length}`);
      pages[0].translations.forEach(t => {
        console.log(`   - ${t.locale}: "${t.title.substring(0, 50)}..."`);
      });
    } else {
      console.log('   ⚠️  Nenhuma página "home" encontrada no banco!');
    }
    
    // Contar todas as páginas
    const totalPages = await prisma.page.count();
    const totalTranslations = await prisma.pageTranslation.count();
    
    console.log(`\n📈 Estatísticas:`);
    console.log(`   Total de páginas: ${totalPages}`);
    console.log(`   Total de traduções: ${totalTranslations}`);
    
  } catch (error) {
    console.error('❌ Erro na conexão ou consulta:');
    console.error('   Mensagem:', error.message);
    console.error('   Código:', error.code);
  } finally {
    await prisma.$disconnect();
    console.log('\n🔌 Conexão fechada.');
  }
}

test();
