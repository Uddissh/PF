import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import CommandPalette from './components/CommandPalette'
import Hero from './components/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import GitHubStats from './sections/GitHubStats'
import Certifications from './sections/Certifications'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Navigation />
      <CommandPalette />
      <ThemeToggle />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Certifications />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  )
}

export default App
