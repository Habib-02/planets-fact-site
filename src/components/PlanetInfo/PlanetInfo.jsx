import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router";

import styles from "./PlanetInfo.module.css";
import Button from "../Button";
import Spinner from "../Spinner";

import { SquareArrowOutUpRight } from "lucide-react";

function PlanetInfo() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { planetName } = useParams();

  const specificPlanetDetail = planets.find(
    (planet) => planetName === planet.name.toLowerCase()
  );

  useEffect(() => {
    async function getPlanetData() {
      const response = await fetch("/planetData/data.json");
      const json = await response.json();
      setPlanets(json);
      setLoading(false);
    }
    getPlanetData();
  }, [planetName]);

  if (loading) return <Spinner />;
  if (!specificPlanetDetail) return <h1>Planet not found</h1>;

  const { name, overview, rotation, revolution, radius, temperature, images } =
    specificPlanetDetail;

  return (
    <div className={styles.wrapper}>
      <div className={styles.planetDescriptionWrapper}>
        <div className={styles.planetPicture}>
          <img src={images.planet} alt="" />
        </div>
        <div className={styles.planetDescription}>
          <div>
            <h1 className={styles.planetName}>{name}</h1>
            <blockquote cite={overview.source} className={styles.description}>
              {overview.content}
            </blockquote>
            <p>
              Source:{" "}
              <a href={overview.source} target="_blank">
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
            <span>{rotation}</span>
          </li>
          <li>
            <span>REVOLUTION TIME</span>
            <span>{revolution}</span>
          </li>
          <li>
            <span>radius</span>
            <span>{radius}</span>
          </li>
          <li>
            <span>AVERAGE TEMP.</span>
            <span>{temperature}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PlanetInfo;
