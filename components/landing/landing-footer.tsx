import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa"
import Image from "next/image"

export function LandingFooter() {
  return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-GqC5XnvLynE12ksxziQs6C3A7FG9b7.png"
                  alt="DetectBean AI"
                  width={180}
                  height={36}
                  className="h-9 w-auto"
              />
            </div>

            <nav className="flex items-center gap-8">
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

            <div className="flex items-center gap-4">
              <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
                  aria-label="YouTube"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
              <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                  aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}