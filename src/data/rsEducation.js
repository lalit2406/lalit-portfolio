export const rseducationCodeSnippet = `// Express Controller Mapping
router.get("/universities", async (req, res) => {
  try {
    const filters = req.query.field 
      ? { category: req.query.field } 
      : {};
    const data = await University.find(filters)
      .select("name location rating courses");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`;

export const modulesData = {
  Home: {
    desktop: 'home-desktop.webp',
    mobile: 'home-mobile.webp',
    title: 'Home',
    purpose: 'Provides a central landing page introducing educational services and guiding users through the platform.',
    functionality: 'Navigation header, service summary cards, responsive layout links, and user redirection CTA buttons.',
    implementation: 'Built with React functional components and styled using Tailwind CSS flex grids.',
    techs: ['React', 'Tailwind CSS', 'React Router'],
    chips: ['Responsive UI', 'Reusable Components', 'React Router']
  },
  Programs: {
    desktop: 'services-desktop.webp',
    mobile: null,
    title: 'Programs',
    purpose: 'Displays available educational programs and course details.',
    functionality: 'Course duration listing, eligibility checkers, fee structures, and direct admission application options.',
    implementation: 'Queries MongoDB program collections via Express route handlers and loads details asynchronously.',
    techs: ['React', 'Axios', 'Express', 'MongoDB'],
    chips: ['REST API', 'MongoDB', 'Dynamic Rendering']
  },
  'Find College': {
    desktop: 'find-college-desktop.webp',
    mobile: null,
    title: 'Find College',
    purpose: 'Enables students to search and discover colleges based on search parameters.',
    functionality: 'Search input filtering, location and field categorizations, and detailed information view triggers.',
    implementation: 'Implements custom frontend filter states mapped against backend database schemas.',
    techs: ['React', 'Axios', 'MongoDB'],
    chips: ['Dynamic Rendering', 'MongoDB', 'Search Filtering']
  },
  'Online Universities': {
    desktop: 'online-universities-desktop.webp',
    mobile: null,
    title: 'Online Universities',
    purpose: 'Lists accredited online universities offering specialized courses.',
    functionality: 'University cards, fee comparison indexes, accreditation statuses, and apply gates.',
    implementation: 'Renders dynamic card elements mapping university document attributes in React.',
    techs: ['React', 'Axios', 'MongoDB'],
    chips: ['Dynamic Rendering', 'Reusable Components', 'Clean Data Layer']
  },
  'AI Tools': {
    desktop: 'ai-tools-desktop.webp',
    mobile: null,
    title: 'AI Tools',
    purpose: 'Houses automated tools to assist student educational choices.',
    functionality: 'Streamlined utilities including a mock AI dashboard presenting automated recommendations.',
    implementation: 'Built as a dedicated navigation module within the React layout template structures.',
    techs: ['React', 'Tailwind CSS'],
    chips: ['Responsive Layout', 'Reusable Components']
  },
  'AI Chatbot': {
    desktop: 'ai-chatbot-desktop.webp',
    mobile: null,
    title: 'AI Chatbot',
    purpose: 'Answers student educational enquiries dynamically.',
    functionality: 'Interactive message log layout, preset prompt bubbles, and automatic response generators.',
    implementation: 'Integrated custom message-passing UI components following the platform styles.',
    techs: ['React', 'State Control'],
    chips: ['AI Integration', 'State Control', 'Reusable UI']
  },
  'Student Dashboard': {
    desktop: 'dashboard-desktop.webp',
    mobile: 'profile-mobile.webp',
    title: 'Student Dashboard',
    purpose: 'Central hub for authenticated student profiles and application tracking.',
    functionality: 'Saved colleges tables, application workflow statuses, student info summary, and profile updates.',
    implementation: 'Uses Axios requests with JWT authorization headers to retrieve and update session records.',
    techs: ['React', 'Axios', 'JWT', 'MongoDB'],
    chips: ['Protected Routes', 'JWT', 'Dashboard Modules', 'REST API']
  },
  Authentication: {
    desktop: null,
    mobile: '_login.webp',
    title: 'Authentication',
    purpose: 'Handles secure student logins and profile registrations.',
    functionality: 'Username/email fields, secure password input verification, register redirects, and error validation displays.',
    implementation: 'Binds Express authentication routers using bcrypt passwords encryption and JWT payloads.',
    techs: ['Express', 'JWT', 'Mongoose'],
    chips: ['Authentication', 'JWT', 'Validation']
  },
  'Support & Contact': {
    desktop: 'home-desktop.webp',
    mobile: null,
    title: 'Support & Contact',
    purpose: 'Facilitates direct student communication with educational counsellors.',
    functionality: 'Structured contact queries forms and direct EmailJS notifications sending.',
    implementation: 'Captures submit events in React, sends backend logs, and notifies staff via EmailJS API endpoints.',
    techs: ['React', 'EmailJS', 'Express'],
    chips: ['EmailJS', 'REST API', 'JSON Responses']
  }
};
