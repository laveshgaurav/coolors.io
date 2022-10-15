import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDirection,
  setNumColors,
  setType,
} from "../../redux/generatorReducer/GenerateReducer";
import Styles from "./Controller.module.scss";

function Controller() {
  const { numColors, direction, type } = useSelector(
    (state) => state.generator
  );
  const dispatch = useDispatch();

  return (
    <div className={Styles.Controller_Container}>
      <div className={Styles.Left}>
        <h3>
          Press the{" "}
          <span
            style={{
              fontweight: "900 !important",
              color: "#005ce6",
              fontFamily: "monospace",
            }}
          >
            SPACEBAR
          </span>{" "}
          to generate new gradient!
        </h3>
      </div>
      <div className={Styles.Right}>
        <label>
          <p>Color Count</p>
          <select
            value={numColors}
            onChange={(e) => {
              dispatch(setNumColors(e.target.value));
            }}
          >
            {[2, 3, 4, 5].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label>
          <p>Type</p>
          <select
            value={type}
            onChange={(e) => {
              dispatch(setType(e.target.value));
            }}
          >
            {[
              {
                dir: "linear",
                text: "Linear",
              },
              {
                dir: "radial",
                text: "Radial",
              },
            ].map((item, index) => (
              <option key={index} value={item.dir}>
                {item.text}
              </option>
            ))}
          </select>
        </label>

        {type === "linear" && (
          <label>
            <p>Direction</p>
            <select
              value={direction}
              onChange={(e) => {
                dispatch(setDirection(e.target.value));
              }}
            >
              {[
                {
                  dir: "to right",
                  text: "Horizontal",
                },
                {
                  dir: "to bottom",
                  text: "Vertical",
                },
              ].map((item, index) => (
                <option key={index} value={item.dir}>
                  {item.text}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  );
}

export default Controller;
