import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

let Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Navbar />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
