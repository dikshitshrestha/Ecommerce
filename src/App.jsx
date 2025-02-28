import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Pages from "./Components/Pages/Pages";
import Shop from "./Components/Shop/Shop";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeShop from "./Components/Home/HomeShop";
import Men from "./Components/Home/Men";
import Women from "./Components/Home/Women";
import Kid from "./Components/Home/Kid";
import Blog from "./Components/Blog/Blog";

export default function () {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home/shop/men" element={<Home />} />
          <Route path="/home/shop/women" element={<Women />} />
          <Route path="/home/shop/kid" element={<Kid />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
