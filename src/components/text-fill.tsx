'use client'
import { cc } from '@/libs/classes-combine'
import gsap from 'gsap'
import React from 'react'

interface TextFillProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number
}

export default function TextFill({ duration = 3, children, className, ...props }: TextFillProps) {
  const clipRef = React.useRef<SVGRectElement | null>(null)

  React.useEffect(() => {
    if (clipRef.current) {
      gsap.fromTo(
        clipRef.current,
        { y: 100, height: 0 },
        { y: 0, height: 110, duration, ease: 'power2.inOut' },
      )
    }
  }, [duration])

  return (
    <div className={cc('mx-auto w-full max-w-6xl', className)} {...props}>
      <svg viewBox="0 0 1000 150" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <title>loader</title>
        <defs>
          <clipPath id="text-clip">
            <rect ref={clipRef} x="0" y="0" width="1000" height="110" />
          </clipPath>
        </defs>
        <text
          x="50%"
          y="100"
          textAnchor="middle"
          fontSize="110"
          className="fill-none stroke-primary stroke-2 font-semibold"
        >
          {children}
        </text>

        <text
          x="50%"
          y="100"
          textAnchor="middle"
          fontSize="110"
          className="fill-primary stroke-primary font-semibold"
          clipPath="url(#text-clip)"
        >
          {children}
        </text>
      </svg>
    </div>
  )
}
