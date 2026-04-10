'use client'

import { useEffect, useRef } from 'react'

const ParallaxBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return

      // 鼠标相对视口中心的偏移，范围 -0.5 到 0.5
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      // 鼠标距中心的距离，0（中心）到 0.7（角落）
      const distance = Math.sqrt(x * x + y * y)

      // 距离越远，模糊越强：0px 到 4px
      const blur = distance * 6

      const intensity = 20

      bgRef.current.style.transform = `scale(1.08) translate(${x * intensity}px, ${y * intensity}px)`
      bgRef.current.style.filter = `blur(${blur}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 bg-[url('/images/background.png')] bg-cover bg-center transition-transform duration-200 ease-out"
    />
  )
}

export default ParallaxBackground
