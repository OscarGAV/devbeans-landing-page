"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CircleUserRound } from "lucide-react"

const teamMembers = [
  {
    name: "Oscar Gabriel Aranda Vallejos",
    role: "Software Engineer",
    description:
        "Tengo 20 años y soy un estudiante de 8vo ciclo en Ingeniería de Software con conocimientos en Unity, C++ y diseño web. Los caminos que he tomado me han vuelto perseverante en cumplir mis objetivos y siempre estoy dispuesto a aprender nuevos conceptos.",
  },
  {
    name: "Abraham Israel Ayquipa Ubaldo",
    role: "Software Engineer",
    description:
        "Soy un estudiante de 8vo ciclo en ingeniería de software con experiencia desempeñándome como fullstack developer. Suelo trabajar con Next.js + TypeScript y Node.js + MongoDB. Y actualmente estoy aprendiendo Docker y Redis.",
  },
  {
    name: "André Sebastián La Torre",
    role: "Software Engineer",
    description:
        "Me encuentro en el octavo ciclo de Ingeniería de Software. Tengo experiencia en Python, C++, JavaScript, SQL y desarrollo web y móvil. Elegí esta carrera por mi afinidad con las matemáticas y nuevas tecnologías. Disfruto aprender y mejorar constantemente.",
  },
  {
    name: "Eduardo",
    role: "Designer & QA Manager",
    description:
        "Poseo conocimientos en HTML, CSS, JavaScript, Python, C++, Cypress, Node.js, Nest.js y Agile Project Management. Además, me encuentro cursando el 8vo ciclo en ingeniería de software y tengo experiencia en diseño de software y QA. ",
  },
]

export function TestimonialsSection() {
  return (
      <section id="costumers" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-4">
            <p className="text-sm font-semibold text-[#1DD1A1] tracking-wide uppercase mb-2 animate-fade-in">OUR TEAM</p>
            <h2 className="text-4xl font-bold text-gray-800 animate-fade-in-up">
              Meet our <span className="text-[#1DD1A1]">team</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>The talented people behind BeanDetect AI</p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {teamMembers.map((member, index) => (
                <Card
                    key={member.name}
                    className="relative border-2 border-gray-200 hover:border-[#1DD1A1] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <Avatar className="h-20 w-20 mb-4 transition-transform duration-300 hover:scale-110">
                        <AvatarFallback className="bg-[#1DD1A1] text-white">
                          <CircleUserRound className="h-12 w-12" />
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-bold text-base text-gray-800 transition-colors duration-300 hover:text-[#1DD1A1]">{member.name}</p>
                      <p className="text-sm text-[#1DD1A1] font-medium mb-3">{member.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 text-center">{member.description}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
            animation-fill-mode: both;
          }
        `}</style>
      </section>
  )
}