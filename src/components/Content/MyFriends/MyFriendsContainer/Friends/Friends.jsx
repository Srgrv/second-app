import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followAPI } from "../../../../../API/api";

let Friends = (props) => {
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
                    followAPI.deleteUnFollow(item.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.setUnfollowed(item.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followAPI.postFollow(item.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.setFollowed(item.id);
                      }
                    });
                  }}
                >
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
