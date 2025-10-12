'use client'

import { Button } from '@/components/ui/button'
import { useCvDownload } from '@/hooks/use-cv-download'
import { useTranslations } from 'next-intl'

export const DownloadCvButton = () => {
  const t = useTranslations('navbar')
  const { downloadCv } = useCvDownload()

  return (
    <Button
      variant="tertiary"
      className="h-full rounded-full before:rounded-full"
      onClick={downloadCv}
      aria-label={t('downloadCV')}
    >
      {t('downloadCV')}
    </Button>
  )
}
