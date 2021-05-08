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
              value: ["#a71414"],
            },
            line_linked: {
              color: "#a71414",
              width: 3,
              opacity: 0.09,
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
              },
            },
          },
        }}
      />
    </div>
  );
}
