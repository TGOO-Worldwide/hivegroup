import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages, upsertPosts } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seed (upsert) a partir de prisma/seed-data.json...\n');

  const data = loadSeedData();

  console.log(`📄 Páginas: ${data.pages.length}`);
  await upsertPages(prisma, data.pages);

  console.log(`\n📝 Posts: ${data.posts.length}`);
  await upsertPosts(prisma, data.posts);

  console.log('\n🎉 Seed completo (idempotente via upsert).');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
