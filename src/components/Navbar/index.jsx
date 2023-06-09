import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

function Navbar({ url, children }) {
  return (
    <Link className={styles.link} to={url}>
      {children}
    </Link>
  );
}
export default Navbar;
