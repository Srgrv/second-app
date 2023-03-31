import React from "react";
import Page from "./Page/Page";
import { connect } from "react-redux";

class MyPageContainer extends React.Component {
  render() {
    return (
      <>
        <Page {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    a: state.myPage.a,
    b: state.myPage.b,
  };
};

export default connect(mapStateToProps, {})(MyPageContainer);
