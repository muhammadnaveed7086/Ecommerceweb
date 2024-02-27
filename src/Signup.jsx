import React, { useState } from "react";

function Signup() {
  const [Inputval, setInputVal] = useState({
    Name: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputVal((oldVal) => {
      console.log(name, oldVal);
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };
  const submitNow = () => {
    if (Inputval.email === "" || Inputval.Name=== "" || Inputval.phone=== "") {
      alert("Please Fill Input Field");
    } else {
      alert(
        `My name is ${Inputval.Name}, My Email is ${Inputval.email} and My Phone Number is ${Inputval.phone}`
      );
    }
   
  };
  return (
    <>
      <div className="my-5 container-fluid">
        <h1 className="text-center">Sign Up</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitNow}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Name"
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  onChange={inputEvent}
                  placeholder="Enter your Mobile"
                />
              </div>
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

              <div class="col-12">
                <button class="btn btn-primary mb-5" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
