import { Layout } from "@/components/Layout";
import { Mail, MapPin, Instagram, Youtube, Linkedin, Twitter, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and partnership opportunities",
    value: "team@rfactor6024.com",
    href: "mailto:team@rfactor6024.com",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in India, inspiring globally",
    value: "India",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within",
    value: "24-48 hours",
    href: null,
  },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", handle: "@rfactor6024", href: "#" },
  { icon: Youtube, name: "YouTube", handle: "R-Factor 6024", href: "#" },
  { icon: Twitter, name: "Twitter", handle: "@rfactor6024", href: "#" },
  { icon: Linkedin, name: "LinkedIn", handle: "R-Factor", href: "#" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling would go here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              Contact
            </p>
            <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Whether you want to join our team, partner with us, or need guidance starting your own robotics program - we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="p-6 rounded-xl bg-card border border-border text-center group hover:border-primary/50 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {info.description}
                </p>
                {info.href ? (
                  <a href={info.href} className="text-primary font-medium hover:text-primary/80 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-primary font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="join">Join the Team</option>
                    <option value="mentorship">Team Mentorship</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="resources">Resources & Help</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                    placeholder="Tell us what you're looking for..."
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Social Links & Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="font-orbitron font-bold text-2xl text-foreground mb-6">
                Follow Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Stay updated with our latest projects, competitions, and outreach activities by following us on social media.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-4">
                  Looking to Start a Team?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We offer free mentorship for new FIRST teams in India. Whether you're starting an FLL, FTC, or FRC team, we can guide you through the entire process - from registration to your first competition.
                </p>
                <p className="text-primary font-medium text-sm">
                  Select "Team Mentorship" in the form and tell us about your school or organization!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
