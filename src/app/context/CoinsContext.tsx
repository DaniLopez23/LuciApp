'use client'

import React, { createContext, useState, useContext } from 'react'

type CoinsContextType = {
  coins: number
  addCoins: (amount: number) => void
  removeCoins: (amount: number) => void
}

const CoinsContext = createContext<CoinsContextType | undefined>(undefined)

export const CoinsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coins, setCoins] = useState(0)

  const addCoins = (amount: number) => {
    setCoins(prevCoins => prevCoins + amount)
  }

  const removeCoins = (amount: number) => {
    setCoins(prevCoins => Math.max(0, prevCoins - amount))
  }

  return (
    <CoinsContext.Provider value={{ coins, addCoins, removeCoins }}>
      {children}
    </CoinsContext.Provider>
  )
}

export const useCoins = () => {
  const context = useContext(CoinsContext)
  if (context === undefined) {
    throw new Error('useCoins must be used within a CoinsProvider')
  }
  return context
}
