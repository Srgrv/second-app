import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "6b94c537-c724-4526-abc4-a919bf086fc0",
                          },
                        }
                      )
                      .then((response) => {
                        console.log(response);
                        if (response.data.resultCode === 0) {
                          console.log("hello");
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
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${item.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "6b94c537-c724-4526-abc4-a919bf086fc0",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
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
