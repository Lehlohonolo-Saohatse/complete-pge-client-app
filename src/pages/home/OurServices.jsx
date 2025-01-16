import React from "react";
import { Link } from "react-router-dom";

const serviceLists = [
    {id:1, title: "Catering", des: "We serve fresh crispy fried chips and kotas", img: "/images/home/services/icons/icon1.png"},
    {id:2, title: "Fast Food", des: "You do not have to wait hours for food to be ready", img: "/images/home/services/icons/icon2.png"},
    //{id:3, title: "Online Ordering", des: "Explore menu & order with ease", img: "/images/home/services/icons/icon3.png"},
    {id:3, title: "Online Ordering", des: "Coming Soon!" , img: "/images/home/services/icons/icon3.png"},
    {id:4, title: "Internet Cafe", des: "We offer intenet cafe services", img: "/images/home/services/icons/icon6.png"},
]

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Kasi Flavors & Vibes</h2>
            <p className="my-5 text-secondary leading-[30px]">
            Inspired by the heart of the hood, we bring you unforgettable flavors and unmatched vibes. From sizzling street-style treats to soulful hospitality, we serve up kasi culture on every serve!
            </p>

            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              <Link to="/menu">Explore</Link>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            <h5 className="pt-3 font-semibold"> {service.title}</h5>
                            <p className="text-[#90BD95]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
