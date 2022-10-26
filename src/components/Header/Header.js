/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import Styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/toggleReducer/ToggleReducer";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { openSidebar } = useSelector((state) => state?.toggle);
  const dispatch = useDispatch();

  const classNameToggle = isMenuOpen
    ? "hamburger hamburger--slider is-active"
    : "hamburger hamburger--slider";

  return (
    <>
      <div className={Styles.Header_Container}>
        <div className={Styles.Left}>
          <button
            class={classNameToggle}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <img src={logo} alt="coolors.io" />
        </div>
        <div className={Styles.Right}>
          <a href="https://github.com/laveshgaurav/coolors.io" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <Sidebar isMenuOpen={isMenuOpen} />
    </>
  );
}

export default Header;
