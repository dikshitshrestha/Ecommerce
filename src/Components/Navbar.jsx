import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div>
      <div className="flex items-center py-8 px-8 justify-evenly border-y-4">
        <div>Logo</div>
        <div className="flex text-xs text-zinc-700 gap-8">
          <a
            href=""
            className="flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300"
          >
            HOME <MdKeyboardArrowDown />
          </a>
          <a
            href=""
            className="flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300"
          >
            SHOP <MdKeyboardArrowDown />
          </a>
          <a
            href=""
            className="flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300"
          >
            PRODUCT
            <MdKeyboardArrowDown />
          </a>
          <a
            href=""
            className="flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300"
          >
            PAGES <MdKeyboardArrowDown />
          </a>
          <a
            href=""
            className="flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300"
          >
            BLOG <MdKeyboardArrowDown />
          </a>
        </div>
        <div className="flex items-center gap-10">
          <div className="h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)]">
            <LiaSearchSolid />
          </div>
          <div className="h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)]">
            <CiStar />
          </div>
          <div className="h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)]">
            <BsCart2 />
          </div>
          <div className="relative flex items-center text-xs gap-3 font-semibold text-zinc-700 w-48 h-14 bg-zinc-200 rounded-3xl py-2 px-1">
            <div
              className={`absolute top-1 bottom-1 w-20 text-black bg-white rounded-full transition-all duration-300`}
              style={{
                left: activeButton === 1 ? "4px" : "50%",
              }}
            ></div>
            <a href="">
              <div
                onMouseEnter={() => setActiveButton(1)}
                className={`relative z-10 text-[10px] py-3 px-6 rounded-full transition-all duration-300`}
              >
                LOGIN
              </div>
            </a>
            <a href="">
              <div
                onMouseEnter={() => setActiveButton(2)}
                className={`relative z-10 text-[10px] py-3 px-6 rounded-full transition-all duration-300 cursor-pointer`}
              >
                REGISTER
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
