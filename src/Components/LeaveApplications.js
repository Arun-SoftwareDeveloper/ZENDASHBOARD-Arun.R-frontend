import React, { useState } from "react";
import SidebarHeaderContainer from "./SidebarHeaderContainer";
import "../Styles/LeaveApplications.css";

function LeaveApplications() {
  const [isAddingLeave, setIsAddingLeave] = useState(false);
  const [days, setDays] = useState(1);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleAddLeaveClick = () => {
    setIsAddingLeave(true);
  };

  const handleCancelClick = () => {
    setIsAddingLeave(false);
    setDays(1);
    setDate("");
    setReason("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the leave data (e.g., submit it to a server)
    console.log("Days:", days);
    console.log("Date:", date);
    console.log("Reason:", reason);
    setIsAddingLeave(false);
    setDays(1);
    setDate("");
    setReason("");
  };

  return (
    <div className="leaveapplications">
      <SidebarHeaderContainer headerTitle="Leave-Applications" />
      {!isAddingLeave && (
        <span className="leaveapplications-add">
          <button
            type="button"
            className="leaveapplications-add-btn"
            onClick={handleAddLeaveClick}
          >
            <i className="fa-solid fa-plus"></i>ADD
          </button>
        </span>
      )}
      {isAddingLeave && (
        <div className="leaveapplications-form">
          <h3 className="add-leave-title">Add Leave</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="days">Days</label>
            <br />
            <input
              type="number"
              id="days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="date">On</label>
            <br />
            <input
              type="date"
              id="date"
              placeholder="dd-mm-yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <label htmlFor="reason">Reason</label>
            <br />
            <textarea
              id="reason"
              placeholder="Enter Reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>{" "}
            <br />
            <div className="leaveapplications-buttons">
              <button
                type="button"
                className="leaveapplications-cancel-btn"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button type="submit" className="leaveapplications-create-btn">
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default LeaveApplications;
