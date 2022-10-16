import React from "react";
import { useSelector } from "react-redux";
import Styles from "./Screen.module.scss";

function Screen() {
  const { gradient } = useSelector((state) => state.generator);
  return (
    <div
      style={{
        padding: "2rem",
        background: gradient,
      }}
      className={Styles.Screen_Container}
    ></div>
  );
}

export default Screen;
