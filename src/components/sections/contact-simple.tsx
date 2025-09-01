import { MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="COMSATS University campus background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-gray-900/90"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in learning more about OptiPros? Connect with our team for collaboration opportunities or academic inquiries.
          </p>
        </div>

        {/* Collaboration Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Interested in Collaboration?</h3>
            <p className="text-gray-300 mb-8 text-center text-lg leading-relaxed">
              We welcome partnerships with researchers, institutions, and organizations working in assistive technology and accessibility.
            </p>

            {/* Collaboration opportunities */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Research Collaboration</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Technology Transfer</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Academic Partnerships</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Industry Collaboration</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-pink-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Accessibility Testing</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></div>
                <p className="text-white font-medium">Innovation Partnerships</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}