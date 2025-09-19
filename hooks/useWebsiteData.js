import websiteData from '../data/website-data.json';

/**
 * Custom hook to access website data from JSON
 * Provides easy access to all dynamic content
 */
export const useWebsiteData = () => {
  return {
    // Trusted Companies Data
    trustedCompanies: websiteData.trustedCompanies,

    // Services Data
    services: websiteData.services,

    // Testimonials Data
    testimonials: websiteData.testimonials,

    // Helper functions
    getServiceById: (id) =>
      websiteData.services.servicesList.find(service => service.id === id),

    getTestimonialById: (id) => {
      for (const column of websiteData.testimonials.testimonialColumns) {
        const testimonial = column.find(t => t.id === id);
        if (testimonial) return testimonial;
      }
      return null;
    },

    getCompanyByName: (name) =>
      websiteData.trustedCompanies.companies.find(company => company.name === name),

    // Get all testimonials as flat array
    getAllTestimonials: () =>
      websiteData.testimonials.testimonialColumns.flat(),

    // Get testimonials by platform
    getTestimonialsByPlatform: (platform) =>
      websiteData.testimonials.testimonialColumns
        .flat()
        .filter(testimonial => testimonial.platform === platform),

    // Get technologies by category
    getTechnologiesByCategory: (category) =>
      websiteData.services.technologies.techList
        .filter(tech => tech.category === category)
  };
};

export default useWebsiteData;