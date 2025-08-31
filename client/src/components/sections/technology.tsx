import { Shield, Brain, Feather, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Technology() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const techHighlights = [
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "All processing happens on-device with no data transmission, ensuring complete privacy and security for users.",
      color: "bg-primary",
    },
    {
      icon: Brain,
      title: "Advanced AI Integration",
      description: "Sophisticated machine learning models optimized for local processing deliver intelligent scene understanding.",
      color: "bg-accent",
    },
    {
      icon: Feather,
      title: "Lightweight Hardware",
      description: "Ergonomic, wearable design that's both durable and comfortable for extended daily use.",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description: "Developed with continuous input from the visually impaired community to ensure practical, real-world usability.",
      color: "bg-primary",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cutting-Edge Technology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            OptiPros represents the next generation of assistive technology, combining advanced hardware design with sophisticated AI processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://pixabay.com/get/g7a4d716b4a1e88cb3673f0c19b0ff437f22c78b156391f039e10060f69526f50a0c0dbb48809dc19e290fb0ee81c7a97de674aff10b829a58954555d5f223064_1280.jpg"
              alt="Advanced technology and innovation concept with AI processing"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            {techHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="flex items-start space-x-4" data-testid={`tech-highlight-${index}`}>
                  <div className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-muted rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Technical Specifications</h3>
          <p className="text-muted-foreground mb-6">
            Detailed technical documentation and specifications are available for researchers, academic reviewers, and collaboration inquiries.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-auto font-semibold"
            data-testid="request-documentation"
          >
            <FileText className="mr-2 h-5 w-5" />
            Request Technical Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
