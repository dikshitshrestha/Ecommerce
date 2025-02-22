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
    <div className="grid grid-cols-3 gap-6 px-6 mt-8">
      {Men.map((item, index) => (
        <div
          key={index}
          className="relative h-80 w-full rounded-md overflow-hidden"
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover hover:scale-110 ease-out duration-700"
          />
          <div className="absolute bottom-4 left-[40%]">
            <button className="flex items-center rounded-full bg-white text-xs font-semibold gap-1 py-3 px-8 hover:bg-black hover:text-white ease-in-out duration-500">
              {item.title} <MdArrowOutward />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
