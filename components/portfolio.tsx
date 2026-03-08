"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    title: "L,b3eed Song",
    category: "Commercial",
    vimeoId: "896506468",
    vimeoHash: "ee959d2c0b",
    description: "First AD and camera operator in a commercial song",
  },
  {
    id: 2,
    title: "Rubex",
    category: "Commercial",
    vimeoId: "896503877",
    vimeoHash: "515f52cd43",
    description: "Factory commercial ad",
  },
  {
    id: 3,
    title: "Owl Coffee",
    category: "Commercial",
    vimeoId: "733672862",
    vimeoHash: "c31bfb918c",
    description: "Cafe commercial campaign",
  },
  {
    id: 4,
    title: "NEOM Film Camp",
    category: "Commercial",
    vimeoId: "1062044941",
    vimeoHash: "b4048c75ca",
    description: "Full filmmaking camp content",
  },
  {
    id: 5,
    title: "Our Only World",
    category: "Commercial",
    vimeoId: "1062051132",
    vimeoHash: "77247f5a99",
    description: "Environmental awareness music video",
  },
  {
    id: 6,
    title: "Gammal Tech Documentary",
    category: "Documentary",
    vimeoId: "1062055541",
    vimeoHash: "3910731b5f",
    description: "Tech education revolution in MENA",
  },
  {
    id: 7,
    title: "Saeed Talks",
    category: "Series",
    vimeoId: "1062079476",
    vimeoHash: "cb033e182b",
    description: "Educational creative series",
  },
  {
    id: 8,
    title: "G-Cast",
    category: "Series",
    vimeoId: "1062430579",
    vimeoHash: "dedaa0f348",
    description: "First programming podcast in MENA",
  },
  {
    id: 9,
    title: "Sudair Saudi National Day",
    category: "Commercial",
    youtubeId: "iXLor_CbJqk",
    description: "Saudi national day campaign",
  },
  {
    id: 10,
    title: "Abbott X Kuwait Blood Bank",
    category: "Commercial",
    vimeoId: "1096243125",
    vimeoHash: "58379d674f",
    description: "Blood awareness campaign",
  },
  {
    id: 11,
    title: "Tesla Manager X Gammal Tech",
    category: "Interview",
    youtubeId: "iCTEYPwvhCQ",
    description: "Educational awareness interview",
  },
  {
    id: 12,
    title: "Monlycke X Soliman Alhabib",
    category: "Commercial",
    vimeoId: "1128620587",
    vimeoHash: "a8c511dbf8",
    description: "Patient awareness teaser",
  },
  {
    id: 13,
    title: "Whites Hygiene Campaign",
    category: "Commercial",
    vimeoId: "1096217860",
    vimeoHash: "33d0d9d8af",
    description: "Whites hygiene campaign in Saudi Arabia",
  },
]

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null)

  const categories = [...new Set(projects.map((p) => p.category))]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        {categories.map((category) => (
          <div key={category} className="mb-12">

            <h3 className="text-2xl font-semibold mb-6">
              {category}
            </h3>

            <div className="flex gap-6 overflow-x-auto pb-4">

              {projects
                .filter((p) => p.category === category)
                .map((project) => (

                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.1 }}
                    className="min-w-[320px] bg-neutral-900 rounded-xl cursor-pointer overflow-hidden"
                    onClick={() => setSelected(project)}
                  >

                    <div className="aspect-video bg-black flex items-center justify-center">
                      <span className="text-sm opacity-70">
                        ▶ Preview
                      </span>
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold">{project.title}</h4>
                      <p className="text-sm opacity-70">
                        {project.description}
                      </p>
                    </div>

                  </motion.div>

                ))}
            </div>
          </div>
        ))}

        <AnimatePresence>

          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelected(null)}
            >

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-[90%] max-w-4xl"
              >

                {selected.youtubeId ? (

                  <iframe
                    src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                    className="w-full aspect-video"
                    allow="autoplay; fullscreen"
                  />

                ) : (

                  <iframe
                    src={`https://player.vimeo.com/video/${selected.vimeoId}?h=${selected.vimeoHash}`}
                    className="w-full aspect-video"
                    allow="autoplay; fullscreen"
                  />

                )}

              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}
