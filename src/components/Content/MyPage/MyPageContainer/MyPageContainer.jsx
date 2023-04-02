import React from "react";
import Page from "./Page/Page";
import { connect } from "react-redux";
import { changeInput, add } from "../../../../redux/MyPageReducer";

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
    input: state.myPage.input,
  };
};

export default connect(mapStateToProps, { changeInput, add })(MyPageContainer);
