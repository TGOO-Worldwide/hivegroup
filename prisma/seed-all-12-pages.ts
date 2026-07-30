import { PrismaClient } from '@prisma/client';
import { loadSeedData, upsertPages } from './seed-lib';

const prisma = new PrismaClient();

const SERVICE_SLUGS = [
  'contabilidade',
  'agente-autorizado',
  'finance',
  'credit',
  'insurance',
  'real-estate',
  'legal',
  'marketing',
  'travel',
  'it',
  'business-development',
  'contactos',
] as const;

async function main() {
  console.log('🌱 Upsert páginas de serviços a partir de seed-data.json...\n');
  const data = loadSeedData();
  const pages = data.pages.filter((p) =>
    (SERVICE_SLUGS as readonly string[]).includes(p.slug)
  );
  await upsertPages(prisma, pages, 'páginas de serviço');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
