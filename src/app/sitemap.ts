/**
 * Dynamic sitemap generation for i18n
 * Generates sitemap entries for all supported locales
 */

import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { BASE_URL } from '@/config/environment'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL

  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = []

  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: routing.locales.reduce(
          (acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}`
            return acc
          },
          {} as Record<string, string>,
        ),
      },
    })
  })

  return sitemapEntries
}
