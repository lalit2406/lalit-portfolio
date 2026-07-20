import { Laptop, Code2, Building, Rocket, Gamepad, Target } from 'lucide-react';

export const experience = [
  {
    year: '2022',
    title: 'Started Programming',
    desc: 'I built my first responsive website and discovered my passion for frontend development. This experience motivated me to dive deeper into JavaScript and modern web technologies.',
    icon: Laptop,
    accentColor: 'blue',
    accentClass: 'text-blue-400 border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 hover:shadow-blue-500/5',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    year: '2023',
    title: 'Frontend Development',
    desc: 'I transitioned into component-based UI engineering by adopting React. I focused on building modular, high-speed interfaces and mastering design systems like Tailwind CSS.',
    icon: Code2,
    accentColor: 'cyan',
    accentClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 hover:shadow-cyan-500/5',
    tech: ['React', 'Vite', 'Tailwind CSS']
  },
  {
    year: '2024',
    title: 'Industrial Training',
    desc: 'I completed industrial training, working directly on real-world projects and learning modern production workflows, REST API design, and database schema structures.',
    icon: Building,
    accentColor: 'purple',
    accentClass: 'text-purple-400 border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 hover:shadow-purple-500/5',
    achievements: [
      'Completed industrial training',
      'Built multiple MERN applications',
      'Worked with REST APIs',
      'Learned production workflows'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    year: '2025',
    title: 'MERN Applications',
    desc: 'I developed several real-world MERN applications, focusing on data-driven interfaces, responsive navigation, API optimizations, and sub-second rendering speeds.',
    icon: Rocket,
    accentColor: 'orange',
    accentClass: 'text-orange-400 border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40 hover:shadow-orange-500/5',
    achievements: [
      'Developed AgriTech Platform',
      'Built Netflix Clone',
      'Created RS Education Solution',
      'Built Food Delivery Platform'
    ],
    projectLinks: [
      { id: 'agritech', title: 'AgriTech' },
      { id: 'rseducation', title: 'RS Education' },
      { id: 'food-delivery', title: 'Food Delivery' },
      { id: 'netflix-clone', title: 'Netflix Clone' }
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs']
  },
  {
    year: '2025',
    title: 'Multiplayer Game Development',
    desc: 'I architected a multiplayer card game backend using Socket.io to manage real-time synchronized game turns and player lobby matchmaking with sub-100ms latency.',
    icon: Gamepad,
    accentColor: 'green',
    accentClass: 'text-green-400 border-green-500/20 bg-green-500/5 hover:border-green-500/40 hover:shadow-green-500/5',
    achievements: [
      'Designed Socket.io architecture',
      'Built real-time multiplayer gameplay',
      'Solved synchronization challenges',
      'Managed game state efficiently'
    ],
    projectLinks: [
      { id: 'uno', title: 'UNO Multiplayer' }
    ],
    tech: ['Socket.io', 'Express', 'Node.js', 'React']
  },
  {
    year: 'Current',
    title: 'Open to Software Engineering Roles',
    desc: 'Currently focused on building scalable software, improving system design knowledge, and preparing for Software Engineer roles.',
    icon: Target,
    accentColor: 'emerald',
    accentClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:shadow-emerald-500/5',
    status: 'Open to Work',
    projectLinks: [
      { id: 'portfolio', title: 'This Portfolio' }
    ],
    tech: ['System Design', 'Algorithms', 'MERN Stack']
  }
];
