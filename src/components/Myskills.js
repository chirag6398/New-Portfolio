import React from "react";
import "../styles/skills.css";
import Front from "../images/Front.png";
import Res from "../images/res.png";
import web from "../images/webAni.png";
import { ProgressBar } from "react-bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Myskills() {
  return (
    <div className="skills__container">
      <section className="skills__section">
        <div className="skills__heading">
          <h4>Checkout</h4>
          <h2>What I Do</h2>
        </div>
        <div className="skills__img">
          <div className="skills__img__1">
            <img
              alt="Loading..."
              src={Res}
              style={{ objectFit: "contain", height: "100px", width: "100px" }}
            />
            <h3>RESPONSIVE WEB DESIGN</h3>
            <p>
              Building highly responsive User Interfaces for Websites and Web
              Applications.
            </p>
          </div>
          <div className="skills__img__1">
            <img
              alt="Loading..."
              src={Front}
              style={{ objectFit: "contain", height: "100px", width: "100px" }}
            />
            <h3>FRONT-END DEVELOPER</h3>
            <p>
              Building highly interactive next gen User Interfaces for Websites
              and Web Applications.
            </p>
          </div>
          <div className="skills__img__1">
            <img
              alt="Loading..."
              src={web}
              style={{ objectFit: "contain", height: "100px", width: "100px" }}
            />
            <h3>WEB-ANIMATION</h3>
            <p>
              Laveraging the power of Javascript and CSS's Animation feature to
              give life to the User Interfaces.
            </p>
          </div>
        </div>
      </section>
      <section className="skills__section">
        <div className="skills__heading">
          <h4>Checkout</h4>
          <h2>What I Use</h2>
        </div>
        <div className="skills__img">
          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>
          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>
          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>
          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>
          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>

          <div className="skills__img__1">
            <h4>React-js</h4>

            <ProgressBar
              animated
              now={60}
              label={`${60}%`}
              style={{ minWidth: "290px", height: "30px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
