import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner for businesses worldwide, known for excellence, innovation, and client success.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, innovation, excellence, and client-first approach guide everything we do. We believe in building long-term partnerships.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Cesta</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted technology partner dedicated to delivering digital excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-primary bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cesta was founded with a simple yet powerful vision: to bridge the gap between businesses and technology. 
              We recognized that many companies struggle to leverage the full potential of modern technology solutions, 
              often due to complexity, cost, or lack of expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're a team of passionate technologists, designers, and strategists who work together to deliver 
              solutions that don't just meet expectations—they exceed them. Our diverse expertise spans web development, 
              mobile apps, AI/ML, enterprise solutions, and emerging technologies like blockchain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets us apart is our commitment to understanding your unique challenges and goals. We don't offer 
              one-size-fits-all solutions. Instead, we take the time to learn about your business, your industry, 
              and your vision, then craft custom solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-in">
            What Drives <span className="gradient-primary bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="transition-smooth hover:shadow-glow border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind Cesta is a team of dedicated professionals with diverse backgrounds in software engineering, 
              design, project management, and business strategy. Each team member brings unique expertise and a 
              shared passion for technology and innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We foster a culture of continuous learning and collaboration, ensuring that we stay at the forefront 
              of technological advancements and deliver the best possible solutions to our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">50+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">30+</div>
                <p className="text-muted-foreground">Expert Developers</p>
              </div>
              <div className="p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
