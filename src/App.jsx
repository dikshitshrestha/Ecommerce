import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Pages from "./Components/Pages/Pages";
import Product from "./Components/Product/Product";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login";
import Wishlist from "./Components/Wishlist";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeShop from "./Components/Home/HomeShop";
import Men from "./Components/Home/Men";
import Women from "./Components/Home/Women";
import Kid from "./Components/Home/Kid";

export default function () {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
