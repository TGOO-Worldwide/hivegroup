import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPosts } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert blog posts a partir de seed-data.json...\n');
  const data = loadSeedData();
  await upsertPosts(prisma, data.posts, 'blog posts');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
