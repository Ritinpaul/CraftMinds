import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  structuredData?: object | object[];
}

const defaultSEO = {
  title: "CraftMind | Web Development, Mobile Apps & AI Solutions in Chennai",
  description: "CraftMind delivers enterprise-grade web development, mobile apps, AI/ML solutions, ERP, and CRM systems. Expert developers in Chennai, India. Transform your business with scalable technology solutions.",
  keywords: "web development Chennai, mobile app development India, AI ML solutions, enterprise software, ERP systems, CRM development, blockchain development, custom software development, hire developers Chennai",
  image: "/placeholder.svg",
  url: "https://craftmind.co.in",
  type: "website",
  author: "CraftMind",
};

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  author,
  structuredData,
}: SEOProps) => {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type,
    author: author || defaultSEO.author,
  };

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", seo.description);
    updateMetaTag("keywords", seo.keywords);
    updateMetaTag("author", seo.author);

    // Open Graph tags
    updateMetaTag("og:title", seo.title, "property");
    updateMetaTag("og:description", seo.description, "property");
    updateMetaTag("og:image", seo.image, "property");
    updateMetaTag("og:url", seo.url, "property");
    updateMetaTag("og:type", seo.type, "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seo.title);
    updateMetaTag("twitter:description", seo.description);
    updateMetaTag("twitter:image", seo.image);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll("script[type='application/ld+json']");
      existingScripts.forEach((script) => script.remove());

      // Handle both single objects and arrays
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      // Create a script tag for each structured data object
      dataArray.forEach((data) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [seo, structuredData]);

  return null;
};

export default SEO;

