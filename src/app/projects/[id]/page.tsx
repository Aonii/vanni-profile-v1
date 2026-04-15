'use client'

import { notFound, useParams } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import { PROJECTS, TAG_COLORS } from '@/lib/projects'

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const project = PROJECTS.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-surface px-8 py-16 md:px-24 lg:px-40">
      {/* 标题区 */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold text-text">{project.name}</h1>
        <span className="text-sm text-text-muted">{project.date}</span>
      </div>

      {/* 技术标签 */}
      {project.tags && (
        <div className="mb-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="rounded-full border px-3 py-1 text-sm font-medium"
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
      )}

      {/* 封面图 */}
      {project.image && (
        <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* 详细介绍 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-text">About this project</h2>
        <div className="whitespace-pre-line leading-relaxed text-text-muted">
          {project.detail}
        </div>
      </section>

      {/* 视频 */}
      {project.video && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-text">Demo Video</h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-md">
            <video
              src={project.video}
              controls
              className="aspect-video w-full"
            />
          </div>
        </section>
      )}

      {/* 外部链接 */}
      {project.link && project.link !== '#' && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
        >
          View on GitHub →
        </a>
      )}
    </main>
  )
}

export default ProjectDetailPage
