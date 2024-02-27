import React, { useState } from "react";
const Contact = () => {
  const [val, setVal] = useState({
    fName: "",
    phone: "",
    email: "",
    text: ""
  });
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setVal((prevVal) => {
      return { ...prevVal,
         [name]: value };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    return alert(
      `My name is ${val.fName}, Email is ${val.email}, Mobile No is ${val.phone} and Message is ${val.text}`
    );
  };
  return (
    <>
      <div className="my-5 container-fluid">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fName"
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
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="text"
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary mb-5"
                  type="submit"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
