import React, { useContext } from "react";
import "../styles/contact.css";
import line from "../images/line.png";
import { ContextValue } from "../App";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { state } = useContext(ContextValue);
  return (
    <div
      className={
        state.onDarkMode
          ? "contact__container__dark contact__container"
          : "contact__container"
      }
    >
      <div className="contact__leftSide">
        <div style={{ display: "flex" }}>
          <img src={line} alt="..." />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Got A Project?</h4>
            <span className="contact__span">Let's Talk</span>
          </div>
        </div>
      </div>
      <div className="contact__rightSide">
        <div className="contact__phone">
          {state.onDarkMode ? <FaPhoneAlt /> : <FaPhoneAlt />}
          <span>6398356528</span>
        </div>
        <div className="contact__email">
          {state.onDarkMode ? <MdEmail /> : <MdEmail />}
          <span>agarwalchirag112@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
