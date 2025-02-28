import type React from "react"
import type { Metadata } from "next"
import { Courier_Prime } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { MousePositionProvider } from "@/components/mouse-position-provider"

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
})

export const metadata: Metadata = {
  title: "Saeed - Creative Storyteller",
  description: "Professional video editor, copywriter and creative storyteller",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${courier.variable} font-courier`}>
        <MousePositionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </MousePositionProvider>
      </body>
    </html>
  )
}



import './globals.css'