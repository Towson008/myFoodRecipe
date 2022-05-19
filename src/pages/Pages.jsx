import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/cuisine" element={<Cuisine />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Pages;
