import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import projects from '../data/projects'
import { useSearch } from '../hooks/useSearch'
import { CATEGORIES } from '../utils/constants'

function StatusBadge({ status }) {
  const colors = {
    active: 'bg-green-900/30 text-green-400',
    deployed: 'bg-blue-900/30 text-blue-400',
    completed: 'bg-purple-900/30 text-purple-400',
    running: 'bg-yellow-900/30 text-yellow-400'
  }

  return (
    <span className={`px-2 py-1 text-xs rounded ${colors[status] || colors.active}`}>
      {status}
    </span>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const { query, setQuery, results } = useSearch(projects, ['title', 'description', 'stack'])

  const filtered = results.filter(p => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="section-title text-center">
          Projects
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="section-subtitle">
          Robotics, embedded systems, full-stack development, and infrastructure.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input type="text" placeholder="Search projects..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-muted border border-accent rounded-lg focus:outline-none focus:border-primary transition-colors" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full text-sm transition-all ${filter === category ? 'bg-primary text-black' : 'bg-accent hover:bg-accent/80'}`}>
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <motion.article key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="glass-card p-6 card-hover border border-accent/20">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs text-primary uppercase tracking-wider">{project.category}</span>
                    <StatusBadge status={project.status} />
                  </div>

                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/50 text-xs rounded">{tech}</span>
                    ))}
                    {project.stack.length > 4 && <span className="px-2 py-1 bg-accent/50 text-xs rounded">+{project.stack.length - 4}</span>}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-accent">
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      GitHub →
                    </a>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No projects found. Try adjusting your search.</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
