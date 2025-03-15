import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 text-light">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              Saeed
            </Link>
            <p className="text-light/80 mb-4 max-w-md">
              Creative storyteller specializing in video production, copywriting, and media direction. Bringing ideas to
              life through compelling visual narratives.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/muhammad-saeed-228100162/"
                className="text-light/80 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/saeedtalks1/"
                className="text-light/80 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-light/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-light/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-light/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-light/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-light/80">Alexandria, Egypt</li>
              <li>
                <a href="mailto:muuhammad.saeed192@gmail.com" className="text-light/80 hover:text-primary transition-colors">
                  muuhammad.saeed192@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+201094204021" className="text-light/80 hover:text-primary transition-colors">
                  +201094204021
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm">&copy; {new Date().getFullYear()} Saeed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

