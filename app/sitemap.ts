import type { MetadataRoute } from 'next'

const SITE_URL = 'https://docs.drawtab.app'

/**
 * Every page in the docs site. Kept as an explicit list rather than derived
 * from Nextra's page map so priorities/change frequencies can be tuned per
 * page — the API reference changes far more often than the billing page.
 * When a new `app/<route>/page.mdx` is added, add it here too.
 */
const PAGES: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/quickstart', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/authentication', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/api-reference/render', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/api-reference/layers', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/api-reference/errors', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/templates', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/sdks-examples', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/rate-limits', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/billing-and-credits', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/webhooks', changeFrequency: 'monthly', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
