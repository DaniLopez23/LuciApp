import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 bg-pink-100 text-pink-800">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center">
          Made with love <Heart className="mx-2 h-4 w-4 fill-current" /> for you
        </p>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Daniel López Paredes</p>
      </div>
    </footer>
  )
}

