import { Eye } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">OptiPros</h3>
                <p className="text-sm text-background/70">COMSATS University Lahore</p>
              </div>
            </div>
            <p className="text-background/80 mb-4">
              Empowering independence through innovative optical prosthetic technology designed for the visually impaired community.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Project Information</h4>
            <ul className="space-y-2 text-background/80">
              <li>Final Year Project (FYP)</li>
              <li>COMSATS University Islamabad</li>
              <li>Lahore Campus</li>
              <li>Assistive Technology Research</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Key Features</h4>
            <ul className="space-y-2 text-background/80">
              <li>Path Sensing Mode</li>
              <li>Scene Description Mode</li>
              <li>Text Reading Mode</li>
              <li>Privacy-First Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 OptiPros - Final Year Project, COMSATS University Lahore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
