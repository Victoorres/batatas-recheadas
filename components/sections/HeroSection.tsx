'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#daa821]/10 via-transparent to-[#1a1611]/20"></div>

      {/* Neon background effects */}
      <div className="absolute top-10 sm:top-20 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-[#daa821]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#daa821]/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Logo in Hero */}
        <div className="mb-6 sm:mb-2">
          <div className="relative inline-block">
            <Image
              src="/logo.png"
              alt="BatataCheff - Curso de Batatas Recheadas Online"
              width={100}
              height={100}
              className="w-[160px] h-[160px] sm:w-[240px] sm:h-[240px] rounded-full mx-auto hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute -inset-2 bg-[#daa821]/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="mb-6 sm:mb-8" itemScope itemType="https://schema.org/AggregateRating">
          <div className="flex items-center justify-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  filter: 'drop-shadow(0 0 10px #fbbf24) drop-shadow(0 0 20px #f59e0b)',
                }}
              />
            ))}
          </div>
        </div>

        <Badge className="bg-gradient-to-r from-[#daa821] to-yellow-400 text-[#010100] mb-4 sm:mb-6 px-4 sm:px-6 py-3 text-sm sm:text-base lg:text-lg font-semibold shadow-lg shadow-[#daa821]/30 animate-bounce">
          🔥 CURSO MAIS ESPERADO DE {new Date().getFullYear()} 🔥
        </Badge>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold mb-10 sm:mb-6 neon-tube">
          DOMINE A ARTE DAS
          <br />
          BATATAS RECHEADAS
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          Transforme batatas simples em pratos gourmet irresistíveis e
          <span className="incandescent-soft font-semibold"> fature alto </span>
          com receitas exclusivas que seus clientes vão amar!
        </p>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="relative bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#daa821]/50 shadow-[#daa821]/20 hover:border-[#daa821]/80 transition-all duration-300 group">
            <video
              className="w-full aspect-video object-cover"
              controls
              controlsList="nodownload"
              poster="/batata_recheada_3.jpeg"
              preload="metadata"
            >
              <source src="/video/intro.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
          <p className="incandescent-glow text-base sm:text-lg lg:text-xl mt-4 font-semibold animate-bounce">
            👆 Assista ao vídeo e descubra como transformar sua vida!
          </p>
        </div>

        {/* Price and CTA */}
        <div
          className="bg-gradient-to-br from-[#1a1611] via-[#1a1611] to-[#0f0d0a] rounded-2xl p-8 sm:p-10 lg:p-12 max-w-lg mx-auto border-2 border-[#daa821]/50 shadow-2xl shadow-[#daa821]/20 hover:shadow-[#daa821]/40 transition-all duration-300 hover:scale-105"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="text-center mb-6">
            <p className="text-gray-400 text-base sm:text-lg mb-2">OFERTA ESPECIAL</p>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-gray-500 line-through text-xl sm:text-2xl">R$ 197,00</span>
              <Badge className="bg-red-600 text-white animate-pulse text-sm sm:text-base hover:bg-red-500">-75%</Badge>
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 incandescent-soft pulse-glow">
              <span itemProp="price" content="49.99">
                R$ 49,99
              </span>
              <meta itemProp="priceCurrency" content="BRL" />
            </div>
            <p className="text-base sm:text-lg text-gray-400">ou 12x de R$ 4,99</p>
            <meta itemProp="availability" content="https://schema.org/InStock" />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg shadow-green-600/30 animate-pulse-scale hover:shadow-green-600/50"
            onClick={() => window.open('https://monetizze.com.br', '_blank')}
            aria-label="Comprar curso de batatas recheadas por R$ 49,99"
          >
            🚀 GARANTIR ACESSO
          </Button>
        </div>
      </div>
    </header>
  );
}
