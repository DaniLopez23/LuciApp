import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-pink-300 via-pink-200 to-pink-100">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-800 mb-6 leading-tight">
          Feliz San Valentín. ¡Te amo mucho!
        </h1>
        <p className="text-xl md:text-2xl text-pink-700 mb-10">Gracias por todo lo que haces por mí, te amo</p>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          <Image
            src="/primerafoto.jpg"
            alt="Nuestra foto juntos"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-3xl shadow-2xl"
          />
        </div>
        <span className="block text-md text-pink-600 mt-4">Nuestra primera foto juntis juju</span>
      </div>
    </section>
  )
}

