import React, { useContext } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { ContextValue } from "../App";
export default function About() {
  const { state } = useContext(ContextValue);
  return (
    <div className="about__container">
      <div className="about__mainContent">
        <div>
          <img className="about__myImg" src={myImg} alt="..." />
        </div>
        <div>
          <p className={state.onDarkMode ? "about__paraContent" : undefined}>
            FrontEnd Developer
          </p>
        </div>
      </div>
    </div>
  );
}
