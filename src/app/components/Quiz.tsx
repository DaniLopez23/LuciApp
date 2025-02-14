"use client"

import { useState, useEffect } from "react"
import { useCoins } from "../context/CoinsContext"
import { motion } from "framer-motion"
import { Coins } from "lucide-react"
import { option } from "framer-motion/client"

const questions = [
  {
    question: "¿Cuando es nuestro aniversario?",
    options: ["Abril 15", "Marzo 16", "Abril 16", "Abril 19"],
    correctAnswer: "Abril 19",
  },
  {
    question: "¿Cual es mi comida favorita?",
    options: ["Huevos rotos con patatas", "Hamburguesa", "Pizza", "Espaguettis"],
    correctAnswer: "Huevos rotos con patatas",
  },
  {
    question: "¿Cual es mi color favorito?",
    options: ["Azul", "Verde", "Rojo", "Amarillo", "Blanco"],
    correctAnswer: "Blanco",
  },
  {
    question: "¿Cual es mi postre favorito?",
    options: ["Tarta de queso", "Torrijas", "Tortitas", "Helado de vainilla"],
    correctAnswer: "Torrijas",
  },
  {
    question: "¿Cual es mi película favorita?",
    options: ["El corredor del laberinto", "Harry Potter", "Avatar", "Gru mi villano favorito 4"],
    correctAnswer: "Avatar",
  },
  {
    question: "¿Cual es mi serie favorita?",
    options: ["Prison Break", "Breaking Bad", "Vikingos", "The Big Bang Theory"],
    correctAnswer: "Breaking Bad",
  },
  {
    question: "¿Cual es mi deporte favorito?",
    options: ["Fútbol", "Baloncesto", "Tenis", "Natación"],
    correctAnswer: "Fútbol",
  },
  {
    question: "¿Por que razon el numero 23 es mi favorito?",
    options: [
      "Por Michael Jordan",
      "Por Isco Alarcon",
      "Por Cristiano Ronaldo",
      "Por Kobe Bryant",
      "Por David Beckham",
    ],
    correctAnswer: "Por Isco Alarcon",
  },
  {
    question: "¿Cuantos años de carnet de conducir B necesitas para poder conducir una moto de hasta 125CC ?",
    options: ["1 año", "2 años", "3 años", "4 años"],
    correctAnswer: "3 años",
  },
  {
    question: "¿Que es lo que mas me gusta de ti?",
    options: ["Tu culo", "Tu culo", "Tu culo", "Tu culo"],
    correctAnswer: "Tu culo",
  },
  {
    question: "¿Que es lo que mas me gusta de ti (ahora de vd jeje)?",
    options: ["Tu mirada", "Tu sonrisa", "Tu forma de ser", "Tus tetas"],
    correctAnswer: "Tus tetas",
  },
  {
    question: "¿Que es lo que mas me gusta de ti (ahora si que si que si de vd jejejejee)?",
    options: ["Tu mirada", "Tu sonrisa", "Tu forma de ser", "Tus orejas"],
    correctAnswer: "Tu mirada",
  }

]

const ADD_POINTS = 100

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [earnedCoins, setEarnedCoins] = useState(0)
  const [showCoinAnimation, setShowCoinAnimation] = useState(false)
  const { addCoins } = useCoins()

  useEffect(() => {
    if (showResult) {
      addCoins(earnedCoins)
    }
  }, [showResult])

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    const correct = answer === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
      setEarnedCoins(earnedCoins + ADD_POINTS)
      setShowCoinAnimation(true)
      setTimeout(() => setShowCoinAnimation(false), 700)
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setEarnedCoins(0)
  }

  return (
    <section className="py-12 px-6 relative">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold text-pink-800 text-center mb-8">Love Quiz</h2>
        {showResult ? (
          <div className="text-center bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">
              Your Score: {score} / {questions.length}
            </h3>
            <p className="mb-4 text-pink-600">
              {score === questions.length
                ? "Ole Ole Ole!"
                : "vaya tela ni una bien, a estudiar loca"}
            </p>
            <p className="text-lg font-semibold mb-4">You earned {earnedCoins} coins!</p>
            <button
              onClick={restartQuiz}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Volver
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !selectedAnswer && handleAnswer(option)}
                  className={`w-full py-2 px-4 rounded transition duration-300 ${
                    selectedAnswer
                      ? option === questions[currentQuestion].correctAnswer
                        ? "bg-green-500 text-white"
                        : option === selectedAnswer
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      : "bg-pink-100 text-pink-800 hover:bg-pink-200"
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
      {showCoinAnimation && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <Coins className="text-yellow-500 w-16 h-16" />
          <span className="text-2xl font-bold text-yellow-500 ml-2">{`+${ADD_POINTS}`}</span>
        </motion.div>
      )}
    </section>
  )
}

