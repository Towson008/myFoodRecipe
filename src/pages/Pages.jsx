import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Popular from "../components/Popular";

function Pages() {
  return (
    <Routes>
      <Route path="/cuisine/:type" element={<Cuisine />} />
      {/* <Route path="/cuisine" element={<Popular />} /> */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Pages;
