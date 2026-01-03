import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "About", href: "/about" },
    { name: "Competitions", href: "/competitions" },
    { name: "Outreach", href: "/outreach" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "FIRST Robotics Competition", href: "https://www.firstinspires.org/robotics/frc", external: true },
    { name: "FIRST Tech Challenge", href: "https://www.firstinspires.org/robotics/ftc", external: true },
    { name: "FIRST LEGO League", href: "https://www.firstinspires.org/robotics/fll", external: true },
    { name: "FIRST Global Challenge", href: "https://first.global/", external: true },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "mailto:team@rfactor6024.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-glow">
                <span className="font-orbitron font-bold text-xl text-primary-foreground">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-bold text-lg text-foreground tracking-wider">R-FACTOR</span>
                <span className="text-xs text-muted-foreground">FRC Team 6024</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              India's first FIRST Robotics Competition team, inspiring the next generation of innovators and engineers.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FIRST Programs */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              FIRST Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>India</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:team@rfactor6024.com" className="hover:text-primary transition-colors">
                  team@rfactor6024.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} R-Factor FRC Team 6024. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <span className="text-primary">★</span>
            India's First FRC Team
            <span className="text-primary">★</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
