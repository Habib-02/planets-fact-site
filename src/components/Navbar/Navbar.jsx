import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li>
          <NavLink to="/planet/mercury" className={styles.navLink} href="">
            mercury
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/venus" className={styles.navLink} href="">
            venus
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/earth" className={styles.navLink} href="">
            earth
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/mars" className={styles.navLink} href="">
            mars
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/jupiter" className={styles.navLink} href="">
            jupiter
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/saturn" className={styles.navLink} href="">
            saturn
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/uranus" className={styles.navLink} href="">
            uranus
          </NavLink>
        </li>
        <li>
          <NavLink to="/planet/neptune" className={styles.navLink} href="">
            neptune
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
