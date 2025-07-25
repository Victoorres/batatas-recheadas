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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#daa821] drop-shadow-[0_0_20px_rgba(218,168,33,0.8)] animate-pulse"
          >
            Não perca esta oportunidade
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Esta oferta especial é por tempo limitado. Garanta já o seu acesso e comece a transformar sua vida hoje
            mesmo
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 max-w-md mx-auto border border-[#daa821]/30 mb-8 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20">
          <div className="text-3xl sm:text-4xl font-bold text-[#daa821] mb-4 animate-pulse">R$ 49,99</div>
          <p className="text-gray-400 mb-6">Oferta válida por tempo limitado</p>

          <Button
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg shadow-green-600/30 animate-pulse-scale hover:shadow-green-600/50"
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
