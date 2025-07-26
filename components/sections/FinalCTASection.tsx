"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTASection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-[#1a1611] via-[#1a1611]/80 to-black"
      aria-labelledby="final-cta-heading"
    >
      <div className="container mx-auto text-center">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 incandescent-title"
          >
            Não perca esta oportunidade
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
            Esta oferta especial é por tempo limitado. Garanta já o seu acesso e comece a transformar sua vida hoje
            mesmo
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-8 sm:p-10 lg:p-12 max-w-lg mx-auto border border-[#daa821]/30 mb-8 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 incandescent-title pulse-glow">R$ 49,99</div>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">Oferta válida por tempo limitado</p>

          <Button
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl lg:text-2xl transition-all duration-300 shadow-lg shadow-green-600/30 animate-pulse-scale hover:shadow-green-600/50"
            onClick={() => window.open("https://monetizze.com.br", "_blank")}
            aria-label="Comprar curso de batatas recheadas por R$ 49,99"
          >
            🚀 GARANTIR ACESSO
          </Button>
        </div>
      </div>
    </section>
  )
}
