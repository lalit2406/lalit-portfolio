import { 
  Cpu, Server, Database, Code, Globe, Shield, Terminal, Layout,
  Code2, Zap, Activity, GitBranch, Send, Layers, Sparkles
} from 'lucide-react';

export const skills = [
  {
    name: 'React.js',
    icon: Cpu,
    desc: 'Builds interactive, blazing-fast web interfaces that keep users engaged.',
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/5',
  },
  {
    name: 'Node.js',
    icon: Server,
    desc: 'Powers fast-executing server-side logic that handles complex tasks instantly.',
    color: 'text-green-400 border-green-500/20 bg-green-500/5',
  },
  {
    name: 'MongoDB',
    icon: Database,
    desc: 'Manages flexible data structures capable of scaling as your userbase grows.',
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  },
  {
    name: 'Express.js',
    icon: Terminal,
    desc: 'Provides secure and lightweight API architecture for seamless backend integration.',
    color: 'text-slate-400 border-slate-500/20 bg-slate-500/5',
  },
  {
    name: 'JavaScript',
    icon: Code,
    desc: 'Enables custom interactive behaviors and rich frontend animations.',
    color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5',
  },
  {
    name: 'Tailwind CSS',
    icon: Layout,
    desc: 'Ensures beautiful, modern layouts that load rapidly without excess styling code.',
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  },
  {
    name: 'Web Security',
    icon: Shield,
    desc: 'Implements JWT logins, data validation, and encryption standard practices.',
    color: 'text-red-400 border-red-500/20 bg-red-500/5',
  },
  {
    name: 'RESTful APIs',
    icon: Globe,
    desc: 'Connects third-party services (payments, CRM, maps) to your app effortlessly.',
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
  },
];

export const techEcosystem = [
  {
    category: 'Frontend',
    accentColor: 'blue',
    skills: [
      { name: 'React', icon: Code2, color: 'text-blue-450' },
      { name: 'JavaScript', icon: Code, color: 'text-yellow-450' },
      { name: 'Tailwind CSS', icon: Sparkles, color: 'text-cyan-400' },
      { name: 'Vite', icon: Zap, color: 'text-purple-400' }
    ]
  },
  {
    category: 'Backend',
    accentColor: 'indigo',
    skills: [
      { name: 'Node.js', icon: Server, color: 'text-green-450' },
      { name: 'Express', icon: Terminal, color: 'text-slate-400' }
    ]
  },
  {
    category: 'Database',
    accentColor: 'emerald',
    skills: [
      { name: 'MongoDB', icon: Database, color: 'text-emerald-450' }
    ]
  },
  {
    category: 'Realtime',
    accentColor: 'purple',
    skills: [
      { name: 'Socket.io', icon: Activity, color: 'text-pink-400' }
    ]
  },
  {
    category: 'Tools',
    accentColor: 'slate',
    skills: [
      { name: 'Git', icon: GitBranch, color: 'text-red-400' },
      { name: 'GitHub', icon: Code2, color: 'text-white' },
      { name: 'VS Code', icon: Terminal, color: 'text-blue-450' },
      { name: 'Postman', icon: Send, color: 'text-orange-400' }
    ]
  },
  {
    category: 'Deployment',
    accentColor: 'blue',
    skills: [
      { name: 'Vercel', icon: Globe, color: 'text-white' },
      { name: 'Render', icon: Layers, color: 'text-teal-400' }
    ]
  }
];
