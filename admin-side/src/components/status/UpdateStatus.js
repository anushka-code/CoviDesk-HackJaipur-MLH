import React, { Component } from "react";
import { updateStatus } from "../../store/actions/statusActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UpdateStatus extends Component {
  state = {
    date: "",
    covidCount: 0,
    totalCount: 0,
    testCount: 0,
    ppeLevel: 0,
    fullMedicalCare: false,
    testingAvailable: false,
    acceptCovid: false,
    acceptNonCovid: false,
    testCovidOnly: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleToggleChange1 = (e) => {
    this.setState({
      [e.target.id]: !this.state.fullMedicalCare,
    });
    // console.log(this.state.fullMedicalCare);
  };
  handleToggleChange2 = (e) => {
    this.setState({
      [e.target.id]: !this.state.testingAvailable,
    });
    // console.log(this.state.testingAvailable);
  };
  handleToggleChange3 = (e) => {
    this.setState({
      [e.target.id]: !this.state.acceptCovid,
    });
    // console.log(this.state.acceptCovid);
  };
  handleToggleChange4 = (e) => {
    this.setState({
      [e.target.id]: !this.state.acceptNonCovid,
    });
    // console.log(this.state.acceptNonCovid);
  };
  handleToggleChange5 = (e) => {
    this.setState({
      [e.target.id]: !this.state.testCovidOnly,
    });
    // console.log(this.state.testCovidOnly);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.updateStatus(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Update Status</h5>

          <label htmlFor="date">Date</label>
          <input type="date" id="date" onChange={this.handleChange} />

          <div className="input-field">
            <label htmlFor="covidCount">COVID-19 Patient Count</label>
            <input type="number" id="covidCount" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="totalCount">Total Patients</label>
            <input type="number" id="totalCount" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="testCount">Tests Available</label>
            <input type="number" id="testCount" onChange={this.handleChange} />
          </div>

          <label htmlFor="ppeLevel">PPE Level</label>
          <select
            id="ppeLevel"
            className="browser-default"
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>
            <label>
              <input
                id="fullMedicalCare"
                type="checkbox"
                onChange={this.handleToggleChange1}
              />
              <span>Do you offer full medical care?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="testingAvailable"
                type="checkbox"
                onChange={this.handleToggleChange2}
              />
              <span>Are COVID-19 tests ready and available?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="acceptCovid"
                type="checkbox"
                onChange={this.handleToggleChange3}
              />
              <span>Are you accepting COVID-19 patients?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="acceptNonCovid"
                type="checkbox"
                onChange={this.handleToggleChange4}
              />
              <span>Are you accepting non-COVID patients?</span>
            </label>
          </p>
          <p>
            <label>
              <input
                id="testCovidOnly"
                type="checkbox"
                onChange={this.handleToggleChange5}
              />
              <span>Is this hospital testing COVID-19 only?</span>
            </label>
          </p>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateStatus: (status) => dispatch(updateStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStatus);
