import React, { useState } from "react";
import SidebarHeaderContainer from "../Components/SidebarHeaderContainer";
import "../Styles/DashBoard.css";

function DashBoard() {
  const [showSourceCode, setShowSourceCode] = useState(false);
  const [isHeightChanged, setIsHeightChanged] = useState(false);
  const [sourceCode, setSourceCode] = useState("");
  const [deployURL, setDeployURL] = useState("");

  const handleArrowClick = () => {
    setIsHeightChanged(!isHeightChanged);
    setShowSourceCode(!showSourceCode);
  };

  const handleSourceCodeChange = (e) => {
    setSourceCode(e.target.value);
  };

  const handleDeployURLChange = (e) => {
    setDeployURL(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <SidebarHeaderContainer headerTitle="DashBoard" />
      <div className="capstone-dashboard-container">
        <h1>Capstone</h1>
        <h3 className="dashboard-container-h3">Not submitted yet</h3>

        <button
          type="button"
          className="down-arrow-btn"
          onClick={handleArrowClick}
        >
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
              <br />
              <br />
              <button type="submit" className="task-submit-btn">
                Submit
              </button>
              <button type="button" className="task-cancel-btn">
                Cancel
              </button>
              {!sourceCode && (
                <p className="error">
                  <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                  Please provide a valid source code.
                </p>
              )}
            </form>
          </div>
        )}
      </div>

      <div className="webcode-dashboard-container">
        <h1>WebCode</h1>
        <h3 className="dashboard-container-h3">Not submitted yet</h3>
        <button
          type="button"
          className="down-arrow-btn"
          onClick={handleArrowClick}
        >
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
              <br />
              <br />
              <button type="submit" className="task-submit-btn">
                Submit
              </button>
              <button type="button" className="task-cancel-btn">
                Cancel
              </button>
              {!sourceCode && (
                <p className="error">
                  <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                  Please provide a valid source code.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
