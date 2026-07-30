import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages } from './seed-lib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Upsert página "agente-autorizado" a partir de seed-data.json...\n');
  const data = loadSeedData();
  const pages = data.pages.filter((p) => p.slug === 'agente-autorizado');
  if (pages.length === 0) {
    throw new Error('Página "agente-autorizado" não encontrada em seed-data.json');
  }
  await upsertPages(prisma, pages, 'agente-autorizado');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
