/**
 * Site-wide constants for rumahbaru.my (Hub 3).
 *
 * Author persona DELIBERATELY differs from Hub 1 (Aisyah, design editor)
 * and Hub 2 (Hafiz, ex-QS). Different name, different background, different
 * LinkedIn handle. Anti-PBN: each hub feels like its own real publication.
 *
 * BINA+ link policy here uses different semantic naming, a different mix
 * of anchor variants, and a lower follow-link density than Hub 1 or 2,
 * because this hub catches buyers BEFORE they renovate — most pages have
 * no editorial reason to recommend a contractor at all.
 */

export const SITE = {
  name: 'Rumah Baru',
  tagline: 'Panduan handover, loan, dan persediaan rumah baru di Malaysia.',
  taglineEn: "A first-time homeowner's dossier — VP, loans, defects, fit-out.",
  url: 'https://rumahbaru.my',
  defaultLocale: 'ms',
  locales: ['ms', 'en'] as const,
  author: {
    name: 'Ammar Tan',
    role: 'Independent Buyer’s Advocate',
    bio: 'Six years as a property valuer in PJ before going independent. Walks first-time buyers through VP, defect liability, financing, and fit-out — without selling property or insurance.',
    image: '/authors/ammar.jpg',
    linkedin: 'https://www.linkedin.com/in/ammartan-property/',
  },
  social: {
    instagram: 'https://www.instagram.com/rumahbaru.my',
  },
  analytics: {
    plausibleDomain: 'rumahbaru.my',
  },
} as const;

/**
 * Single contractor reference used when the article naturally reaches the
 * "now you need to fit out" handoff. Not the focus of this hub — used
 * sparingly. Per anti-PBN policy: maximum ONE follow link per page,
 * rendered only by <BinaDossierNote/> or the about page.
 *
 * Anchor mix tilts toward NAKED + PARTIAL on this hub. Branded ("BINA+")
 * is used minimally — opposite of Hub 1's branded-heavy mix.
 */
export const FITOUT_REF = {
  url: 'https://binaplus.my/',
  whatsapp: 'https://wa.me/60193428981',
  name: 'BINA+',
  fullName: 'BINA+ Design & Build',
  city: 'Shah Alam, Selangor',
  anchors: [
    { text: 'binaplus.my', type: 'naked' },
    { text: 'the Shah Alam D&B firm we point first-time owners to', type: 'partial' },
    { text: 'a Selangor renovation team that publishes line-item rates', type: 'partial' },
    { text: 'their published rate card', type: 'partial' },
    { text: 'the studio in Section 17, Shah Alam', type: 'partial' },
    { text: 'this Klang Valley contractor', type: 'generic' },
    { text: 'BINA+', type: 'branded' },
  ] as const,
} as const;

export type Locale = (typeof SITE.locales)[number];
