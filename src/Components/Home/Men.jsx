import React from "react";
import { MdArrowOutward } from "react-icons/md";
import leather from "../../assets/leather.jpg";
import pant from "../../assets/cottonpant.jpg";
import swimwear from "../../assets/swimmermen.jpg";

export default function Men() {
  const Men = [
    {
      image: leather,
      title: "Leather",
    },
    {
      image: pant,
      title: "Pant",
    },
    {
      image: swimwear,
      title: "Swimwear",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 mt-8">
      {Men.map((item, index) => (
        <div
          key={index}
          className="relative lg:h-80 h-40 w-full rounded-md overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover hover:scale-110 w-full h-full ease-out duration-700"
          />
          <div className="absolute bottom-2 lg:bottom-4 left-[40%]">
            <button className="flex items-center rounded-full bg-white text-black text-xs font-semibold gap-1 lg:py-3 py-1.5 px-4 lg:px-8 hover:bg-black hover:text-white ease-in-out duration-500">
              {item.title} <MdArrowOutward />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
