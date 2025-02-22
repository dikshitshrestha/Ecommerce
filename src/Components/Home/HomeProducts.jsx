import React from "react";
import { FaStar } from "react-icons/fa6";
import tshirt from "../../assets/tshirt.jpg";
import slogan from "../../assets/printed.jpg";
import oversize from "../../assets/oversize.jpg";
import printed from "../../assets/printed2.jpg";
import jacket from "../../assets/jacket.jpg";
import skirt from "../../assets/miniskirt.jpg";
import shirt from "../../assets/minishirt.jpg";
import jumper from "../../assets/jumper.jpg";
import buttondown from "../../assets/buttondown.jpg";
import coat from "../../assets/coat.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function HomeProducts() {
  const Stars = [];
  const Products = [
    { name: "Viscose T-shirt", image: tshirt, price: "Rs 750" },
    { name: "T-shirt with slogan", image: slogan, price: "Rs 800" },
    { name: "Oversized T-shirt", image: oversize, price: "Rs 1100" },
    { name: "Printed T-shirt", image: printed, price: "Rs 1000" },
    { name: "Personality jacket for man", image: jacket, price: "Rs 2700" },
    { name: "Mini skirt", image: skirt, price: "Rs 1600" },
    { name: "Mini shirt dress", image: shirt, price: "Rs 1800" },
    { name: "High turtleneck jumper", image: jumper, price: "Rs 2200" },
    { name: "Button down jumper", image: buttondown, price: "Rs 2800" },
    { name: "Coat with inverted collar", image: coat, price: "Rs 3500" },
  ];

  Array.from({ length: 5 }).forEach((_, index) =>
    Stars.push(<FaStar key={index} />)
  );
  return (
    <div className="py-28">
      <h1 className="text-2xl font-semibold text-center">NEW ARRIVALS</h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-8 px-6 py-14">
        {Products.map((item, index) => (
          <div>
            <div className="h-80 w-full overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover bg-center"
              />
            </div>
            <a
              href="/shop"
              className="text-[10px] text-zinc-500 hover:text-orange-600"
            >
              FASHION
            </a>
            <div className="py-2 flex flex-col gap-3">
              <h1 className="hover:text-orange-600 cursor-pointer">
                {item.name}
              </h1>
              <div className="flex items-center gap-1">
                <div className="text-zinc-300 flex">{Stars}</div>
                <h1 className="text-xs text-zinc-600">(0)</h1>
              </div>
              <h1 className="font-semibold">{item.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <a href="/shop" className="flex justify-center">
        <div className="text-xs font-semibold flex items-center gap-1 px-11 py-4 rounded-full bg-gray-100 hover:bg-black hover:text-white duration-300 ease-in-out">
          SHOP ALL PRODUCTS <MdArrowOutward />
        </div>
      </a>
    </div>
  );
}
