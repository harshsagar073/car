import React from "react";

const services = [
  { title: "Check coolant", image: "/coolant.jpg" },
  { title: "Change Gear fluid oil", image: "/gear.jpg" },
  { title: "Change brake fluid", image: "/break.jpg" },
  { title: "Change engine oil", image: "/oil.jpg" },
  { title: "Change spaces", image: "/spaces.jpg" },
  { title: "Battery service", image: "/Battery.jpg" },
  { title: "Change oil filter", image: "/filter.jpg" },
  { title: "Change air filter", image: "/air filter.jpg" },
  { title: "A/C filter cleaning", image: "/ac clean.jpg" },
  { title: "Check and fill tire air", image: "/filter air.jpg" },
  { title: "Hydraulic power steering system", image: "/Power1.jpg" },
  { title: "MBS Engine flush", image: "/MBs.jpg" },
];

const videos = [
    { title: "Luxury Car Engine Service", src: "/video1.mp4" },
    { title: "Brake & Gear Maintenance", src: "/video2.mp4" },
    { title: "Battery & Oil Change", src: "/video3.mp4" },
    { title: "Complete Vehicle Checkup", src: "/video4.mp4" },
  ];
  
  const Services: React.FC = () => {
    return (
      <div className="p-6 md:p-10 bg-yellow-400 min-h-screen">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
          Our Premium Services
        </h1>
  
        {/* Services Grid - fully responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-contain mb-3"
              />
              <p className="font-semibold text-black">{service.title}</p>
            </div>
          ))}
        </div>
  
        {/* Videos Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
          Watch Our Services in Action
        </h2>
  
        <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg flex-shrink-0 w-72 sm:w-80 md:w-96"
            >
              <h3 className="text-lg font-semibold mb-2 text-black">
                {video.title}
              </h3>
              <video
                controls
                className="w-full h-48 sm:h-56 md:h-60 rounded-xl shadow-md object-cover"
                src={video.src}
              ></video>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;