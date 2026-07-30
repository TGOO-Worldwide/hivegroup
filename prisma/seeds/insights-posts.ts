import { loadSeedData, type PostSeed } from '../seed-lib';

/** @deprecated Preferir seed-data.json + seed-insights.ts */
export const insightsPosts: PostSeed[] = loadSeedData().posts;
