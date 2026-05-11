import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: SITE.name,
    description: SITE.taglineEn,
    site: context.site,
    items: articles
      .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
      .map((a) => ({
        title: a.data.title,
        description: a.data.description,
        pubDate: a.data.publishedAt,
        link: `/${a.data.category}/${a.id.replace(/\.(md|mdx)$/, '').split('/').pop()}/`,
      })),
    customData: '<language>en-MY</language>',
  });
}
