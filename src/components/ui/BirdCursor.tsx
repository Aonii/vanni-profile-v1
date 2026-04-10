'use client'

import Lottie from 'lottie-react'
import { useEffect, useState, useRef } from 'react'
import birdAnimation from '@/animations/Bird.json'

const BIRDS = [
  { offset: 0 },
  { offset: (2 * Math.PI) / 3 },
  { offset: (4 * Math.PI) / 3 },
]

const RADIUS_X = 80 // 水平半径
const RADIUS_Y = 30 // 垂直半径，比水平小，产生透视感
const SPEED = 0.001

const BirdCursor = () => {
  const mousePos = useRef({ x: 0, y: 0 })
  const animFrameRef = useRef<number>(0)
  const [birdStates, setBirdStates] = useState(
    BIRDS.map(() => ({ x: 0, y: 0, scale: 1, opacity: 1, front: true }))
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = (time: number) => {
      setBirdStates(
        BIRDS.map(({ offset }) => {
          const angle = time * SPEED + offset
          const sinVal = Math.sin(angle) // -1 到 1，决定前后位置

          // sinVal 越大 = 越靠前，越小 = 越靠后
          const depth = (sinVal + 1) / 2 // 转换到 0-1 范围

          return {
            x: mousePos.current.x + RADIUS_X * Math.cos(angle),
            y: mousePos.current.y + RADIUS_Y * sinVal,
            scale: 0.4 + 0.6 * depth, // 0.4（后）到 1.0（前）
            opacity: 0.3 + 0.7 * depth, // 0.3（后）到 1.0（前）
            front: sinVal > 0, // 决定 z-index
          }
        })
      )
      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <>
      {birdStates.map((bird, i) => (
        <div
          key={i}
          className="pointer-events-none fixed"
          style={{
            left: bird.x,
            top: bird.y,
            transform: `translate(-50%, -50%) scale(${bird.scale})`,
            opacity: bird.opacity,
            zIndex: bird.front ? 51 : 49,
          }}
        >
          <Lottie animationData={birdAnimation} loop className="h-30 w-30" />
        </div>
      ))}
    </>
  )
}

export default BirdCursor
