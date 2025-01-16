import React from "react";
import { useTheme } from "../../hooks/ThemeContext";

const categoryItems = [
  {
    id: 1,
    title: "Classic Kota",
    des: "(Fresh Kotas)",
    image: "/images/home/kotas/Kota1.jpeg",
  },
  {
    id: 2,
    title: "Crispy Chips",
    des: "(Made from Fresh Potatoes)",
    image: "/images/home/resized/Chips1.png",
  },
  // { id: 3, title: "Drinks", des: "(48 desserts)", image: "/images/home/category/img3.png" },
  {
    id: 4,
    title: "Browse All",
    des: "(Kota and Chips)",
    image: "/images/home/resized/kota&chips.jpeg",
  },
];

const Catagories = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Catagories</h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img src={item.image} alt="" className="" />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
