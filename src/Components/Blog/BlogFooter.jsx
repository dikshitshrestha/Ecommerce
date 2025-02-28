import React from "react";
import ktm from "../../assets/kathmandu.jpg";
import llt from "../../assets/lalitpur.jpg";

export default function AboutFooter() {
  return (
    <div>
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-zinc-600">Our Locations</h1>
        <h1 className="text-4xl font-medium text-zinc-800">Stores System</h1>
      </div>
      <div className="grid grid-cols-2 gap-6 px-6 py-10">
        <div>
          <div className="h-[450px] rounded-md  object-cover overflow-hidden">
            <img
              src={ktm}
              alt="ktm"
              className="h-full w-full hover:scale-105 duration-500"
            />
          </div>
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold text-zinc-800">
              Kathmandu Store
            </h1>
            <p className="text-zinc-600 py-1">Teku, Kathmandu, Nepal</p>
          </div>
        </div>
        <div>
          <div className="h-[450px] rounded-md  object-cover overflow-hidden">
            <img
              src={llt}
              alt="lalitpur"
              className="h-full w-full hover:scale-105 duration-500"
            />
          </div>
          <div className="text-center py-6">
            <h1 className="text-2xl font-bold text-zinc-800">Lalitpur Store</h1>
            <p className="text-zinc-600 py-1">Dhobighat, Lalitpur, Nepal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
