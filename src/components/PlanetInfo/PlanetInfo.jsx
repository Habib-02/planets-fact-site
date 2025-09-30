import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

import styles from "./PlanetInfo.module.css";
import Button from "../Button";
import Spinner from "../Spinner";

import { SquareArrowOutUpRight } from "lucide-react";

const planetColors = {
  mercury: "var(--color-mercury)",
  venus: "var(--color-venus)",
  earth: "var(--color-earth)",
  mars: "var(--color-mars)",
  jupiter: "var(--color-jupiter)",
  saturn: "var(--color-saturn)",
  uranus: "var(--color-uranus)",
  neptune: "var(--color-naptune)",
};

function PlanetInfo() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { planetName, view } = useParams();
  const currentView = view || "overview";

  const planetColor = planetColors[planetName];

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

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = specificPlanetDetail;

  const viewMap = {
    overview: {
      content: overview.content,
      source: overview.source,
      image: images.planet,
      geologyImg: null,
    },
    structure: {
      content: structure.content,
      source: structure.source,
      image: images.internal,
      geologyImg: null,
    },
    surface: {
      content: geology.content,
      source: geology.source,
      image: images.planet,
      geologyImg: images.geology,
    },
  };

  const { content, source, image, geologyImg } = viewMap[currentView];

  return (
    <div className={styles.wrapper}>
      <div className={styles.planetDescriptionWrapper}>
        <div
          className={`${styles.planetPicture} ${styles[name.toLowerCase()]}`}
        >
          <img src={image} alt="" />
          {geologyImg && (
            <img className={styles.geologyImg} src={geologyImg} alt="" />
          )}
        </div>
        <div className={styles.planetDescription}>
          <div>
            <h1 className={styles.planetName}>{name}</h1>
            <blockquote cite={source} className={styles.description}>
              {content}
            </blockquote>
            <p>
              Source:{" "}
              <a href={source} target="_blank">
                Wikipedia <SquareArrowOutUpRight />{" "}
              </a>
            </p>
          </div>
          {/* Desktop Button Group */}
          <div className={`${styles.desktop} ${styles.buttonGroup}`}>
            <Button
              to={`/planet/${planetName}/overview`}
              activeColor={planetColor}
              variant="desktop"
            >
              <span>01</span> Overview
            </Button>
            <Button
              to={`/planet/${planetName}/structure`}
              activeColor={planetColor}
              variant="desktop"
            >
              <span>02</span> Structure
            </Button>
            <Button
              to={`/planet/${planetName}/surface`}
              activeColor={planetColor}
              variant="desktop"
            >
              <span>03</span> Surface
            </Button>
          </div>

          {/* Mobile Button Group */}
          <div className={`${styles.mobile} ${styles.buttonGroup}`}>
            <Button
              to={`/planet/${planetName}/overview`}
              activeColor={planetColor}
              variant="mobile"
            >
              Overview
            </Button>
            <Button
              to={`/planet/${planetName}/structure`}
              activeColor={planetColor}
              variant="mobile"
            >
              Structure
            </Button>
            <Button
              to={`/planet/${planetName}/surface`}
              activeColor={planetColor}
              variant="mobile"
            >
              Surface
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
