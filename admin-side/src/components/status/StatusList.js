import React from "react";
import StatusSummary from "./StatusSummary";

const StatusList = ({ statuses }) => {
  return (
    <div className="status-list section">
      <table className="highlight centered responsive-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>COVID-19 Patient Count</th>
            <th>Total Patients</th>
            <th>Tests Available</th>
            <th>PPE Level</th>
            <th>Offers Full-Medical Care</th>
            <th>COVID-19 Testing Available</th>
            <th>Accepting COVID-19 Patients</th>
            <th>Accepting Non-COVID-19 Patients</th>
            <th>Testing Only</th>
          </tr>
        </thead>

        <tbody>
          {statuses &&
            statuses.map((status) => {
              return <StatusSummary status={status} key={status.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StatusList;
