/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./DownloadImagePopup.module.scss";

function DownloadImagePopup({ onClose, onDownload }) {
  const { downloadPopup } = useSelector((state) => state?.toggle);
  const [name, setName] = useState("");
  const fileName = useRef();

  useEffect(() => {
    console.log("NAMING POP");
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

  useEffect(() => {
    fileName?.current?.focus();
  }, [downloadPopup]);

  return (
    <>
      {downloadPopup && (
        <div className={Styles.Download_Container}>
          <div className={Styles.Box}>
            <div className={Styles.Header}>
              <h3>Download gradient image</h3>
              <button onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={Styles.Body}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onDownload(name);
                  setName("");
                  onClose();
                }}
              >
                <input
                  ref={fileName}
                  value={name}
                  placeholder="Enter image name"
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

export default DownloadImagePopup;
