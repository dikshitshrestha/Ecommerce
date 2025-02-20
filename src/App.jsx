import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Pages from "./Components/Pages";
import Product from "./Components/Product";
import Search from "./Components/Search";
import Shop from "./Components/Shop";
import Wishlist from "./Components/Wishlist";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/blog",
      element: (
        <>
          <Navbar />
          <Blog />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/pages",
      element: (
        <>
          <Navbar />
          <Pages />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar />
          <Product />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Navbar />
          <Search />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />
          <Shop />
        </>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <>
          <Navbar />
          <Wishlist />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
