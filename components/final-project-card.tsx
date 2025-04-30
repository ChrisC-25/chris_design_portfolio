"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Participant {
  type: string
  count: number
  description: string
}

interface FinalProjectCardProps {
  title: string
  description: string
  finalImage: string
  sketches: string[]
  prototypeLink: string
  testVideoLink: string
  participants: Participant[]
  insights: string[]
}

export function FinalProjectCard({
  title,
  description,
  finalImage,
  sketches,
  prototypeLink,
  testVideoLink,
  participants,
  insights,
}: FinalProjectCardProps) {
  return (
    <Card className="overflow-hidden border-white/10 bg-white/5">
      <CardContent className="p-0">
        <Tabs defaultValue="overview" className="w-full">
          <div className="border-b border-white/10 bg-white/5 px-4">
            <div className="flex flex-wrap items-center justify-between py-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <TabsList className="bg-white/10">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="testing">User Testing</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="overview" className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-4 text-white/70">{description}</p>
                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <Link href={prototypeLink} target="_blank">
                        View Final Prototype
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-purple-500/30 bg-purple-500/10 text-purple-400"
                    >
                      <Play className="h-4 w-4" />
                      <Link href={testVideoLink} target="_blank">
                        Watch User Test Videos
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={finalImage || "/placeholder.svg"}
                  alt={title}
                  width={800}
                  height={500}
                  className="h-auto w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-cyan-500 text-xs text-white">Final Prototype</Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="process" className="p-6">
            <div className="mb-4">
              <h4 className="mb-2 text-lg font-medium text-white">Design Process</h4>
              <p className="text-white/70">
                From initial sketches to final prototype, explore the evolution of this project through its various
                stages.
              </p>
            </div>
            <div className="mb-6">
              <h5 className="mb-3 text-sm font-medium text-cyan-400">Mockups & Prototypes</h5>
              <div className="grid gap-4 md:grid-cols-3">
                {sketches.slice(0, 3).map((sketch, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={sketch || "/placeholder.svg"}
                      alt={`Sketch ${index + 1}`}
                      width={300}
                      height={200}
                      className="h-auto w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="outline" className="bg-black/50 text-xs text-white backdrop-blur-sm">
                        {index === 1 ? "Prototype 1" : index === 2 ? "Final Prototype" : `Sketch ${index + 1}`}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h5 className="mb-3 text-sm font-medium text-white">Design Evolution</h5>
              <div className="space-y-2 text-sm text-white/70">
                <p>
                  The design evolved through multiple iterations based on user feedback and testing. Key changes included adding more interactability within the site, fleshing out the central hub, and creating more educational pages for users.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="testing" className="p-6">
            <div className="mb-6">
              <h4 className="mb-2 text-lg font-medium text-white">User Testing</h4>
              <p className="text-white/70">
                Comprehensive user testing was conducted to validate design decisions and identify areas for
                improvement.
              </p>
            </div>
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h5 className="mb-3 text-sm font-medium text-cyan-400">Test Participants</h5>
                <Tabs defaultValue="user1" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="user1">User 1</TabsTrigger>
                    <TabsTrigger value="user2">User 2</TabsTrigger>
                    <TabsTrigger value="user3">User 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="user1">
                    <div className="rounded-md bg-white/5 p-3">
                      <span className="font-medium text-white">Aerospace Engineering Major</span>
                      <div className="text-xs text-white/70">Age: 20</div>
                      <div className="text-xs text-white/70">Gender: Male</div>
                    </div>
                  </TabsContent>
                  <TabsContent value="user2">
                    <div className="rounded-md bg-white/5 p-3">
                      <span className="font-medium text-white">Electrical Engineering Major</span>
                      <div className="text-xs text-white/70">Age: 21</div>
                      <div className="text-xs text-white/70">Gender: Male</div>
                    </div>
                  </TabsContent>
                  <TabsContent value="user3">
                    <div className="rounded-md bg-white/5 p-3">
                      <span className="font-medium text-white">Computer Science Major</span>
                      <div className="text-xs text-white/70">Age: 22</div>
                      <div className="text-xs text-white/70">Gender: Male</div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h5 className="mb-3 text-sm font-medium text-cyan-400">Testing Methodology</h5>
                <div className="space-y-2 text-sm text-white/70">
                  <p>
                    User interviews were conducted with a 5 minute limit over a 3 individual Zoom calls. The interview questions focused on the UI and navigation of the website as well as the usefulness of it. Participants were asked to explore the website with minimal guidance from the tester.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="h-auto p-0 text-cyan-400">
                    <Link href={testVideoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs">
                      Watch test recordings <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <h5 className="mb-3 text-sm font-medium text-cyan-400">Insights</h5>
              <div className="space-y-3 text-sm text-white/70">
                <p>
                  User interviews highlighted the need to reduce white space and include a table of contents for computer components. Early designs were too minimal, prompting further development for a more polished look with rounded buttons, images, and interactive hover effects. Based on TA feedback, a tips page for choosing computer parts was added. Users also suggested separating the explanation and installation of each part, leading to dedicated pages for both, each with helpful videos. A cable management page was included as an essential step. To address new white space, personalized images from my first PC build were added, making the site more engaging and informative.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
