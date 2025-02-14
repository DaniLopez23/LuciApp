"use client"

import Link from "next/link"
import { Heart, Coins } from "lucide-react"
import { useCoins } from "../context/CoinsContext"

export default function Header() {
  const { coins } = useCoins()

  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-600 flex items-center">
          <Heart className="w-6 h-6 mr-2" />
          <span>LuciApp</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/quiz" className="text-pink-600 hover:text-pink-800">
            Quiz
          </Link>
          <Link href="/store" className="text-pink-600 hover:text-pink-800">
            Store
          </Link>
          <div className="flex items-center text-yellow-500">
            <Coins className="w-5 h-5 mr-1" />
            <span>{coins}</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

