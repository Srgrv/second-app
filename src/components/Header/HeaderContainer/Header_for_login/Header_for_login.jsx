import React from "react";
import classes from "./Header_for_login.module.css";
import { NavLink } from "react-router-dom";

let Header_for_login = (props) => {
  console.log(props);
  return (
    <div className={classes.header}>
      <NavLink to="login" style={{ color: "white" }}>
        {props.login ? props.login : "Login"}
      </NavLink>
    </div>
  );
};

export default Header_for_login;
