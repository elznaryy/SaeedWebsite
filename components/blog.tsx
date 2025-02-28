"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Video Editing",
    excerpt: "Discover the fundamental principles that make great video edits...",
    date: "2024-02-28",
    category: "Video Editing",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Storytelling Through Motion",
    excerpt: "Learn how to create compelling narratives with motion graphics...",
    date: "2024-02-25",
    category: "Motion Graphics",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Color Grading Essentials",
    excerpt: "Master the basics of color grading to enhance your videos...",
    date: "2024-02-22",
    category: "Color Grading",
    image: "/placeholder.svg",
  },
]

export default function Blog() {
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

    const section = document.getElementById("blog")
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
    <section id="blog" className="py-20 bg-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Latest Posts</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">From The Blog</h2>
          <p className="text-muted-foreground">
            Insights and updates from the world of video editing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: post.id * 0.2 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="text-primary hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

