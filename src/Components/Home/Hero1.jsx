import React from "react";
import leather from "../../assets/Leatherbg.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero1() {
  return (
    <div>
      <div className="h-[750px] bg-zinc-200 overflow-hidden relative">
        <img src={leather} alt="leather" className="absolute -right-[5%]" />
        <div className="h-full flex flex-col justify-center px-16 text-left gap-3">
          <h1 className="text-5xl font-semibold">Leather</h1>
          <h1 className="text-8xl font-bold mb-4">Jackets & Coats</h1>
          <div>
            <button className="py-3 px-8 bg-black text-white rounded-full hover:bg-zinc-400 hover:text-black ease-in-out duration-300 flex items-center gap-2">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
