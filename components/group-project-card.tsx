import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GroupProjectCardProps {
  title: string
  description: string
  image: string
  teamSize: number
  duration: string
  role: string
  highlights: string[]
}

export function GroupProjectCard({
  title,
  description,
  image,
  teamSize,
  duration,
  role,
  highlights,
}: GroupProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050314] to-transparent opacity-70" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <Badge variant="outline" className="border-white/20 bg-black/50 text-xs text-white backdrop-blur-sm">
            Group Project
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-white">{title}</h3>
          </div>
          <Link
            href="https://www.figma.com/proto/siMSZ775luomoO1vJ8xDkw/Group-Assignment-7?node-id=2-2&p=f&t=aNDNm8Ku6bF5Vogj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mb-4 text-sm text-white/70">{description}</p>

        <div className="mb-4 grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-md bg-white/5 p-2">
            <div className="font-medium text-cyan-400">Team Size</div>
            <div className="text-white">{teamSize} members</div>
          </div>
          <div className="rounded-md bg-white/5 p-2">
            <div className="font-medium text-cyan-400">Duration</div>
            <div className="text-white">{duration}</div>
          </div>
          <div className="rounded-md bg-white/5 p-2">
            <div className="font-medium text-cyan-400">My Role</div>
            <div className="text-white">{role}</div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Presentation Highlights</h4>
          <ul className="space-y-1 text-xs text-white/70">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-cyan-400">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/Group Presentation - Group 18 Motivation-1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-white/5 text-white hover:bg-white/10 px-4 py-2 text-sm font-medium transition-colors"
        >
          View Full Presentation
        </Link>
      </CardContent>
    </Card>
  )
}
