import { Layout } from "@/components/Layout";
import { Trophy, Calendar, MapPin, Medal, Star, Award } from "lucide-react";

const competitions = [
  {
    year: "2026",
    events: [
      {
        name: "FRC Regional - Long Island",
        location: "Long Island, NY",
        status: "Upcoming",
        result: "Challenge Unreleased",
      },
    ],
  },
  {
    year: "2025",
    challenge: "Reefscape Challenge",
    events: [
      {
        name: "FRC World Championships",
        location: "Houston, TX",
        status: "Completed",
        result: "Participated",
      },
      {
        name: "FRC Regional - Phantom Lakes",
        location: "Chicago, IL",
        status: "Completed",
        result: "Participated",
      },
      {
        name: "FRC Regional - Long Island",
        location: "Long Island, NY",
        status: "Completed",
        result: "Participated",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        name: "FRC Regional",
        location: "International",
        status: "Completed",
        result: "Participated",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        name: "FRC Regional",
        location: "International",
        status: "Completed",
        result: "Participated",
      },
    ],
  },
];

const awards = [
  {
    icon: Trophy,
    title: "Rookie All-Star Award",
    year: "2017",
    description:
      "Recognized for outstanding performance as a rookie team in our debut season.",
  },
  {
    icon: Star,
    title: "Engineering Inspiration",
    year: "Various",
    description:
      "Celebrated for spreading the message of FIRST and inspiring others to embrace STEM.",
  },
  {
    icon: Award,
    title: "Gracious Professionalism",
    year: "Various",
    description:
      "Honored for exemplifying the spirit of gracious professionalism in competition.",
  },
];

const Competitions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
              Competitions
            </p>
            <h1
              className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              Our <span className="text-gradient">Competitive</span> Journey
            </h1>
            <p
              className="text-xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              From our rookie season to becoming a seasoned competitor, explore
              our FRC competition history, regional participations, and the
              awards we've earned along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "9+", label: "Seasons" },
              { value: "15+", label: "Regionals" },
              { value: "5+", label: "Awards" },
              { value: "2", label: "World Championships" },
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

      {/* Awards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              Recognition
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Awards & Achievements
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={award.title}
                className="relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <award.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {award.year}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition History */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-orbitron text-primary uppercase tracking-[0.2em] text-sm mb-4">
              History
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-foreground">
              Competition Timeline
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {competitions.map((season, seasonIndex) => (
              <div
                key={season.year}
                className="animate-fade-in-up"
                style={{ animationDelay: `${seasonIndex * 150}ms` }}
              >
                <h3 className="font-orbitron font-bold text-2xl text-primary mb-2 flex items-center gap-3">
                  <Calendar className="text-primary" size={24} />
                  {season.year} Season
                </h3>
                {season.challenge && (
                  <p className="text-muted-foreground text-sm mb-4 ml-9">
                    Challenge: {season.challenge}
                  </p>
                )}
                <div className="grid gap-4">
                  {season.events.map((event, eventIndex) => (
                    <div
                      key={`${season.year}-${eventIndex}`}
                      className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Trophy className="text-primary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-bold text-foreground mb-1">
                            {event.name}
                          </h4>
                          <p className="text-muted-foreground text-sm flex items-center gap-2">
                            <MapPin size={14} />
                            {event.location}
                          </p>
                        </div>
                      </div>
                      <div className="ml-16 md:ml-0">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === "Upcoming"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Alliance Link */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              For detailed match data and statistics, visit our page on The Blue
              Alliance:
            </p>
            <a
              href="https://www.thebluealliance.com/team/6024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-orbitron font-bold transition-colors"
            >
              View on The Blue Alliance
              <Medal size={18} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Competitions;
