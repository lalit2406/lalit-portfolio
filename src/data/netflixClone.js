export const netflixCodeSnippet = `// Axios Movie API Client Integration
import axios from 'axios';

const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US'
  }
});

export const fetchTrendingMovies = async () => {
  const { data } = await tmdbClient.get('/trending/movie/week');
  return data.results;
};`;

export const netflixModulesData = {
  'Landing Page': {
    desktop: 'home-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Landing Gateway',
    purpose: 'Introduces users to the streaming service catalog and subscription benefits.',
    functionality: 'Dynamic background card slider banners, input gates, and accordion Q&A tabs.',
    implementation: 'Built with React state controllers and styled with Tailwind grid layers.',
    techs: ['React', 'Tailwind CSS'],
    chips: ['Gateway UI', 'CSS Layers']
  },
  Home: {
    desktop: 'home-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Content Dashboard',
    purpose: 'Aggregates multiple movies collection sliders categorized by genres.',
    functionality: 'Hover-activated posters, scrollable rows, header banner cards, and user navigation menus.',
    implementation: 'Queries TMDB collections via Axios pipelines and renders carousel lists dynamically.',
    techs: ['React', 'Axios', 'TMDB API'],
    chips: ['Dashboard UI', 'TMDB Integration']
  },
  Trending: {
    desktop: 'trending-section-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Trending Row',
    purpose: 'Presents high-impact weekly trending videos.',
    functionality: 'Auto-scaled poster rows, hover info banners, and dynamic details overlays.',
    implementation: 'Binds React rows against Axios endpoints utilizing local session caching limits.',
    techs: ['React', 'Axios', 'TMDB API'],
    chips: ['Dynamic List', 'Local Caches']
  },
  'Movie Details': {
    desktop: 'details-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Details Dialog',
    purpose: 'Displays extended synopsis, runtime indices, casting logs, and movie tags.',
    functionality: 'Backdrop header blur, play CTA buttons, detail metadata grids, and close gates.',
    implementation: 'Mounts custom popup modals and uses react state handlers to trigger display bounds.',
    techs: ['React', 'Tailwind CSS'],
    chips: ['Popups Modal', 'State Control']
  },
  Recommendations: {
    desktop: 'details-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Similar Content',
    purpose: 'Offers custom recommendations list based on current movie views.',
    functionality: 'Displays similar genre cards, matching percentages, and redirect triggers.',
    implementation: 'Retrieves recommendations arrays from TMDB API on details modal mount events.',
    techs: ['React', 'Axios', 'TMDB API'],
    chips: ['Recommendations', 'API Queries']
  }
};
