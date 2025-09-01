import { Shield } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative pt-24 md:pt-20 pb-8 md:pb-12 min-h-screen flex items-center overflow-hidden">
      {/* Sleek gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-cyan-500/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center py-4 md:py-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full text-blue-200 text-sm font-medium mb-6 fade-in border border-white/10">
              <Shield className="w-4 h-4 mr-2" />
              COMSATS University Lahore - Final Year Project
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in leading-tight">
              Empowering Independence Through
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-1">
                Innovative Vision
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 fade-in max-w-2xl leading-relaxed" style={{ animationDelay: "0.2s" }}>
              OptiPros is a cutting-edge optical prosthetic device that combines advanced sensing technology with on-device AI to assist visually impaired individuals in navigating their world with confidence and privacy.
            </p>



            {/* Clean Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">95%</div>
                <div className="text-xs text-gray-400 font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-xs text-gray-400 font-medium">Operation</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">AI-Powered</div>
                <div className="text-xs text-gray-400 font-medium">Technology</div>
              </div>
            </div>
          </div>

          {/* Clean Hero Image Section */}
          <div className="relative fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              {/* Main hero image with clean styling */}
              <div className="relative z-20 transform rotate-1">
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm">
                  <img
                    src="/hero_image.jpeg"
                    alt="Person wearing OptiPros optical prosthetic device"
                    className="w-full h-[250px] md:h-[350px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-blue-500/10"></div>
                </div>
              </div>



              {/* Compact background decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-24 h-24 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-20 h-20 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
