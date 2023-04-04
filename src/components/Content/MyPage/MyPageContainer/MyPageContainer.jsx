import React from "react";
import Page from "./Page/Page";
import { connect } from "react-redux";
import { changeInput, add, setUser } from "../../../../redux/MyPageReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

class MyPageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;

    if (!userId) {
      userId = 9;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUser(response.data);
      });
  }

  componentDidUpdate() {
    let userId = this.props.router.params.id;
    console.log(userId);
    if (!userId) {
      userId = 9;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUser(response.data);
      });
  }

  render() {
    console.log("render");
    return (
      <>
        <Page {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.myPage.user,
    myPost: state.myPage.myPost,
    input: state.myPage.input,
  };
};

let withRouter = (Component) => {
  let ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ params, location, navigate }} />;
  };
  return ComponentWithRouterProp;
};

export default connect(mapStateToProps, { changeInput, add, setUser })(
  withRouter(MyPageContainer)
);
