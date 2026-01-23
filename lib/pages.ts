import { prisma } from './prisma';
import { notFound } from 'next/navigation';

/**
 * Busca uma página por slug e locale.
 * Fallback: se não encontrar tradução no locale solicitado, tenta 'pt'.
 * Retorna null se a página não existir ou não tiver nem tradução pt.
 */
export async function getPageBySlug(slug: string, locale: string) {
  const page = await prisma.page.findUnique({
    where: { slug },
    include: {
      translations: true, // Buscar TODAS as traduções
    },
  });

  if (!page) {
    console.warn(`[getPageBySlug] Página não encontrada: slug="${slug}"`);
    return null;
  }

  // Tentar encontrar tradução no locale solicitado
  let translation = page.translations.find(t => t.locale === locale);

  // Fallback para 'pt' se não encontrar
  if (!translation && locale !== 'pt') {
    console.warn(
      `[getPageBySlug] Tradução não encontrada para locale="${locale}" na página slug="${slug}". ` +
      `Usando fallback para locale="pt".`
    );
    translation = page.translations.find(t => t.locale === 'pt');
  }

  // Se nem 'pt' existir, retornar null
  if (!translation) {
    console.error(
      `[getPageBySlug] ERRO: Página slug="${slug}" não tem tradução nem em locale="${locale}" nem em "pt". ` +
      `Traduções disponíveis: [${page.translations.map(t => t.locale).join(', ')}]`
    );
    return null;
  }

  return {
    ...page,
    translation,
  };
}

export async function getAllPosts(locale: string) {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      translations: {
        where: { locale },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return posts
    .filter((post) => post.translations.length > 0)
    .map((post) => ({
      ...post,
      translation: post.translations[0],
    }));
}

/**
 * Busca um post por slug e locale.
 * Fallback: se não encontrar tradução no locale solicitado, tenta 'pt'.
 * Retorna null se o post não existir ou não tiver nem tradução pt.
 */
export async function getPostBySlug(slug: string, locale: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      translations: true, // Buscar TODAS as traduções
    },
  });

  if (!post) {
    console.warn(`[getPostBySlug] Post não encontrado: slug="${slug}"`);
    return null;
  }

  // Tentar encontrar tradução no locale solicitado
  let translation = post.translations.find(t => t.locale === locale);

  // Fallback para 'pt' se não encontrar
  if (!translation && locale !== 'pt') {
    console.warn(
      `[getPostBySlug] Tradução não encontrada para locale="${locale}" no post slug="${slug}". ` +
      `Usando fallback para locale="pt".`
    );
    translation = post.translations.find(t => t.locale === 'pt');
  }

  // Se nem 'pt' existir, retornar null
  if (!translation) {
    console.error(
      `[getPostBySlug] ERRO: Post slug="${slug}" não tem tradução nem em locale="${locale}" nem em "pt". ` +
      `Traduções disponíveis: [${post.translations.map(t => t.locale).join(', ')}]`
    );
    return null;
  }

  return {
    ...post,
    translation,
  };
}
