import { Award, Clock, Shield, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Developers",
    description: "Our team brings years of expertise in cutting-edge technologies.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
  },
  {
    icon: Shield,
    title: "Scalable & Secure Solutions",
    description: "Build for growth with enterprise-grade security.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Quality solutions that fit your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="gradient-primary bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver excellence through innovation, dedication, and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto shadow-glow">
                <feature.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
