/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className={Styles.Header_Container}>
      <div className={Styles.Left}>
        <img src={logo} alt="coolors.io" />
      </div>
      <div className={Styles.Right}>
        <a href="https://github.com/laveshgaurav/coolors.io" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
