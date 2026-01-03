import { Layout } from "@/components/Layout";
import { FileText, Video, Code, Wrench, Download, ExternalLink, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    icon: FileText,
    title: "Documentation & Guides",
    description: "Comprehensive guides for team management, robot design, and competition preparation.",
    resources: [
      { name: "Starting an FRC Team - Complete Guide", type: "PDF" },
      { name: "FRC Game Manual Breakdown", type: "Guide" },
      { name: "Team Organization Best Practices", type: "Article" },
    ],
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video tutorials on robot building, programming, and strategy.",
    resources: [
      { name: "Introduction to FRC Programming", type: "Video Series" },
      { name: "Mechanical Design Fundamentals", type: "Workshop Recording" },
      { name: "Scouting & Strategy Tips", type: "Tutorial" },
    ],
  },
  {
    icon: Code,
    title: "Code Repositories",
    description: "Open-source code from our robots and helper libraries for common FRC tasks.",
    resources: [
      { name: "R-Factor Robot Code Archive", type: "GitHub" },
      { name: "Vision Processing Examples", type: "Repository" },
      { name: "Autonomous Path Planning", type: "Code Library" },
    ],
  },
  {
    icon: Wrench,
    title: "CAD & Design Files",
    description: "3D models, CAD files, and design documents from our robots and mechanisms.",
    resources: [
      { name: "Drivetrain Designs Collection", type: "CAD Files" },
      { name: "Intake Mechanism Library", type: "3D Models" },
      { name: "Electronics Layout Templates", type: "Design Files" },
    ],
  },
];

const quickLinks = [
  { name: "FIRST Inspires", url: "https://www.firstinspires.org/", icon: ExternalLink },
  { name: "The Blue Alliance", url: "https://www.thebluealliance.com/", icon: ExternalLink },
  { name: "Chief Delphi Forums", url: "https://www.chiefdelphi.com/", icon: ExternalLink },
  { name: "WPILib Documentation", url: "https://docs.wpilib.org/", icon: ExternalLink },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              Resources
            </p>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Tools for <span className="text-gradient">Success</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              We believe in sharing knowledge. Access our collection of resources, guides, and tools designed to help FIRST teams at every level succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-primary-foreground/80 font-orbitron text-sm uppercase tracking-wider mr-4">
              Quick Links:
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm transition-colors"
              >
                {link.name}
                <link.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Browse By Category
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Resource Library
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resourceCategories.map((category, index) => (
              <div 
                key={category.title}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-xl text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.resources.map((resource) => (
                    <li 
                      key={resource.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-foreground text-sm">{resource.name}</span>
                      <span className="text-primary text-xs font-medium px-2 py-1 bg-primary/10 rounded">
                        {resource.type}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6" size="sm">
                  <Download size={16} className="mr-2" />
                  View All Resources
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
                Pro Tips
              </p>
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
                Advice From Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { tip: "Start simple and iterate. A working simple robot beats a non-functional complex one.", icon: Lightbulb },
                { tip: "Document everything. Future you (and your successors) will thank you.", icon: BookOpen },
                { tip: "Build relationships with other teams. Gracious professionalism opens doors.", icon: ExternalLink },
                { tip: "Practice autonomous early and often. Those points can make or break matches.", icon: Code },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-orbitron font-bold text-2xl text-foreground mb-4">
              Need Something Specific?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Reach out and we'll help you or create a resource for it.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-orbitron font-bold transition-colors"
            >
              Contact Us
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
