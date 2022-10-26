import { current } from "@reduxjs/toolkit";
import React from "react";
import GradientGrid from "../../components/GradientGrid/GradientGrid";
import Header from "../../components/Header/Header";
import Styles from "./Saved.module.scss";

function Saved() {
  const [current, setCurrent] = React.useState(0);
  const isActive = (curr) => (curr === current ? "tabActive" : "tabInActive");

  const TabList = {
    0: <GradientGrid />,
  };

  return (
    <>
      <Header />
      <div className={Styles.Saved_Container}>
        <div className={Styles.TabSelector}>
          {["GRADIENT", "COLOR"].map((item, index) => (
            <button
              className={isActive(index)}
              key={index}
              onClick={() => setCurrent(index)}
            >
              {item}
            </button>
          ))}
        </div>
        {TabList[current]}
      </div>
    </>
  );
}

export default Saved;
