import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  icon: ReactNode
}

export function ProjectCard({ title, description, image, tags, icon }: ProjectCardProps) {
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
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-white/20 bg-black/50 text-xs text-white backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
              {icon}
            </div>
            <h3 className="font-bold text-white">{title}</h3>
          </div>
          <Link
            href="#"
            className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  )
}
