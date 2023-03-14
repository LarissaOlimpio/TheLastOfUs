import { NavLink } from "react-router-dom"
import logo from "./logo.png"

function Header(){
    return(
        <header>

            <div>
                <NavLink url="/"> 
                     HOME
                </NavLink>

                <NavLink url="/contato">
                    CONTATO
                </NavLink>
            </div>

            <div>
                <img src={logo} alt="logo The Last Of Us" />
            </div>
        
        </header>
    )
}
export default Header