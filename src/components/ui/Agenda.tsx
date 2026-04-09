'use client'

import { useState, useEffect, useRef } from 'react'

const SECTIONS = [
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

const Agenda = () => {
  const [visible, setVisible] = useState(true)
  const [activeSection, setActiveSection] = useState<string>('')
  const prevScrollY = useRef(0)
  const prevRatio = useRef(0)

  useEffect(() => {
    prevScrollY.current = window.scrollY
    const observers: IntersectionObserver[] = []

    const techStack = document.querySelector('#tech-stack')
    if (techStack) {
      const techStackObserver = new IntersectionObserver(
        ([entry]) => {
          const ratio = entry.intersectionRatio
          const currentScrollY = window.scrollY
          const isScrollingDown = currentScrollY > prevScrollY.current
          const isRatioIncreasing = ratio > prevRatio.current

          prevScrollY.current = currentScrollY
          prevRatio.current = ratio

          // 往下滑：Hero → TechStack（ratio 增大，方向向下）
          if (isScrollingDown && isRatioIncreasing) {
            if (ratio >= 0.33 && ratio < 0.66) setVisible(false)
            else if (ratio >= 0.66) setVisible(true)
          }

          // 往上滑：TechStack → Hero（ratio 减小，方向向上）
          if (!isScrollingDown && !isRatioIncreasing) {
            if (ratio <= 0.66 && ratio > 0.33) setVisible(false)
            else if (ratio <= 0.33) setVisible(true)
          }
        },
        { threshold: [0, 0.33, 0.66, 1] }
      )
      techStackObserver.observe(techStack)
      observers.push(techStackObserver)
    }

    // Observer 2：追踪当前在哪个 section，高亮对应链接
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.33 }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.querySelector(`#${id}`)
      if (el) sectionObserver.observe(el)
    })
    observers.push(sectionObserver)

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="fixed left-[18%] top-1/2 z-40 -translate-y-1/2">
      <nav
        className={`flex flex-col gap-3 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-2xl font-semibold uppercase tracking-widest text-text-muted">
          On this page
        </p>
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition-all duration-300 hover:text-accent ${
              activeSection === id
                ? 'text-xl font-semibold text-accent'
                : 'text-lg text-text'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Agenda
