import React, { Component } from "react";
import StatusList from "../status/StatusList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends Component {
  render() {
    const { statuses } = this.props;

    return (
      <div className="dashboard container">
        <StatusList statuses={statuses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    statuses: state.firestore.ordered.statuses,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "statuses" }])
)(Dashboard);
