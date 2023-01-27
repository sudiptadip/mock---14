import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Components/Product";
import Homepage from "../Pages/Homepage";
import Searchpage from "../Pages/Searchpage";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}
