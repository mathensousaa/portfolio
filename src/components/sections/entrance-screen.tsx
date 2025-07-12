'use client'
import { NumberTicker } from '@/components/ui/number-ticker'
import TextFill from '@/components/ui/text-fill'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

interface LoadingScreenProps {
  duration?: number
}

export const LoadingScreen = ({ duration = 3 }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'entry' | 'exit' | 'hidden'>('entry')
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const handleEntryComplete = useCallback(() => {
    setPhase('exit')
  }, [])

  useEffect(() => {
    if (phase !== 'entry' || !containerRef.current) return

    gsap.to(containerRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      transformOrigin: 'center center',
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }, [phase])

  useEffect(() => {
    if (phase !== 'exit' || !containerRef.current) return
    const tl = gsap.timeline({ onComplete: () => setPhase('hidden') })

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: 0,
        filter: 'blur(4px)',
        scale: 0.95,
        transformOrigin: 'center center',
        duration: 1,
        ease: 'power2.inOut',
      })
    }

    tl.to(containerRef.current, {
      opacity: 0,
      filter: 'blur(4px)',
      scale: 0.95,
      transformOrigin: 'center center',
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [phase])

  if (phase === 'hidden') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <div ref={bgRef} className="absolute inset-0 bg-background" />
      <div
        ref={containerRef}
        role="presentation"
        aria-hidden={false}
        className="absolute z-[999] min-h-svh w-full"
        style={{
          opacity: 0,
          filter: 'blur(4px)',
        }}
      >
        <div className="relative grid h-full min-h-svh w-full grid-rows-[20px_1fr_20px] items-center justify-items-center gap-2 p-3 pb-20 text-center sm:p-20">
          <div className="row-start-2 flex w-full flex-col items-center justify-center text-center">
            <TextFill onComplete={handleEntryComplete} duration={duration}>
              matheusousa.dev
            </TextFill>
            <NumberTicker
              value={100}
              duration={duration}
              className="absolute right-6 bottom-6 z-50 text-3xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-7xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
