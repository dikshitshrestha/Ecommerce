import React from "react";
import bg from "../assets/background.jpg";

export default function Login() {
  return (
    <div>
      <div
        className="h-[400px] relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "Cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white">
          <h1 className="text-center text-3xl font-semibold">MY ACCOUNT</h1>
          <div className="flex gap-2 justify-center text-xs mt-5">
            <a href="/" className="hover:text-orange-600">
              Home
            </a>
            <p>-</p>
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="py-28 w-1/2 flex justify-center border-r-[1px]">
          <form className="flex flex-col gap-10">
            <h1 className="text-center text-2xl font-semibold">
              Login to Buyverly
            </h1>

            <div className="flex flex-col gap-3">
              <h1 className="flex gap-2 text-sm font-semibold text-zinc-700">
                Username or email address <p className="text-orange-500">*</p>
              </h1>
              <input
                type="text"
                className="border-[1px] w-[500px] h-12 rounded-md focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex gap-2 text-sm font-semibold text-zinc-700">
                Password <p className="text-orange-500">*</p>
              </h1>
              <input
                type="text"
                className="border-[1px] h-12 w-[500px] rounded-md focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black px-3"
                required
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <h1>Remember me</h1>
            </div>
            <div>
              <button className="text-xs h-12 font-bold w-[500px] text-center bg-zinc-100 py-3 rounded-md hover:bg-black hover:text-white ease-in-out duration-300">
                LOG IN
              </button>
            </div>
          </form>
        </div>
        <div className="py-28 w-1/2 flex justify-center">
          <form className="flex flex-col gap-10">
            <h1 className="text-center text-2xl font-semibold">
              Register to Buyverly
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="flex gap-2 text-sm font-semibold text-zinc-700">
                Username <p className="text-orange-500">*</p>
              </h1>
              <input
                type="text"
                className="border-[1px] w-[500px] h-12 rounded-md focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex gap-2 text-sm font-semibold text-zinc-700">
                Email address <p className="text-orange-500">*</p>
              </h1>
              <input
                type="text"
                className="border-[1px] h-12 w-[500px] rounded-md focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="flex gap-2 text-sm font-semibold text-zinc-700">
                Password <p className="text-orange-500">*</p>
              </h1>
              <input
                type="text"
                className="border-[1px] h-12 w-[500px] rounded-md focus:outline-none focus:ring-1 focus:ring-black hover:ring-1 hover:ring-black px-3"
                required
              />
            </div>
            <div>
              <button className="text-xs h-12 font-bold w-[500px] text-center bg-zinc-100 py-3 rounded-md hover:bg-black hover:text-white ease-in-out duration-300">
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
