import { useState, useEffect } from "react";
import { Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "technology", "gallery", "team", "contact"];
      let currentSection = "home";

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "technology", label: "Technology" },
    { id: "gallery", label: "Gallery" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl px-4 py-2 shadow-lg">
              <span className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>OptiPros</span>
            </div>
            <div>
              <p className="text-xs text-gray-600">COMSATS University Lahore</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600"
                  }`}
                  data-testid={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
