import React from "react";
import bg from "../../assets/background.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
  const icons = [FaFacebook, FaInstagram, FaTwitter, FaYoutube];
  return (
    <div>
      <div className="h-[400px] relative flex flex-col items-center">
        <img src={bg} alt={bg} className="h-full w-full object-cover" />
        <div className="absolute top-[40%] text-white">
          <h1 className="text-center text-3xl font-semibold">Contact Us</h1>
          <div className="flex gap-2 justify-center text-xs mt-5">
            <a href="/" className="hover:text-orange-600">
              Home
            </a>
            <p>-</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="py-28 px-28">
          <div className="flex flex-col gap-3 pb-8">
            <h1 className="text-2xl font-semibold text-zinc-800">
              GET IN TOUCH
            </h1>
            <p className="text-xs text-zinc-600">
              Please enter the details of your request. A member of our support
              staff will respond as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="py-4 border-solid text-zinc-600 border-[1px] text-xs border-zinc-300 px-6 w-96 rounded-md hover:border-zinc-800 ease-in-out duration-300 outline-none"
              />
              <input
                type="text"
                placeholder="YOUR EMAIL"
                className="py-4 border-solid border-[1px] text-zinc-600 text-xs border-zinc-300 px-6 w-96 rounded-md hover:border-zinc-800 ease-in-out duration-300 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="YOUR EMAIL"
                className="py-4 border-solid border-[1px] text-zinc-600 text-xs border-zinc-300 px-6 w-[780px] rounded-md hover:border-zinc-800 ease-in-out duration-300 outline-none"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="YOUR EMAIL"
                className="py-4 h-52 border-solid border-[1px] text-zinc-600 text-xs border-zinc-300 px-6 w-[780px] rounded-md hover:border-zinc-800 ease-in-out duration-300 outline-none"
              />
            </div>
            <div className="mt-4">
              <button className="bg-black text-white hover:bg-orange-700 text-xs font-semibold py-4 px-14 rounded-md ease-in-out duration-300">
                Submit Now
              </button>
            </div>
          </div>
        </div>
        <div className="pr-20 flex flex-col gap-7">
          <h1 className="font-semibold">
            Address:
            <span className="text-zinc-700 font-normal ml-1">
              Teku, Kathmandu, Nepal &
            </span>
            <br />
            <span className="text-zinc-700 font-normal">
              Dhobighat, Lalitpur, Nepal
            </span>
          </h1>
          <div>
            <h1 className="font-semibold">
              Email:
              <span className="text-zinc-700 font-normal ml-1">
                support@domain.com
              </span>
            </h1>
            <h1 className="font-semibold">
              Call Us:
              <span className="text-zinc-700 font-normal ml-1">9813344279</span>
            </h1>
          </div>
          <h1 className="font-semibold">
            Operating time:
            <span className="text-zinc-700 font-normal ml-1">
              Our store has re-opened for shopping,
            </span>
            <span className="text-zinc-700 font-normal ml-1">
              exchanges every day 11am to 7pm
            </span>
          </h1>
          <div className="flex gap-2">
            {icons.map((Icon, index) => (
              <div className="bg-black h-8 w-8 rounded-md flex items-center justify-center hover:bg-orange-600 cursor-pointer duration-300 ease-in-out">
                <Icon key={index} className="text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
