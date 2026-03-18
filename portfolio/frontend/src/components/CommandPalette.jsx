import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home', icon: '↗' },
  { id: 'about', label: 'About', icon: '◉' },
  { id: 'skills', label: 'Skills', icon: '◆' },
  { id: 'projects', label: 'Projects', icon: '▪' },
  { id: 'certifications', label: 'Certifications', icon: '★' },
  { id: 'timeline', label: 'Timeline', icon: '─' },
  { id: 'contact', label: 'Contact', icon: '✉' }
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [isOpen])

  const filtered = sections.filter(s =>
    s.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-8 px-4 py-2 bg-accent/50 border border-accent rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all z-40 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search size={16} />
        <span className="hidden sm:inline">Cmd+K</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
            >
              <div className="glass-card mx-4">
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 text-primary" size={20} />
                  <input
                    autoFocus
                    placeholder="Search sections..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-transparent pl-12 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none border-b border-accent/30"
                  />
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {filtered.length > 0 ? (
                    filtered.map((section, i) => (
                      <motion.button
                        key={section.id}
                        onClick={() => handleSelect(section.id)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="w-full px-4 py-3 text-left hover:bg-accent/50 transition-colors border-b border-accent/20 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-primary">{section.icon}</span>
                          <span>{section.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground group-hover:text-primary">↵</span>
                      </motion.button>
                    ))
                  ) : (
                    <div className="px-4 py-8 text-center text-muted-foreground">
                      No sections found
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
