'use client'
import { useState } from 'react'

const IMAGES = Array.from({ length: 13 }, (_, i) => `/images/gallery-${i + 1}.png`)

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section
      id="gallery"
      className="flex min-h-screen flex-col justify-center bg-surface pl-[33%] pr-12 py-24"
    >
      <h2 className="mb-10 text-4xl font-semibold text-text">Gallery</h2>

      {/* 瀑布流：3 列 */}
      <div className="columns-3 gap-3">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="group relative mb-3 cursor-zoom-in overflow-hidden rounded-xl break-inside-avoid"
            onClick={() => setLightbox(src)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full transition-transform duration-300 group-hover:scale-105"
            />
            {/* hover 遮罩 */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>

      {/* Lightbox：点击图片全屏预览 */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[90vh] w-auto rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
