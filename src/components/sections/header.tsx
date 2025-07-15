// import { NavBar } from '@/components/sections/navbar'
import { Logo } from '@/components/ui/logo'
import { LanguageSwitcher } from '@/components/language-switcher'
import { cc } from '@/libs/classes-combine'
import type { ComponentProps } from 'react'

export const Header = ({ className, ref, ...props }: ComponentProps<'header'>) => {
  return (
    <header
      ref={ref}
      className={cc(
        'fixed inset-x-0 z-50 mx-auto flex w-full items-center justify-between px-3 py-3 md:px-4 lg:px-6 xl:px-8',
        className,
      )}
      {...props}
    >
      <Logo />
      {/* <NavBar /> */}
      <LanguageSwitcher />
    </header>
  )
}
