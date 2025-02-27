import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import buttondown from "../../assets/buttondown.jpg";
import coat from "../../assets/coat.jpg";
import croptop from "../../assets/croptop.jpg";
import dress from "../../assets/dress.jpg";
import freeshirt from "../../assets/Fashion.jpg";
import jacket from "../../assets/jacket.jpg";
import jumper from "../../assets/jumper.jpg";
import leather from "../../assets/leather.jpg";
import minishirt from "../../assets/minishirt.jpg";
import miniskirt from "../../assets/miniskirt.jpg";
import cardiganpocket from "../../assets/cardiagnpocket.jpg";
import cargo from "../../assets/cargo.jpg";
import wool from "../../assets/woolcoat.jpg";
import denim from "../../assets/denim.jpg";
import womanjumper from "../../assets/womenjumper.jpg";
import pocketshirt from "../../assets/shirtpocket.jpg";
import biker from "../../assets/biker.jpg";
import { MdArrowOutward } from "react-icons/md";
import { CiStar } from "react-icons/ci";

export default function ShopProducts() {
  const stars = [];
  const products = [
    { name: "Basic jumper for women", img: womanjumper, price: "Rs 2000" },
    { name: "Biker jacket with pockets", img: biker, price: "Rs 3800" },
    { name: "Black biker jacket", img: leather, price: "Rs 3800" },
    { name: "Black cargo jeans", img: cargo, price: "Rs 1800" },
    { name: "Blended wool coat", img: wool, price: "Rs 3800" },
    { name: "Button down jumper", img: buttondown, price: "Rs 2800" },
    { name: "Cardigan with pockets", img: cardiganpocket, price: "Rs 1800" },
    { name: "Classic shirt with pocket", img: pocketshirt, price: "Rs 1400" },
    { name: "Coat with inverted collar", img: coat, price: "Rs 3500" },
    { name: "Denim jacket", img: denim, price: "Rs 2800" },
    { name: "Crop top for women", img: croptop, price: "Rs 800" },
    { name: "Dress for women", img: dress, price: "Rs 2700" },
    { name: "Freely comfortable for women", img: freeshirt, price: "Rs 1500" },
    { name: "Jacket for men", img: jacket, price: "Rs 2700" },
    { name: "Jumper for men", img: jumper, price: "Rs 2200" },
    { name: "Mini shirt dress", img: minishirt, price: "Rs 1800" },
  ];

  Array.from({ length: 5 }).forEach((_, index) =>
    stars.push(<RiStarSFill key={index} />)
  );

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-10 py-20">
        {products.map((item, index) => (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="h-[600px]" key={index}>
              <div className="h-[450px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className={`h-full w-full object-cover object-center rounded-md ${
                    isHovered === index
                      ? "scale-110 duration-700 ease-in-out"
                      : ""
                  }`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className=" text-zinc-400 hover:text-orange-500 ease-in-out duration-300 text-xs mt-4"
                >
                  FASHION
                </a>
                <h1 className="text-[16px] font-semibold">{item.name}</h1>
                <h1 className="flex text-2xl text-zinc-300">
                  {stars} <p className="font-thin text-sm text-zinc-800">(0)</p>
                </h1>
                <h1 className="font-semibold">{item.price}</h1>
              </div>
            </div>
            <div
              className={`h-[450px] absolute inset-0 rounded-md bg-zinc-600 bg-opacity-20 transition-opacity ease-in-out duration-500 ${
                isHovered === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-1/2 flex justify-end p-4">
                <div className="text-xl h-9 w-9 bg-white flex items-center justify-center rounded-full hover:text-white hover:bg-black ease-in-out duration-300 cursor-pointer">
                  <CiStar />
                </div>
              </div>
              <div className="flex items-end h-1/2 py-2 justify-center">
                <button className="text-[10px] font-semibold flex items-center gap-1 py-3.5 px-12 bg-white rounded-md hover:bg-black hover:text-white ease-in-out duration-300">
                  ADD TO CART
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
