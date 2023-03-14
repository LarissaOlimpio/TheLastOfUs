import { Link } from "react-router-dom"

function NavLink({url,children}){
    return(
      
        <Link to={url}>
            {children}
        </Link>
      
    )
}
export default NavLink