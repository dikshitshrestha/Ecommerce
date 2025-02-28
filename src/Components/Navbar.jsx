import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import logo from "../assets/Ecommerce_Logo.png";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(1);
  const [popUp, setPopUp] = useState(null);

  return (
    <div>
      <div className="flex items-center py-8 px-8 gap-36">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-2xl font-semibold">Buyverly</h1>
        </div>
        <div className="flex text-xs text-zinc-600 gap-8 ml-72">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300 ${
                isActive ? "text-black font-semibold" : ""
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300 ${
                isActive ? "text-black font-semibold" : ""
              }`
            }
          >
            SHOP
          </NavLink>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300 ${
                isActive ? "text-black font-semibold" : ""
              }`
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center hover:text-black hover:font-semibold hover:ease-in-out hover:duration-300 ${
                isActive ? "text-black font-semibold" : ""
              }`
            }
          >
            BLOG
          </NavLink>
        </div>
        <div className="flex items-center gap-5 ml-20">
          <button
            onClick={() => setPopUp(popUp === "search" ? null : "search")}
            className={`h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer ${
              popUp === "search" ? "bg-black text-white" : ""
            }`}
          >
            <LiaSearchSolid />
          </button>
          <button
            onClick={() => setPopUp(popUp === "wishlist" ? null : "wishlist")}
            className={`h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer ${
              popUp === "wishlist" ? "bg-black text-white" : ""
            }`}
          >
            <CiStar />
          </button>
          <button
            onClick={() => setPopUp(popUp === "cart" ? null : "cart")}
            className={`h-12 w-12 flex items-center justify-center text-xl rounded-full shadow-[5px_2px_15px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer ${
              popUp === "cart" ? "bg-black text-white" : ""
            }`}
          >
            <BsCart2 />
          </button>
          <div className="relative flex items-center text-xs gap-5 font-semibold text-zinc-700 w-48 h-12 bg-zinc-200 rounded-3xl py-2 px-1">
            <div
              className={`absolute top-1 bottom-1 w-[5.8rem] text-black bg-white rounded-full transition-all duration-300`}
              style={{
                left: activeButton === 1 ? "4px" : "50%",
              }}
            ></div>
            <NavLink to="/login">
              <div
                onMouseEnter={() => setActiveButton(1)}
                className={`relative z-10 text-[10px] py-3 px-6 rounded-full transition-all duration-300`}
              >
                LOGIN
              </div>
            </NavLink>
            <NavLink to="/login">
              <div
                onMouseEnter={() => setActiveButton(2)}
                className={`relative z-10 text-[10px] py-3 px-6 rounded-full transition-all duration-300 cursor-pointer`}
              >
                REGISTER
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {popUp === "search" && <Search />}
      {popUp === "cart" && <Cart />}
      {popUp === "wishlist" && <Wishlist />}
    </div>
  );
}
