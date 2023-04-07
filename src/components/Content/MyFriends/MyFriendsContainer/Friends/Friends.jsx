import React from "react";
import classes from "./Friends.module.css";
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../../../API/api";

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
                  disabled={props.following.some((id) => id == item.id)}
                  onClick={() => {
                    props.toggleFollowing(true, item.id);
                    console.log("добавил в массив");
                    followAPI.deleteUnFollow(item.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.setUnfollowed(item.id);
                      }
                      props.toggleFollowing(false, item.id);
                      console.log("удалил из массива");
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.following.some((id) => id == item.id)}
                  onClick={() => {
                    props.toggleFollowing(true, item.id);
                    console.log("добавил в массив");
                    followAPI.postFollow(item.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.setFollowed(item.id);
                      }
                      props.toggleFollowing(false, item.id);
                      console.log("удалил из массива");
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
