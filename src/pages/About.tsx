import { Layout } from "@/components/Layout";
import {
  Users,
  Calendar,
  Award,
  Target,
  Lightbulb,
  Heart,
  Camera,
  Wrench,
  Code,
  Megaphone,
} from "lucide-react";

const timeline = [
  {
    year: "2016",
    event: "R-Factor founded as India's first FRC team",
    highlight: true,
  },
  { year: "2017", event: "First FRC Regional participation - Rookie All-Star Award" },
  { year: "2018", event: "Started mentoring other FIRST teams across India" },
  { year: "2019", event: "Hosted first FTC regional in India" },
  { year: "2020-21", event: "Virtual outreach and online mentorship programs" },
  { year: "2022", event: "Expanded to mentor 50+ teams nationwide" },
  { year: "2023", event: "Launched Girls Must Drive and STEM kit distribution programs" },
  { year: "2024", event: "Started 100+ FTC and 100+ FLL teams across India" },
  { year: "2025", event: "Competed at FRC World Championships - Houston (Reefscape)", highlight: true },
  { year: "2026", event: "Continuing to build the future of robotics in India" },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in engineering, teamwork, and sportsmanship in everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and innovative thinking to solve complex engineering challenges.",
  },
  {
    icon: Heart,
    title: "Gracious Professionalism",
    description:
      "We compete hard but treat everyone with respect, embodying FIRST's core philosophy.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in lifting others up and building a strong robotics community across India.",
  },
];

const departments = [
  {
    icon: Wrench,
    name: "Mechanical",
    description: "Design and build the robot's physical structure and mechanisms.",
  },
  {
    icon: Code,
    name: "Programming",
    description: "Code the robot's autonomous and teleop functionality.",
  },
  {
    icon: Megaphone,
    name: "Business & Outreach",
    description: "Handle sponsorships, marketing, and community initiatives.",
  },
  {
    icon: Camera,
    name: "Media & Documentation",
    description: "Capture and share our journey through photos, videos, and content.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              About Us
            </p>
            <h1
              className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              India's <span className="text-gradient">Pioneering</span> FRC Team
            </h1>
            <p
              className="text-xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Since 2016, R-Factor has been at the forefront of bringing FIRST
              Robotics to India, inspiring thousands of students and building a
              nationwide community of young engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
                Our Mission
              </p>
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
                Inspiring the Next Generation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                R-Factor was founded with a singular vision: to bring the
                transformative power of FIRST Robotics Competition to India. As
                the country's first FRC team, we've taken on the responsibility
                of not just competing, but of building an entire ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission extends beyond the competition field. We're
                dedicated to mentoring teams, hosting regionals and nationals,
                and spreading STEM education to every corner of India. Through
                our outreach programs, we've touched the lives of over 10,000
                students, showing them that engineering and robotics are paths
                to a brighter future.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From running FTC Nationals to distributing STEM kits in
                underserved schools, from our Girls Must Drive initiative to
                advocating for robotics as a sport in Goa - we're building a
                movement, not just a team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every child deserves access to quality STEM
                education, and we work tirelessly to make that a reality.
              </p>
            </div>
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-2xl bg-primary shadow-glow flex items-center justify-center mx-auto mb-6">
                      <span className="font-orbitron font-bold text-4xl text-primary-foreground">
                        R
                      </span>
                    </div>
                    <p className="font-orbitron font-bold text-2xl text-foreground">
                      FRC Team 6024
                    </p>
                    <p className="text-primary mt-2">Est. 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Placeholder */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Our Journey
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Team Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the workshop to the competition field, here are some moments
              that define R-Factor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { label: "Competition Day", placeholder: "Team at FRC Regional" },
              { label: "Workshop", placeholder: "Building the robot" },
              { label: "Outreach", placeholder: "Teaching students" },
              { label: "Team Photo", placeholder: "Full team 2025" },
              { label: "Awards", placeholder: "Receiving an award" },
              { label: "Mentorship", placeholder: "Training new teams" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="aspect-video rounded-xl bg-background border border-border flex items-center justify-center group hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center p-6">
                  <Camera className="text-muted-foreground/50 mx-auto mb-3" size={32} />
                  <p className="font-orbitron text-sm text-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.placeholder}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              What We Stand For
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              How We Work
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Team Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              R-Factor operates like a real engineering company, with
              specialized departments working together to build winning robots
              and create lasting impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="p-6 rounded-xl bg-background border border-border text-center hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <dept.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-orbitron font-bold text-foreground mb-2">
                  {dept.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Our Journey
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              The R-Factor Story
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 mb-8 animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 ${
                      item.highlight
                        ? "bg-primary shadow-glow"
                        : "bg-muted-foreground"
                    }`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-4 rounded-lg bg-card border border-border ${
                      index % 2 === 0
                        ? "md:text-right md:mr-auto"
                        : "md:text-left md:ml-auto"
                    }`}
                  >
                    <p
                      className={`font-orbitron font-bold text-lg ${
                        item.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.year}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              The People
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              R-Factor is powered by passionate students, dedicated mentors, and
              supportive sponsors who share our vision of bringing world-class
              robotics education to India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { icon: Users, label: "Students", count: "30+" },
              { icon: Award, label: "Mentors", count: "10+" },
              { icon: Calendar, label: "Years Active", count: "9+" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="text-center p-8 rounded-xl bg-background border border-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <p className="font-orbitron font-bold text-3xl text-primary mb-2">
                  {item.count}
                </p>
                <p className="text-muted-foreground uppercase tracking-wider text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Team Member Placeholders */}
          <div className="max-w-5xl mx-auto">
            <h3 className="font-orbitron font-bold text-xl text-foreground text-center mb-8">
              Leadership & Mentors
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { role: "Lead Mentor", name: "Nilesh" },
                { role: "Team Captain", name: "Name" },
                { role: "Mechanical Lead", name: "Name" },
                { role: "Programming Lead", name: "Name" },
              ].map((member, index) => (
                <div
                  key={member.role}
                  className="text-center p-6 rounded-xl bg-background border border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Users className="text-muted-foreground" size={32} />
                  </div>
                  <p className="font-orbitron font-bold text-foreground">
                    {member.name}
                  </p>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
