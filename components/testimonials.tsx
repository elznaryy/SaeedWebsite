"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Abdurrahman Al Gammal",
    position: "CEO of Gammal Tech",
    content
      "Saeed was the creative mastermind behind our brand in the MENA region. He led the media production team and managed ad campaigns that truly told the world who we are. His ability to create sustainable content for our main page was invaluable, and he even pioneered Egypt's first programming podcast at a time when it was just an idea. His vision and execution made a lasting impact on our brand.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEMsGqLqAr-tA/profile-displayphoto-shrink_800_800/B4DZbKgA.TGUAg-/0/1747154115259?e=1764201600&v=beta&t=ZHTEQVREl4-5kfUdJprGD0YALCq7b-b8PnAhD0V8JiY",
  },
  {
    id: 2,
    name: "Ehab Darwish",
    position: "CEO of Iskala ",
    content:
      "What I appreciate most about Saeed Is that he handles all the technical aspects so I don't have to. He delivers creative content and visuals while giving me the space to share my input when needed. This not only saves me a lot of time but also ensures I get high-quality videos that I can truly rely on for my business.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHnjUIMKO-VrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710979691069?e=1764201600&v=beta&t=ukiaxbJ5iOQpSxzgNmljZd1_NLKnRnZAHAP3mnfs7iY",
  },
  {
    id: 3,
    name: "Neom",
    position: "Upskill filmmaking camp",
    content:
      "We had a very tight timeframe and a lot to get done for our camp's content. Saeed not only met the deadline sooner than expected but also delivered professional content directions that exceeded our expectations. He's a creative mind with a hard working mentality—someone you can truly rely on to get the job done right.",
    image: "https://images.seeklogo.com/logo-png/35/1/neom-logo-png_seeklogo-358578.png",
  },
  {
    id: 4,
    name: "Rasha",
    position: "Client manager",
    content:
      "I truly appreciated how Saeed brought the story to life even before we started shooting. His ability to translate our vision into a storyboard that closely matched the final video was remarkable. It made the entire process seamless, and I felt completely at ease knowing the project was in his hands. The end result was exactly what I had hoped for.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGHwVMpeg6Igw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700673907430?e=1764201600&v=beta&t=EhPrT6UQ6YilY1oP8DEt2FkLVAvMkOP6K-PiARxMDKU",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const section = document.getElementById("testimonials")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Client <span className="text-primary">Feedback</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our clients say about our work and collaboration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-lg relative"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg mb-6 italic text-muted-foreground">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

