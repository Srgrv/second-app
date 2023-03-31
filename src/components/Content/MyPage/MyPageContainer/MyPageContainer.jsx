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
    data: state.myPage.data,
    myPost: state.myPage.myPost,
  };
};

export default connect(mapStateToProps, {})(MyPageContainer);
