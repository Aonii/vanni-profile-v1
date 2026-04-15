'use client'
// Phase 2 实现：Three.js 粒子效果 + 打字机动效 + 鼠标视差

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const heroSection = document.querySelector('#hero')
    const techStack = document.querySelector('#tech-stack')
    if (!heroSection || !techStack) return

    // Observer 1：监听 Hero section 自身 → 可见时显示自我介绍
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.67) setVisible(true)
      },
      { threshold: [0.67] }
    )

    // Observer 2：监听 TechStack → 出现 1/3 时隐藏自我介绍
    const techObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.33) setVisible(false)
      },
      { threshold: [0.33] }
    )

    heroObserver.observe(heroSection)
    techObserver.observe(techStack)

    return () => {
      heroObserver.disconnect()
      techObserver.disconnect()
    }
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
        <div className="pointer-events-none flex w-[62%] flex-col gap-6">
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
            className="pointer-events-auto inline-flex w-fit items-center gap-2 rounded-full bg-accent/60 px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
