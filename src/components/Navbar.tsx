import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      <nav className="fixed left-1/2 top-6 z-50 w-full -translate-x-1/2 px-4 sm:px-6" role="navigation" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-cesta-overlay px-10 py-4 shadow-cesta-card backdrop-blur-xl">
        {/* Logo */}
        <Link to="/" className="text-base font-extrabold uppercase tracking-[0.6rem] holographic-text" aria-label="CraftMind Home">
          CRAFTMIND
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-smooth ${
                isActive(link.path)
                  ? "text-white"
                  : "text-soft hover:text-white"
              }`}
              aria-label={`Navigate to ${link.name} page`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="cta" size="sm" className="shadow-cesta-glow">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-full p-2 text-soft transition-smooth hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="mx-auto mt-3 max-w-6xl animate-fade-in md:hidden" role="menu">
          <div className="glass-card glass-border rounded-3xl border border-white/10 p-6 shadow-cesta-card backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-smooth ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-soft hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="cta" size="sm" className="w-full shadow-cesta-glow">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
};

export default Navbar;
