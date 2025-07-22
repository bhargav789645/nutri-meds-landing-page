import { Button } from "@/components/ui/button";
import { Check, X, Crown, Building, Shield } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for trying out NutriMeds",
      icon: null,
      features: [
        { text: "Basic food-drug checks", included: true },
        { text: "Limited AI queries (5/day)", included: true },
        { text: "Community support", included: true },
        { text: "Upload medical reports", included: false },
        { text: "Unlimited AI usage", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started Free",
      variant: "outline-primary",
      popular: false
    },
    {
      name: "Pro",
      price: "₹199",
      period: "per month",
      description: "Complete nutrition guidance for serious health management",
      icon: Crown,
      features: [
        { text: "Unlimited food-drug checks", included: true },
        { text: "Unlimited AI assistant", included: true },
        { text: "Upload & analyze reports", included: true },
        { text: "Personalized meal plans", included: true },
        { text: "Priority support", included: true },
        { text: "Early access to features", included: true },
      ],
      cta: "Start Pro Trial",
      variant: "hero",
      popular: true
    },
    {
      name: "Clinic Plan",
      price: "Custom",
      period: "contact us",
      description: "For healthcare providers and clinics",
      icon: Building,
      features: [
        { text: "Multiple patient management", included: true },
        { text: "API integration", included: true },
        { text: "White-label options", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom training", included: true },
      ],
      cta: "Contact Sales",
      variant: "medical",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, upgrade when you need more. All plans include our core safety features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 ${
                plan.popular ? 'ring-2 ring-primary scale-105 lg:scale-110' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.icon && (
                    <plan.icon className="h-8 w-8 text-primary mr-2" />
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== "contact us" && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
                
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-medical-green flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className={`${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.variant as any} 
                className="w-full text-lg py-6"
                size="lg"
              >
                {plan.cta}
              </Button>

              {plan.name === "Pro" && (
                <p className="text-xs text-muted-foreground text-center mt-4">
                  14-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-soft-success px-6 py-3 rounded-full">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;