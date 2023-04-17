import styles from "./Header.module.css";
import NavBar from "components/Navbar";
import logo from "./logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.divHeader}>
        <div className={styles.nav}>
          <NavBar url="./">HOME</NavBar>
          <NavBar url="./contato">CONTATO</NavBar>
        </div>
        <div className={styles.divLogo}>
          <img className={styles.logo} src={logo} alt="logo The Last Of Us" />
        </div>
      </div>
    </header>
  );
}
export default Header;
