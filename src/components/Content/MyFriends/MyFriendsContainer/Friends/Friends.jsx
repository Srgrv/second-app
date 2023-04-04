import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";

let Friends = (props) => {
  console.log(props);
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div className={classes.wrapper} key={index}>
            <NavLink to={`/myPage/${item.id}`} className={classes.one}>
              <img
                src={
                  item.photos.small
                    ? item.photos.small
                    : "../../../../../logo192.png"
                }
                alt=""
              />
            </NavLink>
            <div className={classes.two}>{item.name}</div>

            <div>
              {" "}
              {item.followed ? (
                <button
                  onClick={() => {
                    props.setUnfollowed(item.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.setFollowed(item.id)}>
                  Follow
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
