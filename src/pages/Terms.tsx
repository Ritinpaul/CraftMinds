import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Terms = () => {
  const baseUrl = import.meta.env.VITE_SITE_URL || "https://craftmind.co.in";
  const termsUrl = `${baseUrl}/terms`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Terms of Service", url: termsUrl },
  ]);

  return (
    <>
      <SEO
        title="Terms of Service | CraftMind"
        description="Terms of Service for CraftMind. Read our terms and conditions for using our website and services."
        url={termsUrl}
        structuredData={breadcrumbSchema}
      />
      <div className="min-h-screen bg-cesta-dark text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-soft">Last updated: {new Date().toLocaleDateString()}</p>
            </header>

            <div className="prose prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-soft">
                  By accessing or using the CraftMind website (craftmind.co.in), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p className="text-soft mb-2">
                  Permission is granted to temporarily download one copy of the materials on CraftMind's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-soft space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
                <p className="text-soft">
                  CraftMind provides web development, mobile app development, AI/ML solutions, and enterprise software services. All services are provided subject to separate service agreements and project-specific terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-soft">
                  The materials on this website, including but not limited to text, graphics, logos, images, and software, are the property of CraftMind or its content suppliers and are protected by copyright and trademark laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
                <p className="text-soft">
                  The materials on CraftMind's website are provided on an 'as is' basis. CraftMind makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Limitations</h2>
                <p className="text-soft">
                  In no event shall CraftMind or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CraftMind's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Accuracy of Materials</h2>
                <p className="text-soft">
                  The materials appearing on CraftMind's website could include technical, typographical, or photographic errors. CraftMind does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Links</h2>
                <p className="text-soft">
                  CraftMind has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CraftMind of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
                <p className="text-soft">
                  CraftMind may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="text-soft">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p className="text-soft">
                  If you have any questions about these Terms of Service, please contact us at:
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

export default Terms;

