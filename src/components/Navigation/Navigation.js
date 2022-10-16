import React from "react";
import { Route, Routes } from "react-router-dom";
import Gradient from "../../pages/Gradient/Gradient";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Gradient />} />
    </Routes>
  );
}

export default Navigation;
