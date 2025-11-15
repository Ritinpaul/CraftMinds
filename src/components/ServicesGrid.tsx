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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: FaBuilding,
    title: "Enterprise Solutions",
    description: "Improve business efficiency while reducing operational costs.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaUsers,
    title: "Hire Developer",
    description: "Hire dedicated developers to bring your ideas to life.",
    iconGradient: "icon-gradient-electric",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description: "Build user-friendly and engaging mobile apps.",
    iconGradient: "icon-gradient-gold",
  },
  {
    icon: FaBrain,
    title: "AI & ML Solutions",
    description: "Reshape your business with intelligent, data-driven technology.",
    iconGradient: "icon-gradient-cyan",
  },
  {
    icon: FaDatabase,
    title: "ERP Solutions",
    description: "Streamline operations with customizable ERP systems.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaHandshake,
    title: "CRM Development",
    description: "Enhance customer relationships with efficient CRM tools.",
    iconGradient: "icon-gradient-pink",
  },
  {
    icon: FaGlobe,
    title: "Website Development",
    description: "Build high-performance, modern websites.",
    iconGradient: "icon-gradient-blue",
  },
  {
    icon: FaLink,
    title: "Blockchain Development",
    description: "Utilize secure and scalable blockchain technology.",
    iconGradient: "icon-gradient-cyan",
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative z-10 bg-transparent py-24" aria-label="Our Services">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold md:text-5xl">
            Our <span className="holographic-text">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-soft">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card border border-white/10 transition-smooth hover:scale-[1.03] hover:shadow-cesta-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconGradient} shadow-cesta-glow`} aria-hidden="true">
                  <service.icon className="text-white text-xl" style={{ fontSize: '1.5rem' }} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-soft">
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
