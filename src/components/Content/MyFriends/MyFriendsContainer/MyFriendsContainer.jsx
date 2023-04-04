import React from "react";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";
import axios from "axios";

import { setTotalCount } from "../../../../redux/MyFriendsReducer";
import { setPage } from "../../../../redux/MyFriendsReducer";
import { setData } from "../../../../redux/MyFriendsReducer";
import { setFollowed } from "../../../../redux/MyFriendsReducer";
import { setUnfollowed } from "../../../../redux/MyFriendsReducer";
import classes from "./MyFriendsContainer.module.css";

class MyFriendsContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
      )
      .then((response) => {
        console.log(response);
        this.props.setData(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  changePage(page) {
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
      )
      .then((response) => {
        this.props.setData(response.data.items);
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
  };
};

export default connect(mapStateToProps, {
  setTotalCount,
  setPage,
  setData,
  setFollowed,
  setUnfollowed,
})(MyFriendsContainer);
