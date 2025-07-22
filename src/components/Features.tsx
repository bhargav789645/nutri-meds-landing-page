import { Search, Brain, FileText, Utensils } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Check Food-Drug Interactions",
      description: "Instantly verify if your favorite foods are safe with your current medications using our comprehensive database.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Chat with AI Diet Assistant",
      description: "Get personalized nutrition advice from our AI assistant trained on medical literature and dietary guidelines.",
      color: "text-medical-blue"
    },
    {
      icon: FileText,
      title: "Upload Medical Reports",
      description: "Securely upload your prescriptions and medical reports for more accurate, personalized recommendations.",
      color: "text-medical-green"
    },
    {
      icon: Utensils,
      title: "Get Safer Meal Plans",
      description: "Receive custom meal plans designed around your medications, dietary restrictions, and health goals.",
      color: "text-trust-gray"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What NutriMeds Does
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive nutrition guidance that understands your medications and health needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20 text-center">
          <div className="bg-card p-8 rounded-2xl shadow-medium max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              See It In Action
            </h3>
            <p className="text-muted-foreground mb-6">
              Watch how NutriMeds helps patients make safer dietary choices
            </p>
            <div className="bg-gradient-accent rounded-xl p-16 text-trust-gray">
              {/* Placeholder for demo video/GIF */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                <span className="text-lg font-medium">Demo Video Coming Soon</span>
                <div className="w-4 h-4 bg-medical-green rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;