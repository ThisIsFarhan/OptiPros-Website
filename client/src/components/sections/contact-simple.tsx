import { Mail, MapPin, University, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in learning more about OptiPros? Connect with our team for collaboration opportunities or academic inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Project Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <University className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Academic Institution</h4>
                  <p className="text-muted-foreground">COMSATS University Islamabad<br />Lahore Campus</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Project Type</h4>
                  <p className="text-muted-foreground">Final Year Project (FYP)<br />Assistive Technology Research</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Contact Methods</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Email Inquiry</h4>
                  <p className="text-muted-foreground">For academic inquiries and collaboration opportunities</p>
                  <Button 
                    className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.location.href = 'mailto:optipros.cui@gmail.com'}
                    data-testid="email-contact"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Visit Us</h4>
                  <p className="text-muted-foreground">COMSATS University Islamabad<br />Lahore Campus<br />Defense Road, Off Raiwind Road<br />Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}