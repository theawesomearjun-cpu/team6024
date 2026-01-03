import { Layout } from "@/components/Layout";
import { Globe, Users, BookOpen, Rocket, Heart, Star, GraduationCap, Building } from "lucide-react";
const initiatives = [{
  icon: Building,
  title: "Hosting FIRST Regionals",
  description: "We've been instrumental in bringing official FIRST events to India, hosting FTC, FGC, and FLL regionals that give local teams the opportunity to compete on home soil.",
  stats: "5+ Events Hosted"
}, {
  icon: Users,
  title: "Team Mentorship",
  description: "We've mentored over 100 teams across India, helping them start from scratch, build their first robots, and develop into competitive teams.",
  stats: "100+ Teams Mentored"
}, {
  icon: GraduationCap,
  title: "STEM Education Programs",
  description: "Through workshops, camps, and school visits, we introduce thousands of children to robotics, programming, and engineering concepts.",
  stats: "1000+ Students Reached"
}, {
  icon: Globe,
  title: "National Network Building",
  description: "We're building a nationwide network of robotics teams, creating resources, and fostering collaboration between teams across India.",
  stats: "All India Presence"
}];
const programs = [{
  title: "FIRST LEGO League (FLL)",
  age: "Ages 4-16",
  description: "Introducing young students to STEM through LEGO-based robotics challenges.",
  icon: Rocket
}, {
  title: "FIRST Tech Challenge (FTC)",
  age: "Grades 7-12",
  description: "Mid-level robotics competition using reusable parts and programming.",
  icon: Star
}, {
  title: "FIRST Global Challenge (FGC)",
  age: "High School",
  description: "International robotics olympiad representing India on the world stage.",
  icon: Globe
}, {
  title: "FIRST Robotics Competition (FRC)",
  age: "High School",
  description: "The ultimate varsity sport for the mind - building industrial-size robots.",
  icon: Heart
}];
const Outreach = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              Outreach
            </p>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up" style={{
            animationDelay: "100ms"
          }}>
              Inspiring <span className="text-gradient">India's Future</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{
            animationDelay: "200ms"
          }}>We've embraced a mission that goes far beyond competition - spreading STEM education, nurturing new teams, building a robotics ecosystem across the nation and encouraging our members to strat their own initiatives.</p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{
            value: "100+",
            label: "Teams Mentored"
          }, {
            value: "1000+",
            label: "Students Impacted"
          }, {
            value: "5+",
            label: "Regionals Hosted"
          }, {
            value: "10+",
            label: "States Reached"
          }].map((stat, index) => <div key={stat.label} className="animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <p className="font-orbitron font-bold text-3xl md:text-4xl text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Main Initiatives */}
      

      {/* FIRST Programs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Programs We Support
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              FIRST Programs in India
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We actively support and promote all levels of FIRST programs, helping students progress from LEGO League to the ultimate challenge of FRC.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => <div key={program.title} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-orbitron font-bold text-base text-foreground mb-1">
                  {program.title}
                </h3>
                <p className="text-primary text-xs mb-3">{program.age}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>)}
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
              We're here to help schools and organizations across India start their own FIRST robotics teams. From FLL to FRC, we provide mentorship, resources, and support every step of the way.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-orbitron font-bold px-8 py-4 rounded-lg shadow-glow hover:shadow-[0_0_50px_hsl(24,100%,50%,0.5)] transition-all uppercase tracking-wider">
              Get in Touch
              <BookOpen size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Outreach;