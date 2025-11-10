"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  category: string
  vimeoId?: string
  vimeoHash?: string
  youtubeId?: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sudair Saudi national day",
    category: "Commercial",
    youtubeId: "iXLor_CbJqk",
    description: "2025 Saudi national day Ad",
  },
  {
    id: 2,
    title: "Neweast X Isuzu",
    category: "Commercial",
    vimeoId: "1087486372",
    vimeoHash: "fd44e7715d",
    description: "A Fully AI-generated Ad",
  },
  {
    id: 3,
    title: "Abbott X Kuwait Blood Bank",
    category: "Campaign",
    vimeoId: "1096243125",
    vimeoHash: "58379d674f",
    description: "Blood awareness campaign",
  },
  {
    id: 4,
    title: "NEOM-Upscale Film Making Camp",
    category: "Commercial",
    vimeoId: "1062044941",
    vimeoHash: "b4048c75ca",
    description: "A full filmmaking camp content",
  },
  {
    id: 5,
    title: "Our Only World",
    category: "Commercial",
    vimeoId: "1062051132",
    vimeoHash: "77247f5a99",
    description: "Created and directed the storyline for this environmental awareness song, bringing a powerful message through visual storytelling.",
  },
  {
    id: 6,
    title: "Gammal Tech short Documentary",
    category: "Documentary",
    vimeoId: "1062055541",
    vimeoHash: "3910731b5f",
    description: "A deep dive into one of the most important tech educational companies revolution in MENA region",
  },
  {
    id: 7,
    title: "Saeed Talks",
    category: "Series",
    vimeoId: "1062079476",
    vimeoHash: "cb033e182b",
    description: "An educational series, delivering insights and knowledge for aspiring creatives in the fields of storytelling and digital media.",
  },
  {
    id: 8,
    title: "G-Cast",
    category: "Series",
    vimeoId: "1062430579",
    vimeoHash: "dedaa0f348",
    description: "The first programming education podcast in the MENA region",
  },
  {
    id: 9,
    title: "L,b3eed Song",
    category: "Commercial",
    vimeoId: "896506468",
    vimeoHash: "ee959d2c0b",
    description: "First Ad and camera operator in a commercial song",
  },
  {
    id: 10,
    title: "Rubex",
    category: "Commercial",
    vimeoId: "896503877",
    vimeoHash: "515f52cd43",
    description: "Factory commercial Ad",
  },
  {
    id: 11,
    title: "Owl coffee Ad",
    category: "Commercial",
    vimeoId: "733672862",
    vimeoHash: "c31bfb918c",
    description: "Cafe Commercial Ad",
  },
  {
    id: 12,
    title: "Tesla Manager X Gammal Tech",
    category: "Interview",
    youtubeId: "iCTEYPwvhCQ",
    description: "Educational interview for awareness",
  },
  {
    id: 13,
    title: "Monlycke X Soliman Alhabib",
    category: "Campaign",
    vimeoId: "1128620587",
    vimeoHash: "a8c511dbf8",
    description: "Patient awareness teaser video",
  },
  {
    id: 14,
    title: "Whites Hygiene Campaign",
    category: "Campaign",
    vimeoId: "1096217860",
    vimeoHash: "33d0d9d8af",
    description: "Whites hygiene campaign through Saudi Arabia",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("portfolio")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const categories = ["all", ...new Set(projects.map((project) => project.category))]

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my creative work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/10 hover:bg-primary/20 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video">
                {project.youtubeId ? (
                  <iframe
                    title={project.title}
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                ) : (
                  <iframe
                    title={project.title}
                    src={`https://player.vimeo.com/video/${project.vimeoId}?h=${project.vimeoHash}&title=0&byline=0&portrait=0`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
