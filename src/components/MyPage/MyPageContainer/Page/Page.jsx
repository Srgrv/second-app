import React from "react";
import classes from "./Page.module.css";

let Page = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>avatar</div>
      <div className={classes.contacts}>about me</div>
      <div className={classes.newPost}>new post</div>
      <div className={classes.post}>post</div>
    </div>
  );
};

export default Page;
