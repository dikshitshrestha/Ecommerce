import React from "react";
import bg2 from "../../assets/couples.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero3() {
  return (
    <div className="container mx-auto">
      <div className="lg:h-[750px] bg-zinc-200 overflow-hidden relative">
        <img
          src={bg2}
          alt="female"
          className="absolute -right-[40%] xl:-right-[5%] lg:-right-[30%]"
        />
        <div className="h-full flex flex-col justify-center lg:px-16 py-8 px-2 text-left gap-3">
          <h1 className="lg:text-5xl font-semibold">Exclusive</h1>
          <h1 className="xl:text-8xl lg:text-6xl text-2xl font-bold mb-4">
            Collection
          </h1>
          <div>
            <button className="lg:py-3 py-2 px-2 lg:text-sm lg:px-8 text-xs bg-black text-white rounded-full hover:bg-zinc-400 hover:text-black ease-in-out duration-300 flex items-center gap-1 lg:gap-2">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
