/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSavedGradient } from "../../redux/saveReducer/SaveReducer";
import Styles from "./SavePopup.module.scss";

function SavePopup({ onClose }) {
  const dispatch = useDispatch();
  const { savePopup } = useSelector((state) => state?.toggle);
  const { gradient = "", colorSet = [] } = useSelector(
    (state) => state?.generator
  );
  const [name, setName] = useState("");
  const fileName = useRef();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const onSave = () => {
    const data = {
      id: Math.floor(Math.random() * 9999999),
      name,
      gradient,
      colorSet,
    };
    dispatch(setSavedGradient(data));
  };

  useEffect(() => {
    fileName?.current?.focus();
  }, [savePopup]);

  return (
    <>
      {savePopup && (
        <div className={Styles.Save_Container}>
          <div className={Styles.Box}>
            <div className={Styles.Header}>
              <h3>Save gradient image</h3>
              <button onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={Styles.Body}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSave();
                  setName("");
                  onClose();
                }}
              >
                <input
                  ref={fileName}
                  value={name}
                  placeholder="Enter gradient name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SavePopup;
