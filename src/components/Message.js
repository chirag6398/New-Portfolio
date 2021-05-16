import React, { useState } from "react";
import "../styles/message.css";
export default function Message() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const inputHandler = (e) => {
    console.log(data);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("i am clicked", JSON.stringify(data));
    const res = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataRes = await res.json();

    console.log(dataRes);
  };
  return (
    <div className="message__container">
      <div className="message__content">
        <div className="message__illustrator"></div>
        <div className="message__form">
          <form onSubmit={submitHandler}>
            <fieldset>
              <label>Name</label>
              <input
                type="text"
                value={data.name}
                onChange={inputHandler}
                name="name"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input
                type="email"
                value={data.email}
                onChange={inputHandler}
                name="email"
                placeholder="Your email"
              />
            </fieldset>
            <fieldset>
              <label>Message</label>
              <textarea
                type="text"
                value={data.message}
                onChange={inputHandler}
                name="message"
                placeholder="enter your message"
              />
            </fieldset>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
