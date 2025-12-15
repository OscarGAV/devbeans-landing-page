import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Melinda Len",
    role: "Granjero Cafetero",
    content:
      "Antes perdíamos mucho producto por errores humanos. Ahora clasifican los datos reales, y los resultados son impresionantes. Confían más en nuestro producto.",
    rating: 4,
    image: "/latin-american-woman-coffee-farmer.jpg",
  },
  {
    name: "Jacob Stevan",
    role: "Granjero Cafetero",
    content:
      "Con BeanDetect AI, nuestros lotes cumplen los estándares sin discusiones. La clasificación es precisa y nos ha ayudado a exportar más café.",
    rating: 5,
    image: "/latin-american-man-coffee-farmer.jpg",
  },
  {
    name: "Roben Musstar",
    role: "Granjero Cafetero",
    content:
      "El sistema detecta defectos que ni siquiera nosotros veíamos. Es rápido, confiable y ha permitido mejorar la calidad sin necesidad de equipos caros.",
    rating: 4,
    image: "/latin-american-man-coffee-farmer-with-hat.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="costumers" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-4">
          <p className="text-sm font-semibold text-[#1DD1A1] tracking-wide uppercase mb-2">OUR REVIEW</p>
          <h2 className="text-4xl font-bold text-gray-800">
            What our <span className="text-[#1DD1A1]">clients</span> say about us
          </h2>
          <p className="mt-4 text-lg text-gray-600">Here are some comments from our customers, be one of them.</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`relative border-2 ${index === 1 ? "lg:-mt-8 lg:mb-8 border-gray-300 shadow-xl" : "border-gray-200"}`}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="text-4xl text-[#1DD1A1] mb-4">"</div>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">{testimonial.content}</p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-[#1DD1A1] text-[#1DD1A1]" : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#1DD1A1] text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
