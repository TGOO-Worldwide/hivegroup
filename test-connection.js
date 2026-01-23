const { PrismaClient } = require('@prisma/client');

// Carregar .env manualmente (compatível com produção)
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
