"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ImageShowcase() {
  const [currentImage, setCurrentImage] = useState(0)

  const showcaseImages = [
    {
      src: "/batata_recheada_6.jpeg",
      alt: "Batata recheada gourmet com efeito dramático de fogo",
      title: "Receitas Irresistíveis",
    },
    {
      src: "/batata_recheada_7.jpeg",
      alt: "Batata recheada com queijo derretido escorrendo",
      title: "Técnicas Profissionais",
    },
    {
      src: "/batata_recheada_2.jpeg",
      alt: "Batata recheada com apresentação gourmet",
      title: "Resultados Incríveis",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % showcaseImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-[#1a1611]/20 via-[#1a1611]/40 to-[#1a1611]/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#daa821]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#daa821] drop-shadow-[0_0_20px_rgba(218,168,33,0.8)] animate-pulse">
            Veja a qualidade dos nossos pratos
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Receitas que fazem seus clientes voltarem sempre
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[#daa821]/50 shadow-2xl shadow-[#daa821]/20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#daa821]/20 to-orange-500/20 blur-xl animate-pulse"></div>

            {showcaseImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {showcaseImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-[#daa821] shadow-lg shadow-[#daa821]/50 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
