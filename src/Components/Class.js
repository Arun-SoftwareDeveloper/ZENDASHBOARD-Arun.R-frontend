import React, { useState, useEffect } from "react";
import "../Styles/Class.css";
import SidebarHeaderContainer from "../Components/SidebarHeaderContainer";
import sessionData from "../SessionData"; // Import the session data from the correct path

function Class() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [join, setJoin] = useState(false);
  const [showSourceCode, setShowSourceCode] = useState(false);
  const [sourceCode, setSourceCode] = useState("");
  const [deployURL, setDeployURL] = useState("");
  const [isHeightChanged, setIsHeightChanged] = useState(false);
  const [sessiondata, setSessionData] = useState([]);
  const handleArrowClick = () => {
    setIsHeightChanged(!isHeightChanged);
    setShowSourceCode(false);
  };

  const handleSourceCodeChange = (e) => {
    setSourceCode(e.target.value);
  };

  const handleDeployURLChange = (e) => {
    setDeployURL(e.target.value);
  };

  const handleToggleSourceCode = () => {
    setShowSourceCode(!showSourceCode);
  };

  const numbers = Array.from(
    { length: sessionData.length },
    (_, index) => index + 1
  );

  const handleJoin = () => {
    setJoin(true);
  };

  const handleSessionClick = (sessionNumber) => {
    setSelectedSession(sessionNumber);
  };

  const renderContent = () => {
    const session = sessiondata.find(
      (session) => session.number === selectedSession
    );
    if (!session) {
      return (
        <div className="mid-container">
          <h3 className="mid-text">No session title available.</h3>
          <h5 className="mid-text">Class Schedule is not updated.</h5>
          <hr className="divider" />
          <h4 className="mid-title">Contents:</h4>
          <p className="mid-text">No contents available.</p>
          <h4 className="mid-title">Pre-read:</h4>
          <p className="mid-text">No pre-read available.</p>
        </div>
      );
    }

    return (
      <div className="mid-container">
        <h4 className="mid-title">{session.title}</h4>
        <p className="mid-date">{session.date}</p>
        <h4 className="mid-title">Contents:</h4>
        {session.contents.map((content, index) => (
          <p className="mid-text" key={index}>
            {content}
          </p>
        ))}
        <h4 className="mid-title">Pre-read:</h4>
        <p className="mid-text">{session.preRead}</p>
      </div>
    );
  };

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await fetch(
          "https://zendashboard-backend.onrender.com/sessiondata"
        );
        if (response.ok) {
          const data = await response.json();
          setSessionData(data);
        } else {
          // Handle error if needed
          console.error("Failed to fetch session data");
        }
      } catch (error) {
        // Handle error if needed
        console.error("Failed to fetch session data", error);
      }
    };

    fetchSessionData();
  }, []);

  return (
    <div className="class-container">
      <SidebarHeaderContainer headerTitle="Class" />
      <h1 className="join-box" onClick={handleJoin}>
        Join the class on time...
      </h1>
      {join ? (
        <p>Please watch the recording.</p>
      ) : (
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      )}
      {renderContent()}
      <div className="session-container">
        <span className="number-container">
          <h1 className="session-title">Session RoadMap</h1>
          {numbers.map((number) => (
            <div
              key={number}
              className={`number ${
                selectedSession === number ? "selected" : ""
              }`}
              onClick={() => handleSessionClick(number)}
            >
              {number}
            </div>
          ))}
        </span>
      </div>
      <h1 className="activities-title">Activities</h1>
      {numbers.includes(selectedSession) &&
      selectedSession >= 1 &&
      selectedSession <= 44 ? (
        <div
          className={`task-container ${isHeightChanged ? "height-change" : ""}`}
        >
          <span className="task-document">
            <a
              href="https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview
            </a>
            <button
              type="button"
              className="down-arrow-btn"
              onClick={() => {
                handleArrowClick();
                handleToggleSourceCode();
              }}
            >
              {showSourceCode ? "Hide" : "Show"}
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="arrow-down"></div>
            {showSourceCode && (
              <div className="source-code">
                <form>
                  <label htmlFor="source-code-input">Source Code</label>
                  <br />
                  <input
                    type="text"
                    id="source-code-input"
                    className="input"
                    placeholder="Enter your source code"
                    value={sourceCode}
                    onChange={handleSourceCodeChange}
                  />
                  <br />
                  <br />
                  <label htmlFor="deploy-url-input">Deploy URL</label>
                  <br />
                  <input
                    type="text"
                    id="deploy-url-input"
                    className="input"
                    placeholder="Enter your deploy URL"
                    value={deployURL}
                    onChange={handleDeployURLChange}
                  />
                  <br /> <br />
                  <button type="submit" className="task-submit-btn">
                    Submit
                  </button>
                  <button type="button" className="task-cancel-btn">
                    Cancel
                  </button>
                  {!sourceCode && (
                    <p className="error">
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      Please provide a valid source code.
                    </p>
                  )}
                  {!deployURL && (
                    <p className="error">
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      Please provide a valid deploy URL.
                    </p>
                  )}
                </form>
              </div>
            )}
          </span>
        </div>
      ) : (
        <div className="no-activities">No Activities</div>
      )}
      <div className="additional-session-container">
        <h1 className="additional-title">Additional Sessions</h1>
        <span className="additional-text">
          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>No
          Additional sessions
        </span>
      </div>
    </div>
  );
}

export default Class;
