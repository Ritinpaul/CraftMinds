import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface CaseStudyData {
  id: number;
  title: string;
  description: string;
  industry: string;
  technologies: string;
  techStack: string[];
  fullDescription?: string;
  keyFeatures?: string[];
  results?: string[];
}

interface CaseStudyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  caseStudy: CaseStudyData | null;
}

const CaseStudyModal = ({ open, onOpenChange, caseStudy }: CaseStudyModalProps) => {
  if (!caseStudy) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card glass-border border border-white/10 bg-cesta-overlay/95 backdrop-blur-xl text-foreground"
        aria-labelledby="case-study-title"
        aria-describedby="case-study-description"
      >
        <DialogHeader>
          <DialogTitle id="case-study-title" className="text-2xl font-bold text-white">
            {caseStudy.title}
          </DialogTitle>
          <DialogDescription id="case-study-description" className="text-soft pt-2">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="outline" className="border-cesta-electric/30 text-cesta-electric">
                {caseStudy.industry}
              </Badge>
              <span className="text-soft">•</span>
              <span className="text-soft">{caseStudy.technologies}</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
            <p className="text-soft leading-relaxed">
              {caseStudy.fullDescription || caseStudy.description}
            </p>
          </div>

          {/* Tech Stack */}
          {caseStudy.techStack && caseStudy.techStack.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-cesta-purple/20 text-cesta-electric border-cesta-electric/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {caseStudy.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-soft flex items-start">
                    <span className="text-cesta-electric mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <>
              <Separator className="bg-white/10" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Results & Impact</h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="text-soft flex items-start">
                      <span className="text-cesta-gold mr-2">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyModal;

