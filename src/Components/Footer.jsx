import React from "react";
import logo from "../assets/Ecommerce_Logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";

export default function Footer() {
  const icons = [<FaFacebookF />, <FaTwitter />, <FaPinterest />, <FaTiktok />];

  const company = [
    "ABOUT US",
    "CONTACT US",
    "STORE LOCATIONS",
    "FAQS",
    "TESTIMONIAL",
  ];

  const support = [
    "HELP AND ADVICE",
    "SHIPPING & RETURNS",
    "TERMS AND CONDITIONS",
    "REFUND POLICY",
    "SIZE GUIDE",
  ];

  const login = [
    "LOGIN",
    "REGISTER ACCOUNT",
    "MY WISHLIST",
    "MY COMPARE",
    "CHECKOUT",
  ];

  const pages = [
    "FAQS",
    "SITEMAP",
    "STORE LOCATIONS",
    "REFUND POLICY",
    "CAREERS",
  ];

  const payments = [
    <RiVisaLine />,
    <FaPaypal />,
    <FaGooglePay />,
    <FaApplePay />,
  ];
  return (
    <div className="container mx-auto">
      <div className="flex lg:flex-row flex-col">
        <div className="border-[1px] py-20 px-6 flex flex-col gap-7 lg:w-2/6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-7" />
            <h1 className="text-2xl font-bold">Buyverly</h1>
          </div>
          <div className="text-sm text-zinc-600 flex flex-col gap-1.5">
            <p>
              With seamless shopping, secure payments, and fast delivery,
              Buyverly ensures a hassle-free experience. Buyverly is your
              ultimate fashion destination, offering high-quality clothing for
              every style.
            </p>
          </div>
          <div>
            <h1 className="text-xs font-semibold text-zinc-800">
              FOLLOW US ON :
            </h1>
            <div className="flex gap-2 mt-4">
              {icons.map((item, index) => (
                <button key={index}>
                  <div className="h-9 w-9 flex items-center justify-center bg-gray-200 rounded-full hover:bg-black hover:text-white ease-in-out duration-300">
                    {item}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:py-20 py-10 xl:px-20 flex md:flex-row flex-col justify-center items-center gap-8 lg:gap-20 xl:gap-40 border-y-[1px] lg:w-4/6">
          <div>
            <h1 className="font-semibold">COMPANY INFO</h1>
            <div className="flex flex-col text-xs text-zinc-500 lg:gap-4 gap-2 lg:mt-6 mt-2 font-medium">
              {company.map((item, index) => (
                <a
                  href="#"
                  className="hover:text-orange-600 ease-in-out duration-300"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-semibold">HELP & SUPPORT</h1>
            <div className="flex flex-col text-xs text-zinc-500 lg:gap-4 gap-2 lg:mt-6 mt-2 font-medium">
              {support.map((item, index) => (
                <a
                  href="#"
                  className="hover:text-orange-600 ease-in-out duration-300"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-semibold">MY ACCOUNT</h1>
            <div className="flex flex-col text-xs text-zinc-500 lg:gap-4 gap-2 lg:mt-6 mt-2 font-medium">
              {login.map((item, index) => (
                <a
                  href="#"
                  className="hover:text-orange-600 ease-in-out duration-300"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:px-7 px-4 flex lg:flex-row flex-col justify-center gap-10 xl:gap-60 items-center">
        <div className="flex flex-col gap-3 lg:text-sm xl:text-[17px] text-zinc-600">
          <h1 className="flex items-center gap-2">
            <FaLocationDot />
            Lalitpur Store: Dhobighat, Lalitpur, Nepal
          </h1>
          <h1 className="flex items-center gap-2">
            <FaLocationDot />
            Kathmandu Store: Teku, Kathmandu, Nepal
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 text-xs text-zinc-600">
            {pages.map((item, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="hover:text-orange-600 ease-in-out duration-500"
                >
                  {item}
                </a>
                {index !== pages.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
          <h1 className="text-zinc-700 text-center xl:text-[17px] lg:text-sm mt-5">
            Copyright © 2025 DikshitShrestha. All Rights Reserved.
          </h1>
        </div>
        <div className="flex xl:gap-5 gap-2">
          {payments.map((item, index) => (
            <div
              key={index}
              className="xl:text-4xl text-2xl bg-slate-100 py-2 px-2 rounded-full hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
