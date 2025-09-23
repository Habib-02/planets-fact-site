import styles from "./PlanetMercury.module.css";
import Button from "../Button";
import { SquareArrowOutUpRight } from "lucide-react";

import Mercury from "../../assets/planet-mercury.svg";

function PlanetMercury() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.planetDescriptionWrapper}>
        <div className={styles.planetPicture}>
          <img src={Mercury} alt="" />
        </div>
        <div className={styles.planetDescription}>
          <div>
            <h1 className={styles.planetName}>Mercury</h1>
            <blockquote
              cite="https://wikipedia.com"
              className={styles.description}
            >
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </blockquote>
            <p>
              Source:{" "}
              <a href="https://wikipedia">
                Wikipedia <SquareArrowOutUpRight />{" "}
              </a>
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <Button>
              <span>01</span> Overview
            </Button>
            <Button>
              <span>02</span> Structure
            </Button>
            <Button>
              <span>03</span> Surface
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.planetInformation}>
        <ul>
          <li>
            <span>ROTATION TIME</span>
            <span>58.6 days</span>
          </li>
          <li>
            <span>REVOLUTION TIME</span>
            <span>87.97 days</span>
          </li>
          <li>
            <span>radius</span>
            <span>2,439.7 km</span>
          </li>
          <li>
            <span>AVERAGE TEMP.</span>
            <span>430°c</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanetMercury;
