import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, Clock, Star } from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: Wrench,
      title: "Premium Maintenance",
      description: "Comprehensive maintenance services for luxury vehicles with genuine parts and expert technicians.",
      features: ["Oil Change & Filter", "Brake Service", "Engine Diagnostics", "Transmission Service"],
      price: "Starting from SAR 500",
      badge: "Most Popular",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Protect your investment with our comprehensive extended warranty coverage for all luxury brands.",
      features: ["Engine Protection", "Electrical Coverage", "24/7 Roadside Assistance", "Loaner Vehicle"],
      price: "Starting from SAR 2,500",
      badge: "Premium",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick turnaround services for busy professionals who value their time without compromising quality.",
      features: ["Same Day Service", "Priority Booking", "Mobile Service", "Pick & Drop"],
      price: "Starting from SAR 300",
      badge: "Fast",
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Star,
      title: "Concierge Service",
      description: "White-glove service experience with dedicated service advisors and luxury amenities.",
      features: ["Personal Service Advisor", "Luxury Lounge", "Valet Service", "Detail Package"],
      price: "Starting from SAR 1,000",
      badge: "Exclusive",
      gradient: "from-amber-500/20 to-amber-600/20"
    }
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-luxury-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-lg">Our Products & Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6 text-primary-foreground">
            Premium <span className="hero-text">Service Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted service packages designed to meet the unique needs of luxury vehicle owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-md border-accent/30 hover:shadow-luxury transition-luxury group hover:scale-105 hover:border-accent/50 animate-fade-in`} style={{ animationDelay: `${index * 150}ms` }}>
              {service.badge && (
                <Badge className="absolute -top-3 left-6 bg-gradient-gold text-luxury-dark font-semibold shadow-gold">
                  {service.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-4 group-hover:scale-110 transition-luxury shadow-gold">
                  <service.icon className="w-8 h-8 text-luxury-dark" />
                </div>
                <CardTitle className="text-xl font-bold text-primary-foreground group-hover:text-accent transition-luxury">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 group-hover:bg-primary-foreground transition-luxury" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-accent/30">
                  <div className="text-2xl font-bold text-accent mb-4 group-hover:text-primary-foreground transition-luxury">{service.price}</div>
                  <Button variant="luxuryOutline" size="sm" className="w-full hover-scale group-hover:bg-accent group-hover:text-luxury-dark">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-600">
          <Button variant="luxury" size="lg" className="px-8 hover-scale">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;