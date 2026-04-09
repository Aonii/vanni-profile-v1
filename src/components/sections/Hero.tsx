// Phase 2 实现：Three.js 粒子效果 + 打字机动效 + 鼠标视差
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center"
    >
      <div className="absolute inset-0 z-10 bg-[#fdf8f0]/35" />

      <div className="relative z-20 flex w-full max-w-[92rem] justify-end px-6">
        {/* <div className="flex flex-col gap-4 self-start sticky top-20">
          <h2 className="text-2xl font-semibold uppercase tracking-widest text-text-muted">
            On this page
          </h2>
          <nav className="flex flex-col gap-3">
            <a
              href="#tech-stack"
              className="text-lg font-medium text-text transition-colors hover:text-accent"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              className="text-lg font-medium text-text transition-colors hover:text-accent"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-lg font-medium text-text transition-colors hover:text-accent"
            >
              Experience
            </a>
            <a
              href="#gallery"
              className="text-lg font-medium text-text transition-colors hover:text-accent"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-text transition-colors hover:text-accent"
            >
              Contact
            </a>
          </nav>
        </div> */}

        <div className="flex flex-col gap-6 w-[65%]">
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
      </div>
    </section>
  )
}

export default Hero
