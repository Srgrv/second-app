import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to="myPage">Моя Страница</NavLink>
      <NavLink to="myFriend">Мои Друзья</NavLink>
    </div>
  );
};

export default Navbar;
