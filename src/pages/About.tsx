import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBullseye, FaEye, FaHeart, FaBolt } from "react-icons/fa";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const values = [
  {
    icon: FaBullseye,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: FaEye,
    title: "Vision",
    description: "To be the leading technology partner for businesses worldwide, known for excellence, innovation, and client success.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: FaHeart,
    title: "Values",
    description: "Integrity, innovation, excellence, and client-first approach guide everything we do. We believe in building long-term partnerships.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: FaBolt,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    iconGradient: "icon-gradient-electric-gold",
  },
];

const About = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const aboutUrl = `${baseUrl}/about`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "About", url: aboutUrl },
  ]);

  const organizationSchema = getOrganizationSchema({
    name: "CraftMinds",
    url: baseUrl,
    description: "Your trusted technology partner dedicated to delivering digital excellence. We empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.",
    contactPoint: {
      email: "info@craftminds.com",
      contactType: "Customer Service",
      areaServed: "Worldwide",
    },
  });

  const structuredData = [breadcrumbSchema, organizationSchema];

  return (
    <>
      <SEO
        title="About CraftMinds - Your Trusted Technology Partner"
        description="Learn about CraftMinds - a team of passionate technologists dedicated to delivering digital excellence. Our mission, vision, values, and commitment to innovation."
        keywords="about CraftMinds, technology company, software development team, digital transformation, tech partner, company mission, company values"
        image={`${baseUrl}/placeholder.svg`}
        url={aboutUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero py-40">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            About <span className="holographic-text">CraftMinds</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-soft md:text-xl">
            Your trusted technology partner dedicated to delivering digital excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-white/10 bg-cesta-overlay p-10 backdrop-blur-xl animate-fade-in">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Our <span className="holographic-text">Story</span>
            </h2>
            <p className="text-lg leading-relaxed text-soft">
              CraftMinds was founded with a simple yet powerful vision: to bridge the gap between businesses and technology. 
              We recognized that many companies struggle to leverage the full potential of modern technology solutions, 
              often due to complexity, cost, or lack of expertise.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              Today, we're a team of passionate technologists, designers, and strategists who work together to deliver 
              solutions that don't just meet expectations - they exceed them. Our diverse expertise spans web development, 
              mobile apps, AI/ML, enterprise solutions, and emerging technologies like blockchain.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              What sets us apart is our commitment to understanding your unique challenges and goals. We don't offer 
              one-size-fits-all solutions. Instead, we take the time to learn about your business, your industry, 
              and your vision, then craft custom solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="gradient-hero py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl animate-fade-in">
            What Drives <span className="holographic-text">Us</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-card glass-border border border-white/10 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${value.iconGradient} shadow-cesta-glow`}>
                    <value.icon className="text-white text-2xl" style={{ fontSize: '1.75rem' }} />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-soft">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-center animate-fade-in">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Our <span className="holographic-text">Team</span>
            </h2>
            <p className="text-lg leading-relaxed text-soft">
              Behind CraftMinds is a team of dedicated professionals with diverse backgrounds in software engineering, 
              design, project management, and business strategy. Each team member brings unique expertise and a 
              shared passion for technology and innovation.
            </p>
            <p className="text-lg leading-relaxed text-soft">
              We foster a culture of continuous learning and collaboration, ensuring that we stay at the forefront 
              of technological advancements and deliver the best possible solutions to our clients.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">50+</div>
                <p className="text-soft">Projects Delivered</p>
              </div>
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">30+</div>
                <p className="text-soft">Expert Developers</p>
              </div>
              <div className="glass-card glass-border rounded-3xl p-6 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow">
                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                <p className="text-soft">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default About;
