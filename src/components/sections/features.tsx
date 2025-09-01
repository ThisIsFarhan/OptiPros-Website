import { Route, Eye, BookOpen, Check, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Route,
      title: "Path Sensing Mode",
      description: "Advanced H-shaped detection frame provides real-time obstacle detection with frequency-based audio feedback system.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      checkColor: "text-blue-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      checkColor: "text-purple-500",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      checkColor: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      items: [
        "High-accuracy text recognition",
        "Reads signs, documents, and labels",
        "Fast processing and immediate feedback",
        "Multiple language support",
      ],
    },
  ];



  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Powerful Modes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OptiPros features three distinct modes designed to provide comprehensive assistance for daily navigation and environmental awareness.
          </p>
        </div>



        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group hover-lift bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200/50 transition-all duration-500"
                data-testid={`feature-card-${feature.id}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Feature icon header */}
                <div className="p-6 border-b border-gray-100">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center shadow-lg mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full ${feature.color} flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
