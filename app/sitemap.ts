import { MetadataRoute } from 'next'

const BASE_URL = 'https://aubergegilloise28.com'
const DEFAULT_LOCALE = 'fr-FR'

// Locales supportées par le site
const SUPPORTED_LOCALES: Array<{ code: string; prefix: string }> = [
  { code: 'fr-FR', prefix: '' },
  { code: 'en-US', prefix: '/en' },
  { code: 'es-ES', prefix: '/es' },
  { code: 'de-DE', prefix: '/de' },
  { code: 'it-IT', prefix: '/it' },
  { code: 'nl-NL', prefix: '/nl' },
]

// Pages statiques du site
const STATIC_PAGES: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']
}> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/hebergements', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/restaurants', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/que-faire', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/guides', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' },
]

function buildLocaleUrls(path: string): MetadataRoute.Sitemap {
  const now = new Date()
  const pageInfo = STATIC_PAGES.find(p => p.path === path) ?? {
    priority: 0.5,
    changeFrequency: 'weekly' as const,
  }

  // URL par défaut (fr-FR sans préfixe)
  const defaultUrl = `${BASE_URL}${path}`

  // Construire les alternates hreflang
  const languages: Record<string, string> = {}
  for (const locale of SUPPORTED_LOCALES) {
    const localizedPath = locale.prefix === '' ? defaultUrl : `${BASE_URL}${locale.prefix}${path}`
    languages[locale.code] = localizedPath
  }

  return [
    {
      url: defaultUrl,
      lastModified: now,
      changeFrequency: pageInfo.changeFrequency,
      priority: pageInfo.priority,
      alternates: {
        languages,
      },
    },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  // Générer les URLs multilingues pour chaque page statique
  for (const page of STATIC_PAGES) {
    urls.push(...buildLocaleUrls(page.path))
  }

  return urls
}

export const dynamic = 'force-static'
