'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import CountdownTimer from '@/components/shared/CountdownTimer';

export default function UpsellSection() {
  const courseFeatures = [
    '30+ receitas exclusivas de macarronada',
    'Técnicas de preparo profissional',
    'Molhos especiais e combinações únicas',
    'Estratégias de precificação e vendas',
    'Embalagem e apresentação gourmet',
    'Acesso vitalício + comunidade VIP',
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20"
      aria-labelledby="upsell-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="bg-gradient-to-r from-[#daa821] to-yellow-400 text-white mb-4 px-4 py-2 text-sm font-semibold shadow-lg shadow-[#daa821]/30 animate-bounce">
              ⚠️ OFERTA ESPECIAL COMBO ⚠️
            </Badge>

            {/* Combo Countdown Timer */}
            <div className="bg-gradient-to-r from-[#1a1611]/80 to-[#0f0d0a]/80 rounded-xl p-4 mb-6 border border-[#daa821]/30 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <p className="text-[#daa821] font-semibold text-sm">⏰ Oferta combo expira em:</p>
              </div>
              <CountdownTimer variant="combo" />
              <p className="text-center text-gray-400 text-xs mt-2">
                Após esse tempo, você pagará o valor integral de R$ 109,98
              </p>
            </div>

            <h2
              id="upsell-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 incandescent-title"
            >
              <span className="block incandescent-subtitle text-2xl sm:text-3xl mb-2">Oferta especial</span>
              Leve também a Macarronada Gourmet
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4 incandescent-soft font-semibold">
              Já que você está investindo no seu futuro, que tal
              <span className="incandescent-soft font-semibold"> duplicar suas opções de receitas </span>e ter ainda
              mais formas de faturar?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left side - Course info and image */}
            <div className="space-y-6">
              {/* Course Image */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <img
                    src="/chef_com_macarrao_2.jpeg"
                    alt="Chef profissional preparando macarronada gourmet com ingredientes frescos"
                    className="relative w-48 h-48 sm:w-80 sm:h-80 mx-auto object-cover rounded-full border-4 border-[#daa821]/50 shadow-2xl shadow-[#daa821]/30 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 border-2 border-[#daa821]/30 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20" style={{marginTop: "38px"}}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#daa821] to-yellow-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">🍝</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">MACARRONADA GOURMET</h3>
                    <p className="text-[#daa821] font-semibold">CURSO COMPLETO</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {courseFeatures.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#daa821] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#daa821]/20 pt-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Valor individual do curso:</p>
                    <p className="text-2xl font-bold text-[#daa821] mb-4">R$ 59,99</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Pricing and CTA */}
            <div className="space-y-6">
              {/* Pricing Comparison */}
              <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 border-2 border-[#daa821]/30 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20">
                <div className="text-center mb-6">
                  <p className="text-[#daa821] font-semibold mb-4 text-lg">COMPARAÇÃO DE PREÇOS</p>

                  {/* Individual Prices */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-[#1a1611]/50 rounded-lg border border-[#daa821]/20">
                      <span className="text-gray-300">Batatas Recheadas</span>
                      <span className="text-[#daa821] font-bold">R$ 49,99</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#1a1611]/50 rounded-lg border border-[#daa821]/20">
                      <span className="text-gray-300">Macarronada Gourmet</span>
                      <span className="text-[#daa821] font-bold">R$ 59,99</span>
                    </div>
                    <div className="border-t border-[#daa821]/30 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Total separado:</span>
                        <span className="text-gray-500 line-through text-lg">R$ 109,98</span>
                      </div>
                    </div>
                  </div>

                  {/* Combo Price */}
                  <div className="bg-gradient-to-r from-green-600/20 to-[#daa821]/20 rounded-xl p-4 border border-green-500/30 mb-6">
                    <p className="text-green-400 font-semibold text-lg mb-2">PREÇO DO COMBO</p>
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-400 mb-2 incandescent-green-soft pulse-glow">
                      R$ 89,99
                    </p>
                    <p className="text-sm text-gray-300">Economia de R$ 19,99</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-gradient-to-r from-[#daa821] via-yellow-400 to-[#daa821] hover:from-[#daa821]/80 hover:via-yellow-400/80 hover:to-[#daa821]/80 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-[#daa821]/30 animate-pulse-scale hover:shadow-[#daa821]/50 mb-4 relative overflow-hidden"
                  onClick={() => window.open('https://monetizze.com.br', '_blank')}
                  aria-label="Comprar combo: Batatas Recheadas + Macarronada Gourmet por R$ 89,99"
                >
                  <span className="relative z-10 md:text-2xl">🍝 GARANTIR COMBO</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                </Button>
              </div>

              {/* Benefits Summary */}
              <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] rounded-2xl p-6 sm:p-8 border-2 border-[#daa821]/30 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20">
                <h4 className="text-[#daa821] font-bold text-lg mb-4 text-center">O QUE VOCÊ RECEBE</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Curso Batatas Recheadas Completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Curso Macarronada Gourmet Completo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">20+ receitas exclusivas no total</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Acesso vitalício aos 2 cursos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Comunidade VIP exclusiva</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Suporte especializado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="bg-yellow-600/10 rounded-2xl p-6 sm:p-8 border-2 border-[#daa821]/30 hover:border-[#daa821]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#daa821]/20 text-center mt-8">
            <p className="text-yellow-400 font-semibold text-sm mb-1">ATENÇÃO: Oferta por tempo limitado!</p>
            <p className="text-gray-300 text-xs">
              Esta é uma oferta exclusiva para quem está adquirindo o curso de Batatas Recheadas hoje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
