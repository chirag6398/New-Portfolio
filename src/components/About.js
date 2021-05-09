import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { gsap } from "gsap";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  const [width, setWidth] = useState(552);
  const [height, setHeight] = useState(485);

  let divRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 190) {
        setHeight(window.scrollY - 190 + 485);
        console.log(height);
        setAnimate(true);
      } else {
        if (animate) {
          setAnimate(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 200) {
          setHeight(window.scrollY - 200 + 485);
          console.log(height);
          setAnimate(true);
        } else {
          if (animate) {
            setAnimate(false);
          }
        }
      });
    };
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      let prev = 1366;
      let sub = (prev - window.innerWidth) / 2;
      setWidth(552 - sub);
      if (window.innerWidth < 400) {
        setWidth(115);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  });
  useEffect(() => {
    if (animate) {
      gsap.to(divRef, {
        duration: 0.5,
        x: width,
        y: height,
        ease: "none",
      });
    } else {
      gsap.to(divRef, { duration: 1, x: 0, y: 0 });
    }
  }, [animate, height, width]);
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
        <div
          ref={(el) => {
            divRef = el;
          }}
        >
          {animate ? (
            <MdMessage style={{ fontSize: "35px", color: "#ff6e6c" }} />
          ) : (
            <button className="about__btn">Let's Talk</button>
          )}
        </div>
      </div>
    </div>
  );
}
