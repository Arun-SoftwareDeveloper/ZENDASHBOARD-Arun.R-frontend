import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Class from "./Components/Class";
import DashBoard from "./Components/DashBoard";
import Tasks from "./Components/Tasks";
import WebCode from "./Components/WebCode";
import Capstone from "./Components/Capstone";
import Queries from "./Components/Queries";
import CreateQuery from "./Components/CreateQuery";
import Requirements from "./Components/Requirements";
import Protofolio from "./Components/Protofolio";
import Applications from "./Components/Applications";
import InterviewTasks from "./Components/InterviewTasks";
import LeaveApplications from "./Components/LeaveApplications";
import MockInterview from "./Components/MockInterview";
import Certificate from "./Components/Certificate";
import Testimonial from "./Components/Testimonial";
import Syllabus from "./Components/Syllabus";
import PlacementBoard from "./Components/PlacementBoard";
import Testimonialcreate from "./Components/Testimonialcreate";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/class" element={<Class />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/webcode" element={<WebCode />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/createquery" element={<CreateQuery />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/portfolio" element={<Protofolio />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/interviewtasks" element={<InterviewTasks />} />
          <Route path="/leaveapplications" element={<LeaveApplications />} />
          <Route path="/mockinterview" element={<MockInterview />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/placementboard" element={<PlacementBoard />} />
          <Route path="/testimonialcreate" element={<Testimonialcreate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
