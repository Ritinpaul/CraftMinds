import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FaBuilding, 
  FaUsers, 
  FaMobileAlt, 
  FaBrain, 
  FaDatabase, 
  FaHandshake, 
  FaGlobe, 
  FaLink 
} from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Enterprise Solutions",
    description: "Improve business efficiency while reducing operational costs with our comprehensive enterprise solutions.",
    details: "We design and implement scalable enterprise systems that integrate seamlessly with your existing infrastructure. From process automation to data analytics, we help you optimize operations and drive growth.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaUsers,
    title: "Hire Developer",
    description: "Hire dedicated developers to bring your ideas to life.",
    details: "Access a pool of talented developers with expertise in various technologies. Whether you need full-stack developers, mobile app specialists, or AI engineers, we have the right talent for your project.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Build user-friendly and engaging mobile apps for iOS and Android.",
    details: "We create native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment, we handle every aspect of mobile app development.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: FaBrain,
    title: "AI & ML Solutions",
    description: "Reshape your business with intelligent, data-driven technology.",
    details: "Leverage the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent applications that adapt and improve over time.",
    iconGradient: "icon-gradient-cyan",
  },
  {
    icon: FaDatabase,
    title: "ERP Solutions",
    description: "Streamline operations with customizable ERP systems.",
    details: "Implement robust ERP solutions that unify your business processes, improve data accuracy, and provide real-time visibility into your operations. Custom-tailored to your industry and workflow.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaHandshake,
    title: "CRM Development",
    description: "Enhance customer relationships with efficient CRM tools.",
    details: "Build customer-centric CRM systems that help you manage interactions, track leads, and improve customer satisfaction. Integrate with your existing tools for a seamless workflow.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: FaGlobe,
    title: "Website Development",
    description: "Build high-performance, modern websites that convert.",
    details: "Create responsive, SEO-optimized websites that engage your audience and drive results. From landing pages to complex web applications, we deliver pixel-perfect designs and robust functionality.",
    iconGradient: "icon-gradient-blue",
  },
  {
    icon: FaLink,
    title: "Blockchain Development",
    description: "Utilize secure and scalable blockchain technology.",
    details: "Develop decentralized applications, smart contracts, and blockchain solutions that provide transparency, security, and immutability. Perfect for fintech, supply chain, and enterprise applications.",
    iconGradient: "icon-gradient-cyan",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-cesta-dark text-foreground">
      <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero py-40">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Our <span className="holographic-text">Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-soft md:text-xl">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="glass-card glass-border border border-white/10 transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${service.iconGradient} shadow-cesta-glow`}>
                      <service.icon className="text-white text-3xl" style={{ fontSize: '2rem' }} />
                    </div>
                    <div>
                      <CardTitle className="mb-2 text-2xl md:text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-soft">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-soft">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Single Request Quote Button Section */}
      <section className="bg-transparent py-12">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact">
            <Button 
              variant="hero" 
              className="shadow-cesta-glow text-lg px-8 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
            >
              Request Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
