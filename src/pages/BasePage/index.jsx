import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import styles from "./BasePage.module.css";

function BasePage() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
export default BasePage;
