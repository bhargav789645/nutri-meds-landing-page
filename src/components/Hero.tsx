import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent/10 to-secondary/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Eat Right.{" "}
                <span className="text-primary">Heal Better.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
                Get personalized nutrition advice that works with your medications.
              </p>
              <p className="text-lg text-trust-gray max-w-xl">
                Avoid harmful food-drug interactions with expert-backed, AI-assisted guidance tailored to your treatment plan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 group"
              >
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="text-lg px-8 py-6 group"
              >
                <Play className="mr-2 h-5 w-5" />
                View Sample Report
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-medical-green rounded-full"></div>
                <span>Clinically Validated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Doctor Approved</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Nutrition and medication guidance illustration"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-medium animate-float">
                <div className="text-sm font-semibold text-primary">Drug Interactions</div>
                <div className="text-xs text-muted-foreground">Real-time monitoring</div>
              </div>
              <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-medium animate-float" style={{animationDelay: '2s'}}>
                <div className="text-sm font-semibold text-medical-green">Safe Foods</div>
                <div className="text-xs text-muted-foreground">Personalized suggestions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;