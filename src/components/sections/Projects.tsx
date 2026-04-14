'use client'
// Phase 3 实现：项目展示卡片
import Image from 'next/image'

type TagCategory = 'frontend' | 'backend' | 'database' | 'cloud'

interface Tag {
  name: string
  category: TagCategory
}

interface Project {
  name: string
  date: string
  description: string
  image: string
  link: string
  tags?: Tag[]
}

const TAG_COLORS: Record<
  TagCategory,
  { text: string; border: string; bg: string }
> = {
  frontend: { text: '#16a34a', border: '#22c55e', bg: '#22c55e18' },
  backend: { text: '#b45309', border: '#b45309', bg: '#b4530918' },
  database: { text: '#2563eb', border: '#3b82f6', bg: '#3b82f618' },
  cloud: { text: '#a16207', border: '#eab308', bg: '#eab30818' },
}

const PROJECTS: Project[] = [
  {
    name: 'Virtual Coach',
    date: 'Jul 2025 – Oct 2025',
    description:
      'A full-stack personal website built with Next.js 14, Tailwind CSS, and Framer Motion. Features an interactive 3D bird cursor, parallax background, animated tech stack scatter plot, and a contact form backed by PostgreSQL and Resend.',
    image: '/images/project-1.png',
    link: '#',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'TS', category: 'frontend' },
      { name: 'Next.js', category: 'frontend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'AWS', category: 'cloud' },
      { name: 'Spring Boot', category: 'backend' },
    ],
  },
  {
    name: 'Mooc e-learning',
    date: 'Feb 2025 – Jun 2025',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: '/images/project-2.png',
    link: '#',
    tags: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'MySQL', category: 'database' },
    ],
  },
  {
    name: 'EtoISL',
    date: 'Feb 2025 – Jun 2025',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    image: '/images/project-3.png',
    link: '#',
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative flex h-52 w-full overflow-hidden rounded-2xl border border-border bg-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-100 hover:-translate-y-0.1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
      {/* 左侧 1/3：项目图片 */}
      <div className="relative w-1/3 shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* 占位背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-border" />
      </div>

      {/* 分隔线：hover 时变 accent 色 */}
      <div className="w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-border to-transparent transition-colors duration-200 group-hover:via-accent" />

      {/* 右侧 2/3：内容 */}
      <div className="flex flex-1 flex-col justify-between p-6">
        {/* 上：项目名 + 日期 */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-text transition-colors duration-200 group-hover:text-accent">
            {project.name}
          </h3>
          <span className="shrink-0 text-sm text-text-muted">
            {project.date}
          </span>
        </div>

        {/* 下：description */}
        <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        {/* 底部：技术标签（左）+ More Detail 按钮（右） */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((tag) => (
              <span
                key={tag.name}
                className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                style={{
                  color: TAG_COLORS[tag.category].text,
                  borderColor: TAG_COLORS[tag.category].border,
                  backgroundColor: TAG_COLORS[tag.category].bg,
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="shrink-0 rounded-lg border border-border px-4 py-1.5 text-sm text-text-muted transition-[border-color,color] duration-200 hover:border-accent hover:text-accent"
          >
            More Detail →
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center bg-surface pl-[35%] pr-12"
    >
      <h2 className="mb-10 text-4xl font-semibold text-text">Projects</h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
