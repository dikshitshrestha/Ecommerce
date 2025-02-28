import React, { useState } from "react";
import bg from "../../assets/background.jpg";
import fashion from "../../assets/Fashion.jpg";
import accessories from "../../assets/Accessories.jpg";
import hoodie from "../../assets/Hoodie.jpg";
import sweater from "../../assets/Sweater.jpg";
import men from "../../assets/leather.jpg";
import women from "../../assets/dress.jpg";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function ShopHeader() {
  const shop = [
    {
      name: "Fashion",
      products: 41,
      img: fashion,
    },
    {
      name: "Accessories",
      products: 13,
      img: accessories,
    },
    {
      name: "Hoodie",
      products: 17,
      img: hoodie,
    },
    {
      name: "Men",
      products: 19,
      img: men,
    },
    {
      name: "Sweater",
      products: 9,
      img: sweater,
    },
    {
      name: "Women",
      products: 22,
      img: women,
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleIndex = 4;
  function handleLeft() {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  }
  function handleRight() {
    if (startIndex + visibleIndex < shop.length) setStartIndex(startIndex + 1);
  }

  return (
    <div>
      <div className="relative pb-52">
        <div className="h-[400px] relative">
          <img src={bg} alt="bg" className="h-full w-full object-cover" />
          <div className="text-white absolute top-[40%] flex flex-col w-full items-center">
            <h1 className="text-3xl">SHOP</h1>
            <h1 className="flex text-xs gap-2 mt-5">
              <a
                href="/"
                className="hover:text-orange-600 ease-in-out duration-300"
              >
                Home
              </a>
              <p>-</p> <p>Shop</p>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 px-14 absolute bottom-[5%]">
          <button
            onClick={handleLeft}
            disabled={startIndex === 0}
            className="bg-white w-12 h-12 rounded-full shadow-black shadow-2xl flex items-center justify-center disabled:opacity-50 hover:bg-black hover:text-white ease-in-out duration-300"
          >
            <FaChevronLeft />
          </button>
          <div className="flex overflow-hidden gap-10">
            {shop
              .slice(startIndex, startIndex + visibleIndex)
              .map((item, index) => (
                <div
                  className="h-72 w-72 flex flex-col justify-center items-center"
                  key={index}
                >
                  <div className="h-3/4 w-3/4 overflow-hidden rounded-full ">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover hover:scale-125 duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <p className="font-light text-zinc-600">
                      {item.products} Products
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="bg-white w-12 h-12 rounded-full shadow-black shadow-2xl flex items-center justify-center disabled:opacity-50 hover:bg-black hover:text-white ease-in-out duration-300"
            onClick={handleRight}
            disabled={startIndex + visibleIndex >= shop.length}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
