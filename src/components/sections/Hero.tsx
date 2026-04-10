'use client'
// Phase 2 实现：Three.js 粒子效果 + 打字机动效 + 鼠标视差

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(true)
  const prevScrollY = useRef(0)
  const prevRatio = useRef(0)

  useEffect(() => {
    prevScrollY.current = window.scrollY

    const techStack = document.querySelector('#tech-stack')
    if (!techStack) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        const currentScrollY = window.scrollY
        const isScrollingDown = currentScrollY > prevScrollY.current
        const isRatioIncreasing = ratio > prevRatio.current

        prevScrollY.current = currentScrollY
        prevRatio.current = ratio

        if (isScrollingDown && isRatioIncreasing && ratio >= 0.33) {
          // 只有 下滑 + ratio 增大 → 隐藏
          setVisible(false)
        } else if (!isScrollingDown && !isRatioIncreasing && ratio < 0.33) {
          // 只有 上滑 + ratio 减小 → 显示
          setVisible(true)
        }
      },
      { threshold: [0, 0.33] }
    )

    observer.observe(techStack)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center"
    >
      <div className="absolute inset-0 z-10 bg-[#fdf8f0]/35" />

      <motion.div
        className="pointer-events-none fixed inset-0 z-20 flex items-center justify-end px-6"
        animate={
          visible
            ? { opacity: 1, y: 0, filter: 'blur(0px)' }
            : { opacity: 0, y: -40, filter: 'blur(8px)' }
        }
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="pointer-events-auto flex w-[62%] flex-col gap-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-text">
              Hi, I&apos;m Vanni Fu
            </h1>
            <h2 className="mt-1 text-2xl text-text-muted">
              Full-Stack Engineer
            </h2>
          </div>
          <div>
            <p className="text-xl leading-relaxed text-[#2d4d38]">
              I graduated from UNSW with Master of IT, and previously completed
              Statistics and Data Science in USYD.
            </p>
            <p className="text-xl leading-relaxed text-[#2d4d38]">
              I am an aspiring <strong>Full-Stack Engineer</strong> skilled in
              React, TypeScript, Next.js, NodeJS, NextJS, and some modern CSS
              frameworks.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-[#2d4d38]">
              My cross-disciplinary background gives me an edge in bridging
              technical execution with business thinking —{' '}
              <strong>translating client needs into solutions</strong> that
              actually make sense.
            </p>
          </div>
          <a
            href="mailto:vanni1919@outlook.com"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/60 px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
