import { Button } from "@/components/ui/button";
import { Wrench, ShoppingCart, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const ctaButtons = [
    {
      label: "Start Repair",
      icon: Wrench,
      path: "/repair",
      variant: "default" as const,
      className: "bg-primary hover:bg-primary/90 text-primary-foreground"
    },
    {
      label: "Shop Green", 
      icon: ShoppingCart,
      path: "/shop",
      variant: "secondary" as const,
      className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
    },
    {
      label: "Track Lifecycle",
      icon: BarChart3, 
      path: "/tracker",
      variant: "outline" as const,
      className: "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable Electronics" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="block">Repair.</span>
              <span className="block text-primary">Reuse.</span>
              <span className="block text-secondary">Reduce E-Waste.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered platform for sustainable electronics. Get expert repair guidance, 
              shop eco-friendly products, and track your device lifecycle.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            {ctaButtons.map((button) => (
              <Button
                key={button.path}
                size="lg"
                variant={button.variant}
                onClick={() => navigate(button.path)}
                className={`w-full sm:w-auto text-base font-semibold px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-elevated ${button.className}`}
              >
                <button.icon className="mr-2 h-5 w-5" />
                {button.label}
              </Button>
            ))}
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI Repair Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Get instant diagnostics and step-by-step repair guidance
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Eco-Smart Shopping</h3>
              <p className="text-sm text-muted-foreground">
                Discover sustainable products with environmental impact scores
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Lifecycle Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor usage, maintenance, and optimize device lifespan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;