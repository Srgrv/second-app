import React from "react";
import Friends from "./Friends/Friends";
import { connect } from "react-redux";
import axios from "axios";
import { setTotalCount } from "../../../../redux/MyFriendsReducer";
import { setPage } from "../../../../redux/MyFriendsReducer";
import { setData } from "../../../../redux/MyFriendsReducer";
import classes from "./MyFriendsContainer.module.css";

class MyFriendsContainer extends React.Component {
  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
  //     )
  //     .then((response) => {
  //       this.props.setData(response.data.items);
  //       this.props.setTotalCount(response.data.totalCount);
  //       console.log("componentDidMount");
  //     });
  // }

  changePage(page) {
    console.log("componentDidUpdate");
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
    console.log("render");
    let spans = [];
    for (let i = 1; i <= 10; i++) {
      spans.push(i);
    }

    let items = spans.map((item, index) => {
      return (
        <span
          className={this.props.page == item ? classes.span : undefined}
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
  };
};

export default connect(mapStateToProps, { setTotalCount, setPage, setData })(
  MyFriendsContainer
);