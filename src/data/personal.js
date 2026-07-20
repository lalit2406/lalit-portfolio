import { Search, Compass, Cpu, CheckCircle, Ship, Target, Users, Zap, Smartphone, Code2, Sparkles } from 'lucide-react';

export const personal = {
  name: 'Lalit',
  firstName: 'Lalit',
  title: 'Software Engineer & Full Stack Developer',
  role: 'Software Engineer & Full Stack Developer',
  tagline: 'Software Engineer & Full Stack Developer',
  introBadge: 'Open to Software Engineering Roles • Internships • Freelance Opportunities',
  heroDescription: 'I build modern, scalable and user-focused web applications using React, Node.js and the MERN Stack. I\'m passionate about solving real-world problems through clean architecture, intuitive UI, and high-performance web experiences.',
  
  heroConfig: {
    greeting: "Hello 👋",
    name: "Lalit",
    title: "Software Engineer",
    subtitle: "& Full Stack Developer",
    description: "I design and develop modern web applications using React, Node.js and the MERN Stack. I enjoy solving real-world problems through clean architecture, scalable systems and intuitive user experiences.",
    stats: [
      { label: "Projects", value: "20+" },
      { label: "Technologies", value: "12+" },
      { label: "Current Status", value: "Open to Work" }
    ],
    identityPanel: {
      name: "Lalit",
      title: "Software Engineer",
      location: "Delhi NCR",
      currentFocus: "Building scalable MERN applications",
      latestProject: {
        title: "UNO Multiplayer",
        link: "#projects"
      },
      techStack: ["React", "Node", "MongoDB", "Express", "Tailwind", "JavaScript"],
      availability: [
        "Software Engineering Roles",
        "Internships",
        "Freelance Projects"
      ]
    },
    techTicker: [
      "React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS", "Tailwind", "Git", "GitHub", "Vercel", "Render"
    ]
  },

  
  about: {
    philosophyLabel: 'My Philosophy',
    philosophyTitle: 'Bridging the gap between clean code and business value.',
    paragraphs: [
      "I'm Lalit, a React & MERN Stack Developer. But if you're a business owner, you don't just need a coder—you need someone who understands how to build platforms that solve workflows, engage visitors, and increase conversions.",
      "Over the past 3+ years, I've worked with startups, entrepreneurs, and local businesses to architect secure databases, build responsive user interfaces, and deliver software that works on day one. I specialize in turning complex designs into high-fidelity web products.",
      "My focus is simple: **scalability, performance, and clear user experiences**. I write clean, documented code and keep communication open and direct throughout our working relationship."
    ],
    checkmarks: [
      'Responsive layouts for all screens',
      'SEO optimized for organic traffic',
      'Robust RESTful & WebSockets APIs',
      'Integrated unit & integration testing'
    ],
    highlights: [
      {
        title: 'Business-First Architecture',
        desc: 'I structure databases and clean code frameworks to support your growth, not just write lines of code.',
        icon: Target
      },
      {
        title: 'Seamless Integrations',
        desc: 'Connect payment gateways (Stripe), email providers, social networks, and CRM platforms seamlessly.',
        icon: Zap
      },
      {
        title: 'Startup & Enterprise Focus',
        desc: 'Whether bootstrapping a new SaaS app or refining a client agricultural database, I deliver high-performance applications.',
        icon: Users
      }
    ],
    stats: [
      { label: 'Successful Projects', value: '20+' },
      { label: 'Client Satisfaction', value: '100%' },
      { label: 'Average Page Speed', value: '< 1s' },
      { label: 'Years Experience', value: '3+' }
    ]
  },
  
  whyHireMe: {
    title: 'Why hire me for your next project?',
    desc: 'I focus on the deliverables that impact your bottom line: traffic, speed, reliability, and user retention. My process is designed to save you time and maximize your budget.',
    stats: [
      {
        value: '20+',
        label: 'Completed Projects',
        desc: 'Delivered on-time, matching design files exactly.'
      },
      {
        value: '100%',
        label: 'Responsive & Cross-Device',
        desc: 'Tested on iOS, Android, macOS, and Windows.'
      }
    ]
  },
  
  loaderConfig: {
    statusTexts: [
      'Curating layout...',
      'Optimizing components...',
      'Polishing glassmorphism...',
      'Readying client experience...'
    ]
  },
  
  contactConfig: {
    title: 'Let\'s build something extraordinary together.',
    desc: 'Ready to scale your application, optimize load times, or design a responsive portal? Outline your project scope and budget to get a custom roadmap and estimate.',
    projectTypes: [
      'MERN Development',
      'Frontend Development',
      'Website Optimization',
      'UI/UX Consulting'
    ],
    budgetTiers: [
      '< $1,000',
      '$1,000 - $3,000',
      '$3,000 - $5,000',
      '$5,050+'
    ]
  }
};

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    subtitle: 'Understanding Goals & Audits',
    desc: 'We start by aligning on your product vision, analyzing competitors, auditing any existing software, and defining core problems to solve.',
    icon: Search,
    color: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
  },
  {
    step: '02',
    title: 'Planning',
    subtitle: 'UX Wireframing & Tech Stack',
    desc: 'I map out the database models, draft API structures, create high-fidelity UI layout schemas, and set clear deadlines for transparent milestones.',
    icon: Compass,
    color: 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5',
  },
  {
    step: '03',
    title: 'Development',
    subtitle: 'Writing Modular Production Code',
    desc: 'I build your platform using React and Node.js. Code is written in clean, reusable files with strict security protocols and responsive layouts.',
    icon: Cpu,
    color: 'border-violet-500/20 text-violet-400 bg-violet-500/5',
  },
  {
    step: '04',
    title: 'Testing',
    subtitle: 'Lighthouse audits & QA Checks',
    desc: 'Every endpoint is verified, databases undergo stress-testing, and layouts are reviewed across multiple browsers, tablets, and phones.',
    icon: CheckCircle,
    color: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
  },
  {
    step: '05',
    title: 'Delivery',
    subtitle: 'Vercel Deployment & Handover',
    desc: 'I launch your live product on Vercel/AWS, hand over the organized GitHub repository, and provide 30 days of direct post-launch support.',
    icon: Ship,
    color: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
  },
];

