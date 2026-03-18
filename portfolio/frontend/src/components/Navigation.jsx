import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#hero" className="text-lg font-bold font-display tracking-tight hover:text-primary transition-colors">
            UDDISS H
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden border-t border-accent py-4 space-y-3">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded transition-colors">
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}
