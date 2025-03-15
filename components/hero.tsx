"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MagneticButton } from "@/components/magnetic-button"
import { RevealText } from "@/components/reveal-text"
import { SplitText } from "@/components/split-text"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-start md:items-center">
      {/* Hero image */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero2.jpg-TLH1kduV3QdZplyx3g2QGN5GF3uFA3.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6">
        <div
          className={`max-w-2xl transition-all duration-1000 mt-[60vh] sm:mt-[40vh] md:mt-0 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFAEC] mb-6 leading-tight">
            <RevealText 
              text="I'm a creative mind," 
              className="inline-block whitespace-nowrap" 
              as="span" 
              delay={0.5} 
            />
            <span className="block mt-2 text-hero">
              <SplitText animation="slide">tell, visualize, execute stories</SplitText>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFAEC]/90 mb-8 sm:mb-10">
            Find inspiration, share your vision
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <MagneticButton 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-hero hover:bg-hero/90 text-[#FFFAEC] group" 
              strength={40}
            >
              <Link href="/#portfolio" className="flex items-center justify-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <MagneticButton
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-[#FFFAEC] bg-black/30 text-[#FFFAEC] hover:bg-[#FFFAEC] hover:text-secondary transition-all duration-300"
              strength={40}
            >
              <Link href="/#contact" className="flex items-center justify-center">
                Let's Connect
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}

