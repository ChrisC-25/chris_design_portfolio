"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SpaceBackground } from "@/components/space-background"
import { FloatingAstronaut } from "@/components/floating-astronaut"
import { GroupProjectCard } from "@/components/group-project-card"
import { FinalProjectCard } from "@/components/final-project-card"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050314]">
      <SpaceBackground />

      {/* Navigation */}
      <header className="relative z-10">
        <div className="container flex items-center justify-between py-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            <span className="text-cyan-400">Chris's</span> Portfolio
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#group-projects" className="text-sm font-medium text-white/80 hover:text-white">
              Group Projects
            </Link>
            <Link href="#final-projects" className="text-sm font-medium text-white/80 hover:text-white">
              Final Projects
            </Link>
          </nav>
          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300">
            <Link href="/Chris_s_Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full block">Resume</Link>
          </Button>
        </div>
      </header>

      {/* Group Projects Section */}
      <section id="group-projects" className="relative z-10 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tighter text-white md:text-4xl">
              Group <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-white/70">
              Highlights from our team presentations suitable for external audiences, showcasing our collaborative
              design process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 md:max-w-2xl md:mx-auto">
            <GroupProjectCard
              title="Redesign of the Duolingo app"
              description="Redesigned the Duolingo app to improve motivation within users."
              image="/duolingo.jpg"
              teamSize={5}
              duration="11 weeks"
              role="Implemented a culture feature as one of the lead UX designers"
              highlights={[
                // Problem Areas in the Current App
                "No real way to track progress → Solution: Notebook feature",
                "No real cultural aspect → Solution: Cultural fun fact page",
                "Lacks real-life engagement → Solution: Conversation feature",
                "Limited learning paths → Solution: Scenarios landing page",
                "No assistance for difficult sections → Solution: Testimonial feature",
                // Proposed Features and Their Justifications
                "Notebook Feature: Save vocabulary, grammar concepts, and mistakes. Track performance and recommend lessons.",
                "Notebook Justifications: Promotes learning goals and targeted feedback. Supports reward and autonomy (ABCs of Learning). Encourages goal setting and progress monitoring.",
                "Culture Feature: Learn cultural facts about countries corresponding to the selected language. Became a standalone section instead of being attached to lessons.",
                "Culture Justifications: Increases relevance and intrinsic enjoyment. Motivates learners by showing value in what they study.",
                "Conversation Feature: Chat with friends or users, with live help if conversation stalls.",
                "Conversation Justifications: Supports personalized goals and practice-based learning. Helps users uncover knowledge gaps via live feedback.",
                "Scenarios Feature: Explore diverse topics based on personal interests.",
                "Scenarios Justifications: Enhances confidence through achievable challenges. Supports autonomy and connects learning to personal goals.",
                "Testimonial Feature: Displays learner success stories at the start of learning paths. Includes learning strategies and encouragement.",
                "Testimonial Justifications: Builds self-efficacy, growth mindset, and persistence. Taps into emotional and cultural relevance.",
                // Design and Feedback Notes
                "Design and Feedback Notes: Focused on consistency, minimalism, and functionality improvements across features.",
                "Incorporated user interviews and TA feedback (e.g., limited options in the Scenarios Feature to avoid overwhelming users).",
                "For the culture feature I developed it so that in the final prototype it appeared as a pop up after each lesson in Duolingo allowing the user to click on a cultural fun fact. The user could later choose to take a cultural quiz from the landing page. The culture feature seeks to motivate the user based off of intrinsic learning values."
              ]}
            />
          </div>

        </div>
      </section>

      {/* Final Projects Section */}
      <section id="final-projects" className="relative z-10 py-20 bg-gradient-to-b from-transparent to-[#080629]">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tighter text-white md:text-4xl">
              Final <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-white/70">
              Detailed case studies of my final projects, including user testing processes, prototypes, and key
              insights.
            </p>
          </div>

          <div className="space-y-16">
            <FinalProjectCard
              title="PartPal"
              description="PartPal is an interactive web platform that teaches beginners how to build their own custom computer. It guides users through the process of selecting compatible parts—like the CPU, GPU, RAM, and more—based on their goals and budget. With clear visuals, simple explanations, and step-by-step installation tips, PartPal makes PC building easy and fun. Whether you're a gamer, creator, or curious first-timer, PartPal helps you go from confused to confident—one part at a time."
              finalImage="/final_prototype.png"
              sketches={[
                "/sketch.png",
                "/prototype1.png",
                "/final_prototype.png"
              ]}
              prototypeLink="https://www.figma.com/proto/pCB1swEHVScwr5hO2OkwRO/Learn-About-Computer-Site?node-id=1-280&p=f&t=YEho9SATcvqLo1UE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A280"
              testVideoLink="https://drive.google.com/drive/folders/1F38E8Q9ea_Vg6gbT10t7Z-Wlw5BrcbsL?usp=sharing"
              participants={[
                { type: "Remote workers", count: 5, description: "Ages 25-45, working in tech" },
                { type: "Team managers", count: 3, description: "Managing distributed teams" },
              ]}
              insights={[
                "Users struggled with the calendar integration in the initial prototype",
                "Notification preferences needed more granular controls",
                "Time zone visualization was highly valued by all participants",
                "Added customizable status indicators based on user feedback",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
