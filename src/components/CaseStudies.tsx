import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye } from "lucide-react";
import CaseStudyModal, { CaseStudyData } from "@/components/CaseStudyModal";

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudyData[] = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      description: "Scalable e-commerce solution with AI-powered recommendations, processing 10K+ daily transactions.",
      industry: "Retail",
      technologies: "React, Node.js, AI/ML",
      techStack: ["React", "Node.js", "Express", "MongoDB", "TensorFlow", "Stripe API"],
      fullDescription: "We developed a comprehensive e-commerce platform that revolutionized the retail experience with AI-powered product recommendations, real-time inventory management, and seamless payment processing. The platform handles over 10,000 daily transactions with 99.9% uptime, providing customers with personalized shopping experiences while helping the business increase conversion rates by 35%.",
      keyFeatures: [
        "AI-powered product recommendations based on user behavior",
        "Real-time inventory management and stock alerts",
        "Secure payment gateway integration with multiple payment methods",
        "Responsive design optimized for mobile and desktop",
        "Advanced analytics dashboard for business insights",
        "Automated order processing and fulfillment system"
      ],
      results: [
        "35% increase in conversion rates",
        "10,000+ daily transactions processed",
        "99.9% platform uptime",
        "40% reduction in cart abandonment",
        "50% faster page load times"
      ],
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      description: "HIPAA-compliant mobile application connecting patients with healthcare providers, serving 50K+ users.",
      industry: "Healthcare",
      technologies: "React Native, Firebase, AWS",
      techStack: ["React Native", "Firebase", "AWS Lambda", "DynamoDB", "S3", "CloudFront"],
      fullDescription: "A HIPAA-compliant mobile application that seamlessly connects patients with healthcare providers, enabling telemedicine consultations, appointment scheduling, prescription management, and secure health record access. The app serves over 50,000 active users and has transformed how patients interact with healthcare services.",
      keyFeatures: [
        "HIPAA-compliant secure messaging and video consultations",
        "Real-time appointment scheduling and reminders",
        "Digital prescription management and refill requests",
        "Secure health record access and sharing",
        "Medication tracking and adherence monitoring",
        "Multi-language support for diverse patient populations"
      ],
      results: [
        "50,000+ active users served",
        "60% reduction in no-show appointments",
        "45% increase in patient engagement",
        "100% HIPAA compliance maintained",
        "4.8/5 average app store rating"
      ],
    },
    {
      id: 3,
      title: "Enterprise ERP System",
      description: "Custom ERP solution streamlining operations for manufacturing company, reducing costs by 30%.",
      industry: "Manufacturing",
      technologies: "Python, Django, PostgreSQL",
      techStack: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "React"],
      fullDescription: "A comprehensive Enterprise Resource Planning (ERP) system designed specifically for manufacturing operations. The solution integrates inventory management, production planning, supply chain coordination, financial tracking, and human resources into a unified platform, streamlining operations and reducing operational costs by 30%.",
      keyFeatures: [
        "Real-time inventory tracking and automated reordering",
        "Production planning and scheduling optimization",
        "Supply chain management and vendor coordination",
        "Financial management and reporting dashboard",
        "HR management with payroll and attendance tracking",
        "Custom reporting and analytics tools"
      ],
      results: [
        "30% reduction in operational costs",
        "25% improvement in production efficiency",
        "40% reduction in inventory holding costs",
        "50% faster financial reporting",
        "99.5% system reliability"
      ],
    },
  ];

  const handleOpenModal = (caseStudy: CaseStudyData) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = (open: boolean) => {
    if (!open) {
      setIsModalOpen(false);
      // Small delay to allow animation to complete before clearing state
      setTimeout(() => {
        setSelectedCaseStudy(null);
      }, 200);
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-cesta-dark" aria-labelledby="case-studies-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="case-studies-heading" className="text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-soft max-w-2xl mx-auto text-justify">
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
                <p className="text-soft mb-4 text-justify">{study.description}</p>
                <Button
                  onClick={() => handleOpenModal(study)}
                  variant="outline"
                  className="w-full border-cesta-electric/30 text-cesta-electric hover:bg-cesta-electric/10 transition-all hover:scale-[1.02]"
                  aria-label={`View one-pager for ${study.title}`}
                >
                  <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
                  View One-Pager
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-soft mb-4 text-justify">
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

      {/* Case Study Modal */}
      <CaseStudyModal
        open={isModalOpen}
        onOpenChange={handleCloseModal}
        caseStudy={selectedCaseStudy}
      />
    </section>
  );
};

export default CaseStudies;

