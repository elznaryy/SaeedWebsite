"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Client {
  name: string
  logo: string
  width: number
  height: number
}

const clients: Client[] = [
  {
    name: "QOMRA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1694011189521-YNUiNGRBhDJJCQ6Gyg3XmiaKvS9hdV.jpeg",
    width: 200,
    height: 100,
  },
  {
    name: "AUC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AUC2-0HODdqazFQPrLXRaUsxHCxBBhjBNKd.png",
    width: 200,
    height: 100,
  },
  {
    name: "First LEGO League",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/first-lego-league-logo-BA68949386-seeklogo.com-kHI6iEzZvF8lkFCZveHLWflXYWkRn6.png",
    width: 200,
    height: 100,
  },
  {
    name: "Same Fathy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Same%20fathy-poNNTi51J29amZuVdkCll2J5BwlntL.png",
    width: 200,
    height: 100,
  },
  {
    name: "LEGO",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hd-lego-logo-transparent-background-701751694773038ttazskfwrq-zhMsxxmJi9fR3WCgvf1s1C4w2B504G.png",
    width: 200,
    height: 100,
  },
  {
    name: "Madinet Masr",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/high-c67opy-1-vcRjqwEkZLjctQRPyre3p5BJXcjBTB.png",
    width: 200,
    height: 100,
  },
  {
    name: "RUBEX",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rubex-International-logo-scaled-1-aDkQZLtGuLFJlc9QukTA14cqgZHGLm.png",
    width: 200,
    height: 100,
  },
  {
    name: "NEOM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neom-1KO0f7fPhlUsYjvdcEGom2RsU9kIhs.png",
    width: 200,
    height: 100,
  },
]

export default function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Triple the clients array for better continuous scrolling
  const tripleClients = [...clients, ...clients, ...clients]

  return (
    <section id="clients" className="py-20 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              Collaborations
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud to have collaborated with these amazing brands and organizations.
          </p>
        </div>

        <div className="overflow-hidden px-4 sm:px-0">
          <motion.div
            ref={marqueeRef}
            className="flex gap-4 sm:gap-8 items-center"
            animate={{ 
              x: isHovered ? 0 : "-33.33%" 
            }}
            initial={{ x: "-33.33%" }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {tripleClients.map((client, index) => (
              <motion.div
                key={index}
                className="relative h-24 sm:h-32 bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-300 flex items-center justify-center group shrink-0"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 group-hover:scale-110 filter hover:brightness-110"
                  priority={index < 8} // Prioritize loading first 8 images
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

