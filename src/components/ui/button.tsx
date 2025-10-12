import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-white/20 text-sm font-medium whitespace-nowrap transition-all outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-b before:from-white before:to-transparent before:opacity-[0.16] hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary))] shadow-[0_1px_2px_0_rgba(27,28,29,0.5)] hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-[0_0_0_1px_hsl(var(--destructive))] shadow-[0_1px_2px_0_rgba(27,28,29,0.5)] hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40',
        outline:
          'border bg-background shadow-[0_0_0_1px_hsl(var(--border))] shadow-[0_1px_2px_0_rgba(27,28,29,0.5)] shadow-xs before:opacity-0 hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-[0_0_0_1px_hsl(var(--secondary))] shadow-[0_1px_2px_0_rgba(27,28,29,0.5)] hover:bg-secondary/80',
        tertiary:
          'bg-tertiary text-tertiary-foreground shadow-[0_0_0_1px_hsl(var(--tertiary))] shadow-[0_1px_2px_0_rgba(27,28,29,0.5)] hover:bg-tertiary/80',
        ghost:
          'border-none shadow-none before:opacity-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'border-none text-primary underline-offset-4 shadow-none before:opacity-0 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
