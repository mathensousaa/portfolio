import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import '@/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_ID } from '@/config/environment'
import { NoiseFilter } from '@/components/ui/noise-filter'
import { routing } from '@/i18n/routing'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import { cc } from '@/libs/classes-combine'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
      <html lang={locale} suppressHydrationWarning>
        <body className={cc(sans.variable, serif.variable, mono.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              {children}
              <NoiseFilter />
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId={GA_ID} />
      </html>
    </>
  )
}
