import { Route, Eye, BookOpen, Check } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Route,
      title: "Path Sensing Mode",
      description: "Advanced H-shaped detection frame provides real-time obstacle detection with frequency-based audio feedback system.",
      color: "bg-primary",
      checkColor: "text-primary",
      items: [
        "Higher frequency beeps for objects directly in front",
        "Lower frequency beeps for objects at the bottom",
        "Differentiated signals for left and right detection",
        "Real-time obstacle detection and avoidance",
      ],
    },
    {
      id: 2,
      icon: Eye,
      title: "Scene Description Mode",
      description: "On-device AI models provide real-time environmental awareness with complete privacy protection.",
      color: "bg-accent",
      checkColor: "text-accent",
      items: [
        "Advanced on-device AI processing",
        "No cloud dependency for complete privacy",
        "Real-time environmental awareness",
        "Optimized for local processing efficiency",
      ],
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Text Reading Mode",
      description: "Advanced text recognition capabilities for reading signs, documents, labels, and more with high accuracy.",
      color: "bg-secondary",
      checkColor: "text-secondary",
      items: [
        "High-accuracy text recognition",
        "Reads signs, documents, and labels",
        "Fast processing and immediate feedback",
        "Multiple language support",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Three Revolutionary Modes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            OptiPros features three distinct modes designed to provide comprehensive assistance for daily navigation and environmental awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-card bg-card rounded-xl p-8 border border-border" data-testid={`feature-card-${feature.id}`}>
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3 text-muted-foreground">
                  {feature.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`${feature.checkColor} mt-1 mr-3 h-4 w-4 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
