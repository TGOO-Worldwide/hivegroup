import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert página "sobre" a partir de seed-data.json...\n');
  const data = loadSeedData();
  const pages = data.pages.filter((p) => p.slug === 'sobre');
  if (pages.length === 0) {
    throw new Error('Página "sobre" não encontrada em seed-data.json');
  }
  await upsertPages(prisma, pages, 'sobre');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
