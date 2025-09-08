import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Wrench, Star, Shield, Trophy, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years Experience", color: "text-accent" },
    { icon: Users, number: "10k+", label: "Happy Clients", color: "text-blue-400" },
    { icon: Wrench, number: "50k+", label: "Services Completed", color: "text-green-400" },
    { icon: Star, number: "4.9", label: "Customer Rating", color: "text-yellow-400" },
  ];

  const features = [
    { icon: Shield, title: "Certified Excellence", description: "Industry-leading certifications and quality standards" },
    { icon: Trophy, title: "Award Winning", description: "Recognized for outstanding service quality" },
    { icon: CheckCircle, title: "Guaranteed Satisfaction", description: "100% satisfaction guarantee on all services" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-luxury rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-accent font-semibold text-lg mb-2 block">About SB Services</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About Saudi British Center
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Saudi British Centre is a leading institution dedicated to promoting health, wellness, and personal development through world-class services and expert guidance. Blending Saudi values with British excellence, the centre offers a wide range of programs including lifestyle management, health consultations, language training, and personal development workshops. With a team of experienced professionals and a client-focused approach, we provide personalized support tailored to individual goals. Our mission is to empower individuals to live healthier, more fulfilling lives through education, innovation, and care. At Saudi British Centre, quality, integrity, and lasting impact define everything we do.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-gradient-to-br from-card to-card/50 border-accent/20 hover:shadow-luxury transition-luxury hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-luxury-dark" />
                    </div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="luxury" size="lg" className="hover-scale">
                Learn More About Us
              </Button>
              <Button variant="luxuryOutline" size="lg" className="hover-scale">
                View Certifications
              </Button>
            </div>
          </div>
          
          {/* Enhanced Image Section */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img 
                src="/us.png"   // ✅ image from public/us.png
                alt="About Us - Professional automotive service center" 
                className="w-3/4 h-auto object-cover mx-auto rounded-2xl hover:scale-105 transition-luxury duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-accent/20 hover:shadow-luxury transition-luxury hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-gold rounded-full mb-3 group-hover:scale-110 transition-luxury">
                <stat.icon className="w-6 h-6 text-luxury-dark" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
