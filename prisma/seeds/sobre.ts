import { loadSeedData, type PageSeed } from '../seed-lib';

const page = loadSeedData().pages.find((p) => p.slug === 'sobre');

if (!page) {
  throw new Error('Página "sobre" não encontrada em seed-data.json');
}

/** @deprecated Preferir seed-data.json + seed-sobre.ts */
export const sobreData: PageSeed = page;
