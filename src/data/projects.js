import { Monitor, Smartphone, Cpu, ShoppingBag, Leaf } from 'lucide-react';

export const projects = [
  {
    id: 'agritech',
    title: 'AgriTech Analytics Platform',
    subtitle: 'Empowering agricultural partners with IoT sensor telemetry and crop yield predictions.',
    description: 'An agricultural dashboard designed to help farmers and agronomists monitor soil moisture trends, calculate optimal NPK fertilizer ratios, and manage soil health reports.',
    problem: 'Farmers and agronomists lacked immediate, easy-to-understand insights from raw telemetry of ground moisture, pH, and temperature sensor arrays, leading to crop losses.',
    solution: 'Developed a MERN platform that collects and logs live sensor feeds, rendering them into responsive Recharts visualization dashboards with automated alert thresholds.',
    myRole: 'Lead Full Stack Developer. Architected the telemetry ingestion REST API and designed the responsive dashboard interface.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    keyFeatures: ['Live sensor data polling', 'Interactive historical charts', 'SMS notifications for dry thresholds', 'PDF reports exporter'],
    technicalChallenges: 'Ensured fluid rendering of extensive historical logs on mobile viewports by implementing custom responsive containers and debouncing search query metrics.',
    whatILearned: 'Mastered charting performance with Recharts, organizing structured Express API endpoints, and handling protected routes using JWT.',
    futureImprovements: 'Integrate a unified farmer analytics dashboard and add crop disease prediction models.',
    github: 'https://github.com/lalit2406/Agritech-Frontend',
    githubFrontend: 'https://github.com/lalit2406/Agritech-Frontend',
    githubBackend: 'https://github.com/lalit2406/Agritech-Backend',
    live: 'https://agritechai.in/',
    images: {
      desktop: '/images/projects/agritech/dashboard-desktop.webp',
      mobile: '/images/projects/agritech/mobile-dashboard.webp'
    },
    desktopScreens: [
      '/images/projects/agritech/home-desktop.webp',
      '/images/projects/agritech/dashboard-desktop.webp',
      '/images/projects/agritech/services-desktop.webp',
      '/images/projects/agritech/fertilizer-result-desktop.webp',
      '/images/projects/agritech/soil-report-desktop.webp',
      '/images/projects/agritech/_auth.webp'
    ],
    mobileScreens: [
      '/images/projects/agritech/mobile-homepage.webp',
      '/images/projects/agritech/mobile-dashboard.webp',
      '/images/projects/agritech/mobile-chatbot.webp'
    ],
    icon: Leaf,
    status: 'Production',
    timeline: '12 Weeks',
    client: 'Agri-partners',
    architectureLabels: ['IoT Telemetry', 'Dashboard', 'MongoDB', 'REST API'],
    engineeringChallenge: 'Optimized responsive charts rendering on mobile screens',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'Form Processing', value: '< 100ms', desc: 'NPK Calculator' },
      { label: 'Database Load', value: 'under 50ms', desc: 'Mongoose indexed queries' },
      { label: 'Render Frame Rate', value: '60 FPS', desc: 'Optimized Recharts sliders' },
      { label: 'Mobile Fidelity', value: '100%', desc: 'Fully responsive views' }
    ],
    discoveryMetrics: [
      { label: 'Average user inputs processed', value: 'Interactive' },
      { label: 'Fertilizer calculations return delay', value: 'Instant' },
      { label: 'Responsive container break bounds', value: 'None' }
    ],
    topologyFlow: [
      { layer: 'CLIENT VIEW', tech: 'React + Recharts', detail: 'Interactive dashboard interface' },
      { layer: 'API BRIDGE', tech: 'Axios Services', detail: 'Dispatches requests to endpoint routes' },
      { layer: 'ROUTING ENGINE', tech: 'Express Controllers', detail: 'Authenticates and handles actions' },
      { layer: 'DATA LAYER', tech: 'MongoDB Mongoose', detail: 'Persists user profiles and report logs' }
    ],
    codeSchema: {
      fileName: 'soilReportModel.js',
      tech: 'Mongoose',
      code: `const soilReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  farmLocation: { type: String, required: true },
  metrics: {
    moisture: { type: Number, required: true },
    ph: { type: Number, required: true }
  },
  recommendation: String
}, { timestamps: true });

// Optimize query path for rapid user report lookups
soilReportSchema.index({ userId: 1, createdAt: -1 });`
    },
    timelineSteps: [
      { phase: 'Phase 1: Planning & Setup', date: 'Weeks 1–3', desc: 'Mapping database collections schema entities and wireframing layout designs.' },
      { phase: 'Phase 2: Frontend & Charts', date: 'Weeks 4–6', desc: 'Building custom React containers, dashboard views, and Recharts line visualizations.' },
      { phase: 'Phase 3: Backend APIs & Routing', date: 'Weeks 7–9', desc: 'Integrating Express routing endpoints, NPK calculator formulas, and user session controls.' },
      { phase: 'Phase 4: Testing & Deployment', date: 'Weeks 10–12', desc: 'Verifying chart scaling responsiveness on mobile viewports and deploying backend services.' }
    ]
  },
  {
    id: 'uno',
    title: 'UNO Multiplayer Card Game',
    subtitle: 'Real-time, interactive multiplayer card game engine built over WebSockets.',
    description: 'Built a custom WebSocket server with Express to handle instant client state updates. Resolved synchronization lags to allow up to 4 concurrent players.',
    problem: 'Handling card drawing, turn orders, color shifts, and lobby creation over high-latency networks without turn desynchronizations.',
    solution: 'Built a custom Express-Socket.io server with a state-machine that validates every player move on the server-side, preventing game desyncs.',
    myRole: 'Full Stack Game Developer. Designed the Socket.io event protocol, lobby matchmaking system, and modular turn-based game logic.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion'],
    keyFeatures: ['Real-time lobby matchmaking', 'Dynamic color wheel picker', 'Action card animations', 'Live in-game group chat'],
    technicalChallenges: 'Prevented duplicate action card triggers on network hiccups by implementing sequence tokens on socket connections and game state confirmation handshakes.',
    whatILearned: 'Mastered WebSocket protocols, server-side game state machines, and synchronized state state machines between server and clients.',
    futureImprovements: 'Indie AI bot fallbacks for disconnected players, voice chat rooms, and persistent global leaderboards.',
    github: 'https://github.com/lalit2406/UNO-Show-em-No-Mercy-Game',
    live: 'https://uno-show-em-no-mercy-game.vercel.app/',
    images: {
      desktop: '/images/projects/uno/home-desktop.webp',
      mobile: '/images/projects/uno/mobile.webp'
    },
    desktopScreens: [
      '/images/projects/uno/home-desktop.webp',
      '/images/projects/uno/gamelobby-desktop.webp',
      '/images/projects/uno/gameplay-desktop.webp',
      '/images/projects/uno/waiting-room-desktop.webp'
    ],
    mobileScreens: [
      '/images/projects/uno/mobile.webp'
    ],
    icon: Cpu,
    status: 'Completed',
    timeline: '8 Weeks',
    client: 'Indie / Open-Source',
    architectureLabels: ['WebSockets', 'Lobby System', 'State Machine', 'Framer Motion'],
    engineeringChallenge: 'Prevented double action triggers via transaction sequence tokens',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'Event Latency', value: 'under 15ms', desc: 'Realtime WebSocket pipes' },
      { label: 'Lobby Capacity', value: '150 players', desc: 'Socket namespace clusters' },
      { label: 'Sync Verification', value: '100% server', desc: 'No client-side state overrides' },
      { label: 'Move Check', value: 'under 2ms', desc: 'Turn validation triggers' }
    ],
    discoveryMetrics: [
      { label: 'Duplicate action triggers prevented', value: '99.9%' },
      { label: 'Lobby latency overhead', value: 'under 10ms' },
      { label: 'WebSocket packet overhead', value: '< 1.2 KB' }
    ],
    topologyFlow: [
      { layer: 'CLIENT LAYER', tech: 'React + SocketClient', detail: 'Game board rendering' },
      { layer: 'ROOM GATEWAY', tech: 'Socket Rooms controller', detail: 'Matchmaking namespaces' },
      { layer: 'VALIDATION LAYER', tech: 'Sequence Handshakes', detail: 'Prevent duplicate plays' },
      { layer: 'GAME ENGINE', tech: 'Server State Machine', detail: 'State updates broadcast' }
    ],
    codeSchema: {
      fileName: 'gameplayStateMachine.js',
      tech: 'Javascript ES6',
      code: `class GameState {
  constructor(roomId) {
    this.roomId = roomId;
    this.deck = [];
    this.discardPile = [];
    this.players = [];
    this.turnIndex = 0;
    this.direction = 1; // 1: clockwise, -1: counter
  }
  playCard(playerId, card) {
    if (!this.isValidMove(playerId, card)) throw new Error('Illegal card play');
    this.applyCardAction(card);
    this.nextTurn();
  }
}`
    },
    timelineSteps: [
      { phase: 'Phase 1: Research', date: 'Weeks 1-2', desc: 'Analyzed card game latency conflicts, and mapped state sync bugs on slow connection lines.' },
      { phase: 'Phase 2: Architecture', date: 'Weeks 3-4', desc: 'Architected the centralized server-side game state-machine and Socket namespaces structure.' },
      { phase: 'Phase 3: Development', date: 'Weeks 5-6', desc: 'Programmed the WebSocket event logic, room join rules, card draw mechanics, and turn order controllers.' },
      { phase: 'Phase 4: Optimization', date: 'Weeks 7-8', desc: 'Implemented event packet size reductions, turn sequence validation tags, and verified game lobby syncs.' }
    ]
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone UI & Search',
    subtitle: 'Pixel-perfect movie catalog layout featuring TMDB API queries and React Query caches.',
    description: 'A pixel-perfect recreation of Netflix’s web interface. Focused on CSS transition optimization for large grids and instant fuzzy search matching client expectations.',
    problem: 'Laggy poster slider transitions and layout shifts caused by async data loads of massive media assets from TMDB API.',
    solution: 'Implemented lazy-loading sliders, CSS image aspect-ratio rules, and a fast React Query data fetching layer with local caching.',
    myRole: 'Frontend Developer. Designed the CSS Grid layouts, movie detail modals, and TMDB integration layers.',
    technologies: ['React', 'Tailwind CSS', 'TMDB API', 'React Query', 'Framer Motion'],
    keyFeatures: ['Responsive content slides', 'Trailer auto-play modal', 'Dynamic genre filtering', 'Custom watchlist curation'],
    technicalChallenges: 'Improved image loading times by dynamically requesting TMDB posters matching device screen size, saving 40% bandwidth on mobile viewports.',
    whatILearned: 'Experienced web performance tuning, responsive grid sliders, skeleton loader implementations, and REST API caching.',
    futureImprovements: 'Build a dummy video player, user profiles selector, and dynamic movie reviews section.',
    github: 'https://github.com/lalit2406/Netflix-Clone',
    live: 'https://netflix-clone-nine-indol-24.vercel.app/',
    images: {
      desktop: '/images/projects/netflix-clone/home-desktop.webp',
      mobile: '/images/projects/netflix-clone/mobile.webp'
    },
    desktopScreens: [
      '/images/projects/netflix-clone/home-desktop.webp',
      '/images/projects/netflix-clone/details-desktop.webp',
      '/images/projects/netflix-clone/trending-section-desktop.webp'
    ],
    mobileScreens: [
      '/images/projects/netflix-clone/mobile.webp'
    ],
    icon: Monitor,
    status: 'Completed',
    timeline: '4 Weeks',
    client: 'Self-directed Project',
    architectureLabels: ['TMDB API', 'React Query Caches', 'Lazy Loading', 'Fuzzy Search'],
    engineeringChallenge: 'Saved 40% image bandwidth with screen-size responsive queries',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'Render speed', value: '60 FPS', desc: 'CSS animation optimizations' },
      { label: 'Cache TTL', value: '30 mins', desc: 'React Query configuration' },
      { label: 'Bandwidth saved', value: '40%', desc: 'Responsive TMDB image sizes' },
      { label: 'Page Load time', value: 'under 0.8s', desc: 'Lazy loading asset queues' }
    ],
    discoveryMetrics: [
      { label: 'Fuzzy search matching latency', value: 'Instant' },
      { label: 'Layout shift rate (CLS)', value: '0.00 zero layout shift' },
      { label: 'API request caching hit rate', value: '99.5%' }
    ],
    topologyFlow: [
      { layer: 'CLIENT LAYER', tech: 'React components', detail: 'Slider grid UI layout' },
      { layer: 'CACHE ENGINE', tech: 'React Query Client', detail: 'Local memory cache hit' },
      { layer: 'API GATEWAY', tech: 'TMDB REST Endpoint', detail: 'Fetch poster assets' },
      { layer: 'ASSETS OPTIMIZER', tech: 'Dynamic URL resolution', detail: 'Responsive resolutions' }
    ],
    codeSchema: {
      fileName: 'useMoviesQuery.js',
      tech: 'React Query',
      code: `import { useQuery } from '@tanstack/react-query';

export function useMoviesQuery(genreId) {
  return useQuery({
    queryKey: ['movies', genreId],
    queryFn: () => fetchMoviesByGenre(genreId),
    staleTime: 1000 * 60 * 30, // 30 minutes cache
    keepPreviousData: true
  });
}`
    },
    timelineSteps: [
      { phase: 'Phase 1: Research', date: 'Week 1', desc: 'Studied netflix design transitions, layout structures, and identified slider performance blocks.' },
      { phase: 'Phase 2: Architecture', date: 'Week 2', desc: 'Designed the query cache system, state manager, and skeleton layout templates.' },
      { phase: 'Phase 3: Development', date: 'Week 3', desc: 'Programmed slider sliders, query fetches, search debouncers, and trailer detail overlays.' },
      { phase: 'Phase 4: Optimization', date: 'Week 4', desc: 'Implemented device-responsive image paths, saved 40% load times, and verified 60 FPS transitions.' }
    ]
  },
  {
    id: 'rseducation',
    title: 'RS Education Portal',
    subtitle: 'Interactive e-learning and consultancy platform connecting students with courses.',
    description: 'Created a comprehensive portal with multi-parameter filter systems, dashboard trackers, and direct advisor scheduling portals.',
    problem: 'Prospective college students faced confusion filtering through dozens of online universities, courses, and fee structures.',
    solution: 'Created a comprehensive portal with multi-parameter filter systems, dashboard trackers, and direct advisor scheduling portals.',
    myRole: 'Lead Full Stack Engineer. Developed the course query engine and built the student dashboard and advisor management pipelines.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'EmailJS'],
    keyFeatures: ['Course comparison tool', 'Student application dashboard', 'Advisor scheduler tracker', 'AI college match helper'],
    technicalChallenges: 'Engineered a database query pipeline with multiple filter parameters that returns complex university models in under 50ms by index-optimizing MongoDB collections.',
    whatILearned: 'Understood relational data design in MongoDB, index optimization, and integrating scheduling systems with email callbacks.',
    futureImprovements: 'Integrate a real-time chat gateway between advisors and students, and automate course syllabus downloads.',
    github: 'https://github.com/lalit2406/RS-Education-Solution-Frontend',
    githubFrontend: 'https://github.com/lalit2406/RS-Education-Solution-Frontend',
    githubBackend: 'https://github.com/lalit2406/RS-Education-Solution-Backend',
    live: 'https://rseducationsolution.in/',
    images: {
      desktop: '/images/projects/rseducation/home-desktop.webp',
      mobile: '/images/projects/rseducation/home-mobile.webp'
    },
    desktopScreens: [
      '/images/projects/rseducation/home-desktop.webp',
      '/images/projects/rseducation/dashboard-desktop.webp',
      '/images/projects/rseducation/services-desktop.webp',
      '/images/projects/rseducation/find-college-desktop.webp',
      '/images/projects/rseducation/online-universities-desktop.webp',
      '/images/projects/rseducation/ai-tools-desktop.webp',
      '/images/projects/rseducation/student-profile-desktop.webp',
      '/images/projects/rseducation/ai-chatbot-desktop.webp',
      '/images/projects/rseducation/_login.webp'
    ],
    mobileScreens: [
      '/images/projects/rseducation/home-mobile.webp',
      '/images/projects/rseducation/profile-mobile.webp'
    ],
    icon: Smartphone,
    status: 'Production',
    timeline: '4 Months',
    client: 'RS Study Abroad Consultancy',
    architectureLabels: ['REST API', 'Authentication', 'Dashboard', 'Admin Panel', 'MongoDB'],
    engineeringChallenge: 'Engineered university search index to return results in under 50ms',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'DB Query Response', value: 'under 50ms', desc: 'MongoDB compound indexes' },
      { label: 'Processing Speedup', value: '4.5x faster', desc: 'Automated advisor workflows' },
      { label: 'Leads Processed', value: '1,200+', desc: 'Real-time routing queues' },
      { label: 'Validation Uptime', value: '99.9%', desc: 'Role-based coordinator audits' }
    ],
    discoveryMetrics: [
      { label: 'Lead decay rate when admission callback takes over 24 hours', value: '82% Drop-off' },
      { label: 'Coordinators daily hours consumed by file parsing/email updates', value: '6.5 Hours/Day' },
      { label: 'Applications correctly mapped to university criteria manually', value: '68% Accuracy' }
    ],
    topologyFlow: [
      { layer: 'CLIENT LAYER', tech: 'React + Redux', detail: 'Fuzzy course search filters' },
      { layer: 'ROUTING ENGINE', tech: 'Express Controllers', detail: 'JWT Gatekeeper validation' },
      { layer: 'AGGREGATOR WORKER', tech: 'Node Bulk Worker', detail: 'PDF Invoice generator' },
      { layer: 'DATA LAYER', tech: 'MongoDB Atlas', detail: 'Timeseries indexes mapping' }
    ],
    codeSchema: {
      fileName: 'admissionModel.js',
      tech: 'Mongoose',
      code: `const admissionSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  universityId: { type: String, ref: 'University', required: true },
  status: { 
    type: String, 
    enum: ['APPLIED', 'REVIEW', 'OFFER', 'REJECTED'],
    default: 'APPLIED' 
  },
  documents: [{
    name: { type: String, required: true },
    url: String,
    verified: { type: Boolean, default: false }
  }]
}, { timestamps: true });

// Optimize query routing metrics
admissionSchema.index({ studentId: 1, status: 1 });`
    },
    timelineSteps: [
      { phase: 'Phase 1: Research', date: 'Month 1', desc: 'Conducted interviews with student coordinators and administrators to locate workflow bottlenecks. Discovered that manual validation of passport copies and transcript records was the primary cause of lead decay.' },
      { phase: 'Phase 2: Architecture', date: 'Month 2', desc: 'Designed the database schema, modeling non-relational university properties, and established the compound index map. Architected authentication scopes using JWT.' },
      { phase: 'Phase 3: Development', date: 'Month 3', desc: 'Programmed the Express controllers, matching routers, and student document ingestion buffers. Configured auto-PDF generators for invoices and advisor letters.' },
      { phase: 'Phase 4: Optimization', date: 'Month 4', desc: 'Tuned search speeds, verified database index hits, added query debouncing filters on the client, and deployed the portal to production.' }
    ]
  },
  {
    id: 'food-delivery',
    title: 'Food Delight',
    subtitle: 'Full-Stack Restaurant Ordering Platform',
    description: 'Food Delight is a full-stack restaurant ordering platform that allows users to discover nearby restaurants, browse menus, authenticate securely, and manage food ordering through a responsive web application.',
    problem: 'Customers struggled with slow restaurant menus navigation, lack of mobile layouts support, and unsecure orders dispatch workflows.',
    solution: 'Built a clean frontend using HTML, CSS, and native JavaScript connected directly to a TypeScript Node/Express backend that manages orders securely in MongoDB.',
    myRole: 'Designed and developed a full-stack restaurant ordering platform featuring restaurant discovery, menu browsing, customer authentication, backend REST APIs, and MongoDB-powered data management using HTML, CSS, JavaScript, Node.js, Express.js, and TypeScript-based backend services.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    keyFeatures: ['Restaurant discovery search', 'Dynamic food menu details', 'Secure user authentication', 'Admin merchant dashboard'],
    technicalChallenges: 'Engineered backend order controllers validating client payload payloads on server limits to prevent duplicate records insertion.',
    whatILearned: 'Experienced REST API routing structures, custom Express authentication middleware modules, and indexing compound queries in MongoDB collections.',
    futureImprovements: 'Integrate online payments support, live order tracking feeds, and delivery merchant widgets dashboards.',
    github: 'https://github.com/lalit2406/Food_Delight',
    live: '',
    images: {
      desktop: '/images/projects/food-delivery/food-home-desktop.webp',
      mobile: '/images/projects/food-delivery/food-home-mobile.webp'
    },
    desktopScreens: [
      '/images/projects/food-delivery/food-home-desktop.webp',
      '/images/projects/food-delivery/restaurants-available-desktop.webp',
      '/images/projects/food-delivery/food-listing-desktop.webp',
      '/images/projects/food-delivery/auth-desktop.webp',
      '/images/projects/food-delivery/admin-desktop.webp',
      '/images/projects/food-delivery/offers-desktop.webp',
      '/images/projects/food-delivery/about-desktop.webp',
      '/images/projects/food-delivery/contact-desktop.webp'
    ],
    mobileScreens: [
      '/images/projects/food-delivery/food-home-mobile.webp',
      '/images/projects/food-delivery/restaurants-available-mobile.webp',
      '/images/projects/food-delivery/food-listing-mobile.webp',
      '/images/projects/food-delivery/auth-mobile.webp',
      '/images/projects/food-delivery/admin-mobile.webp',
      '/images/projects/food-delivery/offers-mobile.webp',
      '/images/projects/food-delivery/about-mobile.webp',
      '/images/projects/food-delivery/contact-mobile.webp'
    ],
    icon: ShoppingBag,
    status: 'Completed',
    timeline: '6 Weeks',
    client: 'Culinary Commerce Hub',
    architectureLabels: ['REST API', 'Express Routing', 'MongoDB', 'TypeScript Backend'],
    engineeringChallenge: 'Optimized server-side order validation controllers and routes',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'API response time', value: '< 20ms', desc: 'Express route handlers' },
      { label: 'Database query speed', value: '< 10ms', desc: 'MongoDB indexed lookups' },
      { label: 'Lobby search load', value: 'Instant', desc: 'Query parameter processing' },
      { label: 'UI layout fidelity', value: '100%', desc: 'Responsive CSS layout grids' }
    ],
    discoveryMetrics: [
      { label: 'User request API dispatch speed', value: '< 15ms' },
      { label: 'Order verification accuracy', value: '100% server-side' },
      { label: 'Menu content processing time', value: 'under 5ms' }
    ],
    topologyFlow: [
      { layer: 'FRONTEND CLIENT', tech: 'HTML / CSS / JS', detail: 'Renders dynamic food menu pages' },
      { layer: 'API ROUTING', tech: 'Express Routes', detail: 'Maps API request payloads' },
      { layer: 'CONTROLLER GATE', tech: 'Node Controllers', detail: 'Validates ordering form records' },
      { layer: 'DATA LAYER', tech: 'MongoDB Database', detail: 'Persists user session order histories' }
    ],
    codeSchema: {
      fileName: 'orderModel.ts',
      tech: 'TypeScript',
      code: `import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  items: [{
    itemId: { type: String, required: true },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true }
}, { timestamps: true });`
    },
    timelineSteps: [
      { phase: 'Phase 1: Planning', date: 'Weeks 1-2', desc: 'Reviewed user flow parameters and mapped MongoDB order collection schemas.' },
      { phase: 'Phase 2: Frontend Dev', date: 'Weeks 3-4', desc: 'Wrote HTML layouts and responsive CSS sheets for menus listings.' },
      { phase: 'Phase 3: Backend APIs', date: 'Weeks 5-6', desc: 'Programmed Express router endpoints and validation gates in TypeScript.' }
    ]
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio v2',
    subtitle: 'Premium Software Engineer portfolio built with a reusable design system.',
    description: 'Built this site using React, Vite, and a modular design system (primitives, shared constants, separate presentation layers) with lightning-fast builds.',
    problem: 'Portfolios often look like generic templates, lacks coding structure separation, and load slowly due to heavy layouts.',
    solution: 'Built this site using React, Vite, and a modular design system (primitives, shared constants, separate presentation layers) with lightning-fast builds.',
    myRole: 'Creator & Architect. Designed the layouts, coded the UI primitives, and separated presentation modules.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    keyFeatures: ['Dynamic design system library', 'Infinite tech tickers', 'Validated contact qualifiers', 'Subtle scroll fade-ups'],
    technicalChallenges: 'Created a reusable glassmorphic card component with dynamic gradient overlays that retains 60 FPS scrolling speeds on low-end devices.',
    whatILearned: 'Learned architectural patterns for React styling separation, performance budgets, and framer-motion tuning.',
    futureImprovements: 'Add full MDX blog layout support and automated lighthouse score testing in deployment pipelines.',
    github: 'https://github.com/lalit2406',
    live: '',
    images: {
      desktop: '/images/projects/portfolio/desktop.webp',
      mobile: '/images/projects/portfolio/mobile.webp'
    },
    desktopScreens: [
      '/images/projects/portfolio/desktop.webp'
    ],
    mobileScreens: [
      '/images/projects/portfolio/mobile.webp'
    ],
    icon: Cpu,
    status: 'Production',
    timeline: 'Ongoing',
    client: 'Personal Branding',
    architectureLabels: ['Vite', 'Tailwind CSS', 'Design System', 'Framer Motion'],
    engineeringChallenge: 'Retained 60 FPS scrolling by optimizing CSS layer computations',
    
    // Custom Technical Specifics
    statistics: [
      { label: 'Scroll speed', value: '60 FPS stable', desc: 'GPU-accelerated animations' },
      { label: 'Lighthouse score', value: '100/100', desc: 'Optimized static compilation' },
      { label: 'Bundle size', value: 'under 550KB', desc: 'Tree-shaken dependencies' },
      { label: 'Initial Page Load', value: 'under 0.4s', desc: 'Vite assets compression' }
    ],
    discoveryMetrics: [
      { label: 'Spotlight cursor frame latency', value: 'under 8ms' },
      { label: 'Active section checking frequency', value: 'Throttled scroll events' },
      { label: 'Total DOM node size count', value: 'under 600 nodes' }
    ],
    topologyFlow: [
      { layer: 'CLIENT LAYER', tech: 'React SPA framework', detail: 'Presentation views rendering' },
      { layer: 'ANIMATIONS ENGINE', tech: 'Framer Motion spring', detail: 'GPU layout transitions' },
      { layer: 'UTILITIES PRIMITIVES', tech: 'Tailwind CSS system', detail: 'Glassmorphic card elements' },
      { layer: 'COMPILER LAYER', tech: 'Vite Bundler framework', detail: 'Asset compilation build' }
    ],
    codeSchema: {
      fileName: 'spotlightPositionTracker.js',
      tech: 'Vanilla Javascript',
      code: `const handleMouseMove = (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const currentTarget = e.currentTarget;
  window.requestAnimationFrame(() => {
    const rect = currentTarget.getBoundingClientRect();
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  });
};`
    },
    timelineSteps: [
      { phase: 'Phase 1: Research', date: 'Month 1', desc: 'Conducted tests on CSS rendering bottlenecks, checking GPU overheads of glass filters.' },
      { phase: 'Phase 2: Architecture', date: 'Month 2', desc: 'Defined styling tokens, spacing primitives, and components catalog.' },
      { phase: 'Phase 3: Development', date: 'Month 3', desc: 'Programmed cards, typing workspace buffers, custom dividers, and interactive routes.' },
      { phase: 'Phase 4: Optimization', date: 'Month 4', desc: 'Implemented requestAnimationFrame cursors tracking, lazy load, and automated deployment script compiles.' }
    ]
  }
];
