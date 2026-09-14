import type { MetadataRoute } from 'next'

const SITE_URL = 'https://docs.drawtab.app'

/**
 * Developer documentation is meant to be found — by search engines and by AI
 * assistants answering "how do I call the Drawtab API". Both are explicitly
 * allowed here, unlike workspace.drawtab.app (private dashboards blocked) and
 * ops.drawtab.app (blocked entirely).
 */
export default function robots(): MetadataRoute.Robots {
  const AI_CRAWLERS = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'Google-Extended',
    'Googlebot',
    'ClaudeBot',
    'anthropic-ai',
    'Claude-Web',
    'Claude-SearchBot',
    'PerplexityBot',
    'Bytespider',
    'CCBot',
    'Applebot-Extended',
    'Meta-ExternalAgent',
    'FacebookBot',
    'cohere-ai',
    'Diffbot',
    'Amazonbot',
    'Bingbot',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
