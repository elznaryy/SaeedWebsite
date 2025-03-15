"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Pen, Film, VideoIcon, Camera, Edit, Megaphone } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 1,
    title: "Video Editing",
    description: "Professional video editing with attention to pacing, transitions, and storytelling.",
    icon: <VideoIcon className="w-10 h-10 text-primary" />,
  },
  {
    id: 2,
    title: "Content Creation",
    description: "End-to-end content creation for social media, websites, and marketing campaigns.",
    icon: <Camera className="w-10 h-10 text-primary" />,
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Dynamic motion graphics and animations that bring your content to life.",
    icon: <Film className="w-10 h-10 text-primary" />,
  },
  {
    id: 4,
    title: "Copywriting",
    description: "Compelling copywriting that engages your audience and drives action.",
    icon: <Pen className="w-10 h-10 text-primary" />,
  },
  {
    id: 5,
    title: "Post-Production",
    description: "Advanced post-production including color grading and sound design.",
    icon: <Edit className="w-10 h-10 text-primary" />,
  },
  {
    id: 6,
    title: "Brand Storytelling",
    description: "Strategic storytelling that connects your brand with your target audience.",
    icon: <Megaphone className="w-10 h-10 text-primary" />,
  },
]

export default function Services() {
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

    const section = document.getElementById("services")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Services</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional video editing and creative services to help you tell your story
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              className="p-6 sm:p-8 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

