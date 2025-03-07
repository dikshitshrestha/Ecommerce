import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-zinc-100">
      <div className="lg:py-24 py-12 flex flex-col lg:gap-10 gap-5">
        <h1 className="lg:text-2xl text-xl font-medium text-center">
          SUBSCRIBE & GET 15% DISCOUNT
        </h1>
        <div>
          <div className="flex justify-center">
            <div className="flex relative">
              <input
                type="text"
                placeholder="ENTER YOUR EMAIL"
                className="lg:py-6 py-3 lg:pl-12 pl-3 lg:pr-40 text-xs rounded-full lg:w-[600px] w-72 outline-none text-zinc-500 shadow-xl"
              />
              <div className="absolute right-0">
                <button className="lg:py-6 py-3 px-4 lg:px-12 text-xs font-semibold text-white rounded-full bg-black hover:bg-orange-700 ease-in-out duration-300 shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <h1 className="flex gap-1 lg:flex-row flex-col items-center text-xs justify-center mt-5 text-zinc-700">
            By subscribing you agree to our
            <p className="font-semibold">Terms & Conditions</p> and
            <p className="font-semibold">Privacy & Cookies Policy.</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
