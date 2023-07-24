import React from "react";
import SidebarHeaderContainer from "./SidebarHeaderContainer";
import "../Styles/MockInterview.css";

function MockInterview() {
  const rows = [
    {
      name: "Second Mock",
      date: "21/06/2023",
      score: "3.30",
      feedback: "Answers are good,but need improvement",
    },
    {
      name: "First Mock",
      date: "02/05/2023",
      score: "4.10",
      feedback: "Good,need to improve ",
    },
  ];

  return (
    <div className="mockinterview-container">
      <SidebarHeaderContainer headerTitle="Mock Interview" />
      <div className="table-container">
        <table className="mockinterview-table">
          <thead>
            <tr>
              <th>Mock Interview Round</th>
              <th>Interview Date</th>
              <th>Overall Score</th>
              <th>Recordings</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.date}</td>
                <td>{row.score}</td>
                <td>...</td>
                <td>{row.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        Rows per page:
        <select>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        1-2 of 2
      </div>
    </div>
  );
}

export default MockInterview;
