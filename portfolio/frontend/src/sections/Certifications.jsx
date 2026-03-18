import { motion } from 'framer-motion'

const certifications = [
  {
    name: 'ISC Class 12',
    issuer: 'City Montessori School, Lucknow',
    year: 2024,
    description: 'Indian School Certificate curriculum focus on CS, Math, Physics'
  },
  {
    name: 'Robotics Club Mentor',
    issuer: 'City Montessori School',
    year: 2023,
    description: 'Teaching and mentoring juniors in robotics and embedded systems'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="space-y-6 mt-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-muted p-6 rounded-lg border border-accent"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-primary">{cert.name}</h3>
                <span className="text-sm text-muted-foreground">{cert.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
              <p className="text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
