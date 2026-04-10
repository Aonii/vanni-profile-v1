'use client'

import { useEffect, useRef } from 'react'

const ParallaxBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null)
  const mouseOffset = useRef({ x: 0, y: 0 })
  const baseScale = useRef(1.08) // 会被 TechStack 动态修改

  const updateTransform = () => {
    if (!bgRef.current) return
    const { x, y } = mouseOffset.current
    bgRef.current.style.transform = `scale(${baseScale.current}) translate(${x}px, ${y}px)`
  }

  useEffect(() => {
    // 鼠标视差
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      const distance = Math.sqrt(x * x + y * y)

      mouseOffset.current = { x: x * 15, y: y * 15 }

      if (bgRef.current) {
        bgRef.current.style.filter = `blur(${distance * 6}px)`
      }
      updateTransform()
    }
    window.addEventListener('mousemove', handleMouseMove)

    // TechStack 出现时背景退后
    const techStack = document.querySelector('#tech-stack')
    const observers: IntersectionObserver[] = []

    if (techStack) {
      const thresholds = Array.from({ length: 21 }, (_, i) => i / 20)

      const observer = new IntersectionObserver(
        ([entry]) => {
          const ratio = entry.intersectionRatio
          // ratio 0 → 1 时，scale 从 1.08 缩小到 0.95
          baseScale.current = 1.08 - ratio * 0.06
          updateTransform()
        },
        { threshold: thresholds }
      )
      observer.observe(techStack)
      observers.push(observer)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 bg-[url('/images/background.png')] bg-cover bg-center transition-transform duration-200 ease-out"
    />
  )
}

export default ParallaxBackground
