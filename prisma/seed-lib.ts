import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

export type PageTranslationSeed = {
  locale: string;
  title: string;
  subtitle: string | null;
  sectionsJson: string;
  seoTitle: string;
  seoDescription: string;
  keywordsJson: string | null;
};

export type PageSeed = {
  slug: string;
  type: string;
  published: boolean;
  translations: PageTranslationSeed[];
};

export type PostTranslationSeed = {
  locale: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  featuredImage: string | null;
  seoTitle: string;
  seoDescription: string;
  faqJson: string | null;
};

export type PostSeed = {
  slug: string;
  category: string;
  published: boolean;
  translations: PostTranslationSeed[];
};

export type SeedData = {
  pages: PageSeed[];
  posts: PostSeed[];
};

export function loadSeedData(): SeedData {
  const filePath = join(__dirname, 'seed-data.json');
  return JSON.parse(readFileSync(filePath, 'utf-8')) as SeedData;
}

export async function upsertPage(prisma: PrismaClient, pageData: PageSeed) {
  const page = await prisma.page.upsert({
    where: { slug: pageData.slug },
    update: {
      type: pageData.type,
      published: pageData.published,
    },
    create: {
      slug: pageData.slug,
      type: pageData.type,
      published: pageData.published,
    },
  });

  for (const t of pageData.translations) {
    await prisma.pageTranslation.upsert({
      where: {
        pageId_locale: {
          pageId: page.id,
          locale: t.locale,
        },
      },
      update: {
        title: t.title,
        subtitle: t.subtitle,
        sectionsJson: t.sectionsJson,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        keywordsJson: t.keywordsJson,
      },
      create: {
        pageId: page.id,
        locale: t.locale,
        title: t.title,
        subtitle: t.subtitle,
        sectionsJson: t.sectionsJson,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        keywordsJson: t.keywordsJson,
      },
    });
  }

  return page;
}

export async function upsertPost(prisma: PrismaClient, postData: PostSeed) {
  const post = await prisma.post.upsert({
    where: { slug: postData.slug },
    update: {
      category: postData.category,
      published: postData.published,
    },
    create: {
      slug: postData.slug,
      category: postData.category,
      published: postData.published,
    },
  });

  for (const t of postData.translations) {
    await prisma.postTranslation.upsert({
      where: {
        postId_locale: {
          postId: post.id,
          locale: t.locale,
        },
      },
      update: {
        title: t.title,
        excerpt: t.excerpt,
        contentHtml: t.contentHtml,
        featuredImage: t.featuredImage,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        faqJson: t.faqJson,
      },
      create: {
        postId: post.id,
        locale: t.locale,
        title: t.title,
        excerpt: t.excerpt,
        contentHtml: t.contentHtml,
        featuredImage: t.featuredImage,
        seoTitle: t.seoTitle,
        seoDescription: t.seoDescription,
        faqJson: t.faqJson,
      },
    });
  }

  return post;
}

export async function upsertPages(
  prisma: PrismaClient,
  pages: PageSeed[],
  label = 'páginas'
) {
  for (const pageData of pages) {
    await upsertPage(prisma, pageData);
    console.log(
      `✅ Página "${pageData.slug}" (${pageData.translations.length} traduções)`
    );
  }
  console.log(`\n✅ ${pages.length} ${label} sincronizadas com upsert`);
}

export async function upsertPosts(
  prisma: PrismaClient,
  posts: PostSeed[],
  label = 'posts'
) {
  for (const postData of posts) {
    await upsertPost(prisma, postData);
    console.log(
      `✅ Post "${postData.slug}" (${postData.translations.length} traduções)`
    );
  }
  console.log(`\n✅ ${posts.length} ${label} sincronizados com upsert`);
}
