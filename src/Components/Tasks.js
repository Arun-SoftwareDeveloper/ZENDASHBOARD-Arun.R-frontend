import React, { useState } from "react";
import SidebarHeaderContainer from "../Components/SidebarHeaderContainer";
import "../Styles/Tasks.css";

function Tasks({
  handleArrowClick,
  handleSourceCodeChange,
  handleDeployURLChange,
  sourceCode,
  deployURL,
  showSourceCode,
  isHeightChanged,
}) {
  const [submittedSourceCode, setSubmittedSourceCode] = useState("");
  const [submittedDeployURL, setSubmittedDeployURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSourceCode(sourceCode);
    setSubmittedDeployURL(deployURL);
  };

  return (
    <div className="task-main-container">
      <SidebarHeaderContainer headerTitle="Tasks Submissions" />
      <h1 className="task-text"> No Tasks submitted yet...</h1>
      {showSourceCode && (
        <div className="source-code">
          <form onSubmit={handleSubmit}>
            {/* ... */}
            <button type="submit" className="task-submit-btn">
              Submit
            </button>
            {/* ... */}
          </form>
        </div>
      )}
      {/* ... */}
      {submittedSourceCode && (
        <p>Submitted Source Code: {submittedSourceCode}</p>
      )}
      {submittedDeployURL && <p>Submitted Deploy URL: {submittedDeployURL}</p>}
    </div>
  );
}

export default Tasks;
