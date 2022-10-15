import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "./CopyCodePopup.module.scss";

function CopyCodePopup({ onClose }) {
  const { codePopup } = useSelector((state) => state?.toggle);
  const { gradient, colorSet } = useSelector((state) => state?.generator);
  const [isCopied, setIsCopied] = useState(false);

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

  const copyCode = () => {
    const text = `{
            background : ${colorSet[0]}; /* fallback for old browsers */
            background : -webkit-${gradient}; /* Chrome 10-25, Safari 5.1-6 */
            background : ${gradient}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      {codePopup && (
        <div className={Styles.CodePopup_Container}>
          <div className={Styles.Box}>
            <div className={Styles.Header}>
              <h3>Copy CSS code</h3>
              <button onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={Styles.Body}>
              <div className={Styles.Code}>
                {isCopied ? (
                  <div className={Styles.Copy}>
                    <p>Copied to clipboard</p>
                  </div>
                ) : (
                  <p>
                    <span className={Styles.backText}>background</span>:{" "}
                    {colorSet[0]};
                    <span>{" /* fallback for old browsers */"}</span>
                    <br />
                    <span className={Styles.backText}>background</span>:
                    -webkit-
                    {gradient};{" "}
                    <span>{"/* Chrome 10-25, Safari 5.1-6 */"}</span>
                    <br />
                    <span className={Styles.backText}>background</span>:{" "}
                    {gradient};{" "}
                    <span>
                      {
                        "/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
                      }
                    </span>
                  </p>
                )}
              </div>
              <button onClick={copyCode}>COPY</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CopyCodePopup;
