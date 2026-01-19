import { Button } from "@/components/ui/button"
import { Download, MessageSquare, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-[#1DD1A1]">AUTOMATIC POST-</span>
              <br />
              <span className="text-[#1DD1A1]">HARVEST</span> <span className="text-gray-800">COFFEE</span>
              <br />
              <span className="text-gray-800">BEAN</span> <span className="text-[#1DD1A1]">SORTING</span>{" "}
              <span className="text-gray-800">SYSTEM</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Elimina la subjetividad en la evaluación de calidad.
            </p>
            <div className="mt-8">
              <a href="#product">
                <Button
                  size="lg"
                  className="bg-[#1DD1A1] hover:bg-[#17B890] text-white rounded-lg py-6 text-base font-medium"
                >
                  Ver más
                </Button>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#1DD1A1] rounded-full w-[400px] h-[400px] -z-10 blur-3xl opacity-20"></div>
              <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#1DD1A1] overflow-hidden flex items-end justify-center">
                <Image
                  src="/smiling-latin-american-coffee-farmer-holding-baske.jpg"
                  alt="Coffee Farmer with basket of coffee beans"
                  width={450}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-15 text-center">
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
            <span className="font-semibold">COMPATIBLE WITH</span>{" "}
            <span className="text-[#1DD1A1] font-semibold">PNG OR JPG FILES</span>
            <span className="font-semibold"> OF COFFEE GRAIN IMAGES.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
