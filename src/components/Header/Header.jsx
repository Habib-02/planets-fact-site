import styles from "./Header.module.css";

import Navbar from "../Navbar";
import MobileMenu from "../MobileMenu";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.logo}>The Planets</p>
        <Navbar />
        <MobileMenu />
      </header>
    </>
  );
}

export default Header;
