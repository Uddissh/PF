import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: 2020,
    title: 'Started with Arduino',
    description: 'Built first RC car with Arduino Uno and L298N motor driver. Began learning electronics and embedded programming.'
  },
  {
    year: 2021,
    title: 'ESP32 Autonomous Sensor Car',
    description: 'Created autonomous robot with multiple sensors (DHT11, HC-SR04, soil moisture) for environmental awareness and navigation.'
  },
  {
    year: 2022,
    title: 'Home Lab Server Setup',
    description: 'Deployed Ubuntu server with Docker, Samba NAS, Home Assistant, and nginx. Started building home automation infrastructure.'
  },
  {
    year: 2022,
    title: 'Gesture-Based Home Automation',
    description: 'Built Raspberry Pi gesture recognition system using OpenCV to control smart home devices via Home Assistant.'
  },
  {
    year: 2023,
    title: 'SHARK Rover Development',
    description: 'Started development of multi-bot home security system with ESP-NOW mesh networking and AI-powered detection.'
  },
  {
    year: 2023,
    title: 'Connected Pet Ecosystem Launch',
    description: 'Released full-stack web application for pet owners with AI moderation, real-time updates, and MongoDB backend.'
  }
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Timeline
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Chronological progression of projects and learning milestones.
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-muted p-4 rounded-lg">
                    <span className="text-primary font-bold text-lg">{event.year}</span>
                    <h3 className="font-bold mt-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
