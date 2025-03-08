import React from "react";
import boy from "../../assets/boy.jpg";
import girl from "../../assets/girl.jpg";
import kid from "../../assets/baby.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function Kids() {
  const kids = [
    {
      image: boy,
      title: "BOY",
    },
    {
      image: girl,
      title: "GIRL",
    },
    {
      image: kid,
      title: "KID",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 mt-8">
      {kids.map((item, index) => (
        <div
          className="relative lg:h-80 w-full h-40 rounded-md overflow-hidden"
          key={index}
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover hover:scale-110 ease-out duration-700 h-full w-full"
          />
          <div className="absolute bottom-2 lg:bottom-4 left-[40%]">
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
