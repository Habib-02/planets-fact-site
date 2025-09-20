import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li>
          <a className={styles.navLink} href="">
            mercury
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            venus
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            earth
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            mars
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            jupiter
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            saturn
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            uranus
          </a>
        </li>
        <li>
          <a className={styles.navLink} href="">
            naptune
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
