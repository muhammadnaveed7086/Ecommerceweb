import { Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [val, setVal] = useState({
    email: "",
    pasword: "",
  });
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setVal((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };
  const submitNow = () => {
    if (val.email === "" || val.pasword === "") {
      alert("Please Fill Input Field");
    } else {
      alert(`Do you want to Login with email ${val.email}`);
    }
  };
  return (
    <>
      <div className="my-5 container-fluid">
        <h1 className="text-center">Login</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitNow}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  onChange={inputEvent}
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="pasword"
                  onChange={inputEvent}
                  placeholder="Enter your Password"
                />
              </div>
              <span>
                <div class="col-12">
                  <button class="btn btn-primary mb-5" type="submit">
                    Login
                  </button>
                  <NavLink to={"/signup"}>
                    <button class="btn btn-primary mb-5 mx-4">Signup</button>
                  </NavLink>
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
