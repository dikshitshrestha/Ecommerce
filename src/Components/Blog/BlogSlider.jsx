import React, { useState } from "react";
import fashion1 from "../../assets/fashion1.jpg";
import fashion2 from "../../assets/fashion2.jpg";
import fashion3 from "../../assets/fashion3.jpg";
import fashion4 from "../../assets/fashion4.jpg";
import fashion5 from "../../assets/fashion5.jpg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function AboutSlider() {
  const fashion = [
    { img: fashion1 },
    { img: fashion2 },
    { img: fashion3 },
    { img: fashion4 },
    { img: fashion5 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 2;

  function handleLeft() {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  }

  function handleRight() {
    if (startIndex + visibleItems < fashion.length)
      setStartIndex(startIndex + 1);
  }

  return (
    <div>
      <div className="text-center text-zinc-500 flex flex-col gap-4">
        <h1>Real customer experience</h1>
        <h1 className="text-zinc-800 lg:text-4xl text-2xl font-medium">
          Photos From Our Clients
        </h1>
      </div>
      <div className="lg:mt-14 mt-4">
        <div className="grid grid-cols-2 px-6 gap-6">
          {fashion
            .slice(startIndex, startIndex + visibleItems)
            .map((item, index) => (
              <div className="lg:h-[500px] overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt="photo"
                  className="h-full object-cover hover:scale-105 duration-500"
                />
              </div>
            ))}
        </div>
        <div className="py-10 flex items-center justify-center gap-7">
          <button
            onClick={handleLeft}
            disabled={startIndex === 0}
            className="bg-white shadow-black shadow-2xl py-4 px-4 rounded-full hover:bg-black hover:text-white duration-300 ease-in-out disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleRight}
            disabled={startIndex + visibleItems >= fashion.length}
            className="bg-white shadow-black shadow-2xl py-4 px-4 rounded-full hover:bg-black hover:text-white duration-300 ease-in-out disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
