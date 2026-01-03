import { Layout } from "@/components/Layout";
import {
  Globe,
  Users,
  BookOpen,
  Rocket,
  Heart,
  Star,
  GraduationCap,
  Building,
  Award,
  Sparkles,
  Briefcase,
  Brain,
  Code,
  Puzzle,
} from "lucide-react";

const initiatives = [
  {
    icon: Building,
    title: "Hosting FIRST Regionals & Nationals",
    description:
      "We've been instrumental in bringing official FIRST events to India, hosting FTC, FGC, and FLL regionals. We run the FTC Nationals in India every year, giving local teams the opportunity to compete on home soil.",
    stats: "FTC Nationals Organizer",
  },
  {
    icon: Users,
    title: "Team Creation & Mentorship",
    description:
      "We've started and mentored over 100+ FTC teams, 100+ FLL teams, and 2 FRC teams across India, helping them build their first robots and develop into competitive teams.",
    stats: "200+ Teams Started",
  },
  {
    icon: GraduationCap,
    title: "FTC Masterclass",
    description:
      "Our comprehensive FTC Masterclass teaches students everything there is to know about running a successful FTC team, from building and programming to business and outreach.",
    stats: "Complete Training",
  },
  {
    icon: Award,
    title: "Volunteer & Judge Training",
    description:
      "We conduct training sessions for volunteers and judges, ensuring high-quality officiating at FIRST events across India and building a sustainable ecosystem.",
    stats: "Building Capacity",
  },
  {
    icon: Globe,
    title: "VEX Robotics",
    description:
      "Beyond FIRST, we're also actively involved in the VEX Robotics Competition, expanding access to competitive robotics across different platforms.",
    stats: "Multi-Platform",
  },
  {
    icon: Sparkles,
    title: "Girls Must Drive & Girls in STEM",
    description:
      "Our initiatives focused on empowering girls in robotics and STEM, including hands-on workshops, mentorship programs, and creating opportunities for female students to lead and excel.",
    stats: "Empowering Girls",
  },
  {
    icon: Brain,
    title: "Robotics as Therapy",
    description:
      "Working with actual psychologists, we're alleviating the negative stigma around robotics and helping people realize how fun and relaxing it can be as a therapeutic activity.",
    stats: "Mental Wellness",
  },
  {
    icon: Code,
    title: "STEM Kits & Programming",
    description:
      "We distribute STEM kits teaching children basic electronics and programming including Python, Scratch, and more in BMC schools and CARES Goa schools.",
    stats: "Hands-on Learning",
  },
  {
    icon: Puzzle,
    title: "Math & Physics Sessions",
    description:
      "We conduct Math and Physics sessions in BMC Studio, helping students strengthen their fundamentals and see how these subjects apply to real-world engineering.",
    stats: "Academic Support",
  },
  {
    icon: Briefcase,
    title: "Corporate Outreach",
    description:
      "We've presented at major events like Automation Expo 2025 & 2026, RTX Collins Aerospace in Bangalore, and pitched to companies like Reliance Jio to build industry partnerships.",
    stats: "Industry Connect",
  },
  {
    icon: Building,
    title: "Robotics as a Sport - Goa",
    description:
      "We're actively working with the Goan government to have robotics recognized as an official sport, opening new opportunities for student athletes.",
    stats: "Policy Advocacy",
  },
];

const programs = [
  {
    title: "FIRST LEGO League (FLL)",
    age: "Ages 4-16",
    description:
      "Introducing young students to STEM through LEGO-based robotics challenges.",
    icon: Rocket,
  },
  {
    title: "FIRST Tech Challenge (FTC)",
    age: "Grades 7-12",
    description:
      "Mid-level robotics competition using reusable parts and programming.",
    icon: Star,
  },
  {
    title: "FIRST Global Challenge (FGC)",
    age: "High School",
    description:
      "International robotics olympiad representing India on the world stage.",
    icon: Globe,
  },
  {
    title: "FIRST Robotics Competition (FRC)",
    age: "High School",
    description:
      "The ultimate varsity sport for the mind - building industrial-size robots.",
    icon: Heart,
  },
  {
    title: "VEX Robotics Competition",
    age: "All Ages",
    description:
      "Another major competitive robotics platform we actively support and participate in.",
    icon: Award,
  },
];

const Outreach = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              Outreach
            </p>
            <h1
              className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Inspiring <span className="text-gradient">India's Future</span>
            </h1>
            <p
              className="text-xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              We've embraced a mission that goes far beyond competition -
              spreading STEM education, nurturing new teams, building a robotics
              ecosystem across the nation and encouraging our members to start
              their own initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Teams Started" },
              { value: "10000+", label: "Students Impacted" },
              { value: "5+", label: "Nationals Hosted" },
              { value: "15+", label: "States Reached" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-orbitron font-bold text-3xl md:text-4xl text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Initiatives */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              What We Do
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Our Initiatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From running national competitions to grassroots STEM education,
              we're building the future of robotics in India one initiative at a
              time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <div
                key={initiative.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <initiative.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-base text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {initiative.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {initiative.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST Programs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Programs We Support
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Robotics Programs in India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We actively support and promote all levels of FIRST programs and
              VEX Robotics, helping students progress from LEGO League to the
              ultimate challenge of FRC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-orbitron font-bold text-sm text-foreground mb-1">
                  {program.title}
                </h3>
                <p className="text-primary text-xs mb-3">{program.age}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Want to Start a <span className="text-gradient">Team?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help schools and organizations across India start
              their own robotics teams. Whether it's FLL, FTC, FRC, or VEX, we
              provide mentorship, resources, and support every step of the way.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-orbitron font-bold px-8 py-4 rounded-lg shadow-glow hover:shadow-[0_0_50px_hsl(24,100%,50%,0.5)] transition-all uppercase tracking-wider"
            >
              Get in Touch
              <BookOpen size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Outreach;
