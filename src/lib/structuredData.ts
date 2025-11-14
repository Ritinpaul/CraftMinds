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
    areaServed?: string;
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
        areaServed: data.contactPoint.areaServed || "US",
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
  areaServed: data.areaServed || "Worldwide",
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
  name: data.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: data.address.streetAddress,
    addressLocality: data.address.addressLocality,
    addressRegion: data.address.addressRegion,
    postalCode: data.address.postalCode,
    addressCountry: data.address.addressCountry,
  },
  telephone: data.telephone,
  email: data.email,
  url: data.url,
});

