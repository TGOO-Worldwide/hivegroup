import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPosts } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert Insights/Posts a partir de seed-data.json...\n');
  const data = loadSeedData();
  await upsertPosts(prisma, data.posts, 'insights');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
