'use client'

/**
 * Language Switcher Component
 * Minimalist language selector following the design specification
 * Shows "EN | PT-BR" format with clean styling
 */

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useState, useTransition } from 'react'
import { routing } from '@/i18n/routing'
import { LOCALE_DISPLAY_NAMES } from '@/i18n/locales'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isChanging, setIsChanging] = useState(false)

  /**
   * Handle language change
   * Uses next-intl navigation APIs
   */
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale || isChanging) return

    setIsChanging(true)
    startTransition(() => {
      // Navigate to new locale using next-intl navigation
      router.push(pathname, { locale: newLocale })

      // Reset changing state after navigation
      setTimeout(() => setIsChanging(false), 100)
    })
  }

  return (
    <div className="flex items-center space-x-1 text-sm font-medium text-muted-foreground">
      {routing.locales.map((loc, index) => (
        <div key={loc} className="flex items-center">
          <button
            onClick={() => handleLanguageChange(loc)}
            disabled={isPending || isChanging}
            className={`transition-colors duration-200 hover:text-foreground ${locale === loc ? 'font-semibold text-foreground' : 'text-muted-foreground'} ${isPending || isChanging ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} rounded-sm px-1 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none`}
            aria-label={`Switch to ${loc} language`}
          >
            {LOCALE_DISPLAY_NAMES[loc as keyof typeof LOCALE_DISPLAY_NAMES]}
          </button>
          {index < routing.locales.length - 1 && (
            <span className="mx-1 text-muted-foreground/60 select-none">|</span>
          )}
        </div>
      ))}
    </div>
  )
}
