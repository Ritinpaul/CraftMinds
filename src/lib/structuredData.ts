// Structured Data (JSON-LD) for SEO

export interface OrganizationData {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    contactType?: string;
    email?: string;
    areaServed?: string | string[];
  };
  sameAs?: string[];
}

export interface WebSiteData {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export interface ServiceData {
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export const getOrganizationSchema = (data: OrganizationData) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: data.name,
  url: data.url,
  logo: data.logo || `${data.url}/placeholder.svg`,
  description: data.description,
  contactPoint: data.contactPoint
    ? {
        "@type": "ContactPoint",
        telephone: data.contactPoint.telephone,
        contactType: data.contactPoint.contactType || "Customer Service",
        email: data.contactPoint.email,
        areaServed: data.contactPoint.areaServed || "IN",
      }
    : undefined,
  sameAs: data.sameAs || [],
});

export const getWebSiteSchema = (data: WebSiteData) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: data.name,
  url: data.url,
  description: data.description,
  potentialAction: data.potentialAction || {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${data.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

export const getServiceSchema = (data: ServiceData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: data.name,
  description: data.description,
  provider: {
    "@type": data.provider["@type"] || "Organization",
    name: data.provider.name,
  },
  areaServed: data.areaServed || ["IN", "Worldwide"],
  serviceType: data.serviceType,
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getLocalBusinessSchema = (data: {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${data.url}#organization`,
  name: data.name,
  image: `${data.url}/placeholder.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: data.address.streetAddress,
    addressLocality: data.address.addressLocality || "Chennai",
    addressRegion: data.address.addressRegion,
    postalCode: data.address.postalCode,
    addressCountry: data.address.addressCountry === "INDIA" ? "IN" : data.address.addressCountry,
  },
  telephone: data.telephone,
  email: data.email,
  url: data.url,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
});

export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

