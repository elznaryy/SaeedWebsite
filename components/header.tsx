"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/magnetic-button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const heroSection = document.getElementById('hero')
      const heroBottom = heroSection?.getBoundingClientRect().bottom || 0
      
      setScrolled(offset > 50)
      setIsInHeroSection(heroBottom > 0)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-muted/95 backdrop-blur-sm py-2 shadow-md" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={cn(
              "text-2xl font-bold transition-all duration-300",
              isInHeroSection && !scrolled ? "text-[#FFFAEC]" : "text-primary"
            )}
          >
            Saeed
          </span>
          <span className={cn("h-1 w-1 rounded-full bg-primary transition-all duration-300 group-hover:w-6")}></span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {["About", "Services", "Portfolio", "Clients", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className={cn(
                "relative text-sm uppercase tracking-wider font-medium transition-colors",
                isInHeroSection && !scrolled 
                  ? "text-[#FFFAEC] hover:text-[#FFFAEC]/80"
                  : "text-foreground hover:text-primary",
                "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full",
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            asChild
            variant="outline"
            className={cn(
              "transition-all duration-300",
              isInHeroSection && !scrolled
                ? "border-[#FFFAEC] text-[#FFFAEC] hover:bg-[#FFFAEC]/10"
                : "border-primary text-primary hover:bg-primary/10"
            )}
          >
            <Link href="/#contact">Let's Talk</Link>
          </MagneticButton>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "md:hidden transition-colors",
            isInHeroSection && !scrolled ? "text-[#FFFAEC]" : "text-light"
          )} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-muted/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {["About", "Services", "Portfolio", "Clients", "Blog", "Contact"].map((item, i) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-2xl font-medium text-light hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </Link>
            ))}
            <Button 
              className="mt-4 bg-primary hover:bg-primary/90 text-white" 
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <Link href="/#contact">Let's Talk</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

