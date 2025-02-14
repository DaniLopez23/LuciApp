import Link from "next/link"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-10">
          Vamos a jugar un poquito juju
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            href="/quiz"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-center w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105"
          >
            Test de Amor
          </Link>
          <Link
            href="/store"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-center w-full md:w-auto transition duration-300 ease-in-out transform hover:scale-105"
          >
            Tienda del Corazón
          </Link>
        </div>
      </div>
    </div>
  )
}

