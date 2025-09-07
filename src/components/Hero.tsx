import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/1000105774.jpg",
    "/car2.jpg",
    "/public/car3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight">
            <span className="hero-text block animate-scale-in">Premium</span>
            <span className="text-primary-foreground block animate-scale-in animation-delay-200">Automotive</span>
            <span className="hero-text block animate-scale-in animation-delay-400">Excellence</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in animation-delay-600">
            Experience the pinnacle of luxury automotive services with our world-class collection of premium vehicles and expert craftsmanship.
          </p>

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

    
        
          </div>
         
    </section>
  );
};

export default Hero;
