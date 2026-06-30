import { Check } from "lucide-react";

interface PackageDetailsProps {
  packageId: string;
  packageName: string;
  description: string;
  features: string[];
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function PackageDetails({
  packageName,
  description,
  features,
  highlights,
}: PackageDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          🚀 اشتراك {packageName}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Why Choose */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          💡 لماذا تختار اشتراك {packageName}؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-background p-6 rounded-lg border border-border/50 hover:border-accent/50 transition-all"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          ✨ المزايا الرئيسية:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="text-accent flex-shrink-0 mt-1" size={20} />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          ✨ اشترك الآن واستمتع بعالم من الترفيه المتكامل!
        </h2>
        <p className="text-muted-foreground mb-6">
          احصل على أفضل تجربة مشاهدة مع {packageName}
        </p>
        <a href="/subscription">
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold transition-all">
            طلب الاشتراك الآن
          </button>
        </a>
      </div>
    </div>
  );
}
