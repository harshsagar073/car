import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Volume2, Maximize } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  // Placeholder video data - in a real implementation, these would be actual video URLs
  const videos = [
    {
      id: 1,
      title: "Rolls Royce Phantom - Ultimate Luxury",
      description: "Experience the epitome of automotive luxury with the Rolls Royce Phantom",
      thumbnail: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Bentley Continental GT - Grand Touring",
      description: "Discover the perfect blend of performance and luxury in the Continental GT",
      thumbnail: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
      duration: "2:30"
    },
    {
      id: 3,
      title: "Lamborghini Huracán - Pure Performance",
      description: "Feel the raw power and precision of Italian supercar engineering",
      thumbnail: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop",
      duration: "4:12"
    },
    {
      id: 4,
      title: "SB Services - Behind the Scenes",
      description: "See our expert technicians at work in our state-of-the-art facility",
      thumbnail: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600&h=400&fit=crop",
      duration: "5:20"
    }
  ];

  return (
    <section className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg">Video Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-primary-foreground">
            Experience <span className="hero-text">Automotive Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our exclusive collection of luxury vehicles and behind-the-scenes content showcasing our premium services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden bg-card/50 backdrop-blur-md border-accent/20 shadow-luxury">
              <div className="relative aspect-video bg-luxury-charcoal">
                <img 
                  src={videos[activeVideo].thumbnail}
                  alt={videos[activeVideo].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="w-20 h-20 rounded-full p-0 hover:scale-110 transition-luxury"
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="text-primary-foreground">
                    <h3 className="font-semibold text-lg">{videos[activeVideo].title}</h3>
                    <p className="text-sm text-muted-foreground">{videos[activeVideo].description}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="icon" variant="luxuryOutline" className="w-8 h-8">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="luxuryOutline" className="w-8 h-8">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-luxury-dark/80 px-2 py-1 rounded text-sm text-primary-foreground">
                  {videos[activeVideo].duration}
                </div>
              </div>
            </Card>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-foreground mb-4">Featured Videos</h3>
            
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className={`p-4 cursor-pointer transition-luxury hover:shadow-luxury ${
                  activeVideo === index 
                    ? 'bg-gradient-gold border-accent' 
                    : 'bg-card/50 backdrop-blur-md border-accent/20 hover:bg-card/70'
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="flex gap-3">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-luxury-dark/80 px-1 text-xs text-primary-foreground rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-sm mb-1 ${
                      activeVideo === index ? 'text-luxury-dark' : 'text-primary-foreground'
                    }`}>
                      {video.title}
                    </h4>
                    <p className={`text-xs ${
                      activeVideo === index ? 'text-luxury-dark/70' : 'text-muted-foreground'
                    }`}>
                      {video.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            
            <Button variant="luxuryOutline" className="w-full mt-4">
              View All Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;