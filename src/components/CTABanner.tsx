import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="text-primary-foreground" size={28} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Have an idea? Let's{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              build it together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your vision into reality with our expert team. Get started today!
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
