"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Instagram } from "lucide-react"
import { toast } from "react-hot-toast"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    title: "Email",
    value: "muuhammad.saeed192@gmail.com",
    link: "mailto:muuhammad.saeed192@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    title: "Phone",
    value: "+201094204021",
    link: "tel:+201094204021",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    title: "Location",
    value: "Alexandria, Egypt",
    link: "https://maps.google.com/?q=Alexandria,Egypt",
    icon: <MapPin className="w-5 h-5" />,
  },
]

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-saeed-228100162/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/saeedtalks1/",
    icon: <Instagram className="w-5 h-5" />,
  },
]

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const webhookData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toISOString()
      }

      // Use the original webhook URL
      const response = await fetch('https://hook.eu2.make.com/lb8euigp1ptufy7ruhxylpyzyb26d6t6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        toast.success("Message sent successfully!")
      } else {
        const errorText = await response.text()
        console.error('Webhook error:', errorText)
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Share your ideas and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="bg-primary/5 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

