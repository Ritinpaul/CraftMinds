import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Privacy = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const privacyUrl = `${baseUrl}/privacy`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Privacy Policy", url: privacyUrl },
  ]);

  return (
    <>
      <SEO
        title="Privacy Policy | CraftMind"
        description="Privacy Policy for CraftMind. Learn how we collect, use, and protect your personal information."
        url={privacyUrl}
        structuredData={breadcrumbSchema}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-soft">Last updated: {new Date().toLocaleDateString()}</p>
            </header>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-soft">
                  CraftMind ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at craftmind.co.in.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-soft mb-2">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside text-soft space-y-2 ml-4">
                  <li>Personal Data: Name, email address, phone number, and other contact information you provide when submitting forms or contacting us.</li>
                  <li>Usage Data: Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                  <li>Cookies: We use cookies and similar tracking technologies to track activity on our website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-soft mb-2">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-soft space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-soft">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-soft space-y-2 ml-4 mt-2">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-soft">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-soft mb-2">You have the right to:</p>
                <ul className="list-disc list-inside text-soft space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
                <p className="text-soft">
                  We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="text-soft">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <address className="not-italic text-soft mt-2">
                  Email: <a href="mailto:info@craftminds.com" className="text-cesta-electric hover:underline">info@craftminds.com</a><br />
                  Phone: <a href="tel:+919136474511" className="text-cesta-electric hover:underline">+91 9136474511</a>
                </address>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link to="/" className="text-cesta-electric hover:underline">
                ← Back to Home
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;

