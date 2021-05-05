import React from "react";
import Particles from "react-particles-js";
import "../styles/particle.css";
export default function Particle() {
  return (
    <div className="particle__container">
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "black",
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
              },
            },
          },
        }}
      />
    </div>
  );
}
