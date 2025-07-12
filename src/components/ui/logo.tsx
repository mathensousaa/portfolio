import { cc } from '@/libs/classes-combine'
import type { ComponentProps } from 'react'

export const Logo = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    className={cc(
      'font-semibold text-primary italic sm:text-lg md:text-xl lg:text-2xl xl:text-4xl',
      className,
    )}
    {...props}
  >
    ms
  </span>
)
