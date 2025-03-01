import React from "react";
import { IoIosCart } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

export default function Cart() {
  return (
    <div className="h-64 w-96 bg-zinc-100 absolute z-50 right-10 rounded-md">
      <div className="flex items-center gap-1 font-semibold py-3 justify-center border-b-[1px] border-black">
        <span>
          <IoIosCart />
        </span>
        <h1>MY CART</h1>
      </div>
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="mt-5 text-xl font-semibold">No products in the cart.</h1>
        <div>
          <p className="text-zinc-700 px-14">
            Your cart is currently empty. Let us help you find the perfect item!
          </p>
        </div>
        <button className="bg-white py-3 px-7 text-xs rounded-full font-semibold flex items-center gap-1 hover:bg-black hover:text-white ease-in-out duration-300">
          Continue Shopping <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}
