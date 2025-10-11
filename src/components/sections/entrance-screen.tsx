'use client'

import { NumberTicker } from '@/components/ui/number-ticker'
import TextFill from '@/components/ui/text-fill'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

interface LoadingScreenProps {
  duration?: number
  storageType?: 'session' | 'local'
}

// Helper functions for storage
function isFirstVisit(storageType: 'session' | 'local' = 'session'): boolean {
  if (typeof window === 'undefined') return true

  const storage = storageType === 'session' ? sessionStorage : localStorage
  return !storage.getItem('portfolio_visited')
}

function markAsVisited(storageType: 'session' | 'local' = 'session'): void {
  if (typeof window === 'undefined') return

  const storage = storageType === 'session' ? sessionStorage : localStorage
  storage.setItem('portfolio_visited', 'true')
}

/**
 * LoadingScreen - Always shows loading first, then checks storage
 * This prevents any flash of content while checking storage
 */
export const LoadingScreen = ({ duration = 3, storageType = 'session' }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<'loading' | 'entry' | 'exit' | 'hidden'>('loading')
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  const handleEntryComplete = useCallback(() => {
    setPhase('exit')
  }, [])

  // Always start with loading screen, then check storage
  useEffect(() => {
    setMounted(true)

    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      // Check if it's the first visit
      if (!isFirstVisit(storageType)) {
        setPhase('hidden')
      } else {
        // Mark as visited and start animation
        markAsVisited(storageType)
        setPhase('entry')
      }
    }, 100) // Small delay to prevent flash

    return () => clearTimeout(timer)
  }, [storageType])

  // Entry animation
  useEffect(() => {
    if (phase !== 'entry' || !containerRef.current || !mounted) return

    gsap.to(containerRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      transformOrigin: 'center center',
      duration: 0.8,
      ease: 'power2.inOut',
    })
  }, [phase, mounted])

  // Exit animation
  useEffect(() => {
    if (phase !== 'exit' || !containerRef.current || !mounted) return
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
  }, [phase, mounted])

  // Always show loading screen until we know what to do
  if (!mounted || phase === 'loading') {
    return (
      <div className="pointer-events-none fixed inset-0 z-[999]">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
    )
  }

  if (phase === 'hidden') return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <div ref={bgRef} className="absolute inset-0 bg-black" />
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
