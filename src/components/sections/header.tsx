// import { NavBar } from '@/components/sections/navbar'
import { Logo } from '@/components/ui/logo'
import { cc } from '@/libs/classes-combine'
import type { ComponentProps } from 'react'

export const Header = ({ className, ref, ...props }: ComponentProps<'header'>) => {
  return (
    <header
      ref={ref}
      className={cc('fixed z-50 flex w-full items-center justify-between px-8 py-3', className)}
      {...props}
    >
      <Logo />
      {/* <NavBar /> */}
      <div className="" />
    </header>
  )
}
