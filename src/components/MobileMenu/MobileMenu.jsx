import * as Dialog from "@radix-ui/react-dialog";

import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";

import styles from "./MobileMenu.module.css";
import { NavLink } from "react-router";

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

function MobileMenu() {
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
    <Dialog.Root>
      <Dialog.Trigger className={styles.mobileNavigation}>
        <Menu />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <nav className={styles.nav}>
            <ul>
              {planets.map((planet) => (
                <li key={planet}>
                  <Dialog.Close asChild>
                    <NavLink
                      to={`planet/${planet}/overview`}
                      className={styles.navLink}
                    >
                      <span
                        style={{ backgroundColor: planetColors[planet] }}
                        className={`${styles.planet} ${styles.mercury}`}
                      ></span>
                      {planet}
                      <span className="arrow">
                        <ChevronRight />
                      </span>
                    </NavLink>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileMenu;
