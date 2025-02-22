import React from "react";
import Hero from "./Hero";
import HomeShop from "./HomeShop";
import Quote from "./Quote";
import HomeProducts from "./HomeProducts";
import Subscribe from "./Subscribe";

export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <HomeShop />
      <HomeProducts />
      <Subscribe />
    </div>
  );
}
