import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Mail, Phone, Clock, MapPin } from "lucide-react"

const plans = [
  {
    name: "Cooperative",
    price: "$5.99",
    period: "per month",
    features: ["600 images per producer user", "10 producer accounts", "2 admin accounts"],
  },
  {
    name: "Enterprise",
    price: "$15.99",
    period: "per month",
    features: ["1800 images per producer user", "25 producer accounts", "5 admin accounts"],
    popular: true,
  },
  {
    name: "Free",
    price: "$0.00",
    period: "per user, per month",
    features: ["100 images", "Single producer account"],
  },
]

export function PricingSection() {
  return (
    <>
      <section id="pricing" className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Affordable <span className="text-[#1DD1A1]">pricing</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">Purchase your plan monthly at any time</p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-2 ${plan.popular ? "border-[#1DD1A1] shadow-lg scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border-2 border-[#1DD1A1]">
                    <span className="text-[#1DD1A1] text-xs font-semibold">Most Popular</span>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div>
                    <span className="text-5xl font-bold text-[#1DD1A1]">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{plan.period}</p>
                </CardHeader>
                <CardContent className="px-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-[#1DD1A1] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button
                    className={`w-full rounded-lg ${
                      plan.popular
                        ? "bg-[#1DD1A1] hover:bg-[#17B890] text-white"
                        : "bg-white border-2 border-[#1DD1A1] text-[#1DD1A1] hover:bg-[#1DD1A1] hover:text-white"
                    }`}
                  >
                    Get subscription
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-[#1DD1A1] tracking-wide uppercase mb-2">GET IN TOUCH</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For a free consultation with us, you can write a message or call us, we will respond as quickly as
                possible
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Mail className="h-5 w-5 text-[#1DD1A1]" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">detectbeanai@detectbeanai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Phone className="h-5 w-5 text-[#1DD1A1]" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">+62 8221 1222 0001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Clock className="h-5 w-5 text-[#1DD1A1]" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Everyday : 08.00-21.00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#1DD1A1]" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">
                      Jl. Raya Cihanjuang No.112 Tangerang Selatan, Indonesia 41222
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7461234567890!2d106.7!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
