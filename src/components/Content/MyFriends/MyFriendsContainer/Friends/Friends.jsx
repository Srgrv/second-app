import React from "react";
import classes from "./Friends.module.css";

let Friends = (props) => {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div className={classes.wrapper} key={index}>
            <div className={classes.one}>
              <img
                src={
                  item.photos.small
                    ? item.photos.small
                    : "../../../../../logo192.png"
                }
              />
            </div>
            <div className={classes.two}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
