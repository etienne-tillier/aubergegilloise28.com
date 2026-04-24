import { MetadataRoute } from 'next';

const BASE_URL = 'https://aubergegilloise28.com';
const DEFAULT_LOCALE = 'fr-FR';

// Static pages with hreflang for multilingual SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/hebergements`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/restaurants`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/que-faire`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Add x-default and fr-FR hreflang alternates
  return staticPages.map((page) => ({
    ...page,
    alternates: {
      languages: {
        'x-default': page.url,
        [DEFAULT_LOCALE]: page.url,
      },
    },
  }));
}