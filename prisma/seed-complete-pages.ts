import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert páginas completas a partir de seed-data.json...\n');
  const data = loadSeedData();
  await upsertPages(prisma, data.pages);
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
