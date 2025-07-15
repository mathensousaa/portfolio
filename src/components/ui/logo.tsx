import { cc } from '@/libs/classes-combine'
import type { ComponentProps } from 'react'

export const Logo = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    className={cc('text-2xl font-semibold text-primary italic lg:text-2xl xl:text-4xl', className)}
    {...props}
  >
    ms
  </span>
)
