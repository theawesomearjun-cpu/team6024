import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Globe, BookOpen, ChevronRight, Zap, Target, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "2016", label: "Founded" },
  { value: "1st", label: "FRC Team in India" },
  { value: "100+", label: "Teams Mentored" },
  { value: "1000+", label: "Students Impacted" },
];

const sections = [
  {
    icon: Users,
    title: "About Us",
    description: "Discover our journey as India's pioneering FIRST Robotics team - our history, values, and the passionate members driving innovation.",
    link: "/about",
    delay: "0ms",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Explore our competitive journey through FRC regionals and championships, showcasing our achievements and awards.",
    link: "/competitions",
    delay: "100ms",
  },
  {
    icon: Globe,
    title: "Outreach",
    description: "Learn about our mission to spread STEM education across India - hosting regionals, mentoring teams, and inspiring young minds.",
    link: "/outreach",
    delay: "200ms",
  },
  {
    icon: BookOpen,
    title: "Resources",
    description: "Access our curated collection of resources designed to help FIRST teams succeed in their robotics journey.",
    link: "/resources",
    delay: "300ms",
  },
];

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with creative engineering solutions and cutting-edge technology.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we design, build, and compete.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a nationwide network of young engineers and inspiring the next generation.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-orbitron text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
              FRC Team 6024
            </p>
            <h1 className="font-orbitron font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <span className="text-gradient">R-FACTOR</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              India's First FIRST Robotics Competition Team
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Inspiring innovation, engineering excellence, and the spirit of gracious professionalism across the nation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <Link to="/about">
                <Button variant="hero" size="xl">
                  Explore Our Story
                  <ChevronRight size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-orbitron font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground uppercase tracking-wider text-sm">
                  {stat.label}
                </p>
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
              What Drives Us
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Discover
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Explore R-Factor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sections.map((section) => (
              <Link
                key={section.title}
                to={section.link}
                className="group relative p-8 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: section.delay }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <section.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-orbitron font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                    {section.title}
                    <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to Join the <span className="text-gradient">Revolution?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you're a student looking to join, a sponsor wanting to support, or a team seeking mentorship - we'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Contact Us Today
                <ChevronRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
