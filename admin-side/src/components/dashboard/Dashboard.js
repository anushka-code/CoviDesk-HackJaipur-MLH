import React, { Component } from "react";
import StatusList from "../status/StatusList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <StatusList />
      </div>
    );
  }
}

export default Dashboard;
