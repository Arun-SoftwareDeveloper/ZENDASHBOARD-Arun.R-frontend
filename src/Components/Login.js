import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/Login.css";
import zenlogin from "../Images/Login-Background.jpg";
// import zentext from "../Images/zentext.jfif";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Container, Button } from "react-bootstrap";

const LoginForm = () => {
  const navigate = useNavigate(); // Corrected the use of useNavigate
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        "https://zendashboard-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful");
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

        // Redirect to another page after successful login
        // Example: navigate("/class");
        navigate("/class"); // Use navigate here
      } else if (response.status === 404) {
        throw new Error("User not found");
      } else {
        const error = await response.json();
        toast.error(error.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${zenlogin})`,
          backgroundColor: "whitesmoke",
        }}
      >
        {/* <Image src={zentext} alt="zentext" fluid /> */}
        <Container className="login-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="login-form">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="login-input"
                />
                <ErrorMessage name="email" component="div" className="error" />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />

                <Button
                  className="login-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </Button>

                <p className="signup" style={{ color: "dodgerblue" }}>
                  Don't have an account?
                  <Link to="/register">
                    <span className="reg">Register</span>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
          <ToastContainer position="top-right" />
        </Container>
      </div>
    </>
  );
};

export default LoginForm;
