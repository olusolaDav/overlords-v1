import Link from "next/link"
import Image from "next/image"
import { Linkedin, Calendar, Mail } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <section className="bg-gray-50 pt-16">
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg bg-primary p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-black">Get in touch</h2>
              <Link href="/contact" className="inline-block rounded-lg bg-black px-6 py-3 text-white">
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Footer */}
      <div className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Contact */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <Image src="/images/logo.png" alt="AI Overlords" width={48} height={48} className="mr-3" />
                <span className="text-xl font-bold">AI Overlords</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3 mb-6">
                <Link
                  href="https://www.linkedin.com/company/ai-0overlords/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://calendly.com/founder-aioverlords"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Calendly"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Calendar className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="mailto:founder@aioverlords.io"
                  aria-label="Email"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Mail className="h-4 w-4 text-white" />
                </Link>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-bold mb-2">Email:</h3>
                <Link
                  href="mailto:founder@aioverlords.io"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  founder@aioverlords.io
                </Link>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-4">AI Solutions</h3>
              <div className="space-y-2">
                {/* First line with three items separated by bars */}
                <div className="text-sm text-gray-600">
                  <Link href="/ai-agents" className="hover:text-primary transition-colors">
                    AI AGENTS
                  </Link>
                  <span className="mx-2">|</span>
                  <Link href="/gen-ai" className="hover:text-primary transition-colors">
                    GEN AI
                  </Link>
                  <span className="mx-2">|</span>
                  <Link href="/voice-ai" className="hover:text-primary transition-colors">
                    VOICE AI
                  </Link>
                </div>

                {/* Individual lines for the rest */}
                <div>
                  <Link
                    href="/machine-learning"
                    className="text-sm text-gray-600 hover:text-primary transition-colors block"
                  >
                    MACHINE LEARNING
                  </Link>
                </div>
                <div>
                  <Link href="/nlp" className="text-sm text-gray-600 hover:text-primary transition-colors block">
                    NATURAL LANGUAGE PROCESSING
                  </Link>
                </div>
                <div>
                  <Link
                    href="/data-science"
                    className="text-sm text-gray-600 hover:text-primary transition-colors block"
                  >
                    DATA SCIENCE, ANALYTICS & BIG DATA
                  </Link>
                </div>
                <div>
                  <Link
                    href="/software-development"
                    className="text-sm text-gray-600 hover:text-primary transition-colors block"
                  >
                    END TO END SOFTWARE DEVELOPMENT
                  </Link>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    OUR PROJECTS
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-1">
              <h3 className="text-sm font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    TERMS OF USE
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    PRIVACY POLICY
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-xs text-gray-500">©2025-2026 All Rights Reserved</p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  India
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  USA
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Europe
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Canada
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">
                  Australia
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
