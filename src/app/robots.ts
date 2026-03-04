import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General: allow all well-behaved crawlers
      {
        userAgent: '*',
        allow: '/',
      },

      // ── AI Search / Retrieval bots (ALLOW) ──────────────────────
      // These bots surface our content in AI-powered search results.
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },

      // ── AI Training-only bots (BLOCK) ───────────────────────────
      // These bots crawl for model training, not search. Block them.
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: 'cohere-ai',
        disallow: '/',
      },
    ],
    sitemap: 'https://ipsacv.com.mx/sitemap.xml',
    // LLMs.txt – machine-readable site summary for AI agents
    // See: https://ipsacv.com.mx/llms.txt
  };
}
