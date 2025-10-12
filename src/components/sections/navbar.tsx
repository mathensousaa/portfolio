import { DownloadCvButton } from '@/components/download-cv-button'
import { NavBarLink } from '@/components/sections/navbar-link'
import { cc } from '@/libs/classes-combine'
import { useTranslations } from 'next-intl'
import type { ComponentProps } from 'react'

const items = [
  {
    key: 'home',
    href: '/',
  },
  {
    key: 'links',
    href: '/links',
  },
]

export const NavBar = ({ className, ...props }: ComponentProps<'nav'>) => {
  const t = useTranslations('navbar')

  return (
    <nav
      aria-label={t('ariaLabel')}
      className={cc(
        'flex items-center justify-between gap-6 rounded-full bg-primary/80 py-1 pr-1 pl-3 text-xs font-bold text-primary-foreground/75 md:py-1 md:pr-1 md:pl-8 md:text-lg',
        className,
      )}
      {...props}
    >
      <ul className="flex items-center gap-4 uppercase">
        {items.map((item) => (
          <NavBarLink key={item.key} item={item} />
        ))}
      </ul>
      <DownloadCvButton />
    </nav>
  )
}
