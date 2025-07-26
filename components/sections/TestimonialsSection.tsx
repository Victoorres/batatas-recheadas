"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      result: "R$ 3.500/mês",
      text: "Em apenas 2 meses já estava faturando mais de R$ 3.500 por mês vendendo batatas recheadas na minha região!",
      location: "São Paulo, SP",
      time: "2 meses",
    },
    {
      name: "João Santos",
      result: "R$ 5.200/mês",
      text: "As receitas são incríveis! Meus clientes sempre voltam e indicam para outros. Já tenho uma clientela fiel.",
      location: "Rio de Janeiro, RJ",
      time: "4 meses",
    },
    {
      name: "Ana Costa",
      result: "R$ 4.800/mês",
      text: "Nunca pensei que seria tão fácil. O curso me deu toda a base que eu precisava para começar meu negócio.",
      location: "Belo Horizonte, MG",
      time: "3 meses",
    },
    {
      name: "Carlos Oliveira",
      result: "R$ 6.100/mês",
      text: "Transformei minha vida! Saí do desemprego e hoje tenho minha própria empresa de batatas gourmet.",
      location: "Curitiba, PR",
      time: "6 meses",
    },
    {
      name: "Fernanda Lima",
      result: "R$ 4.200/mês",
      text: "O curso superou todas as minhas expectativas. As técnicas são profissionais e os resultados aparecem rápido!",
      location: "Salvador, BA",
      time: "3 meses",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-12 sm:py-16 lg:py-20  bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-title"
          >
            Depoimentos de quem já faturou
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center max-w-4xl mx-auto px-4">
            Veja os resultados reais dos nossos alunos
          </p>
        </div>

        {/* Single Carousel for All Devices */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] border border-[#daa821]/30 hover:border-[#daa821]/60 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg hover:shadow-xl hover:shadow-[#daa821]/20 transition-all duration-300 max-w-4xl mx-auto">
                    {/* Stars */}
                    <div className="flex items-center justify-center mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-yellow-400 fill-current mx-1"
                          style={{
                            filter: "drop-shadow(0 0 10px #fbbf24) drop-shadow(0 0 20px #f59e0b)",
                          }}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-10 italic text-center leading-relaxed px-4">
                      "{testimonial.text}"
                    </p>

                    {/* Result Badge */}
                    <div className="text-center mb-10">
                      <div className="inline-block bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl px-8 py-6 shadow-lg">
                        <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-2 font-bold incandescent-green-soft pulse-glow">
                          {testimonial.result}
                        </p>
                        <p className="text-green-300 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide">
                          FATURAMENTO MENSAL
                        </p>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="text-center border-t border-[#daa821]/20 pt-8">
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                        <div className="text-center sm:text-left">
                          <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 incandescent-glow">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-400 text-base sm:text-lg lg:text-xl">{testimonial.location}</p>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="bg-[#daa821]/20 border border-[#daa821]/50 rounded-full px-4 py-2">
                            <span className="incandescent-pulse text-sm sm:text-base lg:text-lg font-semibold">
                              ⏱️ {testimonial.time}
                            </span>
                          </div>
                          <div className="bg-green-600/20 border border-green-500/50 rounded-full px-4 py-2">
                            <span className="text-green-400 text-sm sm:text-base lg:text-lg font-semibold">
                              ✓ Verificado
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-gradient-to-r from-[#daa821] to-yellow-400 hover:from-[#daa821]/80 hover:to-yellow-400/80 text-black p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-[#daa821]/50 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-gradient-to-r from-[#daa821] to-yellow-400 hover:from-[#daa821]/80 hover:to-yellow-400/80 text-black p-4 sm:p-5 rounded-full shadow-2xl hover:shadow-[#daa821]/50 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>
    </section>
  )
}
