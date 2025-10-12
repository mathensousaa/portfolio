import { useLocale } from 'next-intl'
import { useCallback } from 'react'

// Configuração centralizada dos CVs por idioma
const cvConfig = {
  'pt-BR': {
    filename: 'Currículo Full Stack - Matheus de Sousa.pdf',
    path: 'cv/Currículo Full Stack - Matheus de Sousa.pdf',
  },
  en: {
    filename: 'Full Stack Resume - Matheus de Sousa.pdf',
    path: 'cv/Full Stack Resume - Matheus de Sousa.pdf',
  },
} as const

/**
 * Hook personalizado para gerenciar download de CV baseado no idioma
 * Segue o padrão de boas práticas com configuração centralizada
 */
export const useCvDownload = () => {
  const locale = useLocale()

  const downloadCv = useCallback(async () => {
    try {
      const config = cvConfig[locale as keyof typeof cvConfig] || cvConfig.en

      // Cria um link temporário para download
      const link = document.createElement('a')
      link.href = config.path
      link.download = config.filename
      link.target = '_blank'

      // Adiciona o link ao DOM temporariamente e clica
      document.body.appendChild(link)
      link.click()

      // Remove o link do DOM
      document.body.removeChild(link)
    } catch (error) {
      console.error('Erro ao fazer download do CV:', error)
      // Fallback: abre o CV em nova aba
      const config = cvConfig[locale as keyof typeof cvConfig] || cvConfig.en
      window.open(config.path, '_blank')
    }
  }, [locale])

  return {
    downloadCv,
    currentLocale: locale,
    cvConfig,
  }
}
