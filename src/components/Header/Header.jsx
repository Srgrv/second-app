import React from "react";
import classes from "./Header.module.css";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import { NavLink } from "react-router-dom";

let Header = () => {
  return (
    <div className={classes.header}>
      <HeaderContainer />
    </div>
  );
};

export default Header;
