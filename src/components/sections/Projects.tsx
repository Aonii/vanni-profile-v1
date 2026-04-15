'use client'
// Phase 3 实现：项目展示卡片
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS, TAG_COLORS, type Project } from '@/lib/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative flex h-52 w-full overflow-hidden rounded-2xl border border-border bg-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-100 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
      {/* 左侧 1/3：项目图片 */}
      <div className="relative w-1/3 shrink-0 overflow-hidden">
        {/* 占位背景：图片不存在时可见，图片加载后被盖住 */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-border" />
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
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

        {/* 描述 */}
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
          <Link
            href={`/projects/${project.id}`}
            className="shrink-0 rounded-lg border border-border px-4 py-1.5 text-sm text-text-muted transition-[border-color,color] duration-200 hover:border-accent hover:text-accent"
          >
            More Detail →
          </Link>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center bg-surface pl-[35%] pr-12 py-24"
    >
      <h2 className="mb-10 text-4xl font-semibold text-text">Projects</h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
