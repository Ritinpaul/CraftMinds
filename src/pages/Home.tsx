import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StickyContact from "@/components/StickyContact";
import { getOrganizationSchema, getWebSiteSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/structuredData";

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

  const faqSchema = getFAQSchema([
    {
      question: "What services does CraftMind offer?",
      answer: "CraftMind offers comprehensive web development, mobile app development, AI/ML solutions, ERP and CRM systems, blockchain development, and custom software development services in India.",
    },
    {
      question: "Where is CraftMind located?",
      answer: "CraftMind is based in India and serves clients globally with remote development services.",
    },
    {
      question: "What technologies does CraftMind use?",
      answer: "CraftMind uses modern technologies including React, Node.js, Python, Django, React Native, Flutter, TensorFlow, PostgreSQL, MongoDB, AWS, and other cutting-edge frameworks to build scalable applications.",
    },
    {
      question: "How can I contact CraftMind?",
      answer: "You can contact CraftMind by visiting our contact page, emailing us at info@craftminds.com, or calling us at +91 9136474511. We're available to discuss your project requirements.",
    },
    {
      question: "Does CraftMind provide mobile app development services?",
      answer: "Yes, CraftMind specializes in developing native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and other modern frameworks.",
    },
  ]);

  const structuredData = [organizationSchema, websiteSchema, breadcrumbSchema, faqSchema];

  return (
    <>
      <SEO
        title="CraftMind – Web & Mobile App Development in India"
        description="CraftMind builds scalable web development, mobile apps, AI/ML solutions, ERP and CRM systems in India. Transform your business with modern technology."
        keywords="web development India, mobile app development India, AI ML solutions, enterprise software, ERP systems, CRM development, blockchain development, custom software development, hire developers India"
        image={`${baseUrl}/og-image.png`}
        url={baseUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cesta-electric focus:text-white focus:rounded">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          <Hero />
          
          {/* SEO Content Section: About CraftMind */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="about-craftmind-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="about-craftmind-heading" className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  About CraftMind
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-6 text-justify">
                    CraftMind is a leading technology solutions provider based in India, specializing in web development, mobile app development, and AI/ML solutions. With years of experience in delivering enterprise-grade software solutions, we help businesses transform their digital presence and achieve their goals through innovative technology.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    Our team of expert developers combines technical expertise with business acumen to deliver scalable, secure, and cost-effective solutions. Whether you need a custom web application, a mobile app for iOS and Android, or AI-powered solutions to automate your business processes, CraftMind has the expertise to bring your vision to life.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    Learn more about our company and team on our <a href="/about" className="text-cesta-electric hover:underline">About Us</a> page, or explore our <a href="/services" className="text-cesta-electric hover:underline">services</a> to see how we can help your business grow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <ServicesGrid />
          
          {/* SEO Content Section: Mobile App Development */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="mobile-app-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="mobile-app-heading" className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Mobile App Development
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-4 text-justify">
                    In today's mobile-first world, having a robust mobile application is essential for business success. CraftMind specializes in developing native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.
                  </p>
                  <p className="text-lg text-soft mb-4 text-justify">
                    Our mobile app development services include UI/UX design, app architecture, backend integration, API development, and app store optimization. We use modern frameworks like React Native and Flutter to build high-performance apps that work seamlessly across all devices.
                  </p>
                  <p className="text-lg text-soft text-justify">
                    View our <a href="/portfolio" className="text-cesta-electric hover:underline">portfolio</a> to see examples of our mobile app projects, or <a href="/contact" className="text-cesta-electric hover:underline">contact us</a> to discuss your mobile app requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section: AI & Machine Learning Solutions */}
          <section className="py-16 bg-cesta-purple/20 backdrop-blur-sm" aria-labelledby="ai-ml-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="ai-ml-heading" className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  AI & Machine Learning Solutions
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-4 text-justify">
                    Artificial Intelligence and Machine Learning are transforming businesses across industries. CraftMind helps companies leverage AI/ML to automate processes, gain insights from data, and create intelligent applications that learn and adapt.
                  </p>
                  <p className="text-lg text-soft mb-4 text-justify">
                    Our AI/ML solutions include predictive analytics, natural language processing, computer vision, recommendation systems, and custom AI model development. We work with TensorFlow, PyTorch, and other leading ML frameworks to build solutions tailored to your business needs.
                  </p>
                  <p className="text-lg text-soft text-justify">
                    Discover how AI can transform your business by exploring our <a href="/services" className="text-cesta-electric hover:underline">AI/ML services</a> or <a href="/contact" className="text-cesta-electric hover:underline">contacting our team</a> for a consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section: ERP & CRM Development */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="erp-crm-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="erp-crm-heading" className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  ERP & CRM Development
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-6 text-justify">
                    Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems are crucial for streamlining business operations and managing customer relationships. CraftMind develops custom ERP and CRM solutions that integrate seamlessly with your existing workflows.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    Our ERP solutions help businesses manage inventory, production, supply chain, finance, and human resources from a single platform. Our CRM systems enable companies to track customer interactions, manage sales pipelines, and improve customer satisfaction through data-driven insights.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    Both systems are built with scalability and security in mind, ensuring they grow with your business while protecting sensitive data. Learn more about our <a href="/services" className="text-cesta-electric hover:underline">enterprise solutions</a> and how they can benefit your organization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section: Technologies We Use */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="technologies-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 id="technologies-heading" className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Technologies We Use
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-6 text-justify">
                    CraftMind leverages cutting-edge technologies and frameworks to build modern, scalable applications. Our technology stack includes React, Node.js, Python, Django, React Native, Flutter, TensorFlow, PostgreSQL, MongoDB, AWS, and many more.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    We stay updated with the latest industry trends and best practices to ensure our clients receive solutions built with the most reliable and performant technologies available. Our developers are certified in multiple technologies and continuously enhance their skills through training and hands-on experience.
                  </p>
                  <p className="text-lg text-soft text-justify">
                    Whether you need a modern web application, a mobile app, or an AI-powered solution, we have the technical expertise to deliver. <a href="/contact" className="text-cesta-electric hover:underline">Contact us</a> to discuss your technology requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseUs />
          <CaseStudies />
          
          {/* SEO Content Section: Get in Touch */}
          <section className="py-16 bg-cesta-dark" aria-labelledby="get-in-touch-heading">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 id="get-in-touch-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Get in Touch
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-soft mb-6 text-justify">
                    Ready to transform your business with technology? CraftMind is here to help. Whether you're looking for web development, mobile app development, AI/ML solutions, or enterprise software, our team of experts is ready to discuss your project.
                  </p>
                  <p className="text-lg text-soft mb-6 text-justify">
                    Based in India, we serve clients globally and are committed to delivering high-quality solutions that exceed expectations. <a href="/contact" className="text-cesta-electric hover:underline">Contact us</a> today to schedule a consultation and learn how we can help your business grow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CTABanner />
        </main>
        <Footer />
        <StickyContact />
      </div>
    </>
  );
};

export default Home;
