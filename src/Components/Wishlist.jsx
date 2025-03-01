import React from "react";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Wishlist() {
  return (
    <div className="h-64 w-96 bg-zinc-100 absolute z-50 right-10 rounded-md">
      <div className="flex items-center gap-1 font-semibold py-3 justify-center border-b-[1px] border-black">
        <span>
          <FaStar />
        </span>
        <h1>MY Wishlist</h1>
      </div>
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="mt-5 text-xl font-semibold">
          No products in the wishlist.
        </h1>
        <div>
          <p className="text-zinc-700 px-14">
            Your wishlist is currently empty. Let us help you find the perfect
            item!
          </p>
        </div>
        <button className="bg-white py-3 px-7 text-xs rounded-full font-semibold flex items-center gap-1 hover:bg-black hover:text-white ease-in-out duration-300">
          Make Wishlist <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}
