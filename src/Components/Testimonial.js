import React from "react";
import SidebarHeaderContainer from "./SidebarHeaderContainer";
import "../Styles/Testimonial.css";
import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <SidebarHeaderContainer headerTitle="Testimonial" />
      <Link to="/testimonialcreate">
        <button type="button" className="testimonial-add-btn">
          <i className="fa-solid fa-plus"></i>Add Testimonial
        </button>
      </Link>
    </div>
  );
}

export default Testimonial;
