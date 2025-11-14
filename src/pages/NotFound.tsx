import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 - Page Not Found | CraftMinds"
        description="The page you're looking for doesn't exist. Return to CraftMinds homepage to explore our services."
        url={`${baseUrl}${location.pathname}`}
      />
      <div className="flex min-h-screen items-center justify-center bg-cesta-dark text-foreground">
        <div className="glass-card glass-border w-full max-w-md rounded-3xl border border-white/10 p-12 text-center shadow-cesta-card">
          <h1 className="mb-4 text-6xl font-extrabold tracking-[0.3rem] holographic-text">404</h1>
          <p className="mb-6 text-lg text-soft">Oops! The page you&apos;re looking for has been crafted elsewhere.</p>
          <a href="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-smooth cesta-gradient-bg shadow-cesta-glow">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
