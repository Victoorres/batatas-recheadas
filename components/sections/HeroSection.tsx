'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="py-12 sm:py-16 lg:py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#daa821]/10 via-transparent to-[#1a1611]/20"></div>

      {/* Neon background effects */}
  
      <div className="container mx-auto relative z-10">
        {/* Logo in Hero */}
        <div className="mb-6 sm:mb-1">
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
                className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 fill-current drop-shadow-[0_0_10px_rgba(255,193,7,0.8)] hover:scale-125 transition-transform duration-200"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        <Badge className="bg-gradient-to-r from-[#daa821] to-yellow-400 text-[#010100] mb-4 sm:mb-6 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold shadow-lg shadow-[#daa821]/30 animate-bounce">
          🔥 CURSO MAIS ESPERADO DE {new Date().getFullYear()} 🔥
        </Badge>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#daa821] via-yellow-400 to-[#daa821] bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
          DOMINE A ARTE DAS
          <br />
          <span className="text-white drop-shadow-[0_0_30px_rgba(214,194,124,0.8)] hover:drop-shadow-[0_0_50px_rgba(214,194,124,1)] transition-all duration-300">
            BATATAS RECHEADAS
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
          Transforme batatas simples em pratos gourmet irresistíveis e
          <span className="text-[#daa821] font-semibold drop-shadow-[0_0_10px_rgba(214,194,124,0.8)] animate-pulse">
            {' '}
            fature alto{' '}
          </span>
          com receitas exclusivas que seus clientes vão amar!
        </p>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="relative bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#daa821]/50 shadow-[#daa821]/20 hover:border-[#daa821]/80 transition-all duration-300 group">
            <video
              className="w-full aspect-video object-cover"
              controls
              poster="/batata_recheada_3.jpeg"
              preload="metadata"
            >
              {/* <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chef_com_batata-jzOwWZ9a7tjXFZafZ8Wx9OI7xQWU99.mp4"
                type="video/mp4"
              /> */}
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>
          <p className="text-[#daa821] text-sm mt-4 font-semibold animate-bounce">
            👆 Assista ao vídeo e descubra como transformar sua vida!
          </p>
        </div>

        {/* Price and CTA */}
        <div
          className="bg-gradient-to-br from-[#1a1611] via-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 max-w-md mx-auto border-2 border-[#daa821]/50 shadow-2xl shadow-[#daa821]/20 hover:shadow-[#daa821]/40 transition-all duration-300 hover:scale-105"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm mb-2">OFERTA ESPECIAL</p>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-gray-500 line-through text-lg">R$ 197,00</span>
              <Badge className="bg-red-600 text-white animate-pulse hover:bg-red-500">-75%</Badge>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#daa821] mb-2 drop-shadow-[0_0_20px_rgba(214,194,124,0.8)] animate-pulse">
              <span itemProp="price" content="49.99">
                R$ 49,99
              </span>
              <meta itemProp="priceCurrency" content="BRL" />
            </div>
            <p className="text-sm text-gray-400">ou 12x de R$ 4,99</p>
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
