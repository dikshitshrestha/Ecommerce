import React from "react";
import croptop from "../../assets/croptop.jpg";
import dresses from "../../assets/dress.jpg";
import swimwear from "../../assets/swimsuit.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function Women() {
  const women = [
    {
      image: croptop,
      title: "CROP TOP",
    },
    {
      image: dresses,
      title: "DRESSES",
    },
    {
      image: swimwear,
      title: "SWIMWEAR",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-6 px-6 mt-8">
      {women.map((item, index) => (
        <div
          className="relative lg:h-80 w-full h-40 rounded-md overflow-hidden"
          key={index}
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover hover:scale-110 ease-out duration-700 h-full w-full"
          />
          <div className="absolute bottom-2 lg:bottom-4 lg:left-[40%] left-[30%]">
            <button className="flex items-center rounded-full bg-white text-black text-xs font-semibold gap-1 lg:py-3 py-1.5 px-4 lg:px-8 hover:bg-black hover:text-white ease-in-out duration-500">
              {item.title}
              <MdArrowOutward />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
