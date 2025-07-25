"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  variant?: "default" | "combo"
  className?: string
}

export default function CountdownTimer({ variant = "default", className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: variant === "combo" ? 0 : 2,
    hours: variant === "combo" ? 1 : 23,
    minutes: variant === "combo" ? 23 : 45,
    seconds: variant === "combo" ? 45 : 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (variant === "combo") {
    return (
      <div className={`flex justify-center items-center space-x-3 ${className}`}>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-2 min-w-[50px]">
            <div className="text-lg font-bold text-red-400 animate-pulse">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">HORA</div>
          </div>
        </div>
        <span className="text-red-400 text-xl animate-pulse">:</span>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-2 min-w-[50px]">
            <div className="text-lg font-bold text-red-400 animate-pulse">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">MIN</div>
          </div>
        </div>
        <span className="text-red-400 text-xl animate-pulse">:</span>
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-2 min-w-[50px]">
            <div className="text-lg font-bold text-red-400 animate-pulse">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-gray-400">SEG</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex justify-center items-center space-x-4 sm:space-x-8 ${className}`}>
      {[
        { label: "DIAS", value: timeLeft.days },
        { label: "HORAS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEG", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-gradient-to-br from-[#1a1611] to-[#0f0d0a] border-2 border-red-500/50 rounded-lg p-3 sm:p-4 lg:p-6 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 animate-pulse">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-semibold">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
