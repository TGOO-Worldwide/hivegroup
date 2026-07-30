import { loadSeedData, type PageSeed } from '../seed-lib';

const page = loadSeedData().pages.find((p) => p.slug === 'agente-autorizado');

if (!page) {
  throw new Error('Página "agente-autorizado" não encontrada em seed-data.json');
}

/** @deprecated Preferir seed-data.json + seed-agente-autorizado.ts */
export const agenteAutorizadoData: PageSeed = page;
