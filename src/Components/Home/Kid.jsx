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
    <div className="grid grid-cols-3 mt-8 gap-6 px-6">
      {kids.map((item, index) => (
        <div
          className="overflow-hidden h-80 w-full rounded-md relative"
          key={index}
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover hover:scale-110 ease-in-out duration-700"
          />
          <div className="absolute bottom-4 left-[40%]">
            <button className="flex items-center rounded-full bg-white text-xs font-semibold gap-1 py-3 px-8 hover:bg-black hover:text-white ease-in-out duration-500">
              {item.title}
              <MdArrowOutward />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
