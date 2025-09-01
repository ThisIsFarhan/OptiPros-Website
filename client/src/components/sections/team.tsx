import { Users, Linkedin, Mail, GraduationCap, Award, User, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamData from "@/data/team.json";

export default function Team() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const { teamMembers, supervisor } = teamData;
  const allMembers = [...teamMembers, supervisor];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Passionate Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team of students and researchers from COMSATS University Lahore working to revolutionize assistive technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {allMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 transition-all duration-500 hover:shadow-xl"
              data-testid={`team-member-${member.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image or Placeholder */}
              {member.profileImage ? (
                <div className="relative">
                  <img
                    src={member.profileImage}
                    alt={`${member.name}`}
                    className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Member Information */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.department}</p>
                <p className="text-gray-500 text-xs">CUI Lahore, Pakistan</p>

                {/* Social Links */}
                <div className="flex space-x-3 mt-4">
                  {member.github && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white border-0"
                      onClick={() => window.open(member.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-0"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* University info */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">COMSATS University Lahore</h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This project is being developed as a Final Year Project (FYP) at COMSATS University Lahore,
            one of Pakistan's leading institutions for technology and engineering education.
          </p>
          <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            Learn More About COMSATS
          </Button>
        </div>
      </div>
    </section>
  );
}
