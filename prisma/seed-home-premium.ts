import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert Home Page a partir de seed-data.json...\n');
  const data = loadSeedData();
  const pages = data.pages.filter((p) => p.slug === 'home');
  if (pages.length === 0) {
    throw new Error('Página "home" não encontrada em seed-data.json');
  }
  await upsertPages(prisma, pages, 'home');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
