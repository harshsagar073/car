import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-hero animate-fade-in" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-fade-in animation-delay-300">
        <div className="hidden lg:flex items-center gap-2 bg-luxury-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-accent/20">
          <Star className="w-4 h-4 text-accent" />
          <span className="text-sm text-primary-foreground">Premium Excellence</span>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-10 animate-fade-in animation-delay-500">
        <div className="hidden lg:flex items-center gap-2 bg-luxury-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-accent/20">
          <Award className="w-4 h-4 text-accent" />
          <span className="text-sm text-primary-foreground">25+ Years Experience</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Mobile optimized heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            <span className="hero-text block animate-scale-in">Premium</span>
            <span className="text-primary-foreground block animate-scale-in animation-delay-200">Automotive</span>
            <span className="hero-text block animate-scale-in animation-delay-400">Excellence</span>
          </h1>
          
          {/* Responsive description */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-600">
            Experience the pinnacle of luxury automotive services with our world-class collection of premium vehicles and expert craftsmanship.
          </p>
          
          {/* Responsive button layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 animate-fade-in animation-delay-800">
            <Button variant="luxury" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto hover-scale">
              Explore Collection
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button variant="luxuryOutline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto hover-scale">
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Watch Video
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-1000">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>10k+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>50+ Luxury Brands</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>24/7 Premium Support</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 hidden sm:block">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;