import { FaTrophy, FaClock, FaShieldAlt, FaDollarSign } from "react-icons/fa";

const features = [
  {
    icon: FaTrophy,
    title: "Experienced Developers",
    description: "Our team brings years of expertise in cutting-edge technologies.",
    iconGradient: "icon-gradient-purple",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
    iconGradient: "icon-gradient-cyan",
  },
  {
    icon: FaShieldAlt,
    title: "Scalable & Secure Solutions",
    description: "Build for growth with enterprise-grade security.",
    iconGradient: "icon-gradient-blue",
  },
  {
    icon: FaDollarSign,
    title: "Affordable Pricing",
    description: "Quality solutions that fit your budget.",
    iconGradient: "icon-gradient-pink",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative z-10 bg-cesta-purple/20 py-24 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-3xl font-bold md:text-5xl">
            Why <span className="holographic-text">Choose Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-soft">
            We deliver excellence through innovation, dedication, and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card glass-border space-y-4 p-8 text-center shadow-cesta-card transition-smooth hover:-translate-y-1 hover:shadow-cesta-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${feature.iconGradient} shadow-cesta-glow`}>
                <feature.icon className="text-white text-2xl" style={{ fontSize: '1.75rem' }} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-soft">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
