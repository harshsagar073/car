import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-dark/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-accent/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+966 12 345 6789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@luxuryautomotive.sa</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-accent">Premium Automotive Services</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold hero-text">SB SERVICES</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-foreground hover:text-accent transition-luxury">Home</a>
            <a href="#about" className="text-primary-foreground hover:text-accent transition-luxury">About Us</a>
            <a href="#services" className="text-primary-foreground hover:text-accent transition-luxury">Services</a>
            <a href="#products" className="text-primary-foreground hover:text-accent transition-luxury">Products</a>
            <a href="#explore" className="text-primary-foreground hover:text-accent transition-luxury">Explore Cars</a>
            <a href="#contact" className="text-primary-foreground hover:text-accent transition-luxury">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="luxury" size="sm" className="hidden md:inline-flex">
              Get Quote
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-accent/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-primary-foreground hover:text-accent transition-luxury">Home</a>
              <a href="#about" className="text-primary-foreground hover:text-accent transition-luxury">About Us</a>
              <a href="#services" className="text-primary-foreground hover:text-accent transition-luxury">Services</a>
              <a href="#products" className="text-primary-foreground hover:text-accent transition-luxury">Products</a>
              <a href="#explore" className="text-primary-foreground hover:text-accent transition-luxury">Explore Cars</a>
              <a href="#contact" className="text-primary-foreground hover:text-accent transition-luxury">Contact</a>
              <Button variant="luxury" size="sm" className="self-start mt-4">
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;