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
];

const Lifestyle = () => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Our Products
      </h1>

      {/* ✅ Mobile Carousel */}
      <div className="block md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="basis-4/5">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain bg-gray-100"
                  />
                  <div className="p-4 text-center flex flex-col gap-3 flex-grow">
                    <h2 className="text-base font-semibold">{product.name}</h2>
                    <Button
                      asChild
                      className="bg-primary text-white hover:bg-primary/80 rounded-lg text-sm"
                    >
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                      </a>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain bg-gray-100"
            />
            <div className="p-4 text-center flex flex-col gap-3 flex-grow">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/80 rounded-xl"
              >
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;

