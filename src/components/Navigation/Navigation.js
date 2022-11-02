import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gradient from "../../pages/Gradient/Gradient";
import Pallet from "../../pages/Pallet/Pallet";
import Saved from "../../pages/Saved/Saved";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gradient />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/pallet" element={<Pallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
