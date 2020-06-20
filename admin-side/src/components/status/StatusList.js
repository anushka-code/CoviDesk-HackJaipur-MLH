import React from "react";
import StatusSummary from "./StatusSummary";

const StatusList = () => {
  return (
    <div className="status-list section">
      <table className="highlight centered responsive-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>COVID-19 Patients</th>
            <th>Total Patients</th>
            <th>Testing Only</th>
            <th>PPE Level</th>
            <th>Accepting COVID-19 Patients</th>
            <th>Tests Available</th>
            <th>Offers Full-Medical Care</th>
            <th>Accepts Non-COVID-19 Patients</th>
          </tr>
        </thead>

        <tbody>
          <StatusSummary />
          <StatusSummary />
          <StatusSummary />
          <StatusSummary />
        </tbody>
      </table>
    </div>
  );
};

export default StatusList;
