import React from "react";

export default function HomeNav({ activeTab, setActiveTab }) {
  return (
    <div className="mt-8 flex justify-center text-sm gap-10 font-semibold text-zinc-400">
      <button
        onClick={() => setActiveTab("men")}
        className={`hover:text-black ease-in-out duration-300 ${
          activeTab === "men" ? "text-black" : ""
        }`}
      >
        SHOP MEN
      </button>
      <button
        onClick={() => setActiveTab("women")}
        className={`hover:text-black ease-in-out duration-300 ${
          activeTab === "women" ? "text-black" : ""
        }`}
      >
        SHOP WOMEN
      </button>
      <button
        onClick={() => setActiveTab("kid")}
        className={`hover:text-black ease-in-out duration-300 ${
          activeTab === "kid" ? "text-black" : ""
        }`}
      >
        SHOP KID
      </button>
    </div>
  );
}
