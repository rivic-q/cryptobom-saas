"use client"

import { useState, useEffect, type RefObject } from "react"

interface Dimensions {
  width: number
  height: number
}

export function useDimensions(ref: RefObject<HTMLElement | SVGElement>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const updateDimensions = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        if (rect) {
          const { width, height } = rect
          setDimensions({ width, height })
        }
      }
    }

    const debouncedUpdateDimensions = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateDimensions, 250) // Wait 250ms after resize ends
    }

    if (typeof window !== "undefined") {
      // Initial measurement
      updateDimensions()

      window.addEventListener("resize", debouncedUpdateDimensions)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", debouncedUpdateDimensions)
      }
      clearTimeout(timeoutId)
    }
  }, [ref])

  return dimensions
}
