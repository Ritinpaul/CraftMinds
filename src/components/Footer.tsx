import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-cesta-overlay backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.6rem] holographic-text">
              CRAFTMIND
            </h3>
            <p className="text-sm text-soft">
              Your trusted tech partner for web, app, AI, and enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-soft transition-smooth hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-soft transition-smooth hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-soft transition-smooth hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-soft transition-smooth hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-soft transition-smooth hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-soft transition-smooth hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-3 text-sm text-soft">
              <li>
                <Link to="/services" className="transition-smooth hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-smooth hover:text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-smooth hover:text-white">
                  AI & ML Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-smooth hover:text-white">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Get in Touch</h4>
            <address className="not-italic space-y-4 text-sm text-soft">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-cesta-electric" aria-hidden="true" />
                <a href="mailto:info@craftminds.com" className="transition-smooth hover:text-white">
                  info@craftminds.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cesta-gold" aria-hidden="true" />
                <a href="tel:+919136474511" className="transition-smooth hover:text-white">
                  +91 9136474511
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cesta-purple" aria-hidden="true" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </address>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-soft md:flex-row md:gap-4">
          <p>
            © {currentYear} CraftMind. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth text-soft hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth text-soft hover:text-white"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth text-soft hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth text-soft hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
