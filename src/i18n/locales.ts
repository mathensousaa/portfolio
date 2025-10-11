/**
 * Type-safe locale definitions and constants
 * Following Clean Code principles with single responsibility
 */

// Supported locales
export const LOCALES = ['pt-BR', 'en'] as const

// Type-safe locale type
export type Locale = 'pt-BR' | 'en'

export const DEFAULT_LOCALE: Locale = 'en'

// Locale display names for UI
export const LOCALE_DISPLAY_NAMES: { [K in Locale]: string } = {
  'pt-BR': 'PT-BR',
  en: 'EN',
} as const

// Locale language codes for HTML lang attribute
export const LOCALE_LANG_CODES: { [K in Locale]: string } = {
  'pt-BR': 'pt-BR',
  en: 'en',
} as const

// Type guard to check if a string is a valid locale
export function isValidLocale(locale: string): locale is Locale {
  return locale === 'pt-BR' || locale === 'en'
}

// Utility type for components that receive locale as parameter
export type LocaleParams = {
  params: { locale: Locale }
}

// Utility type for components that receive locale directly
export type LocaleProp = {
  locale: Locale
}
