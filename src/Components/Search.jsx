import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className="absolute z-50 w-full px-6 bg-zinc-100 py-10">
      <div className="flex items-center shadow-2xl rounded-full">
        <div className="px-2 bg-white border-r-[1px] absolute left-6 z-50 rounded-l-full">
          <select
            name="category"
            id="category"
            className="outline-none focus:outline-none text-xs font-semibold px-2 py-4 rounded-l-full"
          >
            <option value="">All</option>
            <option value="Accessories" className="">
              Accessories
            </option>
            <option value="Fashion">Fashion</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="SEARCH YOUR PRODUCT"
          className="outline-none py-4 px-32 text-[12px] w-full relative rounded-full "
        />
        <button className="h-10 w-10 flex justify-center items-center bg-black rounded-full text-white text-xl absolute right-7 hover:bg-orange-600 duration-300">
          <IoSearch />
        </button>
      </div>
    </div>
  );
}
