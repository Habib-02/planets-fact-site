import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function Navbar() {
  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {planets.map((planet) => (
          <li key={planet}>
            <NavLink
              to={`/planet/${planet}/overview`}
              className={styles.navLink}
            >
              {planet}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
