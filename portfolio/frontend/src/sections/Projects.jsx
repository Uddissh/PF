import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'

const categories = ['All', 'Robotics', 'Web', 'IoT', 'Infrastructure', 'Hardware', 'Security', 'Gaming']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          A selection of projects showcasing robotics, embedded systems, 
          full-stack development, and infrastructure.
        </motion.p>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category
                  ? 'bg-primary text-black'
                  : 'bg-accent hover:bg-accent/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-muted rounded-lg p-6 card-hover"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <StatusBadge status={project.status} />
                </div>

                <h3 className="text-lg font-bold mb-2 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/50 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-1 bg-accent/50 text-xs rounded">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-accent">
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

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
