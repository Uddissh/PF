import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(helmet())
app.use(express.json({ limit: '10mb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: { error: 'Too many requests, please try again later.' }
})

// MongoDB connection
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log('MongoDB connected')
    }
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
  }
}
connectDB()

// Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

// Projects data
const projects = [
  {
    id: 1,
    title: 'SHARK Rover — Smart Hybrid Autonomous Rover Kit',
    description: 'Modular multi-bot home security architecture with Mother Bot and Swarm Bots using ESP-NOW for communication. Features OpenCV-based AI detection and WhatsApp alerts. Target: IIT Bombay tech competitions.',
    category: 'Robotics',
    stack: ['Raspberry Pi', 'ESP-NOW', 'OpenCV', 'Python', 'Web Dashboard'],
    github: 'https://github.com/Uddissh/shark-rover',
    status: 'active',
    year: 2023
  },
  {
    id: 2,
    title: 'Connected Pet Ecosystem',
    description: 'Deployed full-stack web application for pet owners with live chat, AI moderation, and health interface. Built with React, Node.js, Socket.IO, FastAPI, and MongoDB.',
    category: 'Web',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Socket.IO', 'FastAPI', 'Mistral 7B', 'MongoDB'],
    github: 'https://github.com/Uddissh/connected-pet-ecosystem',
    status: 'deployed',
    year: 2023
  },
  {
    id: 3,
    title: 'Gesture-Based Home Automation',
    description: 'Raspberry Pi-powered gesture recognition system controlling smart home devices via Home Assistant. Uses OpenCV for hand motion detection.',
    category: 'IoT',
    stack: ['Raspberry Pi', 'OpenCV', 'Home Assistant', 'ESPHome', 'ESP32-CAM', 'Docker'],
    github: 'https://github.com/Uddissh/gesture-home-automation',
    status: 'deployed',
    year: 2022
  },
  {
    id: 4,
    title: 'Ubuntu Home Lab Server',
    description: 'Self-hosted infrastructure with 20+ Docker containers. Features Samba NAS, nginx reverse proxy, Let\'s Encrypt SSL via DuckDNS, Portainer management UI.',
    category: 'Infrastructure',
    stack: ['Ubuntu', 'Docker', 'Samba', 'Nginx', 'Portainer', 'Let\'s Encrypt', 'DuckDNS'],
    github: 'https://github.com/Uddissh/home-lab-server',
    status: 'active',
    year: 2022
  },
  {
    id: 5,
    title: 'FPV Drone (Custom Build)',
    description: 'Custom-built FPV racing drone with GT2205 2300KV brushless motors, SpeedyBee ESC, and F405 V3 Flight Controller.',
    category: 'Hardware',
    stack: ['GT2205 Motors', 'SpeedyBee ESC', 'F405 V3 FC', 'FlySky RX'],
    github: 'https://github.com/Uddissh/fpv-drone',
    status: 'completed',
    year: 2022
  },
  {
    id: 6,
    title: 'ESP8266 Wi-Fi RC Car (Mecanum Wheels)',
    description: 'Wi-Fi controlled RC car with mecanum wheel drive for omnidirectional movement. Custom web-based control interface.',
    category: 'Robotics',
    stack: ['ESP8266', 'L298N', 'Arduino', 'HTML/CSS/JS'],
    github: 'https://github.com/Uddissh/wifi-rc-car',
    status: 'completed',
    year: 2021
  },
  {
    id: 7,
    title: 'ESP32 Autonomous Sensor Car',
    description: 'Fully autonomous sensor-fusion robot using ESP32. Equipped with DHT11, HC-SR04, soil moisture sensor, and L298N motor driver.',
    category: 'Robotics',
    stack: ['ESP32', 'DHT11', 'HC-SR04', 'L298N', 'Arduino C++'],
    github: 'https://github.com/Uddissh/autonomous-sensor-car',
    status: 'active',
    year: 2021
  },
  {
    id: 8,
    title: 'Raspberry Pi Game Server (Minecraft)',
    description: 'Raspberry Pi 5-hosted Minecraft Java + Bedrock server with cross-play enabled via GeyserMC. Uses Tailscale for global play.',
    category: 'Gaming',
    stack: ['Raspberry Pi 5', 'Java', 'GeyserMC', 'Floodgate', 'Tailscale'],
    github: 'https://github.com/Uddissh/minecraft-pi-server',
    status: 'running',
    year: 2023
  },
  {
    id: 9,
    title: 'Headless Cybersecurity Lab',
    description: 'Dedicated Kali Linux / BlackArch dual-boot environment on SATA HDD, accessed via SSH. Pure terminal discipline.',
    category: 'Security',
    stack: ['Kali Linux', 'BlackArch', 'SSH', 'Bash'],
    github: 'https://github.com/Uddissh/cybersecurity-lab',
    status: 'active',
    year: 2021
  },
  {
    id: 10,
    title: 'Custom RC Car PCB (EasyEDA)',
    description: 'Designed custom double-layer PCB in EasyEDA integrating Arduino Uno R3, motor driver, and PPM encoder.',
    category: 'Hardware',
    stack: ['EasyEDA', 'Arduino Uno R3', 'PPM Encoder', 'Motor Driver'],
    github: 'https://github.com/Uddissh/custom-rc-pcb',
    status: 'completed',
    year: 2020
  }
]

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/uptime', (req, res) => {
  res.json({ 
    uptime: process.uptime(), 
    timestamp: new Date().toISOString() 
  })
})

app.get('/api/projects', (req, res) => {
  const { category } = req.query
  if (category && category !== 'All') {
    const filtered = projects.filter(p => p.category === category)
    return res.json(filtered)
  }
  res.json(projects)
})

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id))
  if (!project) {
    return res.status(404).json({ error: 'Project not found' })
  }
  res.json(project)
})

app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    if (message.length < 20) {
      return res.status(400).json({ error: 'Message must be at least 20 characters' })
    }

    // Save to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      const newContact = new Contact({ name, email, message })
      await newContact.save()
    }

    // Send email if configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      })
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' })
  } catch (err) {
    console.error('Contact error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
