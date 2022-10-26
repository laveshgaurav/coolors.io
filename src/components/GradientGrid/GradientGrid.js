import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { exportAsImage } from "../../constants/Utility";
import Styles from "./GradientGrid.module.scss";

function GradientGrid() {
  const { savedGradient = [] } = useSelector((state) => state.save);

  return (
    <div className={Styles.GradientGrid_Container}>
      {savedGradient?.map((item, index) => (
        <ColorBox item={item} key={index} />
      ))}
    </div>
  );
}

export default GradientGrid;

const ColorBox = ({ item }) => {
  const exportRef = useRef();
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = async (id) => {
    try {
      setIsCopied(true);
      const text = `{
            background : ${item?.colorSet[0]}; /* fallback for old browsers */
            background : -webkit-${item?.gradient}; /* Chrome 10-25, Safari 5.1-6 */
            background : ${item?.gradient}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }`;
      await navigator?.clipboard?.writeText(text);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className={Styles.Box}>
      <div
        ref={exportRef}
        className={Styles.Screen}
        style={{
          backgroundImage: item?.gradient,
        }}
      ></div>
      <div className={Styles.Detail}>
        <h3>{item?.name}</h3>
        <div className={Styles.Btn_Container}>
          <button title="Code" onClick={() => copyCode(item?.name)}>
            <i class="fa-solid fa-code"></i>
          </button>
          <button
            title="Save"
            onClick={() => exportAsImage(exportRef.current, item?.name)}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
          <button title="Delete">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      {/* <div className={Styles.Function}>
        <button title="Code" onClick={() => copyCode(item?.name)}>
          <i class="fa-solid fa-code"></i>
        </button>
        <button
          title="Save"
          onClick={() => exportAsImage(exportRef.current, item?.name)}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div> */}
      {isCopied && <p id={item?.name}>Code Copied</p>}
    </div>
  );
};
