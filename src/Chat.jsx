import React, { useState } from "react";
export default function Chat() {
  const [val, setVal] = useState("");
  const [item, setItem] = useState([]);
  const InputEvent = (event) => {
    setVal(event.target.value);
  };
  const OnSubmit = () => {
    if (val === "") {
      alert("Writ a Message");
    } else {
      setItem((prevVal) => {
        return [...prevVal, val];
      });
      setVal("");
    }
  };
  return (
    <>
      <div class="container mb-3">
        <h1 className="text-center">Chat</h1>
        <div class="chat-container bgchat">
          <div class="message">
            <p>Hello! How can I assist you today?</p>
          </div>
          {item.map((currVal, index) => {
            return (
              <div class="message user-message" key={index}>
                <p>{currVal}</p>
              </div>
            );
          })}

          <div class="form-group">
            <input
              value={val}
              type="text"
              class="form-control"
              id="messageInput"
              placeholder="Type your message..."
              onChange={InputEvent}
            />
          </div>
          <button class="btn btn-primary btn-send" onClick={OnSubmit}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
