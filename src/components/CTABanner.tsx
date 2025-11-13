import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card glass-border mx-auto max-w-3xl space-y-6 rounded-3xl p-12 text-center shadow-cesta-card backdrop-blur-xl animate-fade-in">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl icon-gradient-cyan shadow-cesta-glow">
              <Sparkles className="text-white" size={28} />
            </div>
          </div>
          <h2 className="text-3xl font-bold md:text-5xl">
            Have an idea? Let&apos;s <span className="holographic-text">build it together</span>
          </h2>
          <p className="text-lg text-soft">
            Transform your vision into reality with our expert team. Get started today!
          </p>
          <Link to="/contact">
            <Button variant="action" size="lg" className="shadow-cesta-glow">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
