export const agritechCodeSnippet = `const soilReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  farmLocation: { type: String, required: true },
  metrics: {
    moisture: { type: Number, required: true },
    ph: { type: Number, required: true }
  },
  recommendation: String
}, { timestamps: true });

// Optimize query path for rapid user report lookups
soilReportSchema.index({ userId: 1, createdAt: -1 });`;

export const agritechModulesData = {
  Home: {
    desktop: 'home-desktop.webp',
    mobile: 'mobile-homepage.webp',
    title: 'Home',
    description: 'Central hub mapping soil status metrics across farm fields.',
    purpose: 'Central hub mapping soil status metrics across farm fields.',
    functionality: 'Presents field sensor statistics, interactive logs, and module redirect gates.',
    implementation: 'Rendered using modular React grids and styled with clean Tailwind CSS coordinates.',
    techs: ['React', 'Tailwind CSS'],
    chips: ['Responsive UI', 'Status Grid']
  },
  'Soil Monitor': {
    desktop: 'dashboard-desktop.webp',
    mobile: 'mobile-dashboard.webp',
    title: 'Soil Monitor',
    description: 'Telemetry graphs plotting moisture and soil health trends.',
    purpose: 'Telemetry graphs plotting moisture and soil health trends.',
    functionality: 'Interactive Recharts line components monitoring seasonal field ranges.',
    implementation: 'Uses Axios APIs to load dynamic datasets on time range toggles.',
    techs: ['React', 'Recharts', 'Axios'],
    chips: ['Data Analytics', 'Time-Series Charts']
  },
  'AI Chatbot': {
    desktop: 'services-desktop.webp',
    mobile: 'mobile-chatbot.webp',
    title: 'AI Chatbot',
    description: 'Interactive chat responder assisting growers with crop management query responses.',
    purpose: 'Interactive chat responder assisting growers with crop management query responses.',
    functionality: 'Chat window templates, interactive prompts, and responsive message blocks.',
    implementation: 'Mounts react state observers to trigger preset responses.',
    techs: ['React', 'State Control'],
    chips: ['Chat Interface', 'State Control']
  },
  'Fertilizer Guide': {
    desktop: 'fertilizer-result-desktop.webp',
    mobile: 'mobile-homepage.webp',
    title: 'Fertilizer Guide',
    description: 'NPK calculator suggesting chemical ratios based on metrics.',
    purpose: 'NPK calculator suggesting chemical ratios based on metrics.',
    functionality: 'Inputs nitrogen, phosphorus, potassium, and soil pH values.',
    implementation: 'Executes mathematical algorithms in Node controllers to return crop guidance.',
    techs: ['Node.js', 'Express', 'Mongoose'],
    chips: ['Calculators', 'SaaS Utilities']
  },
  'Soil Reports': {
    desktop: 'soil-report-desktop.webp',
    mobile: 'mobile-dashboard.webp',
    title: 'Soil Reports',
    description: 'Dashboard exporter delivering downloadable PDF reports summaries.',
    purpose: 'Dashboard exporter delivering downloadable PDF reports summaries.',
    functionality: 'Maintains historical log collections and exports structured PDF sheets.',
    implementation: 'Uses server PDFKit engines to compile and deliver files to browser endpoints.',
    techs: ['Node.js', 'Express', 'MongoDB'],
    chips: ['Exporters', 'PDF Generation']
  }
};
