import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import '@/globals.css'
import { cc } from '@/libs/classes-combine'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_ID } from '@/config/environment'
import { NoiseFilter } from '@/components/ui/noise-filter'
import { routing } from '@/i18n/routing'

const ppmori = localFont({
  src: [
    {
      path: '../../../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-SemiBold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-ppmori',
  display: 'swap',
})

// Generate static params for all supported locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// Generate metadata for each locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  // Load messages for the locale
  const messages = await getMessages({ locale })
  const metadata = messages.metadata as {
    title: string
    description: string
    keywords: string
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Load messages for the locale
  const messages = await getMessages({ locale })

  return (
    <>
      <html lang={locale}>
        <body className={cc(ppmori.className, 'antialiased')}>
          <NextIntlClientProvider messages={messages}>
            {children}
            <NoiseFilter />
          </NextIntlClientProvider>
        </body>
        <GoogleAnalytics gaId={GA_ID} />
      </html>
    </>
  )
}
