import React, { useState } from "react";
import { toast } from "react-toastify";
import "../Styles/ForgotPassword.css";
import zenreg from "../Images/zen-register.jpg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully");
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${zenreg})` }}
      ></div>
      <div className="forgotpassword-container">
        <form onSubmit={handleSubmit} className="forgotpassword-form">
          <input
            type="text"
            placeholder="Enter your email-Id"
            value={email}
            onChange={handleInputChange}
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;
