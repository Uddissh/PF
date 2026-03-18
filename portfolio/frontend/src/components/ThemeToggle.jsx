import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../hooks/useDarkMode'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-8 right-8 p-3 bg-accent rounded-full hover:bg-accent/80 transition-all z-40 shadow-lg"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
