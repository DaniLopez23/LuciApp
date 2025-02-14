import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

import { CoinsProvider } from './context/CoinsContext'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LuciApp',
  description: 'Celebrate Valentine\'s Day with a fun quiz and special gifts!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CoinsProvider>
          <div className="flex flex-col min-h-screen bg-pink-50">
            <Header />
            {/* <Hero /> */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CoinsProvider>
      </body>
    </html>
  )
}