export const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Agrisync Solutions',
    avatarText: 'SJ',
    text: 'Lalit rebuilt our tracking dashboard from scratch. He turned a complex, slow database into a clean, interactive React interface that updates in sub-seconds. Our farmers noticed the speed difference immediately.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, BiteSpeed Delivery',
    avatarText: 'MC',
    text: 'Extremely professional and highly communicative. Lalit integrated our payment gateways and structured our cart validation code perfectly. He delivered ahead of our scheduled date. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Design Lead, Voxel Studio',
    avatarText: 'ER',
    text: 'Lalit translated our Figma files into pixel-perfect React code. The Framer Motion animations are fluid and exactly matching our prototypes. He is our go-to developer for premium web clients now.',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'How long does a typical website take to complete?',
    a: 'A custom landing page or portfolio takes 1–2 weeks. A complete full-stack web application (MERN stack with database and API integration) typically takes 3–6 weeks depending on the features and design complexity.',
  },
  {
    q: 'Can you redesign my existing application or website?',
    a: 'Yes. I can audit your current codebase, optimize your database queries, and recreate your interface using React and Tailwind CSS. We can do a partial rewrite or a complete system overhaul.',
  },
  {
    q: 'Do you provide the source code after delivery?',
    a: 'Absolutely. All source code is uploaded to a private GitHub repository, and full ownership is transferred to you upon project completion. The code is documented so any developer can maintain it in the future.',
  },
  {
    q: 'What is the MERN stack and why is it good for my business?',
    a: 'MERN stands for MongoDB, Express, React, and Node.js. It is a modern, unified JavaScript architecture. Using JavaScript end-to-end ensures faster loading times, cheaper hosting costs, and easier maintenance compared to legacy systems.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, every project includes 30 days of free post-launch support. This covers bug fixes, minor text/styling changes, and server monitoring. Extended monthly maintenance plans are also available if needed.',
  },
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Journey', href: '#experience' },
  { name: 'Principles', href: '#principles' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export const benefits = [
  {
    title: '100% Mobile Responsive',
    desc: 'Over 55% of all web traffic is mobile. I guarantee your website looks and works flawlessly on every smartphone, tablet, and desktop.',
    icon: Smartphone,
    color: 'text-blue-400'
  },
  {
    title: 'Lightning Fast Load Speeds',
    desc: 'A 1-second delay in page load can drop conversions by 7%. I write optimized code and configure caching to ensure sub-second loads.',
    icon: Zap,
    color: 'text-amber-400'
  },
  {
    title: 'Clean, Maintainable Code',
    desc: 'No spaghetti code. Everything is structured in modular React files with detailed comments, making future additions cheap and easy.',
    icon: Code2,
    color: 'text-violet-400'
  },
  {
    title: 'SEO Friendly Architecture',
    desc: 'I structure your DOM elements, heading hierarchies, meta tags, and site speeds so Google can easily index and rank your pages.',
    icon: Search,
    color: 'text-emerald-400'
  },
  {
    title: 'Modern Premium UI',
    desc: 'Taking design cues from Linear, Stripe, and Apple, I create interfaces that establish immediate trust with your prospects.',
    icon: Sparkles,
    color: 'text-rose-400'
  },
  {
    title: 'Milestone-Based Delivery',
    desc: 'Never wonder about your project status. You receive regular updates and access to a staging link to review ongoing progress.',
    icon: Compass,
    color: 'text-cyan-400'
  }
];

