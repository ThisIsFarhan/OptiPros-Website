import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Lead Developer & Project Manager",
      description: "Computer Science student specializing in AI and machine learning. Leading the development of on-device AI models and system integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      alt: "Team member - Lead Developer and Project Manager",
    },
    {
      name: "Fatima Ali",
      role: "Hardware Engineer & UX Researcher",
      description: "Electronics Engineering student focused on sensor integration and user experience design. Conducts user research with visually impaired community.",
      image: "https://pixabay.com/get/g097b1efc3fcbf582b8badb176b78a44616ab934f34985d1f4f42e32d41438cff1cdf5f0ef00e9d72f6a694c967320ef4e410a43a5a479475bdd819432e52988d_1280.jpg",
      alt: "Team member - Hardware Engineer and UX Researcher",
    },
    {
      name: "Muhammad Zain",
      role: "Software Engineer & AI Specialist",
      description: "Software Engineering student specializing in computer vision and natural language processing. Develops text recognition and scene description algorithms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      alt: "Team member - Software Engineer and AI Specialist",
    },
    {
      name: "Aisha Khan",
      role: "Research Coordinator & Testing Lead",
      description: "Biomedical Engineering student coordinating research activities and conducting comprehensive testing with user groups and accessibility experts.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      alt: "Team member - Research Coordinator and Testing Lead",
    },
    {
      name: "Omar Sheikh",
      role: "Data Analyst & Quality Assurance",
      description: "Computer Science student focusing on data analysis, performance optimization, and quality assurance for all three operational modes.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      alt: "Team member - Data Analyst and Quality Assurance",
    },
    {
      name: "Dr. Sarah Ahmed",
      role: "Project Supervisor & Academic Advisor",
      description: "Associate Professor of Computer Science with expertise in assistive technologies and human-computer interaction. FYP supervisor and research mentor.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300",
      alt: "Team member - Project Supervisor and Academic Advisor",
    },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team of students and researchers from COMSATS University Lahore working to revolutionize assistive technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border text-center" data-testid={`team-member-${index}`}>
              <img
                src={member.image}
                alt={member.alt}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
              <p className="text-accent mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
              <p className="text-xs text-muted-foreground">COMSATS University Lahore</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Final Year Project Team</h3>
            <p className="text-muted-foreground mb-6">
              OptiPros is being developed as a Final Year Project at COMSATS University Lahore, combining academic research with practical innovation to create meaningful assistive technology.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-auto font-semibold"
              data-testid="meet-team-cta"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
