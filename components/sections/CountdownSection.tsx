"use client"

import CountdownTimer from "@/components/shared/CountdownTimer"

export default function CountdownSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20">
      <div className="container mx-auto text-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-red">
            Oferta por tempo limitado
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            Não perca a chance de transformar sua vida com o curso mais completo do Brasil
          </p>
        </div>

        <CountdownTimer className="mb-8" />

        <p className="text-gray-400 text-base sm:text-lg">Aproveite antes que acabe!</p>
      </div>
    </section>
  )
}
