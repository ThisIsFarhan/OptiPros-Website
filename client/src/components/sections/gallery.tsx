
import { Camera, Video, FileImage } from "lucide-react";

export default function Gallery() {
  const deviceImages = [
    {
      src: "/left.jpg",
      alt: "OptiPros device left view showing sleek wearable design",
      title: "Left View",
      description: "Left side perspective of the OptiPros device",
      category: "Device"
    },
    {
      src: "/right.jpg",
      alt: "OptiPros device right view showing advanced detection technology",
      title: "Right View",
      description: "Right side perspective of the OptiPros device",
      category: "Device"
    },
    {
      src: "/front.jpg",
      alt: "OptiPros device front view showing practical application",
      title: "Front View",
      description: "Front perspective of the OptiPros device",
      category: "Device"
    },
  ];

  const demonstration = {
    alt: "Complete OptiPros demonstration showing all three modes in action",
    title: "Complete OptiPros Demo",
    description: "Watch our comprehensive demonstration showcasing all three operational modes: Path Sensing, Scene Description, and Text Reading in real-world scenarios.",
    duration: "4:32"
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Visual Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery & Demonstrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore OptiPros through high-quality images and demonstration videos showcasing real-world applications.
          </p>
        </div>

        {/* Featured Demo Video */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Video className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Live Demonstration</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
              <div className="relative">
                {/* Video element - Using demo.mp4 from public folder */}
                <video
                  className="w-full h-96 object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Live indicator */}
                <div className="absolute top-6 left-6 flex items-center px-3 py-2 bg-red-500/90 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  DEMO
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{demonstration.title}</h4>
                <p className="text-gray-600 leading-relaxed text-lg">{demonstration.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Device Images */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <FileImage className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Device Gallery</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {deviceImages.map((image, index) => (
              <div
                key={index}
                className="group hover-lift rounded-xl overflow-hidden shadow-lg border border-gray-200/50 transition-all duration-500"
                data-testid={`device-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
