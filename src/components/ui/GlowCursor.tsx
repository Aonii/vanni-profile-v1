'use client'

import { useEffect, useRef } from 'react'

const GlowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="h-4 w-4 rounded-full bg-[#ffd700]"
        style={{
          animation: 'glow-pulse 2s infinite',
        }}
      />
    </div>
  )
}

export default GlowCursor
