import styles from './Header.module.css'
import NavLink from "components/NavLink"
import logo from "./logo.png"

function Header(){
    return(
        <header className={styles.header}>

            <div className={styles.nav}>
                <NavLink url="./"> 
                     HOME
                </NavLink>

                <NavLink url="./contato">
                    CONTATO
                </NavLink>
            </div>

            <div>
                <img className={styles.logo} src={logo} alt="logo The Last Of Us" />
            </div>
        
        </header>
    )
}
export default Header