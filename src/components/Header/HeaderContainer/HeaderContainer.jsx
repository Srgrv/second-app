import React from "react";
import Header_for_login from "./Header_for_login/Header_for_login";
import axios from "axios";
import { setUserData } from "../../../redux/HeaderReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        let { id, email, login } = response.data.data;
        if (response.data.resultCode === 0) {
          this.props.setUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <>
        <Header_for_login {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    id: state.header.id,
    email: state.header.email,
    login: state.header.login,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
