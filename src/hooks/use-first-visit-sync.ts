/**
 * Synchronous version of useFirstVisit hook
 * Checks storage immediately without causing visual delays
 */

import { useEffect, useState } from 'react'

type StorageType = 'session' | 'local'

interface UseFirstVisitSyncOptions {
  storageType?: StorageType
  key?: string
}

function checkStorageSync(storageType: StorageType, key: string): boolean {
  try {
    const storage = storageType === 'session' ? sessionStorage : localStorage
    return !storage.getItem(key)
  } catch {
    // If storage is not available, assume first visit
    return true
  }
}

export function useFirstVisitSync(options: UseFirstVisitSyncOptions = {}) {
  const { storageType = 'session', key = 'portfolio_visited' } = options

  // Check storage synchronously on initialization
  const [isFirstVisit] = useState(() => checkStorageSync(storageType, key))
  const [hasMarkedVisited, setHasMarkedVisited] = useState(false)

  useEffect(() => {
    if (isFirstVisit && !hasMarkedVisited) {
      try {
        const storage = storageType === 'session' ? sessionStorage : localStorage
        storage.setItem(key, 'true')
        setHasMarkedVisited(true)
      } catch {
        // Storage not available, ignore
      }
    }
  }, [isFirstVisit, hasMarkedVisited, storageType, key])

  return {
    isFirstVisit,
    isReady: true, // Always ready since we check synchronously
  }
}
