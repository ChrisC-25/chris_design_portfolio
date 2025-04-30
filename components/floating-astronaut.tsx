"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function FloatingAstronaut() {
  const [position, setPosition] = useState({ y: 0 })
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    let animationFrameId: number
    let lastTime = 0
    const speed = 0.5
    const maxOffset = 20

    const animate = (time: number) => {
      if (!lastTime) lastTime = time
      const delta = time - lastTime
      lastTime = time

      setPosition((prev) => {
        const newY = prev.y + direction * speed * (delta / 16)

        if (newY > maxOffset) {
          setDirection(-1)
          return { y: maxOffset }
        } else if (newY < -maxOffset) {
          setDirection(1)
          return { y: -maxOffset }
        }

        return { y: newY }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [direction])

  return (
    <div className="relative h-[400px] w-[400px]">
      <div
        className="absolute inset-0 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateY(${position.y}px)` }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Floating Astronaut"
            width={400}
            height={400}
            className="object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-cyan-500/20 p-20 backdrop-blur-md">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-600 to-cyan-400 opacity-80 shadow-[0_0_40px_rgba(6,182,212,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-1/2 h-10 w-40 -translate-x-1/2 rounded-[50%] bg-cyan-500/20 blur-xl"></div>
    </div>
  )
}
