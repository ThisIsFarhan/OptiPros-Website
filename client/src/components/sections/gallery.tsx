import { Compass } from "lucide-react";

export default function Gallery() {
  const deviceImages = [
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "OptiPros device front view showing sleek wearable design",
      title: "Front View",
      description: "Sleek, ergonomic design with integrated sensors",
    },
    {
      src: "https://pixabay.com/get/g1250b036d3824e64256b5017321491164f6068156b3c20c3fff2a236c5ff2db819a390571a114913eb8902bea0943b5e799ed171e6d18c1bdf17d5d75b0706ae_1280.jpg",
      alt: "OptiPros device side profile highlighting compact technology integration",
      title: "Side Profile",
      description: "Compact technology integration and comfort features",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "OptiPros device sensor array showing advanced detection technology",
      title: "Sensor Array",
      description: "Advanced detection technology and processing units",
    },
  ];

  const demonstrations = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500",
      alt: "Person using OptiPros device while walking outdoors demonstrating path sensing mode",
      title: "Outdoor Navigation",
      description: "Demonstrating path sensing mode for outdoor navigation and obstacle avoidance",
    },
    {
      src: "https://pixabay.com/get/g2a9fbd9b01d1080fe84d03f819f687de263d340479e69225a7f1dfc7554a1ed1aff8306899b3a5fad59f35b46305ae339a05843c8d896470efb1f7dcc3ab01b6_1280.jpg",
      alt: "Person using OptiPros device to read text documents showcasing text reading mode",
      title: "Text Reading",
      description: "Showcasing text reading mode for documents, signs, and written materials",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gallery & Demonstrations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore OptiPros through images, technical diagrams, and demonstration videos showcasing real-world applications.
          </p>
        </div>

        {/* Device Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Device Images</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {deviceImages.map((image, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border" data-testid={`device-image-${index}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-card-foreground mb-2">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Demonstrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">User Demonstrations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {demonstrations.map((demo, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border" data-testid={`demonstration-${index}`}>
                <img
                  src={demo.src}
                  alt={demo.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-semibold text-card-foreground mb-2">{demo.title}</h4>
                  <p className="text-muted-foreground">{demo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Diagrams */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Diagrams</h3>
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="text-center">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Compass className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
                  <p className="text-muted-foreground">Technical diagrams and system architecture</p>
                  <p className="text-sm text-muted-foreground mt-2">Detailed schematics available in technical documentation</p>
                </div>
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">System Architecture</h4>
              <p className="text-muted-foreground">Comprehensive technical diagrams showing H-shaped detection frame, AI processing pipeline, and component integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
