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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Improve business efficiency while reducing operational costs.",
  },
  {
    icon: Users,
    title: "Hire Developer",
    description: "Hire dedicated developers to bring your ideas to life.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build user-friendly and engaging mobile apps.",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Reshape your business with intelligent, data-driven technology.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Streamline operations with customizable ERP systems.",
  },
  {
    icon: HeartHandshake,
    title: "CRM Development",
    description: "Enhance customer relationships with efficient CRM tools.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build high-performance, modern websites.",
  },
  {
    icon: Shield,
    title: "Blockchain Development",
    description: "Utilize secure and scalable blockchain technology.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-smooth hover:shadow-glow hover:scale-105 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="text-primary-foreground" size={24} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
