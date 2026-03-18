import { motion } from 'framer-motion'

const interests = [
  'Robotics',
  'Embedded Systems',
  'AI/ML',
  'Cybersecurity',
  'Full-Stack Development',
  'IoT',
  'Home Automation',
  'PCB Design'
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Class 12 ISC student at City Montessori School, Lucknow. Passionate about 
          hardware-first, software-complete engineering. Active mentor at the school's 
          robotics club, helping juniors build real systems.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <InfoCard
            title="Current Status"
            content="Class 12 ISC Student"
            subtitle="City Montessori School, Lucknow"
            delay={0.2}
          />
          <InfoCard
            title="Location"
            content="Lucknow"
            subtitle="Uttar Pradesh, India"
            delay={0.3}
          />
          <InfoCard
            title="Role"
            content="Robotics Club Mentor"
            subtitle="Teaching juniors"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-bold mb-4 text-center">Core Interests</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                className="px-4 py-2 bg-accent rounded-full text-sm"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ title, content, subtitle, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-muted p-6 rounded-lg"
    >
      <h3 className="text-primary font-medium mb-1">{title}</h3>
      <p className="text-foreground">{content}</p>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </motion.div>
  )
}
