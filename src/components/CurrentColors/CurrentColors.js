import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exportAsImage, isLight } from "../../constants/Utility";
import {
  setCodePopup,
  setDownloadPopup,
} from "../../redux/toggleReducer/ToggleReducer";
import DownloadImagePopup from "../DownloadImagePopup/DownloadImagePopup";
import Styles from "./CurrentColors.module.scss";

function CurrentColors() {
  const dispatch = useDispatch();
  const { colorSet, gradient } = useSelector((state) => state.generator);
  const exportRef = useRef();

  const copyToClipboard = async (id, color) => {
    await navigator?.clipboard?.writeText(color);
    let selectedColor = document.getElementById(id);
    selectedColor.classList.add("Copied");
    setTimeout(() => {
      selectedColor.classList.remove("Copied");
    }, 1000);
  };

  return (
    <>
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
          <button title="Code" onClick={() => dispatch(setCodePopup(true))}>
            <i class="fa-solid fa-code"></i>
          </button>
          <button title="Save">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button
            title="Save"
            // onClick={() => exportAsImage(exportRef.current, "test")}
            onClick={() => dispatch(setDownloadPopup(true))}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <div
        ref={exportRef}
        style={{
          padding: "2rem",
          background: gradient,
        }}
        className={Styles.Screen_Container}
      ></div>
      <DownloadImagePopup
        onClose={() => dispatch(setDownloadPopup(false))}
        onDownload={(file) => exportAsImage(exportRef.current, file)}
      />
    </>
  );
}

export default CurrentColors;
