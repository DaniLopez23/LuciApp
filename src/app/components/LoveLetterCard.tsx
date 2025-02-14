"use client"

import { useState } from "react"
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

export default function LoveLetterCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handlePrint = () => {
    const printContent = document.getElementById("love-letter-content")
    const windowPrint = window.open("", "", "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0")

    if (windowPrint && printContent) {
      windowPrint.document.write(`
        <html>
          <head>
            <title>Imprimir Carta de Amor</title>
            <style>
              body {
                font-family: 'Brush Script MT', cursive;
                background-color: #FFF0F5;
                padding: 40px;
              }
              .love-letter {
                background-color: #FFFFFF;
                border: 2px solid #FF69B4;
                border-radius: 10px;
                padding: 20px;
                max-width: 600px;
                margin: 0 auto;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              h1 {
                color: #FF1493;
                text-align: center;
              }
              p {
                font-size: 18px;
                line-height: 1.6;
                color: #333333;
              }
            </style>
          </head>
          <body>
            <div class="love-letter">
              <h1>Carta de Amor</h1>
              ${printContent.innerHTML}
            </div>
          </body>
        </html>
      `)
      windowPrint.document.close()
      windowPrint.focus()
      windowPrint.print()
      windowPrint.close()
    }
  }

  return (
    <div className="bg-white border-2 border-pink-300 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-pink-800 mb-2">Carta de Amor</h3>
      <div
        id="love-letter-content"
        className={`mb-4 p-4 bg-pink-50 rounded overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "h-auto" : "h-40"
        }`}
      >
        <p className="font-cursive text-lg whitespace-pre-line">{loveLetterContent}</p>
      </div>
      <div className="flex justify-between">
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="outline">
          {isExpanded ? "Leer menos" : "Leer más"}
        </Button>
        <Button onClick={handlePrint} className="flex items-center">
          <Printer className="mr-2 h-4 w-4" />
          Imprimir Carta
        </Button>
      </div>
    </div>
  )
}

