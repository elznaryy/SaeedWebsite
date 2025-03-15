"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { SplitText } from "@/components/split-text"

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll(".counter-value")

            counters.forEach((counter: Element) => {
              const target = Number.parseInt(counter.getAttribute("data-target") || "0", 10)
              let count = 0
              const updateCounter = () => {
                const increment = target / 50
                if (count < target) {
                  count += increment
                  ;(counter as HTMLElement).innerText = Math.ceil(count).toString()
                  setTimeout(updateCounter, 20)
                } else {
                  ;(counter as HTMLElement).innerText = target.toString()
                }
              }
              updateCounter()
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-[#FFFAEC]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative px-6 sm:px-0 mb-8 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/website%202.jpg-qsw73q3cIyt6HqX22fzyRzZPWUo8Tw.jpeg"
                alt="Saeed"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="mt-8 md:mt-12">
              <div className="mb-4 inline-block py-1 px-3 bg-[#578E7E]/10 rounded-full">
                <span className="text-sm font-medium text-[#578E7E]">About Me</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#3D3D3D]">
                <SplitText type="words" animation="slide">
                  Storyteller & Creative Director
                </SplitText>
              </h2>

              <div className="space-y-8 text-[#3D3D3D]">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed reveal-on-scroll" data-delay="0.2">
                  When it comes to the intersection of storytelling, creativity, and digital strategy, I bring a unique
                  perspective. With a background spanning creative copywriting, content direction, social media strategy,
                  and filmmaking, I bring ideas to life through compelling ad campaigns, impactful brand storytelling, and
                  engaging digital content.
                </p>

                <p
                  className="text-lg md:text-xl lg:text-2xl font-medium text-[#578E7E] reveal-on-scroll"
                  data-delay="0.3"
                >
                  I simply Write, Visualize and bring thoughts to life.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12">
                <div className="bg-[#F5ECD5] p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-bold text-[#3D3D3D] text-base md:text-lg mb-1">Experience</h3>
                  <p className="text-[#578E7E] text-xl md:text-2xl font-bold">
                    <span className="counter-value" data-target="10">
                      0
                    </span>
                    + Years
                  </p>
                </div>

                <div className="bg-[#F5ECD5] p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-bold text-[#3D3D3D] text-base md:text-lg mb-1">Projects</h3>
                  <p className="text-[#578E7E] text-xl md:text-2xl font-bold">
                    <span className="counter-value" data-target="200">
                      0
                    </span>
                    + Completed
                  </p>
                </div>

                <div className="bg-[#F5ECD5] p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-bold text-[#3D3D3D] text-base md:text-lg mb-1">Clients</h3>
                  <p className="text-[#578E7E] text-xl md:text-2xl font-bold">
                    <span className="counter-value" data-target="50">
                      0
                    </span>
                    + Happy Clients
                  </p>
                </div>

                <div className="bg-[#F5ECD5] p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-bold text-[#3D3D3D] text-base md:text-lg mb-1">Awards</h3>
                  <p className="text-[#578E7E] text-xl md:text-2xl font-bold">
                    <span className="counter-value" data-target="15">
                      0
                    </span>
                    + Recognitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

