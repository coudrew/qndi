import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "../../components/Main";

class MainContainer extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cat: state.cat,
  };
};

export default connect(mapStateToProps)(MainContainer);
