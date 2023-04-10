import styles from "./Header.module.css";
import NavLink from "components/NavLink";
import logo from "./logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.divHeader}>
        <div className={styles.nav}>
          <NavLink url="./">HOME</NavLink>
          <NavLink url="./contato">CONTATO</NavLink>
        </div>
        <div className={styles.divLogo}>
          <img className={styles.logo} src={logo} alt="logo The Last Of Us" />
        </div>
      </div>
    </header>
  );
}
export default Header;
