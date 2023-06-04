import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import hero_img from "../hero_img.svg";

const Hero = () => {
  return (
    <section className="hero__sect">
      <div className="row">
        <div className="col-2">
          <h1>Young Front-end developer</h1>
          <p>
            Hi! I'm Fabio Grimaldi, a young front-end developer who likes to
            express himself through his websites. Based in Naples, Italy 📍
          </p>
          <ul className="skill-list">
            <li>
              <FontAwesomeIcon icon={faHtml5} style={{ color: "#c64600" }} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} style={{ color: "#c64600" }} />
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} style={{ color: "#c64600" }} />
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} style={{ color: "#c64600" }} />
            </li>
            <li>
              <FontAwesomeIcon icon={faSass} style={{ color: "#c64600" }} />
            </li>
          </ul>
        </div>
        <div className="col-2">
          <img src={hero_img} className="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
