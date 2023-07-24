import React, { useState } from "react";
import { toast } from "react-toastify";
import "../Styles/Login.css";
import Zenlogo from "../Images/ZenClass-logo.png";
import zenlogin from "../Images/Login-Background.jpg";
import zentext from "../Images/zentext.jfif";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
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
        const data = await response.json();
        console.log("Login successful");
        // Save the token to localStorage
        localStorage.setItem("token", data.token);

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Redirect to the "/class" route after successful login
        navigate("/class");
      } else if (response.status === 404) {
        // User not found, handle the error
        throw new Error("User not found");
      } else {
        // Other errors, handle the error
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
      <div
        className="background-image"
        style={{ backgroundImage: `url(${zenlogin})` }}
      ></div>
      <img src={zentext} alt="zentext"></img>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/class">
            <button className="login-button" type="submit">
              Login
            </button>
          </Link>
          <p className="signup">
            Don't have an account?
            <Link to="/register">
              <span className="reg">register</span>
            </Link>
          </p>
          {/* <Link to="forgotpassword">
            <span className="forgot">Forgot Password?</span>
          </Link> */}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
