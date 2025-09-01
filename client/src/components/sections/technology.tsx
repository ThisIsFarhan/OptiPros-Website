import { Shield, Brain, Feather, Users, Cpu, Zap, Lock, Heart } from "lucide-react";
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
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      accent: "text-green-500",
    },
    {
      icon: Brain,
      title: "Advanced AI Integration",
      description: "Sophisticated machine learning models optimized for local processing deliver intelligent scene understanding.",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      accent: "text-purple-500",
    },
    {
      icon: Feather,
      title: "Lightweight Hardware",
      description: "Ergonomic, wearable design that's both durable and comfortable for extended daily use.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      accent: "text-blue-500",
    },
    {
      icon: Users,
      title: "User-Centric Approach",
      description: "Developed with continuous input from the visually impaired community to ensure practical, real-world usability.",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      accent: "text-orange-500",
    },
  ];

  const techSpecs = [
    { icon: Cpu, label: "Processing Power", value: "ARM Cortex-A78" },
    { icon: Zap, label: "Battery Life", value: "12+ Hours" },
    { icon: Lock, label: "Security", value: "On-Device Only" },
    { icon: Heart, label: "Weight", value: "< 150g" },
  ];

  return (
    <section id="technology" className="py-16 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Advanced Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            OptiPros represents the next generation of assistive technology, combining advanced hardware design with sophisticated AI processing.
          </p>
        </div>

        {/* Compact tech specs bar */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {techSpecs.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <IconComponent className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white mb-1">{spec.value}</div>
                <div className="text-xs text-gray-400">{spec.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Compact technology showcase */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/banner_image.jpeg"
                alt="Advanced technology and innovation concept with AI processing"
                className="rounded-xl shadow-xl w-full h-auto border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Compact technology highlights */}
          <div className="space-y-6">
            {techHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/8 transition-all duration-300"
                  data-testid={`tech-highlight-${index}`}
                >
                  <div className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact call to action */}
        <div className="text-center mt-12">
          <Button
            onClick={() => scrollToSection("gallery")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Brain className="mr-2 h-4 w-4" />
            See It In Action
          </Button>
        </div>
      </div>
    </section>
  );
}
