"use client"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

const loveLetterContent = `
Mi querida Lucía,

Cada día a tu lado es un regalo que atesoro con todo mi corazón. Tu sonrisa ilumina mi mundo, y tu amor me da fuerzas para enfrentar cualquier desafío. Eres mi compañera, mi mejor amiga y mi amor eterno.

Gracias por ser tú, por tu paciencia, tu comprensión y tu cariño incondicional. Contigo, cada momento se convierte en un recuerdo precioso que guardaré para siempre.

Te amo más de lo que las palabras pueden expresar. Estoy emocionado por todos los momentos que aún nos quedan por vivir juntos.

Con todo mi amor,
Daniel
`

export default function LoveLetterPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 bg-[url('/paper-texture.jpg')] bg-cover">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-inner">
            <h1 className="text-3xl font-bold text-pink-800 text-center mb-6">Carta de Amor</h1>
            <div className="love-letter-content mb-6">
              <p className="font-cursive text-lg whitespace-pre-line leading-relaxed">{loveLetterContent}</p>
            </div>
          </div>
        </div>
        <div className="bg-pink-200 p-4 flex justify-center">
          <Button onClick={handlePrint} className="flex items-center bg-pink-500 hover:bg-pink-600 text-white">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir Carta
          </Button>
        </div>
      </div>
    </div>
  )
}

