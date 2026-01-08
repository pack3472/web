// Site Configuration
// Pack 3472 Cub Scout website

export const siteConfig = {
  // Site general information
  site: {
    name: "Pack 3472",
    description: "BSA Cub Scout Pack 3472 - Building Character, Citizenship, and Fitness",
    url: "https://pack3472.org",
    author: "Pack 3472"
  },

  // Contact information
  contact: {
    // Main contact email
    email: "cubmaster@pack3472.org",

    // Phone number (optional)
    phone: "",

    // Meeting location
    address: {
      name: "Prairie Star Elementary School",
      street: "",
      city: "Leawood",
      state: "KS",
      zipCode: "",
      country: "United States"
    }
  },

  // Social media links
  social: {
    facebook: "",
    instagram: ""
  },

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Pinewood Derby", href: "/pinewood-derby-info" },
    { label: "Contact", href: "/contact" }
  ],

  // Search configuration
  search: {
    enabled: true,
    placeholder: 'Search...',
    noResultsText: 'No results found',
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,
    showCategories: true,
    showDates: false,
    showExcerpts: true,
    excerptLength: 30
  },

  // Legal pages (required by Statue SSG)
  legal: {
    privacyPolicyLastUpdated: "2025-01-01",
    termsLastUpdated: "2025-01-01",
    isCaliforniaCompliant: false,
    doNotSell: {
      processingTime: "15 business days",
      confirmationRequired: true
    }
  },

  // SEO and meta information
  seo: {
    defaultTitle: "Pack 3472 - Cub Scouts",
    titleTemplate: "%s | Pack 3472 Cub Scouts",
    defaultDescription: "BSA Cub Scout Pack 3472 - Building Character, Citizenship, and Fitness through Scouting",
    keywords: ["cub scouts", "pack 3472", "BSA", "boy scouts", "scouting"],
    ogImage: "/images/pack3472-og.png",
    twitterCard: "summary_large_image"
  }
};

export default siteConfig;
