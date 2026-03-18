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
    description: 'Deployed full-stack web application for pet owners with live chat, AI moderation, and health interface. Built with React, Node.js, Socket.IO, FastAPI, and MongoDB. Self-hosted on Ubuntu home lab.',
    category: 'Web',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'Socket.IO', 'FastAPI', 'Mistral 7B', 'MongoDB'],
    github: 'https://github.com/Uddissh/connected-pet-ecosystem',
    status: 'deployed',
    year: 2023
  },
  {
    id: 3,
    title: 'Gesture-Based Home Automation',
    description: 'Raspberry Pi-powered gesture recognition system controlling smart home devices via Home Assistant. Uses OpenCV for hand motion detection. Home Assistant runs in Docker (no Supervisor mode).',
    category: 'IoT',
    stack: ['Raspberry Pi', 'OpenCV', 'Home Assistant', 'ESPHome', 'ESP32-CAM', 'Docker'],
    github: 'https://github.com/Uddissh/gesture-home-automation',
    status: 'deployed',
    year: 2022
  },
  {
    id: 4,
    title: 'Ubuntu Home Lab Server',
    description: 'Self-hosted infrastructure with 20+ Docker containers. Features Samba NAS (HIKVISION + Seagate drives), nginx reverse proxy, Let\'s Encrypt SSL via DuckDNS, Portainer management UI, Jitsi Meet, and custom web dashboards.',
    category: 'Infrastructure',
    stack: ['Ubuntu', 'Docker', 'Samba', 'Nginx', 'Portainer', 'Let\'s Encrypt', 'DuckDNS'],
    github: 'https://github.com/Uddissh/home-lab-server',
    status: 'active',
    year: 2022
  },
  {
    id: 5,
    title: 'FPV Drone (Custom Build)',
    description: 'Custom-built FPV racing drone with GT2205 2300KV brushless motors, SpeedyBee ESC, and F405 V3 Flight Controller. Full build from component selection to PID tuning and flight testing.',
    category: 'Hardware',
    stack: ['GT2205 Motors', 'SpeedyBee ESC', 'F405 V3 FC', 'FlySky RX'],
    github: 'https://github.com/Uddissh/fpv-drone',
    status: 'completed',
    year: 2022
  },
  {
    id: 6,
    title: 'ESP8266 Wi-Fi RC Car (Mecanum Wheels)',
    description: 'Wi-Fi controlled RC car with mecanum wheel drive for omnidirectional movement. Features custom web-based control interface over ESP8266.',
    category: 'Robotics',
    stack: ['ESP8266', 'L298N', 'Arduino', 'HTML/CSS/JS'],
    github: 'https://github.com/Uddissh/wifi-rc-car',
    status: 'completed',
    year: 2021
  },
  {
    id: 7,
    title: 'ESP32 Autonomous Sensor Car',
    description: 'Fully autonomous sensor-fusion robot using ESP32. Equipped with DHT11 (temperature/humidity), HC-SR04 (ultrasonic), soil moisture sensor, and L298N motor driver for environmental awareness and navigation.',
    category: 'Robotics',
    stack: ['ESP32', 'DHT11', 'HC-SR04', 'L298N', 'Arduino C++'],
    github: 'https://github.com/Uddissh/autonomous-sensor-car',
    status: 'active',
    year: 2021
  },
  {
    id: 8,
    title: 'Raspberry Pi Game Server (Minecraft)',
    description: 'Raspberry Pi 5-hosted Minecraft Java + Bedrock server with cross-play enabled via GeyserMC/Floodgate. Uses Tailscale overlay network for global LAN-style play.',
    category: 'Gaming',
    stack: ['Raspberry Pi 5', 'Java', 'GeyserMC', 'Floodgate', 'Tailscale'],
    github: 'https://github.com/Uddissh/minecraft-pi-server',
    status: 'running',
    year: 2023
  },
  {
    id: 9,
    title: 'Headless Cybersecurity Lab',
    description: 'Dedicated Kali Linux / BlackArch dual-boot environment on SATA HDD, accessed entirely via SSH from Windows. Used for penetration testing, CTF practice, and network security research. No GUI — pure terminal discipline.',
    category: 'Security',
    stack: ['Kali Linux', 'BlackArch', 'SSH', 'Bash'],
    github: 'https://github.com/Uddissh/cybersecurity-lab',
    status: 'active',
    year: 2021
  },
  {
    id: 10,
    title: 'Custom RC Car PCB (EasyEDA)',
    description: 'Designed custom double-layer PCB in EasyEDA integrating Arduino Uno R3, motor driver, and PPM encoder for fully custom RC car transmitter-receiver system. Also built DIY 2-channel RC transmitter from scratch.',
    category: 'Hardware',
    stack: ['EasyEDA', 'Arduino Uno R3', 'PPM Encoder', 'Motor Driver'],
    github: 'https://github.com/Uddissh/custom-rc-pcb',
    status: 'completed',
    year: 2020
  }
];

export default projects;
