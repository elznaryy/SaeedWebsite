"use client"

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
  return (
    <section id="clients" className="py-20 bg-background">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[2/1] relative flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 150px, 200px"
                  priority={index < 4} // Load first 4 images immediately
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

