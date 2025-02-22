import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-zinc-100">
      <div className="py-24 flex flex-col gap-10">
        <h1 className="text-2xl font-medium text-center">
          SUBSCRIBE & GET 15% DISCOUNT
        </h1>
        <div>
          <div className="flex justify-center">
            <div className="flex relative">
              <input
                type="text"
                placeholder="ENTER YOUR EMAIL"
                className="py-6 pl-12 pr-40 text-xs rounded-full w-[600px] outline-none text-zinc-500 shadow-xl"
              />
              <div className="absolute right-0">
                <button className="py-6 px-12 text-xs font-semibold text-white rounded-full bg-black hover:bg-orange-700 ease-in-out duration-300 shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <h1 className="flex gap-1 text-xs justify-center mt-5 text-zinc-700">
            By subscribing you agree to our
            <p className="font-semibold">Terms & Conditions</p> and
            <p className="font-semibold">Privacy & Cookies Policy.</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
