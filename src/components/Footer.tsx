import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { title: "About Us", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Products", href: "#products" },
    { title: "Explore Cars", href: "#explore" },
    { title: "Contact", href: "#contact" },
    { title: "Careers", href: "#careers" },
  ];

  const services = [
    "Premium Maintenance",
    "Extended Warranty",
    "Express Service",
    "Concierge Service",
    "Emergency Roadside",
    "Vehicle Detailing",
  ];

  return (
    <footer className="bg-luxury-dark border-t border-accent/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold hero-text mb-4">SB SERVICES</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner in luxury automotive excellence. Providing premium services for the world's most prestigious vehicles since 1999.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground">+966 12 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground">info@sbservices.sa</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground">Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground">Sat - Thu: 8AM - 8PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-luxury text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-accent transition-luxury text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates on luxury automotive services and exclusive offers.
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Enter your email"
                className="bg-card/50 border-accent/20 text-primary-foreground placeholder:text-muted-foreground"
              />
              <Button variant="luxury" size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-card/50 border border-accent/20 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-luxury"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-accent/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 SB Services. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-accent font-semibold">Premium Automotive Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;