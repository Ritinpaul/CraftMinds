import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      description: "Scalable e-commerce solution with AI-powered recommendations, processing 10K+ daily transactions.",
      industry: "Retail",
      technologies: "React, Node.js, AI/ML",
      downloadUrl: "/case-studies/ecommerce-platform.pdf",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "HIPAA-compliant mobile application connecting patients with healthcare providers, serving 50K+ users.",
      industry: "Healthcare",
      technologies: "React Native, Firebase, AWS",
      downloadUrl: "/case-studies/healthcare-app.pdf",
    },
    {
      id: 3,
      title: "Enterprise ERP System",
      description: "Custom ERP solution streamlining operations for manufacturing company, reducing costs by 30%.",
      industry: "Manufacturing",
      technologies: "Python, Django, PostgreSQL",
      downloadUrl: "/case-studies/erp-system.pdf",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-cesta-dark" aria-labelledby="case-studies-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="case-studies-heading" className="text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-soft max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="glass-card glass-border border border-white/10 bg-cesta-overlay/50 hover:border-cesta-electric/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <FileText className="h-5 w-5 text-cesta-electric flex-shrink-0 ml-2" aria-hidden="true" />
                </div>
                <CardDescription className="text-soft">
                  {study.industry} • {study.technologies}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-soft mb-4">{study.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-cesta-electric/30 text-cesta-electric hover:bg-cesta-electric/10"
                >
                  <a
                    href={study.downloadUrl}
                    download
                    aria-label={`Download case study: ${study.title}`}
                  >
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download One-Pager
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-soft mb-4">
            Want to see more? Contact us for detailed case studies and project portfolios.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400"
          >
            <a href="/contact" aria-label="Contact us for more case studies">
              View All Case Studies
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

