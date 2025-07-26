"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black py-6 sm:py-8 px-4 border-t border-[#d6c27c]/20">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-xs sm:text-sm">© {new Date().getFullYear()} BatataCheff. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
