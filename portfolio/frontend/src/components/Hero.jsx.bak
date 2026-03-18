import { motion } from 'framer-motion'

const bootLines = [
  { width: '80%', delay: 0 },
  { width: '60%', delay: 0.1 },
  { width: '40%', delay: 0.2 },
  { width: '20%', delay: 0.3 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Boot sequence animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 space-y-2 w-full max-w-md"
      >
        {bootLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: line.delay }}
            className="h-2 bg-accent rounded"
            style={{ width: line.width }}
          />
        ))}
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold text-center mb-4 font-display"
      >
        Uddissh Verma
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-muted-foreground text-center mb-10"
      >
        Builder. Tinkerer. Engineer in progress.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a href="#projects" className="btn-primary text-center">
          View Projects
        </a>
        <a href="#contact" className="btn-secondary text-center">
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
