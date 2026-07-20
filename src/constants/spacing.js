// Reusable layout spacing configurations normalized across all sections
export const spacing = {
  section: {
    padding: 'py-12 md:py-16 px-6 md:px-8 relative overflow-hidden',
    spacingBetween: 'space-y-4',
  },
  grid: {
    cards: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
    about: 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center',
    projects: 'space-y-16 md:space-y-20',
    faq: 'space-y-4',
    testimonials: 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8',
    whyHireMe: 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center',
    benefits: 'lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6',
    contact: 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start',
  },
  container: 'max-w-[1680px] mx-auto',
  containerSmall: 'max-w-4xl mx-auto',
};
