import React from "react";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";

import { setTotalCount } from "../../../../redux/MyFriendsReducer";
import { setPage } from "../../../../redux/MyFriendsReducer";
import { setData } from "../../../../redux/MyFriendsReducer";
import { setFollowed } from "../../../../redux/MyFriendsReducer";
import { setUnfollowed } from "../../../../redux/MyFriendsReducer";
import classes from "./MyFriendsContainer.module.css";
import { toggleFollowing } from "../../../../redux/MyFriendsReducer";

import { userAPI } from "../../../../API/api";

class MyFriendsContainer extends React.Component {
  componentDidMount() {
    userAPI.getUsers(this.props.count, this.props.page).then((data) => {
      this.props.setData(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }

  changePage(page) {
    this.props.setPage(page);
    userAPI.getUsers(this.props.count, this.props.page).then((data) => {
      this.props.setData(data.items);
    });
  }

  render() {
    let spans = [];
    for (let i = 1; i <= 10; i++) {
      spans.push(i);
    }

    let items = spans.map((item) => {
      return (
        <span
          className={this.props.page === item ? classes.span : undefined}
          onClick={() => this.changePage(item)}
          key={item}
        >
          {item}
        </span>
      );
    });

    return (
      <>
        <div>{items}</div>
        <Friends {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.myFriends.data,
    totalCount: state.myFriends.totalCount,
    count: state.myFriends.count,
    page: state.myFriends.page,
    followed: state.myFriends.followed,
    following: state.myFriends.following,
  };
};

export default connect(mapStateToProps, {
  setTotalCount,
  setPage,
  setData,
  setFollowed,
  setUnfollowed,
  toggleFollowing,
})(MyFriendsContainer);
