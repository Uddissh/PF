import { motion } from 'framer-motion'

const skillCategories = {
  'Hardware & Embedded': [
    'ESP8266, ESP32, ESP32-CAM',
    'Arduino Uno R3, Nano, Pico',
    'Raspberry Pi (3, 4, 5)',
    'ESP-NOW Wireless Mesh',
    'FlySky RC Systems',
    'L298N Motor Drivers',
    'DHT11, HC-SR04, Soil Moisture',
    'EasyEDA PCB Design',
    'GT2205 2300KV Brushless Motors',
    'SpeedyBee ESC, F405 V3 FC',
    'FPV Drone Components',
    'Mecanum Wheel Systems'
  ],
  'Software & Full Stack': [
    'Python, JavaScript/TypeScript',
    'C/C++ (Arduino)',
    'React, Tailwind CSS, Framer Motion',
    'Node.js, Express, FastAPI, Flask',
    'Socket.IO (Real-time)',
    'Mistral 7B, OpenCV',
    'MongoDB',
    'Docker, Nginx, Certbot',
    'DuckDNS, Tailscale, SSH',
    'Portainer, Samba NAS'
  ],
  'DevOps & Infrastructure': [
    'Ubuntu Linux',
    'Docker & Docker Compose',
    'nginx Reverse Proxy',
    'Let\'s Encrypt SSL/TLS',
    'Portainer Container Management',
    'Samba NAS Setup',
    'DuckDNS Dynamic DNS',
    'Tailscale VPN'
  ],
  'Security': [
    'Kali Linux',
    'BlackArch',
    'Penetration Testing',
    'CTF Practice',
    'Headless SSH Access',
    'Network Security'
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Skills & Technical Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-subtitle"
        >
          Comprehensive expertise spanning hardware, embedded systems, 
          full-stack development, and security research.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-muted p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: catIndex * 0.1 + skillIndex * 0.03 
                    }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
