import React, { useState } from "react";
import bg from "../../assets/homebg.jpg";
import Hero3 from "./Hero3";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Hero() {
  const pages = ["one", "two", "three"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(0);

  function left() {
    setActiveIndex((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  }

  function right() {
    setActiveIndex((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  }
  return (
    <div>
      <div className="h-36 relative ">
        <img src={bg} alt="bg" className="h-full w-full object-cover" />
        <div className="absolute top-[40%] right-12">
          <h1 className="flex gap-1.5 text-xl font-semibold text-white">
            DON'T MISS <p className="text-yellow-300">70% OFF</p> ALL SALE! NO
            CODE NEEDED!
          </h1>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
      >
        <div className="relative">
          {pages[activeIndex] === "one" && <Hero1 />}
          {pages[activeIndex] === "two" && <Hero2 />}
          {pages[activeIndex] === "three" && <Hero3 />}
        </div>
        <div className="absolute top-[90%] left-1">
          <button
            onClick={left}
            className={`bg-black text-white py-4 px-4 rounded-full ease-in-out duration-300 hover:bg-zinc-400 hover:text-black ${
              isHovered === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-[90%] right-2">
          <button
            onClick={right}
            className={`bg-black text-white py-4 px-4 rounded-full ease-in-out duration-300 hover:bg-zinc-400 hover:text-black ${
              isHovered === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
