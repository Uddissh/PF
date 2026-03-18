import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-accent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            Designed & built by Uddissh Verma
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Uddissh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:uddissh.verma@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
