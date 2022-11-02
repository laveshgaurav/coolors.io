import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { generateHexCodeString, isLight } from "../../constants/Utility";
import {
  setPallet,
  updatePallet,
} from "../../redux/palletReducer/PalletReducer";
import Styles from "./Pallet.module.scss";

function Pallet() {
  const { pallet = [] } = useSelector((state) => state?.pallet);
  const dispatch = useDispatch();

  const generatePallet = () => {
    let set = [];
    for (let i = 0; i < 2; i++) {
      set.push(generateHexCodeString());
    }
    dispatch(setPallet(set));
  };

  useEffect(() => {
    generatePallet();
  }, []);

  const addNewColor = (at) => {
    // const temp = colorSet;
    // let newColor = generateHexCodeString();
    // colorSet.splice(at, 0, newColor);
    // console.log(colorSet);
    // setColorSet(colorSet);
    // console.log(colorSet);
    // //   setColorSet(temp);
  };

  return (
    <div className={Styles.Pallet_Container}>
      <Header />
      <div className={Styles.PalletBox}>
        {pallet.map((color, index) => (
          <div
            draggable
            className={Styles.PalletBox_Color}
            key={index}
            style={{ backgroundColor: color }}
            // onClick={() => {
            //   setColorSet(colorSet.filter((item) => item !== color));
            // }}
          >
            {index + 1 !== pallet?.length && pallet?.length < 6 && (
              <button
                onClick={() =>
                  dispatch(
                    updatePallet({
                      position: index + 1,
                      color: color.slice(1),
                    })
                  )
                }
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            )}
            <h1
              style={{
                color: isLight(color) ? "black" : "white",
              }}
            >
              {color.slice(1).toUpperCase()}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pallet;
