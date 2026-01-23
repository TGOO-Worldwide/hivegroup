import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { locales } from '@/i18n';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hivegroup.pt';

  // Get all pages
  const pages = await prisma.page.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  // Get all posts
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const sitemap: MetadataRoute.Sitemap = [];

  // Home page for each locale
  locales.forEach((locale) => {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}`])
        ),
      },
    });
  });

  // All pages for each locale
  pages.forEach((page) => {
    if (page.slug === 'home') return; // Skip home as it's already added

    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/${page.slug}`,
        lastModified: page.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}/${page.slug}`])
          ),
        },
      });
    });
  });

  // Insights index for each locale
  locales.forEach((locale) => {
    sitemap.push({
      url: `${baseUrl}/${locale}/insights`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${baseUrl}/${loc}/insights`])
        ),
      },
    });
  });

  // All posts for each locale
  posts.forEach((post) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/insights/${post.slug}`,
        lastModified: post.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}/insights/${post.slug}`])
          ),
        },
      });
    });
  });

  return sitemap;
}
