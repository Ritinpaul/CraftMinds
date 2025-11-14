import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structuredData";

const Home = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  
  const organizationSchema = getOrganizationSchema({
    name: "CraftMind",
    url: baseUrl,
    description: "Your trusted tech partner for web, app, AI, and enterprise solutions. Expert developers delivering scalable, secure, and affordable technology solutions.",
    contactPoint: {
      email: "info@craftminds.com",
      contactType: "Customer Service",
      areaServed: "Worldwide",
    },
    sameAs: [
      "https://twitter.com/craftminds_tech",
      "https://linkedin.com/company/craftminds",
    ],
  });

  const websiteSchema = getWebSiteSchema({
    name: "CraftMind",
    url: baseUrl,
    description: "Transforming Ideas into Digital Reality - Web Development, Mobile Apps, AI Solutions, and Enterprise Software",
  });

  const structuredData = [organizationSchema, websiteSchema];

  return (
    <>
      <SEO
        title="CraftMind - Transforming Ideas into Digital Reality"
        description="Your trusted tech partner for web, app, AI, and enterprise solutions. Expert developers delivering scalable, secure, and affordable technology solutions."
        keywords="web development, mobile apps, AI solutions, enterprise software, ERP, CRM, blockchain development, custom software, hire developers, technology solutions"
        image={`${baseUrl}/placeholder.svg`}
        url={baseUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
        <Hero />
        <ServicesGrid />
        <WhyChooseUs />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
