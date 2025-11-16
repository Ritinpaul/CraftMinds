import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyContact from "@/components/StickyContact";
import { getOrganizationSchema, getWebSiteSchema, getBreadcrumbSchema } from "@/lib/structuredData";

const Home = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  
  const organizationSchema = getOrganizationSchema({
    name: "CraftMind",
    url: baseUrl,
    logo: `${baseUrl}/placeholder.svg`,
    description: "Your trusted tech partner for web, app, AI, and enterprise solutions. Expert developers delivering scalable, secure, and affordable technology solutions.",
    contactPoint: {
      email: "info@craftminds.com",
      telephone: "+91 9136474511",
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
    },
    sameAs: [
      "https://www.instagram.com/thecraftmindco/",
      "https://www.facebook.com/",
      "https://twitter.com/craftminds_tech",
      "https://linkedin.com/company/craftminds",
    ],
  });

  const websiteSchema = getWebSiteSchema({
    name: "CraftMind",
    url: baseUrl,
    description: "Transforming Ideas into Digital Reality - Web Development, Mobile Apps, AI Solutions, and Enterprise Software",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
  ]);

  const structuredData = [organizationSchema, websiteSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title="CraftMind | Web Development, Mobile Apps & AI Solutions in Chennai"
        description="CraftMind delivers enterprise-grade web development, mobile apps, AI/ML solutions, ERP, and CRM systems. Expert developers in Chennai, India. Transform your business with scalable technology solutions."
        keywords="web development Chennai, mobile app development India, AI ML solutions, enterprise software, ERP systems, CRM development, blockchain development, custom software development, hire developers Chennai"
        image={`${baseUrl}/placeholder.svg`}
        url={baseUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cesta-electric focus:text-white focus:rounded">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <ServicesGrid />
          <WhyChooseUs />
          <CaseStudies />
          <CTABanner />
        </main>
        <Footer />
        <StickyContact />
      </div>
    </>
  );
};

export default Home;
