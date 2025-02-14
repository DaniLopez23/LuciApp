"use client"

import { useState } from "react"
import { useCoins } from "../context/CoinsContext"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
const products = [
  { id: 1, name: "Cartita", price: 100, type:"letter", image: "/carta.png" },
  { id: 2, name: "Caja de Chocolates", price: 100, image: "/bombones.png" },
  { id: 3, name: "Polvo.......", price: 0, image: "/foto.jpg" },
  { id: 4, name: "Cena Romántica", price: 700, image: "/cena.jpg" },
  { id: 5, name: "Chuches", price: 100, image: "/chuches.jpg" },
  { id: 6, name: "Baby", price: 999999999, image: "/bebe.jpg" },
]

export default function StorePage() {
  const [purchasedItems, setPurchasedItems] = useState<number[]>([])
  const { coins, removeCoins } = useCoins()

  const handlePurchase = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    if (product && coins >= product.price) {
      if (confirm(`¿Estás seguro que quieres comprar ${product.name} por ${product.price} monedas?`)) {
        removeCoins(product.price)
        setPurchasedItems((prev) => [...prev, productId])
      }
    } else {
      alert("¡No tienes suficientes monedas!")
    }
  }

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 text-center mb-8">Tienda del Amor</h2>
        <Tabs defaultValue="available" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="available">Artículos Disponibles</TabsTrigger>
            <TabsTrigger value="purchased">Artículos Comprados</TabsTrigger>
          </TabsList>
          <TabsContent value="available">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {products.map((product) => (
                <div key={product.id} className="bg-pink-50 rounded-lg shadow-md p-4 flex flex-col">
                  {product.type === "letter" ? (
                    <div className="h-24 flex items-center justify-center bg-pink-100 rounded-md mb-4">
                      <span className="text-4xl">💌</span>
                    </div>
                  ) : (
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="mx-auto mb-4 rounded-md w-24 h-24 object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">{product.name}</h3>
                  <p className="text-pink-600 mb-4">{product.price} monedas</p>
                  <Button
                    onClick={() => handlePurchase(product.id)}
                    className="mt-auto"
                    disabled={purchasedItems.includes(product.id)}
                  >
                    {purchasedItems.includes(product.id) ? "Comprado" : "Comprar"}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="purchased">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {products
                .filter((p) => purchasedItems.includes(p.id))
                .map((product) => (
                  <div key={product.id} className="bg-pink-50 rounded-lg shadow-md p-4 flex flex-col">
                    {product.type === "letter" ? (
                      <div>
                        <div className="h-24 flex items-center justify-center bg-pink-100 rounded-md mb-4">
                          <span className="text-4xl">💌</span>
                        </div>
                        <h3 className="text-lg font-semibold text-pink-800 mb-2">{product.name}</h3>
                        <Link href="/love-letter">
                          <Button className="w-full mt-2">Ver Carta</Button>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="mx-auto mb-4 rounded-md w-24 h-24 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-pink-800 mb-2">{product.name}</h3>
                        <p className="text-green-600">Comprado</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

