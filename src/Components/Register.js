import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/Register.css";
import zenreg from "../Images/zen-register.jpg";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log("Registration successful");
        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Save the token to local storage or session storage
        // Example: localStorage.setItem('token', token);
      } else if (response.status === 404) {
        throw new Error("User not found");
      } else {
        const error = await response.json();
        throw new Error(error.error);
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
      <Link to="/">
        <span className="back-btn">
          <i class="fa-solid fa-chevron-left"></i>
        </span>
      </Link>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${zenreg})` }}
      ></div>

      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <br />
          <br />
          <button type="submit">Register</button>
          <h4
            className="already-a -user"
            style={{
              backgroundColor: "white",
              color: "dodgerblue",
              fontWeight: "normal",
              width: "100%",
            }}
          >
            Already a User?{" "}
            <Link
              to="/"
              style={{
                backgroundColor: "white",
                color: "dodgerblue",
                fontFamily: "sans-serif",
              }}
            >
              Login
            </Link>
          </h4>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default Register;
