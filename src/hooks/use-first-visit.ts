/**
 * Custom hook to manage first visit state
 * Provides different storage strategies for controlling when to show loading screens
 */

import { useEffect, useState } from 'react'

type StorageType = 'session' | 'local'

interface UseFirstVisitOptions {
  storageType?: StorageType
  key?: string
}

export function useFirstVisit(options: UseFirstVisitOptions = {}) {
  const { storageType = 'session', key = 'portfolio_visited' } = options

  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null)
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    // Check storage immediately on mount
    const storage = storageType === 'session' ? sessionStorage : localStorage
    const hasVisited = storage.getItem(key)

    // If it's the first visit, show loading immediately
    if (!hasVisited) {
      setIsFirstVisit(true)
      setHasChecked(true)
      // Mark as visited immediately
      storage.setItem(key, 'true')
    } else {
      // If already visited, hide loading immediately
      setIsFirstVisit(false)
      setHasChecked(true)
    }
  }, [storageType, key])

  return {
    isFirstVisit,
    hasChecked,
    isReady: hasChecked && isFirstVisit !== null,
  }
}
