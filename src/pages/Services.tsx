import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  Smartphone, 
  Brain, 
  Database, 
  HeartHandshake, 
  Globe, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Improve business efficiency while reducing operational costs with our comprehensive enterprise solutions.",
    details: "We design and implement scalable enterprise systems that integrate seamlessly with your existing infrastructure. From process automation to data analytics, we help you optimize operations and drive growth.",
  },
  {
    icon: Users,
    title: "Hire Developer",
    description: "Hire dedicated developers to bring your ideas to life.",
    details: "Access a pool of talented developers with expertise in various technologies. Whether you need full-stack developers, mobile app specialists, or AI engineers, we have the right talent for your project.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build user-friendly and engaging mobile apps for iOS and Android.",
    details: "We create native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment, we handle every aspect of mobile app development.",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Reshape your business with intelligent, data-driven technology.",
    details: "Leverage the power of artificial intelligence and machine learning to automate processes, gain insights from data, and create intelligent applications that adapt and improve over time.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Streamline operations with customizable ERP systems.",
    details: "Implement robust ERP solutions that unify your business processes, improve data accuracy, and provide real-time visibility into your operations. Custom-tailored to your industry and workflow.",
  },
  {
    icon: HeartHandshake,
    title: "CRM Development",
    description: "Enhance customer relationships with efficient CRM tools.",
    details: "Build customer-centric CRM systems that help you manage interactions, track leads, and improve customer satisfaction. Integrate with your existing tools for a seamless workflow.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build high-performance, modern websites that convert.",
    details: "Create responsive, SEO-optimized websites that engage your audience and drive results. From landing pages to complex web applications, we deliver pixel-perfect designs and robust functionality.",
  },
  {
    icon: Shield,
    title: "Blockchain Development",
    description: "Utilize secure and scalable blockchain technology.",
    details: "Develop decentralized applications, smart contracts, and blockchain solutions that provide transparency, security, and immutability. Perfect for fintech, supply chain, and enterprise applications.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="transition-smooth hover:shadow-glow border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-primary-foreground" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-lg">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.details}</p>
                  <Link to="/contact">
                    <Button variant="hero">Request Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
