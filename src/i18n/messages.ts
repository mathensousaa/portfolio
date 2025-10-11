/**
 * Type definitions for i18n messages
 * Ensures 100% type safety for all translations
 */

// Import message types from JSON files
import type ptBR from '../../messages/pt-BR.json'
import type en from '../../messages/en.json'

// Define the structure of our messages
export type Messages = typeof ptBR

// Type for each locale's messages
export type LocaleMessages = {
  'pt-BR': typeof ptBR
  en: typeof en
}

// Utility type to get nested message keys
export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

// Type for all possible message keys
export type MessageKey = NestedKeyOf<Messages>

// Type for message parameters (for interpolation)
export type MessageParams = Record<string, string | number>
