import React, { Component } from "react";
import StatusList from "../status/StatusList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { statuses, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

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
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "statuses" }])
)(Dashboard);
