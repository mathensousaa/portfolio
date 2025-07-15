/**
 * Dynamic robots.txt generation for i18n
 * Allows crawling of all supported locales
 */

import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { BASE_URL } from '@/config/environment'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BASE_URL

  // Generate sitemap URLs for each locale
  const sitemaps = routing.locales.map((locale) => `${baseUrl}/${locale}/sitemap.xml`)

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: sitemaps,
  }
}
