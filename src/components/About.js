import React, { useContext, useEffect, useState } from "react";
import "../styles/about.css";
import myImg from "../images/myImg.jpg";
// import { gsap } from "gsap";
import { ContextValue } from "../App";
import { MdMessage } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function About() {
  const { state } = useContext(ContextValue);
  const [animate, setAnimate] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth - 130);
  // const [height, setHeight] = useState(496);
  const history = useHistory();
  const messageHandler = () => {
    history.push("/talk");
  };
  // let divRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 280) {
        // setHeight(window.scrollY - 280 + 466);

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
          // setHeight(window.scrollY - 200 + 485);

          setAnimate(true);
        } else {
          if (animate) {
            setAnimate(false);
          }
        }
      });
    };
  });
  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     // setWidth(window.innerWidth - 130);
  //     // if (window.innerWidth <= 500) {
  //       // setWidth(window.innerWidth - 90);
  //     // }
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {
  //       setWidth(window.innerWidth);
  //     });
  //   };
  // });
  // useEffect(() => {
  //   if (animate) {
  //     gsap.to(divRef, {
  //       duration: 0.2,
  //       x: window.document.width,
  //       y: window.innerHeight,
  //       ease: "none",
  //     });
  //   } else {
  //     gsap.to(divRef, { duration: 0.2, x: 0, y: 0 });
  //   }
  // }, [animate]);

  return (
    <>
      <div className="about__container">
        <div className="about__mainContent">
          <div>
            <img className="about__myImg" src={myImg} alt="..." />
          </div>
          <div>
            <p
              className={
                state.onDarkMode
                  ? "about__paraContent about__Content"
                  : "about__Content"
              }
            >
              Hi there, this is
              <span>
                <b> Chirag</b>
              </span>
              . A front-end web developer using
              <span className="about__highlights">react-js</span> library. I
              work with my college technical society team
              <span className="about__highlights"> Conatus</span>.I am doing my
              Btech with Computer Science. I love to learn,explore,travel and
              expertise in the field of web Development.
            </p>
          </div>
          <div
            style={{ maxWidth: "max-content" }}
            // ref={(el) => {
            //   divRef = el;
            // }}
          >
            {animate ? (
              <MdMessage
                onClick={messageHandler}
                style={{
                  fontSize: "35px",
                  color: "#ff6e6c",
                  cursor: "pointer",
                  zIndex: "10",
                }}
              />
            ) : (
              <button onClick={messageHandler} className="about__btn">
                Let's Talk
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          state.onDarkMode ? "about__nameDark about__name" : "about__name"
        }
      >
        <h2>
          <span className="letter ltr1">C</span>
          <span className="letter ltr2">h</span>
          <span className="letter ltr3">i</span>
          <span className="letter ltr4">r</span>
          <span className="letter ltr5">a</span>
          <span className="letter ltr6">g</span>

          <span className="letter ltr7">A</span>
          <span className="letter ltr8">g</span>
          <span className="letter ltr9">r</span>
          <span className="letter ltr10">a</span>
          <span className="letter ltr11">w</span>
          <span className="letter ltr12">a</span>
          <span className="letter ltr13">l</span>
        </h2>
      </div>
    </>
  );
}
