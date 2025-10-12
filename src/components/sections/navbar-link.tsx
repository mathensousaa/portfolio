'use client'

import { usePathname } from '@/i18n/navigation'
import { cc } from '@/libs/classes-combine'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface NavBarLinkProps {
  item: {
    key: string
    href: string
  }
}

export const NavBarLink = ({ item }: NavBarLinkProps) => {
  const t = useTranslations('navbar')
  const pathname = usePathname()

  return (
    <li
      className={cc(
        'h-fit hover:cursor-pointer hover:text-primary-foreground',
        pathname === item.href && 'text-primary-foreground',
      )}
    >
      <Link href={item.href} className="h-fit">
        {t(item.key)}
      </Link>
    </li>
  )
}
