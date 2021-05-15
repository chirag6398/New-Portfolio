import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
import { gsap } from "gsap";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth - 130);
  const [height, setHeight] = useState(496);

  let divRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY > 280) {
        setHeight(window.scrollY - 280 + 466);
        // console.log(height);
        setAnimate(true);
      } else {
        if (animate) {
          setAnimate(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setHeight(window.scrollY - 200 + 485);

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
      setWidth(window.innerWidth - 130);
      if (window.innerWidth <= 500) {
        setWidth(window.innerWidth - 90);
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
            Hi there, this is
            <span>
              <b> Chirag</b>
            </span>
            . A front-end web developer using
            <span className="about__highlights">react-js</span> library. I work
            with my college technical society team
            <span className="about__highlights">Conatus</span>.I am doing my
            Btech with Computer Science. I love to learn,explore,travel and
            expertise in the field of web Development.
          </p>
        </div>
        <div
          style={{ maxWidth: "max-content" }}
          ref={(el) => {
            divRef = el;
          }}
        >
          {animate ? (
            <MdMessage
              style={{ fontSize: "35px", color: "#ff6e6c", cursor: "pointer" }}
            />
          ) : (
            <button className="about__btn">Let's Talk</button>
          )}
        </div>
      </div>
    </div>
  );
}
