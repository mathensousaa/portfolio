import { NavBar } from '@/components/sections/navbar'
import { cc } from '@/libs/classes-combine'
import type { ComponentProps } from 'react'

export const Header = ({ className, ref, ...props }: ComponentProps<'header'>) => {
  return (
    <header
      ref={ref}
      className={cc('fixed z-50 flex w-full items-center justify-between p-3', className)}
      {...props}
    >
      <div className="size-10 rounded-full bg-primary" />
      <NavBar />
      <div className="size-10 rounded-full bg-primary" />
    </header>
  )
}
