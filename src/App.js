/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./components/Controller/Controller";
import Screen from "./components/Screen/Screen";
import { generateHexCodeString } from "./constants/Utility";
import {
  setColorSet,
  setGradient,
} from "./redux/generatorReducer/GenerateReducer";
import Styles from "./App.module.scss";
import CurrentColors from "./components/CurrentColors/CurrentColors";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();
  const { numColors, direction, type } = useSelector(
    (state) => state.generator
  );

  const generateGradient = () => {
    let set = [];
    for (let i = 0; i < numColors; i++) {
      set.push(generateHexCodeString());
    }
    dispatch(setColorSet(set));
    setStoreGradient(set);
  };

  const setStoreGradient = (color) => {
    console.log(color);
    if (type === "linear") {
      console.log(type + "-gradient(" + direction + "," + color + ")");
      dispatch(
        setGradient(type + "-gradient(" + direction + "," + color + ")")
      );
    } else {
      console.log(type + "-gradient(" + color + ")");
      dispatch(setGradient(type + "-gradient(" + color + ")"));
    }
  };

  useEffect(() => {
    const handleSpaceBar = (event) => {
      event.preventDefault();
      if (event.keyCode === 32) {
        generateGradient();
      }
    };
    window.addEventListener("keydown", handleSpaceBar);

    return () => {
      window.removeEventListener("keydown", handleSpaceBar);
    };
  }, [numColors, direction, type]);

  useEffect(() => {
    generateGradient();
  }, [numColors, direction, type]);

  return (
    <div className={Styles.App_Container}>
      <Header />
      <Controller />
      <CurrentColors />
      <Screen />
    </div>
  );
}

export default App;
