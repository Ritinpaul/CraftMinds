import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-cesta-dark text-foreground">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Home;
