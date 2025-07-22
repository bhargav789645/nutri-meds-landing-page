import { Shield, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Medical Studies", value: "10,000+", icon: Award },
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Safety Checks", value: "1M+", icon: Shield }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About NutriMeds
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  NutriMeds was built by doctors, engineers, and AI experts to reduce risks caused by poor nutrition during treatment. We believe safe eating should be part of every prescription.
                </p>
                <p>
                  Our mission is to bridge the gap between medical treatment and nutritional wellness, ensuring that patients can optimize their healing through informed dietary choices.
                </p>
                <p>
                  Every recommendation is backed by peer-reviewed research and validated by healthcare professionals, giving you confidence in your nutrition decisions.
                </p>
              </div>
            </div>

            {/* Team Profiles */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Expert Team</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-semibold">
                  DR
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dr. Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Clinical Pharmacologist</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                  MA
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dr. Michael Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Nutritionist & AI Researcher</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center text-white font-semibold">
                  LK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lisa Kim</div>
                  <div className="text-sm text-muted-foreground">Lead Software Engineer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-accent p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-trust-gray leading-relaxed">
                "To ensure every patient has access to safe, personalized nutrition guidance that complements their medical treatment and accelerates their path to wellness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;