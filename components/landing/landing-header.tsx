"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-GqC5XnvLynE12ksxziQs6C3A7FG9b7.png"
                  alt="DetectBean AI"
                  width={200}
                  height={40}
                  className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#product" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                The Product
              </a>
              <a href="#team" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                The Team
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                Contact Us
              </a>
            </nav>

            <div className="hidden md:flex items-center">
              <Link href="https://bean-detect-ai-web.netlify.app/login" target="_blank" rel="noopener noreferrer">
                <Button
                    variant="outline"
                    className="border-2 border-[#1DD1A1] text-[#1DD1A1] hover:bg-[#1DD1A1] hover:text-white rounded-full px-6 bg-transparent"
                >
                  Open app
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <nav className="flex flex-col gap-4">
                  <a href="#product" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                    The Product
                  </a>
                  <a
                      href="#team"
                      className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors"
                  >
                    The Team
                  </a>
                  <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                    Pricing
                  </a>
                  <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#1DD1A1] transition-colors">
                    Contact Us
                  </a>
                  <div className="pt-4 border-t border-gray-200">
                    <Link href="https://bean-detect-ai-web.netlify.app/login" target="_blank" rel="noopener noreferrer">
                      <Button
                          variant="outline"
                          className="w-full border-2 border-[#1DD1A1] text-[#1DD1A1] hover:bg-[#1DD1A1] hover:text-white rounded-full bg-transparent"
                      >
                        Open app
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}