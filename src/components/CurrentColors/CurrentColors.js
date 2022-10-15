import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLight } from "../../constants/Utility";
import {
  reverseColorSet,
  setGradient,
} from "../../redux/generatorReducer/GenerateReducer";
import Styles from "./CurrentColors.module.scss";

function CurrentColors() {
  const dispatch = useDispatch();
  const { colorSet, type, direction } = useSelector((state) => state.generator);

  const copyToClipboard = (id, color) => {
    navigator.clipboard.writeText(color);
    let selectedColor = document.getElementById(id);
    selectedColor.classList.add("Copied");
    setTimeout(() => {
      selectedColor.classList.remove("Copied");
    }, 1000);
  };

  return (
    <div className={Styles.Current_Container}>
      <div className={Styles.Left}>
        {colorSet.map((item, index) => (
          <>
            <div
              className={Styles.Box}
              key={index}
              style={{
                backgroundColor: item,
                color: isLight(item) ? "black" : "white",
              }}
              id={`color${index}`}
              onClick={() => copyToClipboard(`color${index}`, item)}
            >
              <p>
                {item} <i className="fa-solid fa-copy"></i>
              </p>
            </div>
            {index < colorSet?.length - 1 && (
              <h5>
                <i class="fa-solid fa-arrow-right"></i>
              </h5>
            )}
          </>
        ))}
      </div>
      <div className={Styles.Right}>
        <button title="Code">
          <i class="fa-solid fa-code"></i>
        </button>
        <button title="Save">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default CurrentColors;
