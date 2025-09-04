import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Share2 } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const Explore = () => {
  const cars = [
    {
      id: 1,
      image: car1,
      brand: "Rolls Royce",
      model: "Phantom",
      year: "2024",
      description: "The pinnacle of luxury motoring with handcrafted excellence and supreme comfort.",
      features: ["V12 Engine", "Starlight Headliner", "Champagne Cooler", "Suicide Doors"],
      price: "Starting from SAR 2,500,000",
      badge: "New Arrival",
      status: "Available"
    },
    {
      id: 2,
      image: car2,
      brand: "Bentley",
      model: "Continental GT",
      year: "2024",
      description: "Grand touring perfection with unmatched performance and British luxury craftsmanship.",
      features: ["W12 Engine", "Diamond Quilted Leather", "Rotating Display", "All-Wheel Drive"],
      price: "Starting from SAR 850,000",
      badge: "Popular",
      status: "Available"
    },
    {
      id: 3,
      image: car3,
      brand: "Lamborghini",
      model: "Huracán",
      year: "2024",
      description: "Italian supercar excellence with breathtaking performance and stunning design.",
      features: ["V10 Engine", "Carbon Fiber Body", "Active Aerodynamics", "Launch Control"],
      price: "Starting from SAR 950,000",
      badge: "Limited",
      status: "Reserved"
    }
  ];

  return (
    <section id="explore" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg">Explore Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Luxury <span className="hero-text">Automotive Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of the world's most prestigious automotive brands, each representing the pinnacle of engineering and design excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="group hover:shadow-luxury transition-luxury overflow-hidden bg-card border-accent/20">
              <div className="relative overflow-hidden">
                {car.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-gold text-luxury-dark font-semibold">
                    {car.badge}
                  </Badge>
                )}
                
                <img 
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-luxury duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-luxury">
                  <Button size="icon" variant="luxuryOutline" className="w-8 h-8">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="luxuryOutline" className="w-8 h-8">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold">{car.brand} {car.model}</CardTitle>
                    <CardDescription className="text-accent font-semibold">{car.year} Model</CardDescription>
                  </div>
                  <Badge variant={car.status === "Available" ? "default" : "secondary"}>
                    {car.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {car.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-bold text-accent mb-4">{car.price}</div>
                  <div className="flex gap-2">
                    <Button variant="luxury" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="luxuryOutline" size="sm">
                      Schedule Test Drive
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="luxury" size="lg" className="px-8">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Explore;