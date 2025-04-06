import { cc } from '@/libs/classes-combine'
import type React from 'react'

export default function NumberTicker({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cc('', className)} {...props} />
}
