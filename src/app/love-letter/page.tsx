"use client"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

const loveLetterContent = `
Hola amor. Si, es la carta, la que te prometí, pues ya la tienes no porque quieras tu si no porque quiero yo y porque te la mereces. A lo mejor no es la forma en la que te pensabas que la leerias pero que mejor forma que esta (pa esto soy ingeniero...).

Antes de nada, no, no lo ha escrito ninguna IA, lo he escrito yo, con mis manos, con mi corazón y con todo el amor que te tengo. Primero, Te tengo que dar las gracias por mil cosas, pero sobretodo por estar conmigo en los momentos mas dificiles de mi vida asi como e los mejores. Gracias a ti he podido sobrellevar el mentalizarme que no iba a poder volver a hacer lo que mas amaba y disfrutaba del mundo (el futbol obviamente jeje). Si no hubiera sido por ti, por tu amor, por tu luz, por tu inocencia, por tu paciencia y por mil cosas mas no se que habria sido de mi. 

Gracias por acompañarme durante estos años que han sido probablemente los mejores de mi vida y gran parte de ello es culpa tuya. Gracias por ese amor tan puro que me das cada dia y gracias por ayudarme a crecer, madurar y enseñarme a que no todo tiene porque tener un único sentido y ayudarme a aprender a querer mejor.

Alomejor esta carta no es lo que esperabas (por el formato, longitud...) pero lo que no le falta es corazón. Porque sí, alomejor te lo digo poco, que te quiero, te amo, que eres lo mejor que me ha pasado y bla bla bla. Porque mi verdadera froma de mostrarte amor es hacerte feliz, No quiero otra cosa que hacerte feliz y que yo pueda formar parte de tu felicidad y verte reir con mis chistes o mis tonterias o quedarnos abrazados viendo una serie y disfrutar de nuestra paz. Porque aunque des un por culo historico a veces, la paz que nos damos en los momentos cuando realmente lo necesitamos y queremos el apoyo del otro es cuando mejor estamos. Aunque nos enfademos mil veces por lo mismo, discutamos mil temas mil millones de veces, siempre recuerdo como se esta tumbado a tu lado y se me pasa todo (por eso no me enfado tanto contigo haber si tomas nota guapa 

Espero que esta "carta" sea lo suficientemente guay para mostrarte realmente lo que siento y lo agradecido que estoy por tenerte en mi vida y que por supuesto quiero que sigas muchos años mas en ella. Porque sí, porque has sido, eres y serás una de las personas mas importantes que han pasado por mi vida y espero que siempre sea así.

Te ama un muchito. Tu novio, el guapo, sexy, fuerte, bueno, inteligente, sexy. Daniel López Paredes
`

export default function LoveLetterPage() {
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
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 bg-[url('/paper-texture.jpg')] bg-cover">
          <div id="love-letter-content" className="bg-white bg-opacity-80 p-6 rounded-lg shadow-inner">
            <h1 className="text-3xl font-bold text-pink-800 text-center mb-6">La Carta</h1>
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

