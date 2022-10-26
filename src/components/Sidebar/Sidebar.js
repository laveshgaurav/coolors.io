import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Styles from "./Sidebar.module.scss";

function Sidebar({ isMenuOpen }) {
  //   const { openSidebar } = useSelector((state) => state?.toggle);
  const toggleClass = isMenuOpen
    ? Styles.Sidebar_Container
    : Styles.Sidebar_Container_open;

  return (
    <div className={toggleClass}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        end
      >
        Gradient
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        end
      >
        Saved
      </NavLink>
    </div>
  );
}

export default Sidebar;
