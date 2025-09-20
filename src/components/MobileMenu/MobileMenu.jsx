import * as Dialog from "@radix-ui/react-dialog";

import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";

import styles from "./MobileMenu.module.css";
import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobileNavigation}>
      <button
        className={`${isOpen ? styles.hamburgerButtonActive : ""} ${
          styles.hamburgerButton
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </button>
      <nav
        className={`${isOpen ? styles.open : styles.close} ${styles.mobileNav}`}
      >
        <ul>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.mercury}`}></span>
              <span>Mercury</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.venus}`}></span>
              <span>Venus</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.earth}`}></span>
              <span>earth</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.mars}`}></span>
              <span>mars</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.jupiter}`}></span>
              <span>jupiter</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.saturn}`}></span>
              <span>saturn</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.uranus}`}></span>
              <span>uranus</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="">
              <span className={`${styles.planet} ${styles.naptune}`}></span>
              <span>Naptune</span>
              <span className="arrow">
                <ChevronRight />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
