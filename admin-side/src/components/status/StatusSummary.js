import React from "react";

const StatusSummary = ({ status }) => {
  return (
    <tr>
      <td>{status.date}</td>
      <td>{status.covidCount}</td>
      <td>{status.totalCount}</td>
      <td>{status.testCount}</td>
      <td>{status.ppeLevel}</td>
      <td>{status.fullMedicalCare ? "Yes" : "No"}</td>
      <td>{status.testingAvailable ? "Yes" : "No"}</td>
      <td>{status.acceptCovid ? "Yes" : "No"}</td>
      <td>{status.acceptNonCovid ? "Yes" : "No"}</td>
      <td>{status.testCovidOnly ? "Yes" : "No"}</td>
    </tr>
  );
};

export default StatusSummary;
