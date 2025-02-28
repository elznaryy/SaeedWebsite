import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Clients from "@/components/clients"
import Testimonials from "@/components/testimonials"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Clients />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}

