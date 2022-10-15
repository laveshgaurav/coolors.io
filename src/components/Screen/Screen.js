import React from "react";
import { useSelector } from "react-redux";
import Styles from "./Screen.module.scss";

function Screen() {
  const { gradient } = useSelector((state) => state.generator);
  return (
    <div>
      <div
        style={{
          // backgroundColor: color,
          padding: "2rem",
          background: gradient,
          height: "100vh",
        }}
      ></div>
    </div>
  );
}

export default Screen;
