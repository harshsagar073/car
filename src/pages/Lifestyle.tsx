import React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ✅ Image paths (from public folder)
const products = [
  { name: "Bentley Motorsport Cap", image: "/cap.jpg", link: "/cap.jpg" },
  { name: "Bentley Motorsport Vest", image: "/vest.jpg", link: "/vest.jpg" },
  { name: "Bentley Pen Set", image: "/pen.jpg", link: "/pen.jpg" },
  { name: "Bentley Travel Mug", image: "/mug.jpg", link: "/mug.jpg" },
  { name: "Bentley Duffel Bag", image: "/bag.jpg", link: "/bag.jpg" },
  { name: "Bentley Tote Bag", image: "/totebag.jpg", link: "/totebag.jpg" },
  { name: "Bentley Luxury Pen", image: "/luxurypen.jpg", link: "/luxurypen.jpg" },
  { name: "Bentley Keyrings", image: "/keyring.jpg", link: "/keyring.jpg" },
  { name: "Bentley Umbrella", image: "/umbrella.jpg", link: "/umbrella.jpg" },
  { name: "Bentley Polo Shirt", image: "/polo.jpg", link: "/polo.jpg" },
  { name: "Team Performance Jacket", image: "/team.jpg", link: "/team.jpg" },
  { name: "Bently P Bag", image: "/Bently bag.jpg", link: "/Bently bag.jpg" },
  { name: "Bently Lanyard", image: "/Bently lanyard.jpg", link: "/Bently lanyard.jpg" },
  { name: "GT3 Mug", image: "/GT3 Mug.jpg", link: "/GT3 Mug.jpg" },
  { name: "Bentley Water Bottle", image: "/Bootle Water.jpg", link: "/Bootle Water.jpg" },
];

const Lifestyle = () => {
    return (
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 sm:h-64 object-contain bg-gray-100"
              />
              <div className="p-3 sm:p-4 text-center flex flex-col gap-2 sm:gap-3 flex-grow">
                <h2 className="text-base sm:text-lg font-semibold">{product.name}</h2>
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/80 rounded-xl"
                >
                  
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Lifestyle;