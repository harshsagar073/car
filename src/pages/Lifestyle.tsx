import React from "react";
import { Button } from "@/components/ui/button";


const products = [
    { name: "Bentley Motorsport Cap", image: "public/cap.jpg", link: "public/cap.jpg" },
  { name: "Bentley Motorsport Vest", image: "public/vest.jpg", link: "public/vest.jpg" },
  { name: "Bentley Pen Set", image: "public/pen.jpg", link: "public/pen.jpg" },
  { name: "Bentley Travel Mug", image: "public/mug.jpg", link: "public/mug.jpg" },
  { name: "Bentley Duffel Bag", image: "public/bag.jpg", link: "public/bag.jpg" },
  { name: "Bentley Tote Bag", image: "public/totebag.jpg", link: "public/totebag.jpg" },
  { name: "Bentley Luxury Pen", image: "/public/luxurypen.jpg", link: "public/luxurypen.jpg" },
  { name: "Bentley Keyrings", image: "public/keyring.jpg", link: "public/keyring.jpg" },
  { name: "Bentley Umbrella", image: "public/umbrella.jpg", link: "public/umbrella.jpg" },
  { name: "Bentley Polo Shirt", image: "public/polo.jpg", link: "public/polo.jpg" },
];

const Lifestyle = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                <a href={product.link} target="_blank" rel="noopener noreferrer">
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
