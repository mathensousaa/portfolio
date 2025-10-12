import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type React from 'react'

const Hero: React.FC = () => {
  const t = useTranslations('hero')

  return (
    <section className="container flex min-h-svh w-full flex-col items-center justify-center bg-cover bg-center text-center text-white">
      <h1 className="mb-1 text-4xl font-extrabold tracking-tighter text-tertiary lowercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        {t('title')}
      </h1>
      <p className="mb-6 font-serif text-sm leading-tight font-medium text-muted-foreground italic sm:text-base md:text-lg lg:text-xl">
        {t('description')}
      </p>
      <div className="flex space-x-4">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mathensousaa"
          target="_blank"
        >
          <GitHubLogoIcon className="h-4 w-4 text-muted-foreground" />
          {t('github')}
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/matheus-de-sousa/"
          target="_blank"
        >
          <LinkedInLogoIcon className="h-4 w-4 text-muted-foreground" />
          {t('linkedin')}
        </Link>
      </div>
    </section>
  )
}

export default Hero
