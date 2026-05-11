import { SITE, FITOUT_REF } from './site';

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  sameAs: [SITE.social.instagram, SITE.author.linkedin],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: ['ms-MY', 'en-MY'],
});

export const articleSchema = (opts: {
  title: string;
  description: string;
  url: string;
  publishedAt: Date;
  updatedAt?: Date;
  locale: 'ms' | 'en';
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  inLanguage: opts.locale === 'ms' ? 'ms-MY' : 'en-MY',
  datePublished: opts.publishedAt.toISOString(),
  dateModified: (opts.updatedAt ?? opts.publishedAt).toISOString(),
  author: {
    '@type': 'Person',
    name: SITE.author.name,
    jobTitle: SITE.author.role,
    sameAs: SITE.author.linkedin,
  },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  mainEntityOfPage: opts.url,
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const fitoutBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: FITOUT_REF.fullName,
  url: FITOUT_REF.url,
  telephone: '+60193428981',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shah Alam',
    addressRegion: 'Selangor',
    addressCountry: 'MY',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Klang Valley' },
});
