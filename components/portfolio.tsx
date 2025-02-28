"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  category: string
  vimeoId: string
  vimeoHash: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "NEOM Project",
    category: "Commercial",
    vimeoId: "896506468",
    vimeoHash: "ee959d2c0b",
    description: "Brand commercial showcasing NEOM's innovative vision",
  },
  {
    id: 2,
    title: "Corporate Video",
    category: "Commercial",
    vimeoId: "896503877",
    vimeoHash: "515f52cd43",
    description: "Professional corporate video production",
  },
  {
    id: 3,
    title: "Documentary Film",
    category: "Documentary",
    vimeoId: "733672862",
    vimeoHash: "c31bfb918c",
    description: "Compelling documentary storytelling",
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
            A selection of my best video editing and production work
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative aspect-video">
                <iframe
                  title={project.title}
                  src={`https://player.vimeo.com/video/${project.vimeoId}?h=${project.vimeoHash}&title=0&byline=0&portrait=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
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

