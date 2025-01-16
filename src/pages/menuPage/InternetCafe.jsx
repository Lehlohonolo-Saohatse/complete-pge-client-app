import React from "react";

const InternetCafe = () => {
  const services = [
    {
      name: "High-Speed Internet",
      description:
        "Enjoy reliable, fast internet for all your browsing, streaming, and online needs.",
      price: "R20/hour",
      image: "/images/high-speed-internet.jpg",
    },
    {
      name: "Printing Services",
      description:
        "Affordable printing, scanning, and copying services for your convenience.",
      price: "Starting at R2/page",
      image: "/images/printing-services.jpg",
    },
    {
      name: "Online Services Assistance",
      description:
        "Get help with online applications, registrations, and more.",
      price: "R30/session",
      image: "/images/online-services-assistance.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}

      <div
        className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%`}
      >
        <div className="py-48 flex flex-col items-center justify-center">
          {/* Header Section */}
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Seamless{" "}
              <span className="text-green">Connectivity</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Experience high-speed internet, reliable services, and space for
              all your online needs. Perfect for productivity and convenience at
              an affordable price!
            </p>
            <a className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Visit Now
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <p className="text-lg font-semibold text-green mt-2">
                  {service.price}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternetCafe;
