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
              CRAFTMINDS
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
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-3 text-sm text-soft">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI & ML Solutions</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-soft">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cesta-electric" />
                info@craftminds.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cesta-gold" />
                +91 9136474511
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cesta-purple" />
                Chennai, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-soft md:flex-row md:gap-4">
          <p>
            © {currentYear} CraftMinds. All rights reserved.
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
