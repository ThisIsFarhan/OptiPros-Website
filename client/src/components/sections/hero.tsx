import { ArrowRight, ServerCog, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 fade-in">
              Empowering Independence Through
              <span className="block text-accent-foreground">Innovative Vision</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in" style={{ animationDelay: "0.2s" }}>
              OptiPros is a cutting-edge optical prosthetic device that combines advanced sensing technology with on-device AI to assist visually impaired individuals in navigating their world with confidence and privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                onClick={() => scrollToSection("features")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 h-auto font-semibold"
                data-testid="cta-features"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn About Our Features
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("technology")}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 h-auto font-semibold"
                data-testid="cta-technology"
              >
                <ServerCog className="mr-2 h-5 w-5" />
                Discover the Technology
              </Button>
            </div>
          </div>
          <div className="relative fade-in" style={{ animationDelay: "0.6s" }}>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Person using innovative assistive technology device"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Privacy First</p>
                  <p className="text-sm text-muted-foreground">On-device processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
