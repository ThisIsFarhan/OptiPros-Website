import { Eye, Heart, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl px-4 py-3 shadow-lg">
                <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>OptiPros</span>
              </div>
              <div>
                <p className="text-sm text-gray-400">COMSATS University Lahore</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering independence through innovative optical prosthetic technology designed for the visually impaired community.
            </p>

          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Project Information</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Final Year Project (FYP)</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">COMSATS University Islamabad</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Lahore Campus</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Assistive Technology Research</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Key Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Path Sensing Mode</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Scene Description Mode</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Text Reading Mode</li>
              <li className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">Privacy-First Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OptiPros - Final Year Project, COMSATS University Lahore. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              <span>for accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
