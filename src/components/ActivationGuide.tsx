import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ActivationStep {
  number: number;
  title: string;
  description: string;
}

interface ActivationGuideProps {
  title: string;
  subtitle: string;
  icon: string;
  devices: string;
  steps: ActivationStep[];
  portalCode?: string;
}

export default function ActivationGuide({
  title,
  subtitle,
  icon,
  devices,
  steps,
  portalCode,
}: ActivationGuideProps) {
  return (
    <Card className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-6 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{devices}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Subtitle */}
        <p className="text-sm text-foreground bg-background/50 p-4 rounded-lg border border-border/50">
          {subtitle}
        </p>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <h4 className="font-semibold text-foreground mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except last) */}
              {idx < steps.length - 1 && (
                <ArrowRight className="text-accent/30 flex-shrink-0 mt-8" size={20} />
              )}
            </div>
          ))}
        </div>

        {/* Portal Code */}
        {portalCode && (
          <div className="bg-background border-2 border-accent/30 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">رمز البوابة</p>
            <p className="text-2xl font-bold text-accent font-mono">{portalCode}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
