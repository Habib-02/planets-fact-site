import { NavLink, useParams } from "react-router";
import styles from "./Button.module.css";

function Button({ children, to, activeColor, variant, ...delegated }) {
  const { view } = useParams();
  const currentView = view || "overview";

  if (to) {
    const toView = to.split("/").pop();
    const isActive = toView === currentView;

    return (
      <NavLink
        className={`${styles.button} ${isActive ? styles.active : ""}`}
        to={to}
        style={
          isActive
            ? variant === "mobile"
              ? { borderBottom: `4px solid ${activeColor}` }
              : { backgroundColor: activeColor }
            : {}
        }
        {...delegated}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button {...delegated} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
