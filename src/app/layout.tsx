import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/globals.css'
import { cc } from '@/libs/classes-combine'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_ID } from '@/config/environment'

const ppmori = localFont({
  src: [
    {
      path: '../../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-SemiBold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-ppmori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Matheus de Sousa',
  description: 'Portfólio Matheus de Sousa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cc(ppmori.className, 'antialiased')}>{children}</body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  )
}
