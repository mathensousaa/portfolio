import { cc } from '@/libs/classes-combine'
import gsap from 'gsap'
import type React from 'react'
import { useEffect, useRef } from 'react'
import { useLocale } from 'next-intl'

interface NumberTickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number
  startValue?: number
  direction?: 'up' | 'down'
  delay?: number
  decimalPlaces?: number
  duration?: number
}

export const NumberTicker = ({
  className,
  startValue = 0,
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  duration = 1,
  ...props
}: NumberTickerProps) => {
  const numberRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const locale = useLocale()

  useEffect(() => {
    if (!numberRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            observer.disconnect()

            const obj = { val: direction === 'down' ? value : startValue }
            const toValue = direction === 'down' ? startValue : value

            gsap.to(obj, {
              val: toValue,
              duration,
              delay,
              ease: 'power2.inOut',
              onUpdate: () => {
                if (!numberRef.current) return

                numberRef.current.textContent = Intl.NumberFormat(locale, {
                  minimumFractionDigits: decimalPlaces,
                  maximumFractionDigits: decimalPlaces,
                }).format(Number(obj.val.toFixed(decimalPlaces)))
              },
            })
          }
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(numberRef.current)
    return () => observer.disconnect()
  }, [value, decimalPlaces, delay, direction, startValue, duration, locale])

  return (
    <span
      ref={numberRef}
      className={cc('inline-block tracking-wider tabular-nums', className)}
      {...props}
    >
      {startValue}
    </span>
  )
}
